import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Scan, Zap, XCircle, CheckCircle2 } from "lucide-react";

export const ScannerFeature = () => {
    return (
        <section className="relative py-24 bg-[#020617] overflow-hidden">
            {/* Fondo con grid técnico */}
            <div className="absolute inset-0 z-0 opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(#00C1A3 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* COLUMNA IZQUIERDA: TEXTO E IMPACTO */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                            <Zap size={14} className="text-amber-500 fill-amber-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500">Cero Hardware Adicional</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-[1000] text-white italic uppercase tracking-tighter leading-[0.85]">
                            OLVÍDATE DE LOS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-cyan-400">
                                ESCÁNERES ESTORBOSOS
                            </span>
                        </h2>

                        <p className="text-slate-400 text-lg md:text-xl font-light max-w-xl leading-relaxed">
                            No gastes miles de pesos en pistolas de lectura. Nedimi POS utiliza la potencia de la cámara de tu celular para registrar productos de forma instantánea.
                        </p>

                        {/* COMPARATIVA RÁPIDA */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                                <div className="flex items-center gap-2 text-red-500 font-black text-xs uppercase tracking-widest">
                                    <XCircle size={16} /> Lo tradicional
                                </div>
                                <ul className="text-slate-500 text-xs space-y-2 font-medium">
                                    <li>• Cables estorbosos</li>
                                    <li>• Inversión de $1,500+</li>
                                    <li>• Ocupa espacio en mostrador</li>
                                </ul>
                            </div>
                            <div className="p-4 rounded-2xl bg-[#00C1A3]/5 border border-[#00C1A3]/20 space-y-3">
                                <div className="flex items-center gap-2 text-[#00C1A3] font-black text-xs uppercase tracking-widest">
                                    <CheckCircle2 size={16} /> Con Nedimi
                                </div>
                                <ul className="text-slate-300 text-xs space-y-2 font-medium">
                                    <li>• Totalmente inalámbrico</li>
                                    <li>• ¡Costo de dispostivos $0!</li>
                                    <li>• Vende desde el pasillo</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* COLUMNA DERECHA: VISUAL MOCKUP CON ANIMACIÓN DE SCAN */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* Glow de fondo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00C1A3]/20 blur-[100px] rounded-full" />

                        {/* MOCKUP DEL CELULAR */}
                        <div className="relative w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
                            {/* Pantalla del celular */}
                            <div className="absolute inset-0 bg-[#020617] flex flex-col">
                                {/* Header del App Fake */}
                                <div className="p-6 pt-12">
                                    <div className="w-20 h-2 bg-[#00C1A3]/20 rounded-full mb-2" />
                                    <div className="w-12 h-2 bg-[#00C1A3]/10 rounded-full" />
                                </div>

                                {/* ÁREA DE ESCANEO */}
                                <div className="flex-1 relative flex items-center justify-center px-6">
                                    <div className="w-full aspect-square border-2 border-dashed border-[#00C1A3]/30 rounded-3xl relative overflow-hidden bg-slate-800/50">
                                        <Scan size={48} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#00C1A3]/20" />
                                        
                                        {/* LÁSER DE ESCANEO ANIMADO */}
                                        <motion.div 
                                            animate={{ top: ["0%", "100%", "0%"] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 right-0 h-1 bg-[#00C1A3] shadow-[0_0_15px_#00C1A3] z-20"
                                        />
                                        
                                        {/* Destello de éxito */}
                                        <motion.div 
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                                            className="absolute inset-0 bg-[#00C1A3]/20 z-10"
                                        />
                                    </div>
                                </div>

                                {/* Footer del App Fake */}
                                <div className="p-6 space-y-3">
                                    <div className="h-10 w-full bg-[#00C1A3] rounded-xl flex items-center justify-center font-black text-[10px] text-[#020617] tracking-widest uppercase">
                                        Producto Registrado
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -bottom-6 -left-6 md:left-20 p-6 bg-slate-900 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-xl"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-amber-950">
                                    <Smartphone size={24} />
                                </div>
                                <div>
                                    <p className="text-white font-black text-sm italic uppercase tracking-tighter">Todo en tu bolsillo</p>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none">Cámara = Escáner</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};