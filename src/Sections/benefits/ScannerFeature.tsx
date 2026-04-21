import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Zap, XCircle, CheckCircle2, Barcode } from "lucide-react";

export const ScannerFeature = () => {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            
            {/* --- DESTELLOS VERDES (Identidad Nedimi - Más visibles) --- */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Aumentada la opacidad de /15 a /25 para mayor visibilidad */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00C1A3]/25 rounded-full blur-[140px]" />
                {/* Aumentada la opacidad de /10 a /20 */}
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* COLUMNA IZQUIERDA: TEXTO HUMANO */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div>
                            {/* Cambiado blue a emerald/Nedimi green */}
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-8 shadow-sm">
                                <Zap size={14} className="text-[#00C1A3] fill-[#00C1A3]" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00C1A3]">Ahorra en equipo</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-[1000] text-slate-950 italic uppercase tracking-tighter leading-[0.85] mb-8">
                                TU CELULAR ES EL <br />
                                {/* Subrayado en Nedimi Green */}
                                <span className="text-[#00C1A3] underline decoration-emerald-100 decoration-8 underline-offset-8">ÚNICO ESCÁNER</span> <br />
                                QUE NECESITAS
                            </h2>

                            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
                                No gastes miles de pesos en pistolas de códigos. Nedimi usa la cámara de tu celular para registrar tus productos al instante. ¡Rápido y sin cables!
                            </p>
                        </div>

                        {/* COMPARATIVA SIMPLE */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 space-y-4">
                                <div className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-widest">
                                    <XCircle size={16} /> Lo de antes
                                </div>
                                <ul className="text-slate-500 text-sm space-y-3 font-medium italic">
                                    <li>• Cables que estorban</li>
                                    <li>• Gastar más de $1,500</li>
                                    <li>• Ocupa mucho espacio</li>
                                </ul>
                            </div>
                            {/* Cambiado bg-blue a bg-NedimiGreen, shadow blue a shadow green */}
                            <div className="p-6 rounded-[2rem] bg-[#00C1A3] shadow-xl shadow-[#00C1A3]/30 space-y-4">
                                <div className="flex items-center gap-2 text-emerald-100 font-black text-[10px] uppercase tracking-widest">
                                    <CheckCircle2 size={16} /> Con Nedimi
                                </div>
                                <ul className="text-white text-sm space-y-3 font-medium italic">
                                    <li>• Cero cables, cero líos</li>
                                    <li>• ¡Inversión de $0 pesos!</li>
                                    <li>• Cobra desde el pasillo</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* COLUMNA DERECHA: MOCKUP OSCURO */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-[290px] h-[600px] bg-slate-950 rounded-[3.5rem] border-[12px] border-slate-900 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.4)] overflow-hidden">
                            
                            {/* Interfaz de la App */}
                            <div className="absolute inset-0 bg-white flex flex-col">
                                {/* Simulación de cámara activa */}
                                <div className="flex-1 relative bg-slate-100 m-4 rounded-[2rem] overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 border-[30px] border-black/5 z-10" />
                                    
                                    {/* Guía de escaneo cambiada a Nedimi Green */}
                                    <div className="relative w-48 h-48 border-2 border-dashed border-[#00C1A3]/50 rounded-3xl flex items-center justify-center bg-white/50">
                                        {/* Icono barcode en Nedimi Green */}
                                        <Barcode size={60} className="text-[#00C1A3]/30" />
                                        
                                        <motion.div 
                                            animate={{ top: ["5%", "90%", "5%"] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute left-0 right-0 h-[3px] bg-[#00C1A3] shadow-[0_0_15px_#00C1A3] z-20"
                                        />
                                    </div>
                                    
                                    <span className="absolute bottom-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Apunte al código</span>
                                </div>

                                <div className="p-6 pt-0">
                                    <div className="h-14 w-full bg-[#00C1A3] rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-emerald-200">
                                        <CheckCircle2 size={20} className="text-white" />
                                        <span className="font-[1000] italic text-xs text-white uppercase tracking-widest">
                                            ¡Listo para cobrar!
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge Informal */}
                        <motion.div 
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 -left-4 md:left-12 p-6 bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl flex items-center gap-4"
                        >
                            {/* Icono Smartphone cambiado a Nedimi Green */}
                            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#00C1A3]">
                                <Smartphone size={28} />
                            </div>
                            <div>
                                <p className="text-slate-950 font-[1000] text-lg italic uppercase tracking-tighter leading-none mb-1">Sin aparatos</p>
                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-none">Solo tu celular</p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};