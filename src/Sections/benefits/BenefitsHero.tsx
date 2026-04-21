import { motion, useMotionValue, useSpring } from "framer-motion";
import { Sparkles } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

export const BenefitsHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    // --- DETECCIÓN DE MÓVIL ---
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // --- Lógica de Parallax sutil ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current || isMobile) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left - rect.width / 2) / -25); 
        mouseY.set((e.clientY - rect.top - rect.height / 2) / -25);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white px-6 py-20 group"
        >
            {/* 1. FONDO LIMPIO CON DESTELLOS VERDES */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:60px_60px] opacity-40" />
                
                <motion.div
                    style={{ x: isMobile ? 0 : springX, y: isMobile ? 0 : springY }}
                    className="absolute inset-0 w-full h-full"
                >
                    {[...Array(6)].map((_, i) => (
                        <DataLine key={i} index={i} total={6} />
                    ))}
                </motion.div>

                {/* RESPLANDOR VERDE NEDIMI */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[900px] h-[500px] md:h-[900px] bg-[#00C1A3] rounded-full blur-[140px] md:blur-[180px] pointer-events-none"
                />
            </div>

            {/* 2. CONTENIDO EN ESTRUCTURA DE ESPEJO INVERSO */}
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12 lg:gap-16">
                    
                    {/* COLUMNA DERECHA: TEXTO */}
                    <div className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start">
                        
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-50 border border-emerald-100 rounded-full mb-8 shadow-sm"
                        >
                            <Sparkles size={14} className="text-[#00C1A3] fill-[#00C1A3]" />
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#00C1A3]">
                                La paz mental que buscabas
                            </span>
                        </motion.div>

                        <div className="space-y-4 w-full">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.1] italic uppercase tracking-tighter text-slate-950"
                            >
                                MÁS QUE UN SISTEMA, <br />
                                <span className="text-[#00C1A3] underline decoration-emerald-100 decoration-8 underline-offset-4">
                                    ES CONTROL TOTAL
                                </span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-8 text-slate-500 text-lg md:text-xl max-w-2xl font-medium leading-relaxed"
                        >
                            Olvídate de las dudas al final del día. Con Nedimi POS <span className="text-slate-900 font-bold">sabes exactamente cuánto dinero tienes</span> y qué te falta surtir, sin vueltas ni complicaciones.
                        </motion.p>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80px" }}
                            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                            className="h-2 bg-[#00C1A3] mt-10 rounded-full shadow-[0_0_20px_rgba(0,193,163,0.4)]"
                        />
                    </div>

                    {/* COLUMNA IZQUIERDA: IMAGEN (Flotante) */}
                    <div className="w-full lg:w-2/5 flex justify-center items-center relative min-h-[300px] md:min-h-[400px]">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-[450px] animate-float"
                        >
                            <div className="relative aspect-square rounded-[3rem] bg-slate-50 border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden">
                                <img 
                                    src="/images/nedimi-pos-01.png" 
                                    alt="Control de Inventario Nedimi" 
                                    className="w-full h-full object-contain p-4"
                                />
                                
                                {/* Brillo interno decorativo en verde */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#00C1A3]/10 to-transparent pointer-events-none" />
                            </div>

                            {/* Sombra de suelo para el efecto de flotado */}
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-slate-900/5 blur-2xl rounded-[100%] -z-10" />
                        </motion.div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

// --- Sub-componente: Estelas de luz Verde Nedimi ---
const DataLine = ({ index, total }: { index: number, total: number }) => {
    const laneHeight = 15 + (index * (70 / (total - 1)));
    const duration = 12 + (index % 3) * 4;
    const lineWidth = 120 + (index % 4) * 60;

    return (
        <motion.div
            initial={{ left: "-20%", opacity: 0 }}
            animate={{
                left: "110%",
                opacity: [0, 0.15, 0.15, 0]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: index * 2.5,
                ease: "linear"
            }}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-emerald-300 to-transparent pointer-events-none"
            style={{
                top: `${laneHeight}%`,
                width: `${lineWidth}px`
            }}
        >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#00C1A3] rounded-full shadow-[0_0_10px_#00C1A3]" />
        </motion.div>
    );
};