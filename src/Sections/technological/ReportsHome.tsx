import { motion } from "framer-motion";
import { BarChart3, TrendingUp, PieChart, ArrowUpRight, Target, Zap } from "lucide-react";
import React from "react";

export const ReportsHome = () => {
    return (
        <section id="showcase" className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
            
            {/* --- DESTELLOS AZULES (Identidad Nedimi) --- */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute bottom-0 left-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-blue-600/10 blur-[140px] rounded-full" />
                <div className="absolute top-1/4 right-[-5%] w-[400px] h-[400px] bg-blue-400/10 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* --- LADO IZQUIERDO: TEXTO HUMANO --- */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] shadow-sm mb-8">
                                <BarChart3 size={14} /> Inteligencia para tu tienda
                            </span>

                            <h2 className="text-5xl md:text-7xl font-[1000] text-slate-950 tracking-tighter italic uppercase leading-[0.85] mb-8">
                                TOMA DECISIONES <br />
                                <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-8">
                                    CON DATOS REALES
                                </span>
                            </h2>
                            
                            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                                Ya no tienes que adivinar cuánto ganaste en el día. Con los reportes de <span className="text-slate-950 font-bold">Nedimi POS</span>, ves tus ventas y tus productos estrella al instante.
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
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex items-center gap-5 p-4 rounded-[1.5rem] border border-slate-100 bg-slate-50/50 transition-all hover:bg-blue-50 hover:border-blue-100 group"
                                >
                                    <div className="p-3 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200 transition-transform group-hover:scale-110">
                                        {item.icon}
                                    </div>
                                    <span className="text-xs md:text-sm font-black tracking-widest text-slate-700 uppercase italic">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* --- LADO DERECHO: DASHBOARD (CONTRASTE OSCURO) --- */}
                    <div className="relative order-1 lg:order-2">
                        
                        {/* Contenedor tipo Pantalla de Software */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="relative z-10 bg-slate-950 border-[12px] border-slate-900 rounded-[3rem] p-8 md:p-12 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden"
                        >
                            {/* Resplandor interno azul */}
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />

                            {/* Info de Ventas */}
                            <div className="flex justify-between items-end mb-12 relative z-10">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <Zap size={12} className="text-blue-400 fill-blue-400" /> Ingresos de hoy
                                    </p>
                                    <h3 className="text-4xl md:text-5xl font-[1000] text-white tracking-tighter italic">
                                        $12,450.00
                                    </h3>
                                </div>
                                <div className="bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded-full text-[10px] font-black flex items-center gap-1 border border-blue-500/20 shadow-lg">
                                    <ArrowUpRight size={14} /> +15.4%
                                </div>
                            </div>

                            {/* GRÁFICA DE BARRAS LIMPIA */}
                            <div className="flex items-end justify-between gap-3 md:gap-5 h-48 md:h-64 relative z-10">
                                {[40, 65, 45, 90, 55, 80, 100].map((height, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-4 h-full justify-end group">
                                        <div className="w-full bg-white/5 rounded-t-xl relative flex items-end h-full overflow-hidden">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${height}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                                                className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-xl relative shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                                            >
                                                {/* Brillo en la punta de la barra */}
                                                <div className="absolute top-0 left-0 w-full h-1 bg-white/30" />
                                            </motion.div>
                                        </div>
                                        <span className="text-[10px] font-black text-slate-600 uppercase tracking-tighter">Día {i + 1}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tarjeta Flotante (Inventario) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 z-20"
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="bg-white border border-slate-100 p-5 rounded-[2rem] shadow-2xl flex items-center gap-4"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                    <BarChart3 size={24} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Reportes</p>
                                    <p className="text-sm font-[1000] text-slate-900 italic uppercase tracking-tight">Stock al día</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};