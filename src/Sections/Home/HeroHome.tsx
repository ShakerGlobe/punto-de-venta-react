import { motion, useMotionValue, useSpring, AnimatePresence, useTransform } from "framer-motion";
import {
    ArrowRight, Box, Users, TrendingUp,
    Zap, ShieldCheck, Globe, Rocket, DollarSign, Cloud, MousePointerClick,
    Package, RefreshCw, ArrowUpRight, MoreHorizontal
} from "lucide-react";
import React, { useRef, useState } from "react";

interface HeroProps {
    onOpenModal: () => void;
}

const posBenefits = [
    { text: "FAST_CHECKOUT", icon: <Zap size={14} />, color: "text-emerald-400", glow: "shadow-emerald-500/60" },
    { text: "REALTIME_STOCK", icon: <Box size={14} />, color: "text-blue-400", glow: "shadow-blue-500/60" },
    { text: "CLOUD_SYNC_24/7", icon: <Cloud size={14} />, color: "text-[#00C1A3]", glow: "shadow-[#00C1A3]/60" },
    { text: "REVENUE_GROWTH", icon: <TrendingUp size={14} />, color: "text-amber-400", glow: "shadow-amber-500/60" },
    { text: "SECURE_PAYMENTS", icon: <ShieldCheck size={14} />, color: "text-cyan-400", glow: "shadow-cyan-500/60" },
    { text: "USER_CONTROL", icon: <Users size={14} />, color: "text-purple-400", glow: "shadow-purple-500/60" },
    { text: "EASY_SCALABILITY", icon: <Rocket size={14} />, color: "text-indigo-400", glow: "shadow-indigo-500/60" },
    { text: "GLOBAL_ACCESS", icon: <Globe size={14} />, color: "text-rose-400", glow: "shadow-rose-500/60" },
    { text: "PROFIT_TRACKING", icon: <DollarSign size={14} />, color: "text-emerald-300", glow: "shadow-emerald-400/60" },
];

const tableData = [
    { id: "#8801", product: "Inventario Central", stock: 12, status: "Activo", price: "$2,499", growth: "+12%" },
    { id: "#8802", product: "Punto de Venta", stock: 0, status: "Sincronizando", price: "$599", growth: "Live" },
    { id: "#8803", product: "Reportes Mensuales", stock: 45, status: "Activo", price: "$999", growth: "+25%" },
    { id: "#8804", product: "Base de Datos", stock: 8, status: "Protegido", price: "$79", growth: "+5%" },
];

export const HeroHome = ({ onOpenModal }: HeroProps) => {
    const mascotImage = "/images/NEDIMI%20POS-04.png";
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHoveringMascot, setIsHoveringMascot] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
    const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });

    const rotateX = useTransform(springY, [-20, 20], [10, -10]);
    const rotateY = useTransform(springX, [-20, 20], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 30;
        const y = (e.clientY - rect.top - rect.height / 2) / 30;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <div className="bg-[#020617]">
            {/* SECCIÓN HERO (Tu diseño original mejorado) */}
            <section
                ref={containerRef}
                onMouseMove={handleMouseMove}
                className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20 lg:py-0"
            >
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:80px_80px] opacity-50" />
                    {posBenefits.map((item, i) => (
                        <BenefitStream key={item.text} item={item} index={i} total={posBenefits.length} />
                    ))}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.12, 0.05] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00C1A3]/20 blur-[180px] rounded-full"
                    />
                </div>

                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#00C1A3]/10 border border-[#00C1A3]/30 rounded-2xl backdrop-blur-md"
                        >
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                                <Zap size={14} className="text-[#00C1A3]" />
                            </motion.div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00C1A3]">Impulsa tu Negocio</span>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-[14vw] sm:text-[9vw] lg:text-[9.5rem] font-[1000] leading-[0.8] italic uppercase tracking-tighter text-white pr-4"
                            >
                                NEDIMI<br />
                                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-emerald-400 to-[#00C1A3] bg-[length:200%_auto] animate-gradient-x pb-4 pr-10">POS</span>
                            </motion.h1>
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-slate-400 text-lg md:text-2xl max-w-xl leading-relaxed font-light">
                                Gestión inteligente para tu comercio. <span className="text-white font-medium italic underline decoration-[#00C1A3]/50">Alcance global</span>, sincronización instantánea y rendimiento profesional.
                            </motion.p>
                        </div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="w-full sm:w-auto pt-4">
                            <button onClick={onOpenModal} className="group relative w-full sm:w-auto px-12 py-6 bg-[#00C1A3] text-[#020617] font-black rounded-3xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,193,163,0.4)]">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                <span className="relative z-10 flex items-center justify-center gap-3 text-lg italic uppercase tracking-widest">
                                    Adquirir Sistema <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </span>
                            </button>
                        </motion.div>
                    </div>

                    <div className="relative flex justify-center items-center order-1 lg:order-2 h-[450px] lg:h-[700px]">
                        <motion.div style={{ x: springX, y: springY, rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative z-10 w-fit h-fit cursor-pointer group" onMouseEnter={() => setIsHoveringMascot(true)} onMouseLeave={() => setIsHoveringMascot(false)} onClick={onOpenModal}>
                            <AnimatePresence>
                                {isHoveringMascot && (
                                    <motion.div initial={{ opacity: 0, y: 20, x: "-50%", scale: 0.8 }} animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }} exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.8 }} className="absolute -top-10 left-1/2 z-50 bg-white px-5 py-2 rounded-xl shadow-[0_10px_40px_rgba(0,193,163,0.6)] whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <MousePointerClick size={14} className="text-[#00C1A3] animate-bounce" />
                                            <span className="text-[#020617] font-[1000] italic uppercase text-[10px] tracking-widest">¡Pide tu prueba gratis!</span>
                                        </div>
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-[#00C1A3]/20 rounded-full blur-[100px] group-hover:bg-[#00C1A3]/40 transition-colors duration-700 scale-110" />
                            <motion.img src={mascotImage} animate={{ y: [0, -20, 0], rotateZ: [-1, 1, -1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="w-[300px] sm:w-[380px] lg:w-[480px] h-auto drop-shadow-[0_35px_60px_rgba(0,193,163,0.4)] transition-all duration-500 group-hover:brightness-110 group-hover:scale-[1.05]" />
                            <div className="pointer-events-none">
                                <InfoBubble icon={<Zap size={18} />} label="Response" value="Instant" pos="top-10 -right-12" color="text-[#00C1A3]" delay={0.2} />
                                <InfoBubble icon={<ShieldCheck size={18} />} label="Protocol" value="Security+" pos="bottom-20 -left-16" color="text-blue-400" delay={0.5} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* NUEVA SECCIÓN: GESTIÓN DE ALTO NIVEL (TABLA DINÁMICA) */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                            <TrendingUp size={14} /> Gestión de Datos
                        </div>
                        <h2 className="text-4xl md:text-6xl font-[1000] text-white italic uppercase leading-[0.9]">Control de <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-emerald-400">Alto Nivel</span></h2>
                        <p className="text-slate-400 text-lg max-w-md font-light">Monitorea cada movimiento de tu negocio con una interfaz <span className="text-white">ultra-rápida</span> y visualmente intuitiva.</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                                <span className="ml-4 text-[10px] font-mono text-emerald-400/70 uppercase tracking-widest flex items-center gap-2">
                                    <RefreshCw size={12} className="animate-spin" style={{ animationDuration: '3s' }} /> live_server_connected
                                </span>
                            </div>
                            <MoreHorizontal className="text-slate-500 cursor-pointer hover:text-white" />
                        </div>

                        <div className="overflow-x-auto px-4 pb-4">
                            <table className="w-full text-left border-separate border-spacing-y-2">
                                <thead>
                                    <tr className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                                        <th className="px-4 py-3 font-black">Ref</th>
                                        <th className="px-4 py-3 font-black">Módulo</th>
                                        <th className="px-4 py-3 font-black">Status</th>
                                        <th className="px-4 py-3 font-black text-right">Rendimiento</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((row, index) => (
                                        <motion.tr
                                            key={row.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.15 }}
                                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                                            className="group bg-white/2 cursor-default transition-all rounded-xl"
                                        >
                                            <td className="px-4 py-4 font-mono text-xs text-slate-500 group-hover:text-[#00C1A3]">{row.id}</td>
                                            <td className="px-4 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-lg bg-[#00C1A3]/10 text-[#00C1A3] group-hover:bg-[#00C1A3] group-hover:text-black transition-colors">
                                                        <Package size={14} />
                                                    </div>
                                                    <span className="text-sm font-bold text-slate-200">{row.product}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className="flex items-center gap-2">
                                                    <span className="relative flex h-2 w-2">
                                                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${row.stock > 0 ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                                                        <span className={`relative inline-flex rounded-full h-2 w-2 ${row.stock > 0 ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                                                    </span>
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{row.status}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-right">
                                                <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-md text-[10px] font-black">
                                                    {row.growth} <ArrowUpRight size={12} />
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            <style>{`
                @keyframes shimmer { 100% { transform: translateX(100%); } }
                .animate-shimmer { animation: shimmer 1.5s infinite; }
                @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
                .animate-gradient-x { animation: gradient-x 3s ease infinite; }
            `}</style>
        </div>
    );
};

// Componentes secundarios (BenefitStream e InfoBubble se mantienen igual)
const BenefitStream = ({ item, index, total }: { item: any, index: number, total: number }) => {
    const laneHeight = 15 + (index * (75 / (total - 1)));
    const duration = 20 + index;
    return (
        <motion.div
            initial={{ left: "-20%", opacity: 0 }}
            animate={{ left: "120%", opacity: [0, 0.4, 0.4, 0] }}
            transition={{ duration, repeat: Infinity, delay: index * 2, ease: "linear" }}
            className={`absolute font-mono text-[10px] ${item.color} whitespace-nowrap flex items-center gap-3 pointer-events-none`}
            style={{ top: `${laneHeight}%` }}
        >
            <div className={`p-2 rounded-lg bg-slate-900/40 backdrop-blur-md border border-current/30 shadow-lg`}>{item.icon}</div>
            <span className="font-black tracking-[0.3em] uppercase opacity-70">{item.text}</span>
            <div className="w-16 h-[1px] bg-gradient-to-r from-current to-transparent opacity-20" />
        </motion.div>
    );
};

const InfoBubble = ({ icon, label, value, pos, color, delay }: any) => (
    <motion.div
        initial={{ scale: 0, opacity: 0, x: 20 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ delay: 1 + delay, type: "spring", stiffness: 120 }}
        className={`absolute ${pos} z-20 flex items-center gap-4 bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-4 rounded-2xl shadow-2xl group cursor-default hidden sm:flex`}
    >
        <div className={`${color} p-2.5 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>{icon}</div>
        <div className="flex flex-col">
            <div className="flex items-center gap-2">
                <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em] leading-none">{label}</span>
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C1A3] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C1A3]"></span>
                </span>
            </div>
            <span className={`text-base font-[1000] mt-1 italic uppercase tracking-wider ${color}`}>{value}</span>
        </div>
    </motion.div>
);