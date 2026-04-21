import { motion } from "framer-motion";
import { BarChart3, TrendingUp, PieChart, ArrowUpRight, Target, Zap, Sparkles } from "lucide-react";
import React from "react";

export const ReportsHome = () => {
    return (
        <section id="reports" className="py-10 md:py-10 px-4 md:px-6 bg-white relative overflow-hidden">
            
            {/* --- DESTELLOS VERDES REFORZADOS (Visible Identity) --- */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#00C1A3]/20 blur-[120px] md:blur-[160px] rounded-full" />
                <div className="absolute top-1/4 right-[-5%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-emerald-400/15 blur-[100px] md:blur-[140px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Reestructuración Mirror: Dashboard Izquierda, Texto Derecha */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* --- LADO IZQUIERDO: DASHBOARD (MODO OSCURO PREMIUM) --- */}
                    <div className="relative order-2 lg:order-1">
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="relative z-10 bg-slate-950 border-[8px] md:border-[12px] border-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-12 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
                        >
                            {/* Brillo interno esmeralda */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00C1A3]/10 to-transparent pointer-events-none" />

                            {/* Info de Ventas */}
                            <div className="flex justify-between items-end mb-10 md:mb-12 relative z-10">
                                <div>
                                    <p className="text-slate-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <Zap size={12} className="text-[#00C1A3] fill-[#00C1A3]" /> Ingresos de hoy
                                    </p>
                                    <h3 className="text-3xl md:text-5xl font-[1000] text-white tracking-tighter italic">
                                        $12,450.00
                                    </h3>
                                </div>
                                <div className="bg-[#00C1A3]/10 text-[#00C1A3] px-3 py-1.5 rounded-full text-[10px] font-black flex items-center gap-1 border border-[#00C1A3]/20 shadow-lg">
                                    <ArrowUpRight size={14} /> +15.4%
                                </div>
                            </div>

                            {/* GRÁFICA DE BARRAS NEDIMI GREEN */}
                            <div className="flex items-end justify-between gap-2 md:gap-5 h-40 md:h-64 relative z-10">
                                {[40, 65, 45, 90, 55, 80, 100].map((height, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-3 md:gap-4 h-full justify-end group">
                                        <div className="w-full bg-white/5 rounded-t-lg md:rounded-t-xl relative flex items-end h-full overflow-hidden">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${height}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                                                className="w-full bg-gradient-to-t from-[#00C1A3] to-emerald-400 rounded-t-lg md:rounded-t-xl relative shadow-[0_0_20px_rgba(0,193,163,0.3)]"
                                            >
                                                <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
                                            </motion.div>
                                        </div>
                                        <span className="text-[8px] md:text-[10px] font-black text-slate-600 uppercase tracking-tighter">D{i + 1}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tarjeta Flotante (Inventario) */}
                        <motion.div
                            initial={{ opacity: 0, x: 30, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 z-20"
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="bg-white border border-slate-100 p-4 md:p-6 rounded-[2rem] shadow-2xl flex items-center gap-4"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#00C1A3]">
                                    <BarChart3 size={24} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Reportes</p>
                                    <p className="text-sm font-[1000] text-slate-900 italic uppercase tracking-tight">Stock al día</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* --- LADO DERECHO: TEXTO --- */}
                    <div className="space-y-10 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-emerald-100 bg-emerald-50 text-[#00C1A3] font-black uppercase tracking-[0.3em] text-[10px] shadow-sm mb-8">
                                <Sparkles size={14} className="fill-current" /> Inteligencia para tu tienda
                            </span>

                            <h2 className="text-4xl md:text-7xl font-[1000] text-slate-950 tracking-tighter italic uppercase leading-[0.9] mb-8">
                                TOMA DECISIONES <br />
                                <span className="text-[#00C1A3] underline decoration-emerald-100 decoration-8 underline-offset-8">
                                    CON DATOS REALES
                                </span>
                            </h2>
                            
                            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                                Ya no tienes que adivinar cuánto ganaste en el día. Con los reportes de <span className="text-slate-900 font-bold">Nedimi POS</span>, ves tus ventas y tus productos estrella al instante.
                            </p>
                        </motion.div>

                        {/* LISTA DE BENEFICIOS SIMPLE */}
                        <div className="grid gap-4 w-full max-w-lg">
                            {[
                                { icon: <TrendingUp size={20} />, text: "PROYECCIÓN DE VENTAS" },
                                { icon: <PieChart size={20} />, text: "TUS PRODUCTOS ESTRELLA" },
                                { icon: <Target size={20} />, text: "GANANCIAS REALES" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex items-center gap-5 p-5 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 bg-slate-50/50 transition-all hover:bg-emerald-50 hover:border-emerald-200 group"
                                >
                                    <div className="p-3 rounded-xl bg-[#00C1A3] text-white shadow-lg shadow-emerald-200 transition-transform group-hover:scale-110">
                                        {item.icon}
                                    </div>
                                    <span className="text-xs md:text-sm font-black tracking-widest text-slate-700 uppercase italic">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};