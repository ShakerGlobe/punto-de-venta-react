import { motion } from "framer-motion";
import { CheckCircle2, LayoutDashboard, BarChart3, TrendingUp } from "lucide-react";

export const DashboardPreview = () => {
    const features = [
        "REVISA TU DINERO EN SEGUNDOS",
        "SABES CUÁNDO TE ESTÁS QUEDANDO SIN PRODUCTO",
        "REVISA TODAS TUS VENTAS CUANDO QUIERAS",
        "CONTROLA LO QUE HACE CADA EMPLEADO"
    ];

    const chartData = [
        { height: 40, label: "Lun" },
        { height: 70, label: "Mar" },
        { height: 45, label: "Mié" },
        { height: 90, label: "Jue" },
        { height: 65, label: "Vie" },
        { height: 80, label: "Sáb" },
        { height: 55, label: "Dom" },
    ];

    return (
        <section className="w-full bg-[#020617] px-6 pb-20 md:pb-32 lg:pb-40">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="relative rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] overflow-hidden bg-slate-900/40 border border-[#00C1A3]/20 p-8 md:p-16 lg:p-24 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,193,163,0.07)]"
                >
                    {/* Brillo de fondo */}
                    <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#00C1A3]/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                        
                        {/* LADO IZQUIERDO */}
                        <div className="order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-md mb-6"
                            >
                                <LayoutDashboard size={14} className="text-blue-400" />
                                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                                    CONTROL TOTAL DE TU NEGOCIO
                                </span>
                            </motion.div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[1000] italic uppercase text-white mb-6 md:mb-8 leading-[0.9] tracking-tighter">
                                Ve todo lo que pasa en tu Tienda <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-blue-400">
                                    En Tiempo Real.
                                </span>
                            </h2>
                            <p className="text-slate-400 text-sm md:text-base lg:text-lg mb-8 md:mb-10 font-light max-w-lg">
                                 Revisa tus ventas, tu dinero y tu inventario en segundos.
                                 Toma decisiones rápidas sin depender de libretas o cálculos manuales.
                            </p>

                            <div className="grid gap-3">
                                {features.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                                        <CheckCircle2 size={18} className="text-[#00C1A3]" />
                                        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* LADO DERECHO: MINI DASHBOARD CON BARRAS CORREGIDAS */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="order-1 lg:order-2 relative w-full aspect-[4/3] bg-[#0f172a] rounded-[2rem] border border-slate-700/50 p-6 sm:p-8 flex flex-col group"
                        >
                            {/* Cabecera macOS */}
                            <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                </div>
                                <div className="h-2 w-16 bg-slate-800 rounded-full" />
                            </div>

                            <div className="flex justify-between items-end mb-8">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Ventas Semanales</span>
                                    <h3 className="text-3xl font-[1000] text-white tracking-tighter">$124,500</h3>
                                </div>
                                <div className="text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-lg flex items-center gap-1 text-[10px] font-bold">
                                    <TrendingUp size={12} /> +14%
                                </div>
                            </div>

                            {/* CONTENEDOR DE GRÁFICO */}
                            <div className="flex items-end justify-between gap-2 md:gap-4 flex-1 relative min-h-[160px] pt-4">
                                {/* Líneas de fondo */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                                    <div className="w-full border-t border-slate-600" />
                                    <div className="w-full border-t border-slate-600" />
                                    <div className="w-full border-t border-slate-600" />
                                </div>

                                {chartData.map((data, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-2 z-10 h-full justify-end">
                                        <div className="w-full bg-slate-800/40 rounded-t-md relative flex items-end h-full overflow-hidden">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${data.height}%` }}
                                                viewport={{ once: true, amount: 0.1 }}
                                                transition={{ duration: 1, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
                                                className="w-full bg-gradient-to-t from-[#00C1A3] to-emerald-400 rounded-t-md relative shadow-[0_0_15px_rgba(0,193,163,0.3)]"
                                            />
                                        </div>
                                        <span className="text-[9px] font-bold text-slate-500 uppercase">{data.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};