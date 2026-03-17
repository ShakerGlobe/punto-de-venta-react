import { motion, useMotionValue, useSpring, AnimatePresence, useTransform } from "framer-motion";
import {
    ArrowRight, Box, Users, TrendingUp,
    Zap, ShieldCheck, Globe, Rocket, DollarSign, Cloud, MousePointerClick
} from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface HeroProps {
    onOpenModal: () => void;
}

// --- DATA ESTRUCTURADA ---
const posBenefits = [
    { text: "FAST_CHECKOUT", icon: <Zap size={14} />, color: "text-emerald-400" },
    { text: "REALTIME_STOCK", icon: <Box size={14} />, color: "text-blue-400" },
    { text: "CLOUD_SYNC_24/7", icon: <Cloud size={14} />, color: "text-[#00C1A3]" },
    { text: "REVENUE_GROWTH", icon: <TrendingUp size={14} />, color: "text-amber-400" },
    { text: "SECURE_PAYMENTS", icon: <ShieldCheck size={14} />, color: "text-cyan-400" },
    { text: "USER_CONTROL", icon: <Users size={14} />, color: "text-purple-400" },
    { text: "EASY_SCALABILITY", icon: <Rocket size={14} />, color: "text-indigo-400" },
    { text: "GLOBAL_ACCESS", icon: <Globe size={14} />, color: "text-rose-400" },
    { text: "PROFIT_TRACKING", icon: <DollarSign size={14} />, color: "text-emerald-300" },
];

export const HeroHome = ({ onOpenModal }: HeroProps) => {
    const mascotImage = "https://nedimi.com/nedimipos/images/NEDIMI-POS-04.webp";
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHoveringMascot, setIsHoveringMascot] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    // --- DETECCIÓN DE MÓVIL PARA UX ---
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // --- LÓGICA DE PARALLAX ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
    const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });

    const rotateX = useTransform(springY, [-20, 20], [10, -10]);
    const rotateY = useTransform(springX, [-20, 20], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current || isMobile) return; 
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
                className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 pb-12 lg:py-0"
            >
                {/* FONDO TÉCNICO ANIMADO */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:80px_80px] opacity-50" />
                    {posBenefits.map((item, i) => (
                        <BenefitStream key={item.text} item={item} index={i} total={posBenefits.length} />
                    ))}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] bg-[#00C1A3]/10 blur-[120px] lg:blur-[180px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">

                    {/* INFO IZQUIERDA */}
                    <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left items-center lg:items-start order-2 lg:order-1 mt-4 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#00C1A3]/10 border border-[#00C1A3]/30 rounded-full backdrop-blur-md"
                        >
                            <Zap size={14} className="text-[#00C1A3]" />
                            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[#00C1A3]">
                                Ingeniería de Ventas
                            </span>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-6xl sm:text-7xl lg:text-[8rem] xl:text-[9.5rem] font-[1000] leading-[0.85] italic uppercase tracking-tighter text-white overflow-visible"
                            >
                                NEDIMI<br />
                                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-emerald-400 to-[#00C1A3] bg-[length:200%_auto] animate-gradient-x pb-2 lg:pb-4 drop-shadow-lg pr-10 -mr-10 overflow-visible">
                                    POS
                                </span>
                            </motion.h1>
                            <motion.p className="text-slate-300 text-base sm:text-lg md:text-2xl max-w-xl leading-relaxed font-light px-4 lg:px-0">
                                Gestión inteligente para tu comercio. Sincronización instantánea y rendimiento profesional de <span className="text-white italic font-medium underline decoration-[#00C1A3]/60 underline-offset-4">clase mundial</span>.
                            </motion.p>
                        </div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="w-full sm:w-auto pt-2 lg:pt-4">
                            <button
                                onClick={() => navigate('/register')}
                                className="group relative w-full sm:w-auto px-8 py-5 lg:px-12 lg:py-6 bg-[#00C1A3] text-[#020617] font-black rounded-2xl lg:rounded-3xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_15px_40px_rgba(0,193,163,0.3)] hover:shadow-[0_20px_50px_rgba(0,193,163,0.5)]"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3 text-base lg:text-lg italic uppercase tracking-widest">
                                    Adquirir Sistema <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </span>
                            </button>
                        </motion.div>
                    </div>

                    {/* MASCOTA DERECHA */}
                    <div className="relative flex justify-center items-center order-1 lg:order-2 h-[320px] sm:h-[400px] lg:h-[700px] w-full">
                        <motion.div
                            style={{
                                x: isMobile ? 0 : springX,
                                y: isMobile ? 0 : springY,
                                rotateX: isMobile ? 0 : rotateX,
                                rotateY: isMobile ? 0 : rotateY,
                                transformStyle: "preserve-3d"
                            }}
                            className="relative z-10 w-fit h-fit cursor-pointer group"
                            onMouseEnter={() => setIsHoveringMascot(true)}
                            onMouseLeave={() => setIsHoveringMascot(false)}
                            onClick={() => navigate('/register')}
                        >
                            <AnimatePresence>
                                {(isHoveringMascot || isMobile) && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20, x: "-50%", scale: 0.8 }}
                                        animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                                        exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.8 }}
                                        
                                        className={`absolute top-12 left-1/2 z-50 bg-white px-5 py-3 rounded-2xl shadow-[0_20px_60px_rgba(0,193,163,0.5)] whitespace-nowrap`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <MousePointerClick size={16} className="text-[#00C1A3] animate-bounce" />
                                            <span className="text-[#020617] font-[1000] italic uppercase text-[11px] lg:text-[12px] tracking-wider">
                                                ¡Pide tu prueba gratis!
                                            </span>
                                        </div>
                                        <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45`} />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="absolute inset-0 bg-[#00C1A3]/20 rounded-full blur-[80px] lg:blur-[120px] group-hover:bg-[#00C1A3]/30 transition-colors duration-700 scale-110 lg:scale-125" />

                            <motion.img
                                src={mascotImage}
                                alt="Nedimi POS Mascot"
                                animate={{ y: [0, -15, 0], rotateZ: [-1, 1, -1] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 w-[240px] sm:w-[320px] lg:w-[480px] h-auto drop-shadow-[0_20px_50px_rgba(0,193,163,0.3)] lg:drop-shadow-[0_40px_80px_rgba(0,193,163,0.4)] group-hover:scale-105 transition-transform duration-500 will-change-transform"
                            />

                            <InfoBubble icon={<Zap size={18} />} label="Response" value="Instant" pos="top-4 -right-4 lg:top-10 lg:-right-12" color="text-[#00C1A3]" delay={0.2} />
                            <InfoBubble icon={<ShieldCheck size={18} />} label="Protocol" value="Security+" pos="bottom-8 -left-8 lg:bottom-20 lg:-left-16" color="text-blue-400" delay={0.5} />
                        </motion.div>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
                .animate-gradient-x { animation: gradient-x 4s ease infinite; }
            `}</style>
        </div>
    );
};

const BenefitStream = ({ item, index, total }: { item: any, index: number, total: number }) => {
    const laneHeight = 15 + (index * (70 / (total - 1)));
    return (
        <motion.div
            initial={{ left: "-20%", opacity: 0 }}
            animate={{ left: "120%", opacity: [0, 0.3, 0.3, 0] }}
            transition={{ duration: 20 + index * 2, repeat: Infinity, delay: index * 1.5, ease: "linear" }}
            className={`absolute font-mono text-[9px] ${item.color} flex items-center gap-4 will-change-transform`}
            style={{ top: `${laneHeight}%` }}
        >
            <div className="p-2 rounded-xl bg-slate-900/60 backdrop-blur-md border border-white/5">{item.icon}</div>
            <span className="font-black tracking-[0.4em] uppercase opacity-50 hidden sm:inline-block">{item.text}</span>
            <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-current to-transparent opacity-20" />
        </motion.div>
    );
};

const InfoBubble = ({ icon, label, value, pos, color, delay }: any) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 + delay, type: "spring" }}
        className={`absolute ${pos} z-20 flex items-center gap-3 lg:gap-4 bg-slate-900/90 backdrop-blur-3xl border border-white/10 p-3 lg:p-4 rounded-xl lg:rounded-2xl hidden md:flex`}
    >
        <div className={`${color} p-2 lg:p-2.5 rounded-lg lg:rounded-xl bg-white/5`}>{icon}</div>
        <div className="flex flex-col">
            <span className="text-[8px] lg:text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">{label}</span>
            <span className={`text-sm lg:text-base font-[1000] italic uppercase ${color}`}>{value}</span>
        </div>
    </motion.div>
);