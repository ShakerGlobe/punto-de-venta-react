import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Contratar.css";

const Contratar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const params = new URLSearchParams(location.search);
    const plan = params.get("plan");
    const errorURL = params.get("error"); // Capturamos el error de la URL

    const [mostrarCorreo, setMostrarCorreo] = useState(false);
    const [email, setEmail] = useState("");
    const [mensajeError, setMensajeError] = useState("");

    // Si detectamos un error en la URL al cargar, activamos el mensaje
    useEffect(() => {
        if (errorURL === "notfound") {
            setMostrarCorreo(true);
            setMensajeError("El correo ingresado no está registrado.");
        }
    }, [errorURL]);

    const validarCorreo = (e) => {
        e.preventDefault();
        if (!email) {
            setMensajeError("Por favor ingresa tu correo");
            return;
        }

        // Enviamos al PHP
        window.location.href = `https://nedimipos.com/puntodeventa/include/crear_pago.php?plan=${plan}&email=${email}`;
    };

    return (
        <section className="contratar">
            <div className="contratar-container">
                <div className="brand-badge">NEDIMIPOS</div>

                <h1>{mostrarCorreo ? "Identifica tu cuenta" : "¿Ya tienes cuenta?"}</h1>

                <p>
                    {mostrarCorreo
                        ? "Ingresa el correo asociado a tu negocio para vincular el plan."
                        : "Selecciona una opción para continuar con la activación."}
                </p>

                {!mostrarCorreo ? (
                    <div className="contratar-buttons">
                        <button className="btn-secondary" onClick={() => setMostrarCorreo(true)}>
                            Ya tengo cuenta
                        </button>
                        <button className="btn-primary" onClick={() => navigate("/register")}>
                            Crear cuenta nueva
                        </button>
                    </div>
                ) : (
                    <form className="correo-box" onSubmit={validarCorreo}>
                        <div className="input-group">
                            <input
                                type="email"
                                placeholder="ejemplo@correo.com"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setMensajeError(""); // Limpia el error mientras escribe
                                }}
                                className={mensajeError ? "input-field error-border" : "input-field"}
                                required
                                autoFocus
                            />

                            {/* EL ERROR APARECE AQUÍ ABAJO */}
                            {mensajeError && (
                                <span className="error-text">
                                    <i className="ri-error-warning-line"></i> {mensajeError}
                                </span>
                            )}
                        </div>

                        <div className="contratar-buttons">
                            <button type="submit" className="btn-primary">
                                Continuar al pago
                            </button>
                            <button type="button" className="btn-link" onClick={() => setMostrarCorreo(false)}>
                                Volver atrás
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contratar;