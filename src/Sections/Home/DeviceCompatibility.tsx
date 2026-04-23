import { motion } from "framer-motion";
import { Smartphone, Cpu, Barcode, Sparkles } from "lucide-react";
import React from "react";

export const DeviceCompatibility = () => {
    return (
        <section className="relative py-20 md:py-32 bg-white overflow-hidden">
            
            {/* --- DESTELLOS VERDES REFORZADOS (Para profundidad) --- */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Resplandor verde concentrado detrás de los aparatos */}
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#00C1A3]/25 rounded-full blur-[140px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-400/15 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* --- LADO IZQUIERDO: DISPOSITIVOS (MODO OSCURO PREMIUM) --- */}
                    {/* Se incrementó h-[420px] en móvil para dar más aire */}
                    <div className="relative flex justify-center items-center h-[420px] md:h-[550px] order-2 lg:order-1">
                        
                        {/* PC Mockup - MARCO OSCURO CON ACENTOS VERDES */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, rotate: -3 }}
                            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            // Se ajustó translate-y-2 para móvil para centrar mejor
                            className="absolute z-10 w-[90%] md:w-[520px] bg-slate-950 border-[8px] md:border-[10px] border-slate-900 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] -translate-x-4 md:-translate-x-8 translate-y-2 md:-translate-y-10"
                        >
                            <div className="w-full aspect-video bg-slate-900 rounded-xl md:rounded-2xl overflow-hidden border border-white/5 flex flex-col">
                                <div className="h-6 md:h-7 w-full bg-slate-800/50 border-b border-white/5 flex items-center px-4 gap-2">
                                    <div className="w-2 h-2 rounded-full bg-white/10" />
                                    <div className="w-2 h-2 rounded-full bg-white/10" />
                                </div>
                                <div className="flex-1 p-4 md:p-6 bg-slate-900 flex flex-col gap-4">
                                    <div className="flex justify-between items-center">
                                        <div className="w-1/2 h-3 md:h-4 bg-[#00C1A3]/20 rounded-full" />
                                        <div className="w-6 h-6 md:w-8 md:h-8 bg-[#00C1A3] rounded-lg shadow-[0_0_15px_rgba(0,193,163,0.4)]" />
                                    </div>
                                    <div className="grid grid-cols-3 gap-3 flex-1">
                                        <div className="bg-white/5 rounded-lg md:rounded-xl border border-white/5" />
                                        <div className="bg-white/5 rounded-lg md:rounded-xl border border-white/5" />
                                        <div className="bg-[#00C1A3]/10 rounded-lg md:rounded-xl border border-[#00C1A3]/20" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Smartphone Mockup - VERDE NEDIMI */}
                        <motion.div
                            initial={{ opacity: 0, y: 70, x: 40, rotate: 8 }}
                            whileInView={{ opacity: 1, y: 0, x: 0, rotate: 8 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            // AJUSTES: w-[135px] (un poco más pequeño) y translate-y-20 (más arriba) en móvil
                            className="absolute z-20 w-[135px] md:w-[220px] aspect-[9/19] bg-slate-950 border-[6px] md:border-[8px] border-slate-900 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_40px_80px_-10px_rgba(0,193,163,0.3)] p-1 translate-x-20 translate-y-20 md:translate-x-40 md:translate-y-36"
                        >
                            <div className="w-full h-full bg-slate-900 rounded-[2rem] md:rounded-[2.2rem] overflow-hidden relative border border-white/10">
                                <div className="flex flex-col items-center h-full pt-10 md:pt-12 px-4 md:px-5">
                                    <div className="w-full aspect-square border-2 border-dashed border-[#00C1A3]/40 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center relative bg-emerald-950/30">
                                        <Barcode size={40} className="text-[#00C1A3] opacity-40" />
                                        <motion.div
                                            animate={{ top: ["5%", "90%", "5%"] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute left-0 w-full h-[3px] bg-[#00C1A3] shadow-[0_0_20px_#00C1A3]"
                                        />
                                    </div>
                                    <div className="mt-6 md:mt-8 w-full h-10 md:h-12 bg-[#00C1A3] rounded-xl md:rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(0,193,163,0.4)]">
                                        <span className="text-[10px] font-black text-white uppercase tracking-widest italic">Escaneando</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- LADO DERECHO: TEXTO --- */}
                    <div className="order-1 lg:order-2 space-y-10 flex flex-col items-center lg:items-start">
                        <div className="text-center lg:text-left">
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-6">
                                <span className="inline-flex items-center gap-2 text-[#00C1A3] font-black uppercase tracking-[0.2em] text-[10px] bg-emerald-50 px-6 py-2.5 rounded-full border border-emerald-100 shadow-sm">
                                    <Sparkles size={12} className="fill-current" /> Cero gastos extras
                                </span>
                            </motion.div>
                            
                            <h2 className="text-5xl md:text-7xl font-[1000] text-slate-950 italic uppercase tracking-tighter leading-[0.85]">
                                Usa lo que <br />
                                <span className="text-[#00C1A3] underline decoration-emerald-100 decoration-8 underline-offset-8">ya tienes</span>
                            </h2>
                        </div>

                        <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl text-center lg:text-left">
                            Olvídate de comprar computadoras caras. Nedimi corre perfecto en tu <span className="text-slate-950 font-bold">celular, tablet o laptop actual.</span> ¡Vende desde cualquier lugar!
                        </p>

                        <div className="grid gap-4 w-full">
                            <FeatureItem
                                icon={<Smartphone />}
                                title="Tu celular es el escáner"
                                desc="Usa la cámara para leer códigos de barras. Sin cables, sin estorbos."
                                delay={0.3}
                            />
                            <FeatureItem
                                icon={<Cpu />}
                                title="Sin instalar nada"
                                desc="Entra desde tu navegador y listo. Es tan fácil como abrir una página web."
                                delay={0.4}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureItem = ({ icon, title, desc, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex gap-6 p-6 rounded-[2rem] md:rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-[#00C1A3]/30 hover:bg-emerald-50/30 transition-all group w-full"
    >
        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#00C1A3] text-white flex items-center justify-center shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
            {React.cloneElement(icon, { size: 24 })}
        </div>
        <div>
            <h4 className="text-slate-950 font-black text-lg uppercase italic tracking-tight mb-1">{title}</h4>
            <p className="text-slate-500 text-sm font-medium leading-snug">{desc}</p>
        </div>
    </motion.div>
);