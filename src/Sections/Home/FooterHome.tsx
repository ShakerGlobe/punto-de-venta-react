import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Zap, ShieldCheck, Cloud } from 'lucide-react';
import { useRef } from 'react';

export const FinalCTA = () => {
    const containerRef = useRef(null);

    // Efecto de scroll optimizado para móviles y desktop
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section ref={containerRef} className="py-24 md:py-40 relative overflow-hidden">
            {/* --- DECORACIÓN DE FONDO --- */}
            <div className="absolute inset-0 -z-10">
                {/* Glow Central - Ajustado para no sobreexponer en móvil */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[600px] bg-[#00C1A3]/10 blur-[80px] md:blur-[150px] rounded-full" />

                {/* Líneas de Escaneo Sutiles */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,193,163,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,193,163,0.1)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    style={{ scale, opacity }}
                    className="relative group"
                >
                    {/* Contenedor Principal Estilo Glassmorphism */}
                    <div className="relative bg-[#001f3f]/30 border border-white/10 rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 text-center backdrop-blur-3xl overflow-hidden shadow-2xl">

                        {/* Rayo de luz dinámico de fondo - Oculto en móviles pequeños para claridad */}
                        <div className="absolute -top-12 -right-12 md:-top-24 md:-right-24 opacity-5 md:opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                            <Zap size={200} className="md:size-[300px] text-[#00C1A3] rotate-12" />
                        </div>

                        <div className="relative z-10">
                            {/* Badge Superior */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 md:px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-8 md:mb-10"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C1A3] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C1A3]"></span>
                                </span>
                                <span className="text-[#00C1A3] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[8px] md:text-[10px]">
                                    Último paso al éxito
                                </span>
                            </motion.div>

                            {/* Título Explosivo - Tipografía fluida */}
                            <h2 className="text-4xl md:text-7xl lg:text-8xl font-[1000] text-white mb-6 md:mb-8 tracking-tighter italic uppercase leading-[0.9]">
                                ¿Listo para <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-emerald-400 to-cyan-500 drop-shadow-[0_0_20px_rgba(0,193,163,0.3)]">
                                    evolucionar?
                                </span>
                            </h2>

                            <p className="text-slate-400 text-base md:text-2xl max-w-2xl mx-auto mb-10 md:mb-16 leading-relaxed italic px-4">
                                Únete a los comerciantes inteligentes que ya controlan su negocio con <span className="text-white font-bold not-italic">Nedimi POS</span>. El futuro no espera.
                            </p>

                            {/* Botón de Acción Principal */}
                            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0, 193, 163, 0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative w-full md:w-auto px-8 md:px-12 py-5 md:py-7 bg-[#00C1A3] text-[#020617] text-lg md:text-xl font-[1000] uppercase tracking-[0.1em] md:tracking-[0.2em] rounded-2xl overflow-hidden flex items-center justify-center gap-4 transition-all"
                                >
                                    <span className="relative z-10">¡EMPEZAR AHORA!</span>
                                    <Rocket size={24} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />

                                    {/* Efecto Shimmer (Brillo) */}
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                </motion.button>
                            </div>

                            {/* Micro-Badges de Confianza */}
                            <div className="mt-12 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 border-t border-white/5 pt-10 md:pt-12">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                        <ShieldCheck className="text-[#00C1A3]" size={18} />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white text-xs font-black uppercase tracking-tighter">Sin Tarjeta</p>
                                        <p className="text-slate-500 text-[9px] uppercase font-bold">Registro instantáneo</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                        <Cloud className="text-blue-400" size={18} />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white text-xs font-black uppercase tracking-tighter">Cloud Sync</p>
                                        <p className="text-slate-500 text-[9px] uppercase font-bold">Acceso 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Borde de Neon Sutil */}
                        <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[4rem] border border-[#00C1A3]/20 pointer-events-none group-hover:border-[#00C1A3]/40 transition-colors duration-500" />
                    </div>
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
            `}} />
        </section>
    );
};