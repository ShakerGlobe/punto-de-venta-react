<?php
// Permitir que React se comunique con PHP
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Solo aceptar peticiones POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "error" => "Método no permitido"]);
    exit;
}

// Recibir los datos en formato JSON desde React
$datos = json_decode(file_get_contents("php://input"));

if (!isset($datos->nombre) || !isset($datos->empresa) || !isset($datos->email) || !isset($datos->password)) {
    echo json_encode(["success" => false, "error" => "Faltan datos en el formulario"]);
    exit;
}

// --- CREDENCIALES DE TU BASE DE DATOS (Recuerda poner las de HostGator) ---
$host = "localhost";
$dbname = "punto_venta"; // <- Cambiar por tu_prefijo_punto_venta
$username = "root";      // <- Cambiar por tu_prefijo_usuario
$password_db = "";       // <- Cambiar por tu contraseña real

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password_db);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // --- 1. VALIDAR SI EL CORREO YA EXISTE ---
    $sqlVerificar = "SELECT COUNT(*) FROM usuarios WHERE usr_Email = ?";
    $stmtVerificar = $pdo->prepare($sqlVerificar);
    $stmtVerificar->execute([$datos->email]);
    
    if ($stmtVerificar->fetchColumn() > 0) {
        echo json_encode(["success" => false, "error" => "Este correo electrónico ya está registrado. Por favor, utiliza otro."]);
        exit;
    }

    // --- 2. PROCEDER CON EL REGISTRO ---
    $pdo->beginTransaction();

    // Guardar Empresa
    $tipo_cuenta = "PRUEBA"; 
    $fecha_registro = date("Y-m-d");
    $fecha_vencimiento = date("Y-m-d", strtotime("+1 month"));
    $estado_servicio = "activo"; 

    $sqlEmpresa = "INSERT INTO empresas (nombre_negocio, tipo_cuenta, fecha_registro, fecha_vencimiento, estado_servicio) 
                   VALUES (?, ?, ?, ?, ?)";
    $stmtEmpresa = $pdo->prepare($sqlEmpresa);
    $stmtEmpresa->execute([$datos->empresa, $tipo_cuenta, $fecha_registro, $fecha_vencimiento, $estado_servicio]);

    $id_empresa = $pdo->lastInsertId();

    // Guardar Usuario
    $sqlFolio = "SELECT MAX(folio_usuario) FROM usuarios WHERE id_empresa = ?";
    $stmtFolio = $pdo->prepare($sqlFolio);
    $stmtFolio->execute([$id_empresa]);
    $max_folio = $stmtFolio->fetchColumn();
    
    $folio_usuario = $max_folio ? (int)$max_folio + 1 : 1;

    $hashed_pwd = password_hash($datos->password, PASSWORD_DEFAULT);
    $usr_Rol = "admin"; 

    $sqlUsuario = "INSERT INTO usuarios (folio_usuario, id_empresa, usr_Name, usr_Email, usr_Pwd, usr_Rol) 
                   VALUES (?, ?, ?, ?, ?, ?)";
    $stmtUsuario = $pdo->prepare($sqlUsuario);
    $stmtUsuario->execute([$folio_usuario, $id_empresa, $datos->nombre, $datos->email, $hashed_pwd, $usr_Rol]);

    $pdo->commit();

    // --- 3. ENVÍO DE CORREOS ELECTRÓNICOS ---

    // Configuración para evitar la bandeja de Spam (Es vital usar un correo que exista en tu HostGator)
    $remitente = "no-reply@nedimipos.com"; // Modifica esto si tu dominio principal es otro

    // Correo 1: Para Orlando Palacios (Administrador)
    $toAdmin = "orlando.palacios@nedimi.com";
    $subjectAdmin = "Nuevo registro en Nedimi POS - " . $datos->empresa;
    $headersAdmin  = "From: " . $remitente . "\r\n";
    $headersAdmin .= "Content-Type: text/html; charset=UTF-8\r\n";

    $cuerpoAdmin = "
        <div style='font-family: Arial, sans-serif; color: #333;'>
            <h2 style='color: #00C1A3;'>Nuevo Registro en Nedimi POS</h2>
            <p>Se ha registrado un nuevo usuario en la plataforma. Aquí están los detalles:</p>
            <ul>
                <li><strong>Nombre de Usuario:</strong> {$datos->nombre}</li>
                <li><strong>Empresa:</strong> {$datos->empresa}</li>
                <li><strong>Correo de Registro:</strong> {$datos->email}</li>
            </ul>
        </div>
    ";
    mail($toAdmin, $subjectAdmin, $cuerpoAdmin, $headersAdmin);

    // Correo 2: Para el Cliente
    $toCliente = $datos->email;
    $subjectCliente = "Bienvenido a Nedimi POS - Tus datos de acceso";
    $headersCliente  = "From: " . $remitente . "\r\n";
    $headersCliente .= "Content-Type: text/html; charset=UTF-8\r\n";

    $cuerpoCliente = "
        <div style='font-family: Arial, sans-serif; color: #333;'>
            <h2 style='color: #00C1A3;'>¡Felicidades por tu registro!</h2>
            <p>Hola <strong>{$datos->nombre}</strong>,</p>
            <p>Estos son tus datos para iniciar sesión en tu punto de venta:</p>
            <div style='background-color: #f4f4f4; padding: 15px; border-radius: 5px; margin: 20px 0;'>
                <p style='margin: 0;'><strong>Enlace de acceso:</strong> <a href='https://nedimipos.com/puntodeventa/' style='color: #00C1A3;'>https://nedimipos.com/puntodeventa/</a></p>
                <p style='margin: 5px 0 0 0;'><strong>Usuario:</strong> {$datos->email}</p>
                <p style='margin: 5px 0 0 0;'><strong>Contraseña:</strong> {$datos->password}</p>
            </div>
            <p>Te recomendamos guardar este correo en un lugar seguro.</p>
            <p>¡Mucho éxito en tus ventas!</p>
        </div>
    ";
    mail($toCliente, $subjectCliente, $cuerpoCliente, $headersCliente);

    // --- 4. RESPUESTA A REACT ---
    echo json_encode(["success" => true, "message" => "¡Cuenta creada exitosamente!"]);

} catch (Exception $e) {
    if (isset($pdo) && $pdo->inTransaction()) {
        $pdo->rollBack();
    }
    echo json_encode(["success" => false, "error" => "Ocurrió un problema en el servidor al intentar registrarte. Intenta de nuevo."]);
}
?>