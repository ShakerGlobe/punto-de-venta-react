import { motion } from "framer-motion";
import { Rocket, CheckCircle2, Sparkles } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const RegisterCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="relative py-10 md:py-10 overflow-hidden bg-white flex flex-col items-center">
            
            {/* --- DESTELLOS VERDES REFORZADOS (Cierre de sección) --- */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gran resplandor central esmeralda */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[700px] bg-[#00C1A3]/20 rounded-full blur-[120px] md:blur-[160px]" />
                {/* Destello lateral */}
                <div className="absolute -right-20 top-0 w-96 h-96 bg-emerald-400/15 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    {/* Badge de confianza en Verde */}
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 text-[#00C1A3] text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-sm border border-emerald-100">
                        <CheckCircle2 size={14} />
                        Únete a la evolución
                    </div>

                    <h2 className="text-5xl md:text-8xl font-[1000] text-slate-950 italic uppercase tracking-tighter leading-[0.85] mb-10">
                        ¿LISTO PARA <br />
                        <span className="text-[#00C1A3] underline decoration-emerald-100 decoration-8 underline-offset-8">
                            EL CONTROL?
                        </span>
                    </h2>

                    <p className="text-slate-500 text-xl md:text-2xl max-w-2xl font-medium mb-14 leading-relaxed">
                        Deja atrás el desorden de la libreta. Prueba <span className="text-slate-900 font-black">Nedimi POS</span> hoy mismo y siente la paz de tener tu negocio en orden.
                    </p>

                    {/* BOTÓN PRINCIPAL: EL "BOTONAZO" NEDIMI GREEN */}
                    <button 
                        onClick={() => navigate('/register')}
                        className="group relative px-10 md:px-16 py-6 md:py-8 bg-[#00C1A3] text-white font-[1000] italic uppercase rounded-[2.5rem] transition-all hover:scale-105 active:scale-95 shadow-[0_30px_60px_-12px_rgba(0,193,163,0.5)] mb-10 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-4 text-lg md:text-2xl tracking-widest">
                            EMPEZAR MI PRUEBA GRATIS 
                            <Rocket size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                        {/* Brillo de barrido */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    </button>

                    <div className="flex flex-col items-center gap-8">
                        <div className="flex items-center gap-4 text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">
                            <span className="flex items-center gap-2"><Sparkles size={14} className="text-[#00C1A3]" /> Sin tarjetas</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-200" />
                            <span>Activación en 1 minuto</span>
                        </div>

                        {/* LOGIN SECTION REESTILIZADA */}
                        <div className="bg-slate-50 px-8 py-4 rounded-[1.5rem] border border-slate-100 shadow-sm">
                            <p className="text-[13px] font-bold text-slate-500 uppercase tracking-tight">
                                ¿Ya eres parte de Nedimi?{" "}
                                <button 
                                    onClick={() => window.location.href = '/puntodeventa/'}
                                    className="text-[#00C1A3] hover:text-[#00a88e] transition-colors font-black underline underline-offset-4 decoration-emerald-200 ml-1"
                                >
                                    Entra aquí
                                </button>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Animación Shimmer */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes shimmer { 
                    100% { transform: translateX(100%); } 
                }
            ` }} />
        </section>
    );
};