<?php
// --- CONFIGURACIÓN DE BASE DE DATOS DE HOSTGATOR ---
$host = "localhost";
$dbname = "nedimico_punto_venta";
$username = "nedimico_adolfo"; 
$password_db = "Abarrotes2026%"; 

$mensaje = "";
$color = "#00C1A3"; // Verde éxito

if (isset($_GET['token']) && !empty($_GET['token'])) {
    $token = $_GET['token'];

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password_db);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Buscar el token y traer los datos del usuario y su empresa
        $sql = "SELECT u.usr_Id, u.id_empresa, u.usr_Email, u.usr_Name, e.nombre_negocio 
                FROM usuarios u 
                INNER JOIN empresas e ON u.id_empresa = e.id_empresa 
                WHERE u.token_verificacion = ? LIMIT 1";
        
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$token]);
        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($usuario) {
            $pdo->beginTransaction();

            // 1. Activar la empresa
            $sqlEmpresa = "UPDATE empresas SET estado_servicio = 'activo' WHERE id_empresa = ?";
            $stmtEmpresa = $pdo->prepare($sqlEmpresa);
            $stmtEmpresa->execute([$usuario['id_empresa']]);

            // 2. Borrar el token para que no se re-utilice
            $sqlUsuario = "UPDATE usuarios SET token_verificacion = NULL WHERE usr_Id = ?";
            $stmtUsuario = $pdo->prepare($sqlUsuario);
            $stmtUsuario->execute([$usuario['usr_Id']]);

            $pdo->commit();

            $mensaje = "¡Tu cuenta ha sido activada exitosamente!";

            // =========================================================================
            // 3. ENVÍO DE CORREOS CON DISEÑO PREMIUM
            // =========================================================================
            $remitente = "nedimipos@nedimi.com"; 
            
            // Cabeceras robustas para evitar bandeja de Spam
            $headers  = "MIME-Version: 1.0\r\n";
            $headers .= "Content-type: text/html; charset=UTF-8\r\n";
            $headers .= "From: Nedimi POS <" . $remitente . ">\r\n";
            $headers .= "Reply-To: " . $remitente . "\r\n";

            // -------------------------------------------------------------------------
            // CORREO 1: PARA ORLANDO (ADMINISTRADOR)
            // -------------------------------------------------------------------------
            $toAdmin = "adolfopl55@gmail.com";
            $subjectAdmin = "🚀 Nuevo Cliente Confirmado: " . $usuario['nombre_negocio'];
            
            $cuerpoAdmin = "
            <div style='background-color: #020617; padding: 40px 20px; font-family: Helvetica, Arial, sans-serif;'>
                <div style='max-width: 600px; margin: 0 auto; background-color: #0f172a; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b;'>
                    <div style='background-color: #00C1A3; padding: 20px; text-align: center;'>
                        <h1 style='color: #020617; margin: 0; font-size: 24px; font-style: italic; text-transform: uppercase; font-weight: 900;'>Nedimi POS</h1>
                    </div>
                    <div style='padding: 30px; color: #e2e8f0;'>
                        <h2 style='color: #ffffff; margin-top: 0; font-size: 20px;'>Nuevo Registro Verificado</h2>
                        <p style='color: #94a3b8; line-height: 1.6;'>Un nuevo cliente ha confirmado su correo electrónico y su entorno de pruebas ha sido desplegado exitosamente.</p>
                        
                        <div style='background-color: #1e293b; border-left: 4px solid #00C1A3; padding: 20px; border-radius: 8px; margin: 25px 0;'>
                            <p style='margin: 0 0 10px 0;'><strong style='color: #00C1A3;'>👤 Usuario:</strong> {$usuario['usr_Name']}</p>
                            <p style='margin: 0 0 10px 0;'><strong style='color: #00C1A3;'>🏢 Empresa:</strong> {$usuario['nombre_negocio']}</p>
                            <p style='margin: 0;'><strong style='color: #00C1A3;'>✉️ Correo:</strong> {$usuario['usr_Email']}</p>
                        </div>
                        
                        <p style='color: #64748b; font-size: 12px; text-align: center; margin-top: 30px;'>Sistema Automatizado de Nedimi POS</p>
                    </div>
                </div>
            </div>";
            
            @mail($toAdmin, $subjectAdmin, $cuerpoAdmin, $headers);


            // -------------------------------------------------------------------------
            // CORREO 2: PARA EL CLIENTE (CREDENCIALES)
            // -------------------------------------------------------------------------
            $toCliente = $usuario['usr_Email'];
            $subjectCliente = "¡Bienvenido a Nedimi POS! Tus accesos están listos";
            
            $cuerpoCliente = "
            <div style='background-color: #f8fafc; padding: 40px 20px; font-family: Helvetica, Arial, sans-serif;'>
                <div style='max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);'>
                    <div style='background-color: #020617; padding: 30px; text-align: center;'>
                        <h1 style='color: #ffffff; margin: 0; font-size: 28px; font-style: italic; text-transform: uppercase; font-weight: 900;'>
                            NEDIMI<span style='color: #00C1A3;'>POS</span>
                        </h1>
                    </div>
                    
                    <div style='padding: 40px; color: #334155;'>
                        <h2 style='color: #0f172a; margin-top: 0; font-size: 22px;'>¡Felicidades por tu registro, {$usuario['usr_Name']}! 🎉</h2>
                        <p style='line-height: 1.6; color: #475569;'>Tu cuenta ha sido activada con éxito. Estamos emocionados de que pruebes la plataforma que revolucionará la ingeniería de tus ventas.</p>
                        
                        <div style='background-color: #f1f5f9; padding: 25px; border-radius: 12px; margin: 30px 0; border: 1px solid #e2e8f0;'>
                            <h3 style='margin-top: 0; color: #0f172a; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;'>Tus credenciales de acceso:</h3>
                            <p style='margin: 0 0 12px 0;'><strong style='color: #00C1A3;'>Usuario:</strong> {$usuario['usr_Email']}</p>
                            <p style='margin: 0;'><strong style='color: #00C1A3;'>Contraseña:</strong> <span style='color: #64748b; font-style: italic;'>[La que definiste en tu registro]</span></p>
                        </div>
                        
                        <div style='text-align: center; margin: 40px 0;'>
                            <a href='https://nedimipos.com/puntodeventa/' style='background-color: #00C1A3; color: #020617; padding: 14px 35px; text-decoration: none; font-weight: 900; font-style: italic; text-transform: uppercase; border-radius: 8px; letter-spacing: 1px; display: inline-block;'>INICIAR SESIÓN AHORA</a>
                        </div>
                        
                        <hr style='border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;' />
                        <p style='color: #94a3b8; font-size: 12px; text-align: center; line-height: 1.5;'>
                            Si tienes alguna duda, responde a este correo o contacta a soporte.<br>
                            &copy; " . date('Y') . " Nedimi POS. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>";
            
            @mail($toCliente, $subjectCliente, $cuerpoCliente, $headers);

        } else {
            $mensaje = "El enlace de verificación no es válido o tu cuenta ya ha sido activada anteriormente.";
            $color = "#ef4444"; // Rojo error
        }

    } catch (Exception $e) {
        $mensaje = "Ocurrió un error de conexión con el servidor. Por favor, intenta más tarde.";
        $color = "#ef4444";
    }
} else {
    $mensaje = "No se detectó ningún código de seguridad para verificar.";
    $color = "#ef4444";
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Activación - Nedimi POS</title>
    <style>
        body { background-color: #020617; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; padding: 20px; }
        .card { background-color: rgba(15, 23, 42, 0.8); padding: 50px 40px; border-radius: 24px; text-align: center; border: 1px solid rgba(255,255,255,0.05); max-width: 450px; width: 100%; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); backdrop-filter: blur(10px); }
        h1 { color: <?php echo $color; ?>; font-style: italic; font-weight: 900; text-transform: uppercase; margin-top: 0; font-size: 32px; letter-spacing: -1px; }
        p { color: #94a3b8; line-height: 1.6; font-size: 16px; margin-bottom: 30px; }
        .btn { display: inline-block; background-color: #00C1A3; color: #020617; padding: 14px 30px; text-decoration: none; font-weight: 900; border-radius: 12px; text-transform: uppercase; font-style: italic; letter-spacing: 1px; transition: transform 0.2s, box-shadow 0.2s; }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0, 193, 163, 0.2); }
    </style>
</head>
<body>
    <div class="card">
        <h1>Nedimi POS</h1>
        <p><?php echo $mensaje; ?></p>
        <?php if ($color === "#00C1A3") : ?>
            <a href="https://nedimipos.com/puntodeventa/" class="btn">Entrar a mi sistema</a>
        <?php endif; ?>
    </div>
</body>
</html>