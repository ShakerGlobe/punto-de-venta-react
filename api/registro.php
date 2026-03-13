<?php
// Permitir que React se comunique con PHP en local
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

// --- CREDENCIALES LOCALES DE XAMPP ---
$host = "localhost";
$dbname = "punto_venta";
$username = "root"; 
$password_db = "";  

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

    echo json_encode(["success" => true, "message" => "¡Cuenta creada exitosamente!"]);

} catch (Exception $e) {
    if (isset($pdo) && $pdo->inTransaction()) {
        $pdo->rollBack();
    }
    // En lugar de mostrar el error de SQL, mostramos esto:
    echo json_encode(["success" => false, "error" => "Ocurrió un problema en el servidor al intentar registrarte. Intenta de nuevo."]);
}
?>