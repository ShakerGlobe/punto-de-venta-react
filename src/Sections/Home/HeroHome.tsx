import { motion, useMotionValue, useSpring, AnimatePresence, useTransform } from "framer-motion";
import {
    ArrowRight, Box, Users, TrendingUp,
    Zap, ShieldCheck, Globe, Rocket, DollarSign, Cloud, MousePointerClick,
    Package, RefreshCw, ArrowUpRight, MoreHorizontal
} from "lucide-react";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface HeroProps {
    onOpenModal: () => void;
}

// --- DATA ESTRUCTURADA ---
const posBenefits = [
    { text: "FAST_CHECKOUT", icon: <Zap size={14} />, color: "text-emerald-400", glow: "shadow-emerald-500/60" },
    { text: "REALTIME_STOCK", icon: <Box size={14} />, color: "text-blue-400", glow: "shadow-blue-500/60" },
    { text: "CLOUD_SYNC_24/7", icon: <Cloud size={14} />, color: "text-[#00C1A3]", glow: "shadow-[#00C1A3]/60" },
    { text: "REVENUE_GROWTH", icon: <TrendingUp size={14} />, color: "text-amber-400", glow: "shadow-amber-500/60" },
    { text: "SECURE_PAYMENTS", icon: <ShieldCheck size={14} />, color: "text-cyan-400", glow: "shadow-cyan-500/40" },
    { text: "USER_CONTROL", icon: <Users size={14} />, color: "text-purple-400", glow: "shadow-purple-500/40" },
    { text: "EASY_SCALABILITY", icon: <Rocket size={14} />, color: "text-indigo-400", glow: "shadow-indigo-500/40" },
    { text: "GLOBAL_ACCESS", icon: <Globe size={14} />, color: "text-rose-400", glow: "shadow-rose-500/40" },
    { text: "PROFIT_TRACKING", icon: <DollarSign size={14} />, color: "text-emerald-300", glow: "shadow-emerald-400/40" },
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
    const navigate = useNavigate();

    // --- LÓGICA DE PARALLAX ---
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
        <div className="bg-[#020617] w-full overflow-x-hidden">
            {/* --- SECCIÓN HERO --- */}
            <section
                ref={containerRef}
                onMouseMove={handleMouseMove}
                className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20 lg:py-0"
            >
                {/* FONDO TÉCNICO ANIMADO */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:80px_80px] opacity-50" />
                    {posBenefits.map((item, i) => (
                        <BenefitStream key={item.text} item={item} index={i} total={posBenefits.length} />
                    ))}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00C1A3]/10 blur-[180px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    {/* INFO IZQUIERDA */}
                    <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#00C1A3]/10 border border-[#00C1A3]/30 rounded-2xl backdrop-blur-md"
                        >
                            <Zap size={14} className="text-[#00C1A3]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00C1A3]">Ingeniería de Ventas</span>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-[14vw] sm:text-[9vw] lg:text-[9.5rem] font-[1000] leading-[0.8] italic uppercase tracking-tighter text-white"
                            >
                                NEDIMI<br />
                                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-emerald-400 to-[#00C1A3] bg-[length:200%_auto] animate-gradient-x pb-4">POS</span>
                            </motion.h1>
                            <motion.p className="text-slate-400 text-lg md:text-2xl max-w-xl leading-relaxed font-light">
                                Gestión inteligente para tu comercio. Sincronización instantánea y rendimiento profesional de <span className="text-white italic font-medium underline decoration-[#00C1A3]/40">clase mundial</span>.
                            </motion.p>
                        </div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="w-full sm:w-auto pt-4">
                            {/* CAMBIO: Este botón ahora redirige a /register */}
                            <button 
                                onClick={() => navigate('/register')} 
                                className="group relative w-full sm:w-auto px-12 py-6 bg-[#00C1A3] text-[#020617] font-black rounded-3xl overflow-hidden transition-all hover:scale-105 shadow-[0_20px_50px_rgba(0,193,163,0.3)]"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3 text-lg italic uppercase tracking-widest">
                                    Adquirir Sistema <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </span>
                            </button>
                        </motion.div>
                    </div>

                    {/* MASCOTA DERECHA */}
                    <div className="relative flex justify-center items-center order-1 lg:order-2 h-[450px] lg:h-[700px]">
                        <motion.div 
                            style={{ x: springX, y: springY, rotateX, rotateY, transformStyle: "preserve-3d" }} 
                            className="relative z-10 w-fit h-fit cursor-pointer group" 
                            onMouseEnter={() => setIsHoveringMascot(true)} 
                            onMouseLeave={() => setIsHoveringMascot(false)} 
                            onClick={() => navigate('/register')}
                        >
                            <AnimatePresence>
                                {isHoveringMascot && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20, x: "-50%", scale: 0.8 }} 
                                        animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }} 
                                        exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.8 }} 
                                        className="absolute -top-12 left-1/2 z-50 bg-white px-6 py-3 rounded-2xl shadow-[0_20px_60px_rgba(0,193,163,0.5)] whitespace-nowrap"
                                    >
                                        <div className="flex items-center gap-3">
                                            <MousePointerClick size={16} className="text-[#00C1A3] animate-bounce" />
                                            <span className="text-[#020617] font-[1000] italic uppercase text-[12px] tracking-wider">¡Pide tu prueba gratis!</span>
                                        </div>
                                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="absolute inset-0 bg-[#00C1A3]/20 rounded-full blur-[120px] group-hover:bg-[#00C1A3]/30 transition-colors duration-700 scale-125" />
                            <motion.img 
                                src={mascotImage} 
                                animate={{ y: [0, -25, 0], rotateZ: [-1, 1, -1] }} 
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
                                className="w-[300px] sm:w-[380px] lg:w-[480px] h-auto drop-shadow-[0_40px_80px_rgba(0,193,163,0.4)] group-hover:scale-105 transition-transform" 
                            />
                            
                            <InfoBubble icon={<Zap size={18} />} label="Response" value="Instant" pos="top-10 -right-12" color="text-[#00C1A3]" delay={0.2} />
                            <InfoBubble icon={<ShieldCheck size={18} />} label="Protocol" value="Security+" pos="bottom-20 -left-16" color="text-blue-400" delay={0.5} />
                        </motion.div>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes shimmer { 100% { transform: translateX(100%); } }
                .animate-shimmer { animation: shimmer 2s infinite; }
                @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
                .animate-gradient-x { animation: gradient-x 4s ease infinite; }
            `}</style>
        </div>
    );
};

// --- COMPONENTES SECUNDARIOS ---
const BenefitStream = ({ item, index, total }: { item: any, index: number, total: number }) => {
    const laneHeight = 15 + (index * (70 / (total - 1)));
    return (
        <motion.div
            initial={{ left: "-20%", opacity: 0 }}
            animate={{ left: "120%", opacity: [0, 0.4, 0.4, 0] }}
            transition={{ duration: 15 + index, repeat: Infinity, delay: index * 1.5, ease: "linear" }}
            className={`absolute font-mono text-[9px] ${item.color} flex items-center gap-4`}
            style={{ top: `${laneHeight}%` }}
        >
            <div className="p-2 rounded-xl bg-slate-900/60 backdrop-blur-md border border-white/5">{item.icon}</div>
            <span className="font-black tracking-[0.4em] uppercase opacity-50">{item.text}</span>
            <div className="w-12 h-[1px] bg-gradient-to-r from-current to-transparent opacity-20" />
        </motion.div>
    );
};

const InfoBubble = ({ icon, label, value, pos, color, delay }: any) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 + delay, type: "spring" }}
        className={`absolute ${pos} z-20 flex items-center gap-4 bg-slate-900/90 backdrop-blur-3xl border border-white/10 p-4 rounded-2xl hidden sm:flex`}
    >
        <div className={`${color} p-2.5 rounded-xl bg-white/5`}>{icon}</div>
        <div className="flex flex-col">
            <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">{label}</span>
            <span className={`text-base font-[1000] italic uppercase ${color}`}>{value}</span>
        </div>
    </motion.div>
);