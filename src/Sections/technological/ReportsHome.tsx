import { motion } from "framer-motion";
import { BarChart3, TrendingUp, PieChart, ArrowUpRight, Target } from "lucide-react";

export const ReportsHome = () => {
    return (
        <section id="showcase" className="py-24 md:py-32 px-6 bg-[#020617] relative overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#00C1A3]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* LADO IZQUIERDO: TEXTO E INFO */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#00C1A3] font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px] bg-[#00C1A3]/10 px-4 py-2 rounded-full border border-[#00C1A3]/20">
                                Inteligencia de Negocio
                            </span>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-[1000] text-white mt-6 tracking-tighter italic uppercase leading-[0.9]">
                                Toma decisiones <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-emerald-400 to-blue-400 drop-shadow-[0_0_15px_rgba(0,193,163,0.2)]">
                                    basadas en datos
                                </span>
                            </h2>
                        </motion.div>

                        <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-xl">
                            Olvídate de adivinar cuánto ganaste. Con los reportes automáticos de <span className="text-white font-bold">Nedimi POS</span>, visualizas tus ventas, productos estrella y tendencias en tiempo real.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-1">
                            {[
                                { icon: <TrendingUp size={20} />, text: "PROYECCIÓN DE VENTAS SEMANALES" },
                                { icon: <PieChart size={20} />, text: "PRODUCTOS MÁS VENDIDOS (TOP 5)" },
                                { icon: <Target size={20} />, text: "CONTROL DE MÁRGENES DE UTILIDAD" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 text-slate-300 group cursor-default"
                                >
                                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#00C1A3] group-hover:bg-[#00C1A3] group-hover:text-[#020617] transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <span className="text-[10px] md:text-xs font-black tracking-widest uppercase">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* LADO DERECHO: DASHBOARD VISUAL */}
                    <div className="relative order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10 bg-[#0b1120]/60 border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-10 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                        >
                            {/* Header del Dashboard */}
                            <div className="flex justify-between items-end mb-12">
                                <div>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Ingresos Totales</p>
                                    <h3 className="text-3xl md:text-4xl font-[1000] text-white tracking-tighter italic">$42,500.00</h3>
                                </div>
                                <div className="bg-[#00C1A3]/20 text-[#00C1A3] px-3 py-1.5 rounded-xl text-[10px] font-black flex items-center gap-1 border border-[#00C1A3]/20">
                                    <ArrowUpRight size={14} /> +15.4%
                                </div>
                            </div>

                            {/* GRÁFICA DE BARRAS DINÁMICA */}
                            <div className="flex items-end justify-between gap-2 md:gap-4 h-48 md:h-64 mb-4">
                                {[40, 65, 45, 90, 55, 80, 100].map((height, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-4 h-full justify-end">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${height}%` }}
                                            transition={{ duration: 1.2, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                                            className="w-full bg-gradient-to-t from-[#00C1A3] via-[#00C1A3]/80 to-cyan-500 rounded-t-xl relative group"
                                        >
                                            {/* Tooltip en hover */}
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-[#020617] text-[10px] font-black py-1.5 px-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-1 pointer-events-none shadow-xl">
                                                {height}%
                                            </div>
                                            {/* Efecto de brillo en la barra */}
                                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl" />
                                        </motion.div>
                                        <span className="text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-tighter">Día {i + 1}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tarjeta Flotante Extra (Inventario) */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-8 -left-4 md:-left-8 z-20 bg-[#161d2f] border border-white/10 p-5 rounded-2xl shadow-2xl flex items-center gap-4 backdrop-blur-md"
                        >
                            <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 border border-blue-500/20">
                                <BarChart3 size={24} />
                            </div>
                            <div>
                                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Inventario</p>
                                <p className="text-sm font-bold text-white italic">Stock Inteligente</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};