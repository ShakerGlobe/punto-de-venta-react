import { motion } from "framer-motion";
import { BarChart3, TrendingUp, PieChart, ArrowUpRight, Target } from "lucide-react";
import React from "react";

export const ReportsHome = () => {
    return (
        <section id="showcase" className="py-20 md:py-32 px-6 bg-[#020617] relative overflow-hidden">
            {/* --- DECORACIÓN DE FONDO --- */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#00C1A3]/5 blur-[120px] rounded-full" />
                <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full" />
                {/* Textura sutil para mantener coherencia visual */}
                <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* --- LADO IZQUIERDO: TEXTO E INFO --- */}
                    <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-[#00C1A3]/20 bg-[#00C1A3]/10 text-[#00C1A3] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] md:text-[10px] shadow-[0_0_15px_rgba(0,193,163,0.1)] mb-6 md:mb-8">
                                <BarChart3 size={14} className="animate-pulse" /> Inteligencia de Negocio
                            </span>

                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[1000] text-white tracking-tighter italic uppercase leading-[0.9] md:leading-[0.9]">
                                Toma decisiones <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-emerald-400 to-blue-400 drop-shadow-sm pb-2">
                                    basadas en datos
                                </span>
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-base md:text-lg lg:text-xl text-slate-400 font-light leading-relaxed max-w-xl"
                        >
                            Olvídate de adivinar cuánto ganaste. Con los reportes automáticos de <span className="text-white font-medium">Nedimi POS</span>, visualizas tus ventas, productos estrella y tendencias en tiempo real.
                        </motion.p>

                        <div className="grid gap-3 sm:gap-4 w-full max-w-lg">
                            {[
                                { icon: <TrendingUp size={18} />, text: "PROYECCIÓN DE VENTAS SEMANALES" },
                                { icon: <PieChart size={18} />, text: "PRODUCTOS MÁS VENDIDOS (TOP 5)" },
                                { icon: <Target size={18} />, text: "CONTROL DE MÁRGENES DE UTILIDAD" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                                    whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.03)" }}
                                    className="flex items-center gap-4 text-slate-300 group cursor-default p-3 md:p-4 rounded-2xl border border-white/5 bg-white/[0.01] transition-colors"
                                >
                                    <div className="p-2 md:p-2.5 rounded-xl bg-[#00C1A3]/10 border border-[#00C1A3]/20 text-[#00C1A3] group-hover:bg-[#00C1A3] group-hover:text-[#020617] group-hover:scale-110 transition-all duration-300 shrink-0 shadow-inner">
                                        {item.icon}
                                    </div>
                                    <span className="text-[10px] md:text-xs font-black tracking-[0.1em] sm:tracking-widest uppercase group-hover:text-white transition-colors">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* --- LADO DERECHO: DASHBOARD VISUAL --- */}
                    <div className="relative order-1 lg:order-2 mt-8 lg:mt-0">
                        {/* Contenedor principal estilo "Ventana de Software" */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, type: "spring", stiffness: 100, damping: 20 }}
                            className="relative z-10 bg-slate-900/60 border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,193,163,0.15)] flex flex-col"
                        >
                            {/* Brillo interno para dar volumen */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[2rem] md:rounded-[3rem] pointer-events-none" />

                            {/* Header del Dashboard */}
                            <div className="flex flex-wrap sm:flex-nowrap justify-between items-start sm:items-end gap-4 mb-10 md:mb-12 relative z-10">
                                <div>
                                    <p className="text-slate-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-widest mb-1.5 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Ingresos Semanales
                                    </p>
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-[1000] text-white tracking-tighter italic drop-shadow-md">
                                        $42,500.00
                                    </h3>
                                </div>
                                <div className="bg-[#00C1A3]/10 text-[#00C1A3] px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-[10px] md:text-xs font-black flex items-center gap-1 md:gap-1.5 border border-[#00C1A3]/20 shadow-[0_0_15px_rgba(0,193,163,0.1)]">
                                    <ArrowUpRight size={14} className="md:w-4 md:h-4" /> +15.4%
                                </div>
                            </div>

                            {/* GRÁFICA DE BARRAS DINÁMICA */}
                            <div className="flex items-end justify-between gap-1.5 sm:gap-3 md:gap-4 h-40 sm:h-48 md:h-64 mb-2 relative z-10">
                                {/* Líneas horizontales de guía (Grid) */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                                    <div className="w-full border-t border-dashed border-slate-500" />
                                    <div className="w-full border-t border-dashed border-slate-500" />
                                    <div className="w-full border-t border-dashed border-slate-500" />
                                </div>

                                {[40, 65, 45, 90, 55, 80, 100].map((height, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-2 sm:gap-3 md:gap-4 h-full justify-end group">
                                        <div className="w-full h-full relative flex items-end justify-center">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${height}%` }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ duration: 1.2, delay: 0.3 + (i * 0.1), ease: [0.33, 1, 0.68, 1] }}
                                                className="w-full sm:w-[90%] bg-gradient-to-t from-[#00C1A3]/80 to-cyan-400 rounded-t-md sm:rounded-t-xl relative overflow-hidden transition-all duration-300 group-hover:brightness-110"
                                            >
                                                {/* Efecto de luz interna en la barra */}
                                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/30 to-transparent opacity-50" />

                                                {/* Tooltip en hover */}
                                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-[#020617] text-[9px] md:text-[10px] font-black py-1 px-1.5 md:py-1.5 md:px-2 rounded-md md:rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-1 pointer-events-none shadow-xl z-20 whitespace-nowrap">
                                                    {height}%
                                                </div>
                                            </motion.div>
                                        </div>
                                        <span className="text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-tighter transition-colors group-hover:text-slate-300">
                                            {/* Simplificamos el día en móviles para que no choque */}
                                            <span className="hidden sm:inline">Día</span> {i + 1}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tarjeta Flotante Extra (Inventario) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, y: 20 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="absolute -bottom-6 -left-2 sm:-bottom-8 sm:-left-6 md:-bottom-10 md:-left-10 z-20"
                        >
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="bg-slate-800/90 border border-white/10 p-3 sm:p-4 md:p-5 rounded-[1.2rem] md:rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center gap-3 sm:gap-4 backdrop-blur-xl"
                            >
                                <div className="p-2.5 sm:p-3 bg-blue-500/10 rounded-lg sm:rounded-xl text-blue-400 border border-blue-500/20 shadow-inner">
                                    <BarChart3 size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <p className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-0.5">Inventario</p>
                                    <p className="text-xs sm:text-sm font-bold text-white italic tracking-tight whitespace-nowrap">Stock Inteligente</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};