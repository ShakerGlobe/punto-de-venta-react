import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react"; // Usamos Lucide en lugar de RemixIcon

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

    // Añadimos el tipado estricto para el evento del formulario (TypeScript)
    const validarCorreo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) {
            setMensajeError("Por favor ingresa tu correo");
            return;
        }

        // Enviamos al PHP
        window.location.href = `https://nedimipos.com/puntodeventa/include/crear_pago.php?plan=${plan}&email=${email}`;
    };

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center p-6 z-10">
            {/* Contenedor principal estilo "Card" Glassmorphism adaptado al modo claro */}
            <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-slate-200 p-8 sm:p-10 rounded-[2rem] shadow-2xl shadow-blue-900/5 relative overflow-hidden">

                {/* Brillo interno decorativo */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600" />

                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black tracking-[0.2em] uppercase mb-6">
                    NEDIMIPOS
                </div>

                <h1 className="text-3xl sm:text-4xl font-[1000] text-slate-900 mb-4 tracking-tight leading-none">
                    {mostrarCorreo ? "Identifica tu cuenta" : "¿Ya tienes cuenta?"}
                </h1>

                <p className="text-slate-500 font-medium leading-relaxed mb-8">
                    {mostrarCorreo
                        ? "Ingresa el correo asociado a tu negocio para vincular el plan."
                        : "Selecciona una opción para continuar con la activación de tu sistema."}
                </p>

                {!mostrarCorreo ? (
                    <div className="flex flex-col gap-4">
                        <button
                            className="w-full px-6 py-4 bg-blue-50 text-blue-700 font-black rounded-2xl hover:bg-blue-100 transition-all active:scale-95 uppercase tracking-wide border border-blue-100"
                            onClick={() => setMostrarCorreo(true)}
                        >
                            Ya tengo cuenta
                        </button>
                        <button
                            className="w-full px-6 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-600/20 uppercase tracking-wide"
                            onClick={() => navigate("/register")}
                        >
                            Crear cuenta nueva
                        </button>
                    </div>
                ) : (
                    <form className="flex flex-col gap-5" onSubmit={validarCorreo}>
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="ejemplo@correo.com"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setMensajeError(""); // Limpia el error mientras escribe
                                }}
                                className={`w-full px-5 py-4 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all text-slate-800 font-medium placeholder:text-slate-400 ${mensajeError
                                        ? "border-red-400 focus:ring-red-500 bg-red-50/50"
                                        : "border-slate-200 focus:ring-blue-500"
                                    }`}
                                required
                                autoFocus
                            />

                            {/* EL ERROR APARECE AQUÍ ABAJO */}
                            {mensajeError && (
                                <span className="flex items-center gap-1.5 text-red-500 text-sm font-semibold mt-1">
                                    <AlertCircle size={16} /> {mensajeError}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col gap-3 mt-2">
                            <button
                                type="submit"
                                className="w-full px-6 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-600/20 uppercase tracking-wide"
                            >
                                Continuar al pago
                            </button>
                            <button
                                type="button"
                                className="w-full py-3 text-slate-400 hover:text-slate-600 text-sm font-bold transition-colors uppercase tracking-wider"
                                onClick={() => setMostrarCorreo(false)}
                            >
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