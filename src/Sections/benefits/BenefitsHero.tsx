import { motion, useMotionValue, useSpring } from "framer-motion";
import { Sparkles } from "lucide-react";
import React, { useRef } from "react";

export const BenefitsHero = () => {
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
            {/* 1. FONDO DINÁMICO: Únicamente Líneas de Luz Verde */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Cuadrícula sutil de referencia */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:80px_80px] opacity-40" />
                
                {/* Generación de Líneas Verdes (12 líneas distribuidas) */}
                {[...Array(12)].map((_, i) => (
                    <DataLine key={i} index={i} total={12} />
                ))}

                {/* Resplandor Central de Poder */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00C1A3]/10 blur-[120px] rounded-full" 
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
                    <Sparkles size={14} className="text-[#00C1A3] animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300">
                        Ventajas Competitivas
                    </span>
                </motion.div>

                {/* Título Principal */}
                <div className="space-y-2">
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl sm:text-7xl lg:text-8xl font-[1000] leading-[0.85] italic uppercase tracking-tighter text-white"
                    >
                        MÁS QUE UN <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-[#00E5FF] drop-shadow-[0_0_30px_rgba(0,193,163,0.3)]">
                            PUNTO DE VENTA
                        </span>
                    </motion.h1>
                </div>

                {/* Subtítulo */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 text-slate-400 text-lg md:text-2xl max-w-3xl font-light leading-snug px-4"
                >
                    Diseñamos <span className="text-white">tecnología de precisión</span> para que te enfoques en lo que importa: hacer crecer tu patrimonio.
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

// --- Sub-componente: Líneas de luz que cruzan el fondo ---
const DataLine = ({ index, total }: { index: number, total: number }) => {
    // Calculamos la posición vertical para cubrir toda la sección
    const laneHeight = 5 + (index * (90 / (total - 1))); 
    
    // Variamos la velocidad y el largo de la línea para que no sea monótono
    const duration = 6 + (index % 3) * 2; 
    const lineWidth = 100 + (index % 4) * 50; 

    return (
        <motion.div
            initial={{ left: "-20%", opacity: 0 }}
            animate={{ 
                left: "110%", 
                opacity: [0, 0.4, 0.4, 0] 
            }}
            transition={{ 
                duration: duration, 
                repeat: Infinity, 
                delay: index * 1.2, 
                ease: "linear" 
            }}
            // La línea es un degradado sutil con un "cabezal" más brillante
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#00C1A3] to-transparent pointer-events-none"
            style={{ 
                top: `${laneHeight}%`,
                width: `${lineWidth}px`
            }}
        >
            {/* Pequeño brillo en el frente de la línea */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#00C1A3] rounded-full shadow-[0_0_8px_#00C1A3]" />
        </motion.div>
    );
};