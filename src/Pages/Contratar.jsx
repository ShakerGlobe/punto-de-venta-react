import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Contratar.css";

const Contratar = () => {

    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const plan = params.get("plan");

    const [mostrarCorreo, setMostrarCorreo] = useState(false);
    const [email, setEmail] = useState("");

    const validarCorreo = () => {

        window.location.href =
            `https://nedimipos.com/puntodeventa/include/crear_pago.php?plan=${plan}&email=${email}`;

    };

    return (

        <section className="contratar">

            <div className="contratar-container">

                <h1>¿Ya tienes cuenta en NEDIMI POS?</h1>

                <p>
                    Ingresa tu correo para continuar con el pago
                </p>

                {!mostrarCorreo && (

                    <div className="contratar-buttons">

                        <button
                            className="btn-login"
                            onClick={() => setMostrarCorreo(true)}
                        >
                            Ya tengo cuenta
                        </button>

                        <button
                            className="btn-register"
                            onClick={() => window.location.href = "/register"}
                        >
                            Crear cuenta
                        </button>

                    </div>

                )}

                {mostrarCorreo && (

                    <div className="correo-box">

                        <input
                            type="email"
                            placeholder="Ingresa tu correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button
                            className="btn-register"
                            onClick={validarCorreo}
                        >
                            Continuar al pago
                        </button>

                    </div>

                )}

            </div>

        </section>

    );

};

export default Contratar;