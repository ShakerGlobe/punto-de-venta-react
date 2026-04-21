import { motion } from "framer-motion";
import { CheckCircle2, LayoutDashboard, TrendingUp, DollarSign, Package, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const DashboardPreview = () => {
    const features = [
        "Checa cuánto dinero entró en segundos",
        "Nedimi te avisa si te falta mercancía",
        "Revisa tus ventas desde donde estés",
        "Mira qué productos se venden más"
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
        <section className="w-full bg-white px-4 md:px-6 pb-10 md:pb-10 lg:pb-15 relative overflow-hidden">
            
            {/* --- DESTELLOS VERDES REFORZADOS --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-[#00C1A3]/20 rounded-full blur-[120px] -translate-x-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-emerald-400/15 rounded-full blur-[150px] translate-x-1/4" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-slate-50/50 border border-slate-200 p-6 sm:p-10 md:p-16 lg:p-20 shadow-[0_40px_100px_-20px_rgba(0,193,163,0.15)]"
                >
                    {/* Reestructuración Mirror: Dashboard Izquierda, Texto Derecha */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        
                        {/* --- LADO IZQUIERDO: EL DASHBOARD (MODO OSCURO PREMIUM) --- */}
                        <motion.div
                            initial={{ opacity: 0, x: -30, rotate: -2 }}
                            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative w-full aspect-[4/3] bg-slate-950 rounded-[2rem] md:rounded-[3rem] border-[8px] md:border-[12px] border-slate-900 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] p-5 sm:p-8 flex flex-col overflow-hidden order-1"
                        >
                            {/* Brillo interno esmeralda */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00C1A3]/15 to-transparent pointer-events-none" />

                            <div className="flex items-center justify-between mb-6 md:mb-8 border-b border-white/5 pb-4 md:pb-6">
                                <div className="flex gap-1.5 md:gap-2">
                                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-slate-800" />
                                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-slate-800" />
                                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-slate-800" />
                                </div>
                                <div className="flex gap-3 md:gap-4">
                                    <Package size={16} className="text-slate-600" />
                                    <DollarSign size={16} className="text-slate-600" />
                                </div>
                            </div>

                            <div className="flex justify-between items-end mb-8 md:mb-10">
                                <div className="space-y-1">
                                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-500">Ventas del día</span>
                                    <h3 className="text-3xl md:text-5xl font-[1000] text-white tracking-tighter italic">$8,420.00</h3>
                                </div>
                                <div className="text-[#00C1A3] bg-[#00C1A3]/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-[9px] md:text-[10px] font-black italic border border-[#00C1A3]/20">
                                    <TrendingUp size={12} /> +25% HOY
                                </div>
                            </div>

                            {/* GRÁFICO DE BARRAS NEDIMI GREEN */}
                            <div className="flex items-end justify-between gap-1.5 md:gap-4 flex-1 relative min-h-[120px] pt-4">
                                {chartData.map((data, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-2 md:gap-3 z-10 h-full justify-end">
                                        <div className="w-full bg-white/5 rounded-t-lg md:rounded-t-xl relative flex items-end h-full overflow-hidden">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${data.height}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, delay: 0.4 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                                                className="w-full bg-gradient-to-t from-[#00C1A3] to-emerald-400 rounded-t-lg md:rounded-t-xl shadow-[0_0_20px_rgba(0,193,163,0.3)]"
                                            />
                                        </div>
                                        <span className="text-[8px] md:text-[10px] font-black text-slate-600 uppercase tracking-tighter">{data.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* --- LADO DERECHO: TEXTO --- */}
                        <div className="order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 text-[#00C1A3] rounded-full mb-8 shadow-sm"
                            >
                                <Sparkles size={14} className="fill-current" />
                                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">
                                    Control total de tu negocio
                                </span>
                            </motion.div>

                            <h2 className="text-4xl md:text-6xl font-[1000] italic uppercase text-slate-950 mb-6 leading-[0.9] tracking-tighter">
                                Echa un ojo a <br />tu tienda en <br />
                                <span className="text-[#00C1A3] underline decoration-emerald-100 decoration-8 underline-offset-8">
                                    Tiempo Real.
                                </span>
                            </h2>
                            
                            <p className="text-slate-500 text-lg md:text-xl mb-10 font-medium max-w-lg leading-relaxed">
                                Ya no tienes que andar sumando papelitos. Con Nedimi ves tus ganancias y lo que tienes en estante al instante, sin complicaciones.
                            </p>

                            {/* Features con Checkmarks Nedimi Green */}
                            <div className="grid gap-3 sm:gap-4 mb-10 w-full">
                                {features.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-[#00C1A3]/30 group">
                                        <div className="bg-emerald-50 p-1 rounded-full group-hover:bg-[#00C1A3] transition-colors">
                                            <CheckCircle2 size={18} className="text-[#00C1A3] group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-[11px] sm:text-xs md:text-sm font-black uppercase tracking-tight text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="/register" className="inline-block text-[#00C1A3] font-black italic uppercase tracking-widest border-b-2 border-[#00C1A3] pb-1 hover:text-[#00a88e] transition-colors text-sm">
                                ¡Quiero empezar ya! →
                            </Link>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};