import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const RegisterCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="relative py-24 overflow-hidden bg-[#020617] border-t border-white/5 flex flex-col items-center">
            {/* 1. FONDO: Líneas de datos */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ left: "-20%", opacity: 0 }}
                        animate={{ left: "110%", opacity: [0, 0.3, 0.3, 0] }}
                        transition={{ 
                            duration: 10 + i, 
                            repeat: Infinity, 
                            delay: i * 2, 
                            ease: "linear" 
                        }}
                        className="absolute h-[1px] bg-[#00C1A3]"
                        style={{ top: `${20 + i * 15}%`, width: '100px' }}
                    />
                ))}
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-4"
                >
                    <h2 className="text-4xl md:text-6xl font-[1000] text-white italic uppercase tracking-tighter leading-[0.9] overflow-visible">
                        <span className="block pr-10 -mr-10 overflow-visible">
                            ¿LISTO PARA
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-[#00E5FF] pr-20 -mr-20 overflow-visible">
                            TOMAR EL CONTROL?
                        </span>
                    </h2>

                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-light mt-2">
                        Únete a los negocios que ya están evolucionando su gestión con <span className="text-white font-medium">Nedimi POS</span>.
                    </p>

                    <button 
                        onClick={() => navigate('/register')}
                        className="group relative px-10 py-5 bg-[#00C1A3] text-[#020617] font-[1000] italic uppercase rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(0,193,163,0.3)] mt-4"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-3 text-lg tracking-widest">
                            EMPEZAR MI PRUEBA GRATIS <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    </button>

                    <div className="flex flex-col items-center gap-3 mt-4">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00C1A3]" />
                            Sin tarjetas de crédito · Activación instantánea
                        </div>

                        {/* MINI SECCIÓN DE LOGIN */}
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            ¿Ya tienes una cuenta?{" "}
                            <button 
                                onClick={() => window.location.href = '/puntodeventa/'}
                                className="text-[#00C1A3] hover:text-white transition-colors underline decoration-[#00C1A3]/30 underline-offset-4"
                            >
                                Inicia sesión
                            </button>
                        </p>
                    </div>
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `@keyframes shimmer { 100% { transform: translateX(100%); } }` }} />
        </section>
    );
};