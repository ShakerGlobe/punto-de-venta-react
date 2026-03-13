import { motion, useMotionValue, useSpring } from "framer-motion";
import { Cpu } from "lucide-react";
import React, { useRef } from "react";

export const TechnologyHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // --- Lógica de Parallax e Interacción ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 25 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 25 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left - rect.width / 2) / 15);
        mouseY.set((e.clientY - rect.top - rect.height / 2) / 15);
    };

    return (
        <section 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-[70vh] lg:min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-[#020617] px-6 py-12 md:py-16 group"
        >
            {/* 1. FONDO DINÁMICO: Líneas de Luz Verde (Escaneo de Hardware) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Rejilla técnica base */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:80px_80px] opacity-40" />
                
                {/* Generación de Líneas Verdes */}
                {[...Array(12)].map((_, i) => (
                    <TechLine key={i} index={i} total={12} />
                ))}

                {/* Resplandor Central (Azul Tech) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <motion.div 
                        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.15, 0.05] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[130px] rounded-full" 
                    />
                </div>
            </div>

            {/* 2. CONTENIDO CENTRAL */}
            <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
                
                {/* Badge Superior */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2.5 px-5 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8 shadow-2xl backdrop-blur-md"
                >
                    <Cpu size={14} className="text-[#00C1A3] animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300">
                        Vanguardia Tecnológica
                    </span>
                </motion.div>

                {/* Título Principal */}
                <div className="space-y-2">
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl sm:text-7xl lg:text-8xl font-[1000] leading-[0.85] italic uppercase tracking-tighter text-white"
                    >
                        INGENIERÍA DE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-emerald-400 to-[#00E5FF] drop-shadow-[0_0_30px_rgba(0,193,163,0.3)]">
                            ALTO RENDIMIENTO
                        </span>
                    </motion.h1>
                </div>

                {/* Subtítulo */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 text-slate-400 text-lg md:text-2xl max-w-4xl font-light leading-snug px-4"
                >
                    Fusionamos hardware robusto con sistemas <span className="text-white font-normal underline decoration-[#00C1A3]/50 decoration-2 underline-offset-4">Cloud Native</span> para ofrecerte una estabilidad inquebrantable en cada proceso.
                </motion.p>

                {/* Línea de base decorativa */}
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "80px" }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="h-1 bg-[#00C1A3] mt-12 rounded-full shadow-[0_0_15px_#00C1A3]"
                />
            </div>
        </section>
    );
};

// --- Sub-componente: Líneas de luz ---
const TechLine = ({ index, total }: { index: number, total: number }) => {
    const laneHeight = 5 + (index * (90 / (total - 1))); 
    const duration = 7 + (index % 4) * 1.5; 
    const lineWidth = 120 + (index % 3) * 60; 

    return (
        <motion.div
            initial={{ left: "-20%", opacity: 0 }}
            animate={{ 
                left: "115%", 
                opacity: [0, 0.4, 0.4, 0] 
            }}
            transition={{ 
                duration: duration, 
                repeat: Infinity, 
                delay: index * 1.5, 
                ease: "linear" 
            }}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#00C1A3] to-transparent pointer-events-none"
            style={{ 
                top: `${laneHeight}%`,
                width: `${lineWidth}px`
            }}
        >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#00C1A3] rounded-full shadow-[0_0_10px_#00C1A3]" />
        </motion.div>
    );
};