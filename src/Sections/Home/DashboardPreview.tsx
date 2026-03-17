import { motion } from "framer-motion";
import { CheckCircle2, LayoutDashboard, BarChart3, TrendingUp } from "lucide-react";

export const DashboardPreview = () => {
    const features = [
        "Cortes de caja en 1 clic",
        "Alertas de Stock mínimo",
        "Histórico de Ventas detallado",
        "Control multi-usuario"
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
                    {/* Brillo de fondo sutil */}
                    <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#00C1A3]/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                        {/* Lado Izquierdo: Textos y Características */}
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
                                    Panel de Control
                                </span>
                            </motion.div>

                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[1000] italic uppercase text-white mb-6 md:mb-8 leading-[0.9] tracking-tighter">
                                Gestión de <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-blue-400 drop-shadow-sm">
                                    Alto Nivel.
                                </span>
                            </h2>
                            <p className="text-slate-400 text-sm md:text-base lg:text-lg mb-8 md:mb-10 font-light max-w-lg">
                                Visualiza el rendimiento de tu negocio en tiempo real. Toma decisiones basadas en datos precisos con nuestra interfaz intuitiva y métricas automatizadas.
                            </p>

                            <div className="grid gap-3 md:gap-4">
                                {features.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                        whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.08)" }}
                                        className="flex items-center gap-4 bg-white/5 p-4 md:p-5 rounded-2xl border border-white/5 cursor-default transition-colors duration-300"
                                    >
                                        <div className="p-1 rounded-full bg-[#00C1A3]/20">
                                            <CheckCircle2 size={18} className="text-[#00C1A3]" />
                                        </div>
                                        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-200">
                                            {item}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Lado Derecho: Mini Dashboard Animado */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="order-1 lg:order-2 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-[#0f172a] rounded-[2rem] border border-slate-700/50 p-4 sm:p-6 md:p-8 overflow-hidden shadow-2xl flex flex-col group"
                        >
                            {/* Cabecera de Ventana macOS style */}
                            <div className="flex items-center justify-between mb-6 md:mb-8 border-b border-slate-800 pb-4">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-red-500 transition-colors" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-amber-500 transition-colors" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-emerald-500 transition-colors" />
                                </div>
                                <div className="flex gap-2">
                                    <div className="h-2 w-16 bg-slate-800 rounded-full" />
                                    <div className="h-2 w-8 bg-slate-800 rounded-full" />
                                </div>
                            </div>

                            {/* Info de Métricas simuladas */}
                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                                        Ventas de la semana
                                    </span>
                                    <div className="flex items-center gap-3 mt-1">
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-[1000] text-white tracking-tighter">
                                            $124,500
                                        </h3>
                                        <div className="flex items-center gap-1 text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-lg">
                                            <TrendingUp size={14} />
                                            <span className="text-[10px] font-bold">+14%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden sm:flex p-3 bg-[#00C1A3]/10 border border-[#00C1A3]/20 rounded-xl text-[#00C1A3]">
                                    <BarChart3 size={24} />
                                </div>
                            </div>

                            {/* Gráfico de Barras Animado */}
                            <div className="flex items-end justify-between gap-2 md:gap-4 flex-1 mt-auto pt-4 relative">
                                {/* Líneas de fondo del gráfico */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                                    <div className="w-full border-t border-dashed border-slate-600" />
                                    <div className="w-full border-t border-dashed border-slate-600" />
                                    <div className="w-full border-t border-dashed border-slate-600" />
                                </div>

                                {chartData.map((data, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-2 z-10 group/bar">
                                        <div className="w-full h-32 sm:h-40 md:h-48 bg-slate-800/50 rounded-t-md relative flex items-end">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${data.height}%` }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ duration: 0.8, delay: 0.5 + (i * 0.1), type: "spring" }}
                                                className="w-full bg-gradient-to-t from-[#00C1A3]/80 to-[#00C1A3] rounded-t-md relative transition-all group-hover/bar:brightness-110"
                                            >
                                                {/* Tooltip al hacer hover en la barra */}
                                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-white text-[#020617] text-[10px] font-bold py-1 px-2 rounded">
                                                    {data.height}%
                                                </div>
                                            </motion.div>
                                        </div>
                                        <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase">{data.label}</span>
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