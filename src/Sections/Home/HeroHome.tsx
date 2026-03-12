import { motion, useMotionValue, useSpring } from "framer-motion";
import { 
    ArrowRight, Box, Users, TrendingUp, 
    Zap, ShieldCheck, Globe, Rocket, DollarSign, Cloud, CheckCircle2 
} from "lucide-react";
import React, { useRef } from "react";

interface HeroProps {
    onOpenModal: () => void;
}

// --- Listado de BENEFICIOS ÚNICOS (9 elementos) ---
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
    const mascotImage = "/images/NEDIMI%20POS-04.png";
    const containerRef = useRef<HTMLDivElement>(null);

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
            {/* 1. FONDO DINÁMICO (ARREGLADO: SIN EMPALMES) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Rejilla sutil */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:80px_80px] opacity-50" />
                
                {/* Generación de Carriles Únicos */}
                {posBenefits.map((item, i) => (
                    <BenefitStream 
                        key={item.text} 
                        item={item} 
                        index={i} 
                        total={posBenefits.length}
                    />
                ))}

                {/* Resplandor Central */}
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
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#00C1A3]/10 border border-[#00C1A3]/30 rounded-2xl backdrop-blur-md shadow-[0_0_15px_rgba(0,193,163,0.1)]"
                    >
                        <Zap size={14} className="text-[#00C1A3]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00C1A3]">
                            Power Your Business
                        </span>
                    </motion.div>

                    <div className="space-y-4">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[13vw] sm:text-[9vw] lg:text-[10rem] font-[1000] leading-[0.8] italic uppercase tracking-tighter"
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
                            Intelligent commerce management. <span className="text-white font-medium">Global reach, instant sync,</span> and professional performance.
                        </motion.p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="w-full sm:w-auto pt-4"
                    >
                        <button 
                            onClick={onOpenModal}
                            className="group relative w-full sm:w-auto px-12 py-6 bg-[#00C1A3] text-[#020617] font-black rounded-3xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,193,163,0.3)]"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3 text-lg italic uppercase tracking-widest">
                                Get Free Access <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </span>
                        </button>
                    </motion.div>
                </div>

                {/* 3. COLUMNA DERECHA: MASCOTA E INDICADORES */}
                <div className="relative flex justify-center items-center order-1 lg:order-2 h-[400px] lg:h-[700px]">
                    <motion.div
                        style={{ x: springX, y: springY }}
                        className="relative z-10 w-full max-w-[500px]"
                    >
                        {/* Órbita decorativa */}
                        <div className="absolute inset-0 border border-white/5 rounded-full scale-125 opacity-40" />

                        <motion.img 
                            src={mascotImage}
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,193,163,0.3)]"
                        />

                        {/* Burbujas de Información Live */}
                        <InfoBubble icon={<Zap size={18} />} label="Response" value="Instant" pos="top-0 -right-4" color="text-[#00C1A3]" delay={0} />
                        <InfoBubble icon={<ShieldCheck size={18} />} label="Protocol" value="Security+" pos="bottom-12 -left-8" color="text-blue-400" delay={1} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// --- Sub-componente: Flujo de BENEFICIOS ÚNICOS (SIN CHOQUES) ---
const BenefitStream = ({ item, index, total }: { item: any, index: number, total: number }) => {
    // 1. Carril único: Divide la pantalla verticalmente entre el total de items
    const laneHeight = 10 + (index * (80 / (total - 1))); 
    
    // 2. Timing: Separación de 3 segundos entre cada inicio
    const customDelay = index * 3;
    
    // 3. Velocidad: Sincronizada para mantener formación
    const duration = 16; 

    return (
        <motion.div
            initial={{ left: "-25%", opacity: 0 }}
            animate={{ 
                left: "125%", 
                opacity: [0, 0.6, 0.6, 0] 
            }}
            transition={{ 
                duration: duration, 
                repeat: Infinity, 
                delay: customDelay, 
                ease: "linear" 
            }}
            className={`absolute font-mono text-[11px] ${item.color} whitespace-nowrap flex items-center gap-3 pointer-events-none`}
            style={{ top: `${laneHeight}%` }}
        >
            <div className={`p-2 rounded-lg bg-current/15 ${item.glow} shadow-xl backdrop-blur-sm border border-current/20`}>
                {item.icon}
            </div>
            <span className="font-[1000] tracking-[0.25em] drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] uppercase">
                {item.text}
            </span>
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