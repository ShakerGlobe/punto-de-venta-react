import { motion } from "framer-motion";
import { Rocket, CheckCircle2 } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const RegisterCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-white flex flex-col items-center">
            
            {/* --- DESTELLOS AZULES (Identidad Nedimi) --- */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gran resplandor central */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
                {/* Destello sutil lateral */}
                <div className="absolute -right-20 top-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    {/* Badge de confianza */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-sm border border-blue-100">
                        <CheckCircle2 size={14} />
                        Únete a la evolución
                    </div>

                    <h2 className="text-5xl md:text-8xl font-[1000] text-slate-950 italic uppercase tracking-tighter leading-[0.85] mb-8">
                        ¿LISTO PARA <br />
                        <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-8">
                            EL CONTROL?
                        </span>
                    </h2>

                    <p className="text-slate-500 text-xl md:text-2xl max-w-2xl font-medium mb-12 leading-relaxed">
                        Deja atrás el desorden de la libreta. Prueba <span className="text-slate-900 font-black">Nedimi POS</span> hoy mismo y siente la paz de tener tu negocio en orden.
                    </p>

                    {/* BOTÓN PRINCIPAL: EL "BOTONAZO" NEDIMI */}
                    <button 
                        onClick={() => navigate('/register')}
                        className="group relative px-12 py-6 bg-blue-600 text-white font-[1000] italic uppercase rounded-[2rem] transition-all hover:scale-105 active:scale-95 shadow-[0_25px_50px_-12px_rgba(37,99,235,0.5)] mb-8 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-4 text-xl tracking-widest">
                            EMPEZAR MI PRUEBA GRATIS 
                            <Rocket size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                        {/* Brillo de barrido al pasar el mouse */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    </button>

                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-4 text-xs font-black text-slate-400 uppercase tracking-widest">
                            <span>Sin tarjetas</span>
                            <div className="w-1 h-1 rounded-full bg-blue-200" />
                            <span>Activación en 1 minuto</span>
                        </div>

                        {/* LOGIN SECTION */}
                        <div className="bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
                            <p className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">
                                ¿Ya eres parte de Nedimi?{" "}
                                <button 
                                    onClick={() => window.location.href = '/puntodeventa/'}
                                    className="text-blue-600 hover:text-blue-800 transition-colors font-black underline underline-offset-4 decoration-blue-200"
                                >
                                    Entra aquí
                                </button>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Definición de la animación de brillo para el botón */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes shimmer { 
                    100% { transform: translateX(100%); } 
                }
            ` }} />
        </section>
    );
};