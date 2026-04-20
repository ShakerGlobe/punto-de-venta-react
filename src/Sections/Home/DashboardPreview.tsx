import { motion } from "framer-motion";
import { CheckCircle2, LayoutDashboard, TrendingUp, Zap, DollarSign, Package } from "lucide-react";
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
        <section className="w-full bg-white px-6 pb-20 md:pb-32 lg:pb-40 relative overflow-hidden">
            
            {/* --- DESTELLOS AZULES INTENSOS --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-x-1/2" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400/15 rounded-full blur-[150px] translate-x-1/4" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    // El contenedor principal ahora es una "card" clara muy premium
                    className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden bg-slate-50 border border-slate-200 p-8 md:p-16 lg:p-20 shadow-[0_40px_100px_-20px_rgba(0,102,255,0.1)]"
                >
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        
                        {/* LADO IZQUIERDO: TEXTO INFORMAL */}
                        <div className="order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/20 mb-8"
                            >
                                <LayoutDashboard size={14} />
                                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">
                                    Control total de tu negocio
                                </span>
                            </motion.div>

                            <h2 className="text-4xl md:text-6xl font-[1000] italic uppercase text-slate-950 mb-6 leading-[0.9] tracking-tighter">
                                Echa un ojo a <br />tu tienda en <br />
                                <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-8">
                                    Tiempo Real.
                                </span>
                            </h2>
                            
                            <p className="text-slate-500 text-lg mb-10 font-medium max-w-lg leading-relaxed">
                                 Ya no tienes que andar sumando papelitos. Con Nedimi ves tus ganancias y lo que tienes en estante al instante, sin complicaciones.
                            </p>

                            {/* Features con Checkmarks Nedimi */}
                            <div className="grid gap-4 mb-10">
                                {features.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm transition-transform hover:scale-105">
                                        <div className="bg-blue-50 p-1 rounded-full">
                                            <CheckCircle2 size={20} className="text-blue-600" />
                                        </div>
                                        <span className="text-xs md:text-sm font-black uppercase tracking-tight text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="/register" className="inline-block text-blue-600 font-black italic uppercase tracking-widest border-b-2 border-blue-600 pb-1 hover:text-blue-800 transition-colors">
                                ¡Quiero empezar ya! →
                            </Link>
                        </div>

                        {/* LADO DERECHO: EL DASHBOARD (MODO OSCURO PARA CONTRASTE) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            // El dashboard oscuro sobre el fondo claro se ve increíble
                            className="order-1 lg:order-2 relative w-full aspect-[4/3] bg-slate-950 rounded-[2.5rem] border-[12px] border-slate-900 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.4)] p-6 sm:p-8 flex flex-col overflow-hidden"
                        >
                            {/* Brillo interno del dashboard */}
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />

                            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                                </div>
                                <div className="flex gap-4">
                                    <Package size={18} className="text-slate-600" />
                                    <DollarSign size={18} className="text-slate-600" />
                                </div>
                            </div>

                            <div className="flex justify-between items-end mb-10">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Ventas del día</span>
                                    <h3 className="text-4xl font-[1000] text-white tracking-tighter">$8,420.00</h3>
                                </div>
                                <div className="text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-black italic">
                                    <TrendingUp size={14} /> +25% HOY
                                </div>
                            </div>

                            {/* GRÁFICO DE BARRAS NEDIMI */}
                            <div className="flex items-end justify-between gap-2 md:gap-4 flex-1 relative min-h-[140px] pt-4">
                                {chartData.map((data, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-3 z-10 h-full justify-end">
                                        <div className="w-full bg-white/5 rounded-t-xl relative flex items-end h-full overflow-hidden">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${data.height}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, delay: 0.5 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                                                className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-xl shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                                            />
                                        </div>
                                        <span className="text-[10px] font-black text-slate-600 uppercase tracking-tighter">{data.label}</span>
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