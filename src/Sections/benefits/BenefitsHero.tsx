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
            {/* 1. FONDO LIMPIO CON DESTELLOS AZULES */}
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

                {/* GRAN RESPLANDOR AZUL (Ajustado para no quemar el contenido) */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[900px] h-[500px] md:h-[900px] bg-blue-600 rounded-full blur-[140px] md:blur-[180px] pointer-events-none"
                />
            </div>

            {/* 2. CONTENIDO EN ESTRUCTURA DE DOS COLUMNAS */}
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                    
                    {/* COLUMNA TEXTO (Congruente con Home) */}
                    <div className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start">
                        
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-100 rounded-full mb-8 shadow-sm"
                        >
                            <Sparkles size={14} className="text-blue-600 fill-blue-600" />
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-blue-600">
                                La paz mental que buscabas
                            </span>
                        </motion.div>

                        <div className="space-y-4 w-full">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                // Tamaño bajado para ser igual al Hero del Home
                                className="text-5xl md:text-6xl xl:text-7xl font-[1000] leading-[1.1] italic uppercase tracking-tighter text-slate-950"
                            >
                                MÁS QUE UN SISTEMA, <br />
                                <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-4">
                                    ES CONTROL TOTAL
                                </span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            // Tamaño bajado a text-lg/xl como en el Home
                            className="mt-8 text-slate-500 text-lg md:text-xl max-w-2xl font-medium leading-relaxed"
                        >
                            Olvídate de las dudas al final del día. Con Nedimi POS <span className="text-slate-900 font-bold">sabes cuánto dinero tienes</span> y qué te falta surtir, sin vueltas ni complicaciones.
                        </motion.p>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80px" }}
                            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                            className="h-2 bg-blue-600 mt-10 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                        />
                    </div>

                    {/* COLUMNA PARA LA IMAGEN (Espacio reservado) */}
                    <div className="w-full lg:w-2/5 flex justify-center items-center relative min-h-[300px] md:min-h-[400px]">
                        <motion.div 
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full max-w-[400px] aspect-square rounded-[3rem] bg-slate-50 border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden"
                        >
                            {/* Placeholder o tu imagen final */}
                            <div className="text-slate-200 font-black uppercase italic text-center p-8">
                                <img 
                                src="/images/nedimi-pos-02.png" 
                                alt="Terminal Punto de Venta Moderna" 
                                
                            />
                            </div>
                            
                            {/* Brillo interno decorativo */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent pointer-events-none" />
                        </motion.div>

                        {/* Sombra de suelo para el efecto de flotado */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-slate-900/5 blur-xl rounded-[100%] -z-10" />
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

// --- Sub-componente: Estelas de luz azul ---
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
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-transparent pointer-events-none"
            style={{
                top: `${laneHeight}%`,
                width: `${lineWidth}px`
            }}
        >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]" />
        </motion.div>
    );
};