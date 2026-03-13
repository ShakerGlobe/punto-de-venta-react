import { motion } from "framer-motion";
import {
    ArrowRight, Camera, Scale, FileSpreadsheet,
    Database, BarChart3, Globe2, ShieldCheck, CheckCircle2,
    Zap, Cpu, LayoutDashboard
} from "lucide-react";

interface HeroProps {
    onOpenModal: () => void;
}

export const HeroHome = ({ onOpenModal }: HeroProps) => {
    const mascotImage = "/images/NEDIMI%20POS-04.png";

    const businessTypes = [
        "Abarrotes", "Farmacias", "Ferreterías", "Papelerías",
        "Boutiques", "Mini Supers", "Refaccionarias", "Cafeterías"
    ];

    const technicalStats = [
        { label: "Sincronización", value: "Cloud", icon: <Database />, color: "from-[#00C1A3]", border: "hover:border-[#00C1A3]" },
        { label: "Disponibilidad", value: "24/7", icon: <Globe2 />, color: "from-blue-500", border: "hover:border-blue-500" },
        { label: "Respaldo", value: "Diario", icon: <ShieldCheck />, color: "from-emerald-500", border: "hover:border-emerald-500" },
        { label: "Reportes", value: "Excel", icon: <FileSpreadsheet />, color: "from-purple-500", border: "hover:border-purple-500" },
    ];

    return (
        <div className="bg-[#020617] w-full overflow-x-hidden antialiased">
            {/* --- SECCIÓN HERO --- */}
            <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-24 px-6 text-white">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#00C1A3]/10 blur-[80px] md:blur-[150px] rounded-full" />
                    <div className="absolute bottom-[5%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[80px] md:blur-[150px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10 w-full">
                    <div className="flex flex-col gap-6 md:gap-10 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start">
                        {/* BADGE MEJORADO */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-4 py-2 bg-[#00C1A3]/10 border border-[#00C1A3]/20 rounded-full w-fit backdrop-blur-md"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-[#00C1A3] shadow-[0_0_10px_#00C1A3]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00C1A3]">
                                Next-Gen POS System
                            </span>
                        </motion.div>

                        {/* --- LOGO REDISEÑADO (EL CORAZÓN DEL CAMBIO) --- */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex flex-col relative"
                            >
                                <div className="flex items-center gap-3 mb-[-10px] md:mb-[-20px] lg:ml-2">
                                    <div className="h-[2px] w-12 bg-gradient-to-r from-[#00C1A3] to-transparent" />
                                    <span className="text-[#00C1A3] font-black text-lg md:text-2xl tracking-[0.5em] uppercase">SISTEMA</span>
                                </div>

                                <h1 className="relative text-[3.8rem] sm:text-[6.5rem] md:text-[9.5rem] lg:text-[11rem] font-[1000] tracking-[ -0.05em] leading-[0.8] uppercase italic select-none pr-8">
                                    <span className="relative z-10 text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                                        Nedimi
                                    </span>
                                    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#00C1A3] via-[#00efc9] to-[#007a67] drop-shadow-[0_0_30px_rgba(0,193,163,0.4)]">
                                        POS
                                        {/* Decoración de subrayado tecnológico */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            transition={{ delay: 0.5, duration: 1 }}
                                            className="absolute -bottom-2 left-0 h-[4px] md:h-[8px] bg-[#00C1A3] rounded-full shadow-[0_0_20px_#00C1A3]"
                                        />
                                    </span>
                                </h1>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-base md:text-2xl text-slate-400 max-w-xl leading-relaxed font-light lg:border-l-2 lg:border-[#00C1A3]/30 lg:pl-8"
                            >
                                Transforma tu punto de venta en una <span className="text-white font-semibold">máquina de eficiencia</span>. Gestión inteligente, escalable y diseñada para el comercio moderno.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-4 w-full justify-center lg:justify-start pt-6"
                        >
                            <button
                                onClick={onOpenModal}
                                className="group relative w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 md:py-8 bg-[#00C1A3] text-[#020617] font-extrabold rounded-2xl md:rounded-[2.2rem] transition-all hover:scale-105 active:scale-95 shadow-[0_25px_60px_-10px_rgba(0,193,163,0.4)] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                <span className="relative z-10 flex items-center gap-2 text-base md:text-xl tracking-tighter uppercase">
                                    ADQUIRIR SISTEMA <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </span>
                            </button>
                        </motion.div>
                    </div>

                    {/* LADO DE LA MASCOTA (CONSERVADO Y AJUSTADO) */}
                    <div className="relative flex justify-center items-center h-[320px] sm:h-[450px] md:h-[550px] lg:h-[650px] order-1 lg:order-2">
                        <div className="absolute w-[70%] h-[70%] bg-[#00C1A3]/15 blur-[60px] md:blur-[120px] rounded-full" />
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "backOut" }}
                            src={mascotImage}
                            alt="Nedimi Mascota"
                            className="relative z-10 w-full max-w-[240px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[550px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)] object-contain"
                        />

                        {/* TARJETAS FLOTANTES (CORRECCIÓN ESTÉTICA) */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-2 right-4 md:top-10 md:right-0 z-20 p-3 md:p-5 bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-3xl flex items-center gap-3 md:gap-4 shadow-2xl"
                        >
                            <div className="p-2 md:p-3 bg-[#00C1A3]/20 rounded-xl text-[#00C1A3]"><Camera size={20} /></div>
                            <div className="hidden sm:block text-left">
                                <p className="text-[8px] text-slate-500 font-black uppercase mb-1">Tecnología</p>
                                <p className="text-xs md:text-sm font-bold text-white">Escaneo AI</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute bottom-4 left-4 md:bottom-20 md:-left-4 z-20 p-3 md:p-5 bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-3xl flex items-center gap-3 md:gap-4 shadow-2xl"
                        >
                            <div className="p-2 md:p-3 bg-blue-500/20 rounded-xl text-blue-400"><Scale size={20} /></div>
                            <div className="hidden sm:block text-left">
                                <p className="text-[8px] text-slate-500 font-black uppercase mb-1">Precisión</p>
                                <p className="text-xs md:text-sm font-bold text-white">Venta a Granel</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN MARQUEE (SIN CAMBIOS ESTRUCTURALES) --- */}
            <div className="relative py-20 overflow-hidden bg-white/[0.01] border-y border-white/5">
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617] z-10" />
                <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] md:animate-[marquee_50s_linear_infinite]">
                    {[...businessTypes, ...businessTypes].map((type, i) => (
                        <motion.span
                            key={i}
                            whileHover={{ color: "#00C1A3", scale: 1.1 }}
                            className="mx-12 text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-slate-700/40 transition-colors cursor-default flex items-center gap-6"
                        >
                            {type} <Zap size={30} className="text-[#00C1A3]/20" />
                        </motion.span>
                    ))}
                </div>
            </div>

            {/* --- CARACTERÍSTICAS TÉCNICAS (SIN CAMBIOS ESTRUCTURALES) --- */}
            <section className="max-w-7xl mx-auto px-6 py-32 relative">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-5xl font-[1000] italic uppercase tracking-tighter text-white"
                    >
                        Infraestructura <span className="text-[#00C1A3]">Robusta</span>
                    </motion.h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {technicalStats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0.4, y: 30 }}
                            whileInView={{ opacity: 1, y: 0, borderColor: "rgba(255, 255, 255, 0.5)" }}
                            whileHover={{ y: -15, scale: 1.02, borderColor: "rgba(0, 193, 163, 0.8)" }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: false, amount: 0.7 }}
                            className={`group relative p-8 rounded-[2.5rem] bg-slate-900/50 border border-white/20 backdrop-blur-xl overflow-hidden transition-all duration-500 ${stat.border} hover:shadow-[0_20px_80px_-15px_rgba(0,0,0,0.7)]`}
                        >
                            <motion.div className={`absolute inset-0 bg-gradient-to-br ${stat.color} to-transparent md:hidden`} initial={{ opacity: 0 }} whileInView={{ opacity: 0.12 }} transition={{ duration: 0.6 }} />
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 hidden md:block`} />
                            <div className="absolute -right-4 -top-4 text-white opacity-[0.03] group-hover:opacity-10 transition-all duration-700 scale-[3] rotate-12">{stat.icon}</div>
                            <div className={`mb-8 p-4 bg-white/5 rounded-2xl w-fit border border-white/10 group-hover:bg-white group-hover:text-[#020617] transition-all duration-300 shadow-xl relative z-10`}>{stat.icon}</div>
                            <div className="relative z-10">
                                <h3 className="text-5xl font-[1000] text-white mb-2 tracking-tighter drop-shadow-md">{stat.value}</h3>
                                <p className={`text-[12px] font-black uppercase tracking-[0.3em] transition-colors duration-300 text-slate-400 group-hover:text-white`}>{stat.label}</p>
                            </div>
                            <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} to-transparent w-0 group-hover:w-full transition-all duration-500`} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- SECCIÓN DASHBOARD (SIN CAMBIOS ESTRUCTURALES) --- */}
            <section className="max-w-7xl mx-auto px-6 pb-40">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative rounded-[4rem] overflow-hidden bg-slate-900/40 border border-white/10 p-8 md:p-24 backdrop-blur-sm"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00C1A3]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                        <div className="text-center lg:text-left">
                            <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
                                <div className="h-[2px] w-8 bg-[#00C1A3]" />
                                <span className="text-xs font-black uppercase tracking-[0.4em] text-[#00C1A3]">Control Total</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-[1000] italic uppercase tracking-tighter text-white mb-8 leading-[0.85]">
                                Gestión de <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-blue-400">Alto Nivel.</span>
                            </h2>
                            <div className="grid gap-6 text-left">
                                {["Cortes de caja", "Alertas de Stock", "Histórico de Ventas", "Gestión de Precios"].map((item, i) => (
                                    <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center gap-4 bg-white/5 p-5 rounded-3xl border border-white/5 hover:bg-[#00C1A3]/10 hover:border-[#00C1A3]/20 transition-all cursor-default group">
                                        <div className="bg-[#00C1A3] p-1 rounded-full group-hover:scale-125 transition-transform"><CheckCircle2 size={14} className="text-[#020617]" /></div>
                                        <span className="text-sm font-bold uppercase tracking-widest text-slate-200">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <motion.div style={{ perspective: 1000 }} className="relative group">
                            <motion.div whileHover={{ rotateY: -10, rotateX: 5 }} transition={{ type: "spring", stiffness: 100 }} className="aspect-[4/3] rounded-[3rem] bg-[#020617] border-2 border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden relative">
                                <div className="absolute inset-0 p-10 flex flex-col gap-8">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-2">
                                            <div className="h-3 w-3 rounded-full bg-red-500/50" />
                                            <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                                            <div className="h-3 w-3 rounded-full bg-green-500/50" />
                                        </div>
                                        <LayoutDashboard className="text-slate-700" size={20} />
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="h-20 flex-1 bg-white/5 rounded-2xl border border-white/10 p-4">
                                            <div className="h-2 w-1/2 bg-white/10 rounded mb-2" />
                                            <div className="h-6 w-3/4 bg-[#00C1A3]/20 rounded" />
                                        </div>
                                        <div className="h-20 flex-1 bg-white/5 rounded-2xl border border-white/10 p-4">
                                            <div className="h-2 w-1/2 bg-white/10 rounded mb-2" />
                                            <div className="h-6 w-3/4 bg-blue-500/20 rounded" />
                                        </div>
                                    </div>
                                    <div className="flex-1 flex items-end gap-3 px-2">
                                        {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                                            <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ delay: i * 0.1, duration: 1 }} className="flex-1 bg-gradient-to-t from-[#00C1A3] to-[#00C1A3]/40 rounded-t-lg relative group/bar" />
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#00C1A3]/10 to-transparent pointer-events-none" />
                            </motion.div>
                            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -bottom-6 -right-6 p-6 bg-blue-600 rounded-3xl shadow-xl z-20 hidden md:block">
                                <BarChart3 className="text-white" size={32} />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
            `}} />
        </div>
    );
};