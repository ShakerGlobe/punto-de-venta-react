import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { 
    ArrowRight, Box, Users, TrendingUp, 
    Zap, ShieldCheck, Globe, Rocket, DollarSign, Cloud, MousePointerClick 
} from "lucide-react";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface HeroProps {
    onOpenModal: () => void;
}

// --- BENEFICIOS DE FONDO (En Inglés) ---
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

export const HeroHome = ({ onOpenModal }: HeroProps) => {
    const navigate = useNavigate();
    const mascotImage = "/images/NEDIMI%20POS-04.png";
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Estado para controlar el mensaje de invitación
    const [isHoveringMascot, setIsHoveringMascot] = useState(false);

    // --- Seguimiento de Mouse para Parallax ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 25;
        const y = (e.clientY - rect.top - rect.height / 2) / 25;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <section 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] px-6 py-20 lg:py-0"
        >
            {/* 1. FONDO DINÁMICO */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:80px_80px] opacity-50" />
                
                {posBenefits.map((item, i) => (
                    <BenefitStream key={item.text} item={item} index={i} total={posBenefits.length} />
                ))}

                <motion.div 
                    animate={{ opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C1A3]/10 blur-[150px] rounded-full"
                />
            </div>

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
                
                {/* 2. COLUMNA IZQUIERDA: CONTENIDO */}
                <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#00C1A3]/10 border border-[#00C1A3]/30 rounded-2xl backdrop-blur-md"
                    >
                        <Zap size={14} className="text-[#00C1A3]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00C1A3]">
                            Impulsa tu Negocio
                        </span>
                    </motion.div>

                    <div className="space-y-4">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[13vw] sm:text-[9vw] lg:text-[10rem] font-[1000] leading-[0.8] italic uppercase tracking-tighter text-white"
                        >
                            NEDIMI<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-emerald-400 drop-shadow-[0_0_20px_rgba(0,193,163,0.3)]">
                                POS
                            </span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-slate-400 text-lg md:text-2xl max-w-xl leading-relaxed font-light"
                        >
                            Gestión inteligente para tu comercio. <span className="text-white font-medium">Alcance global, sincronización instantánea</span> y rendimiento profesional.
                        </motion.p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="w-full sm:w-auto pt-4"
                    >
                        <button 
                            onClick={() => navigate('/register')}
                            className="group relative w-full sm:w-auto px-12 py-6 bg-[#00C1A3] text-[#020617] font-black rounded-3xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,193,163,0.3)]"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3 text-lg italic uppercase tracking-widest">
                                Probar ahora gratis <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </span>
                        </button>
                    </motion.div>
                </div>

                {/* 3. COLUMNA DERECHA: MASCOTA INTERACTIVA */}
                <div className="relative flex justify-center items-center order-1 lg:order-2 h-[400px] lg:h-[700px]">
                    <motion.div
                        style={{ x: springX, y: springY }}
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
                                    // Cambiado a top-[15%] para bajarlo mucho más hacia el robot
                                    className="absolute top-[15%] left-1/2 z-50 bg-white px-5 py-2 rounded-xl shadow-[0_10px_30px_rgba(0,193,163,0.5)] whitespace-nowrap"
                                >
                                    <div className="flex items-center gap-2">
                                        <MousePointerClick size={14} className="text-[#00C1A3]" />
                                        <span className="text-[#020617] font-[1000] italic uppercase text-[10px] tracking-widest">
                                            ¡Pide tu prueba gratis!
                                        </span>
                                    </div>
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45" />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="absolute inset-0 border border-white/5 rounded-full scale-150 opacity-20 pointer-events-none" />

                        <motion.img 
                            src={mascotImage}
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="w-[280px] sm:w-[350px] lg:w-[420px] h-auto drop-shadow-[0_30px_60px_rgba(0,193,163,0.3)] transition-all duration-500 group-hover:brightness-110 group-hover:scale-[1.02]"
                        />

                        <div className="pointer-events-none">
                            <InfoBubble icon={<Zap size={18} />} label="Response" value="Instant" pos="top-0 -right-8" color="text-[#00C1A3]" delay={0} />
                            <InfoBubble icon={<ShieldCheck size={18} />} label="Protocol" value="Security+" pos="bottom-12 -left-12" color="text-blue-400" delay={1} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// --- Sub-componente: Flujo de BENEFICIOS ---
const BenefitStream = ({ item, index, total }: { item: any, index: number, total: number }) => {
    const laneHeight = 10 + (index * (80 / (total - 1))); 
    const customDelay = index * 3;
    const duration = 16; 

    return (
        <motion.div
            initial={{ left: "-25%", opacity: 0 }}
            animate={{ left: "125%", opacity: [0, 0.6, 0.6, 0] }}
            transition={{ duration, repeat: Infinity, delay: customDelay, ease: "linear" }}
            className={`absolute font-mono text-[11px] ${item.color} whitespace-nowrap flex items-center gap-3 pointer-events-none`}
            style={{ top: `${laneHeight}%` }}
        >
            <div className={`p-2 rounded-lg bg-current/15 ${item.glow} shadow-xl backdrop-blur-sm border border-current/20`}>
                {item.icon}
            </div>
            <span className="font-[1000] tracking-[0.25em] drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] uppercase">{item.text}</span>
            <div className={`w-24 h-[2px] bg-gradient-to-r from-current to-transparent opacity-40 ml-2`} />
        </motion.div>
    );
};

// --- Sub-componente: Burbujas de Información Live ---
const InfoBubble = ({ icon, label, value, pos, color, delay }: any) => (
    <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 + delay, type: "spring", stiffness: 100 }}
        className={`absolute ${pos} z-20 flex items-center gap-4 bg-slate-900/90 backdrop-blur-3xl border border-white/10 p-4 rounded-[1.5rem] shadow-2xl group cursor-default`}
    >
        <div className={`${color} p-2 rounded-xl bg-white/5 group-hover:scale-110 transition-transform shadow-inner`}>
            {icon}
        </div>
        <div className="flex flex-col">
            <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-white/50 uppercase tracking-tighter leading-none">{label}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#00C1A3] animate-pulse" />
            </div>
            <span className={`text-base font-[1000] mt-1 italic uppercase ${color}`}>{value}</span>
        </div>
    </motion.div>
);