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
            className="relative min-h-[70vh] lg:min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-white px-6 py-10 group"
        >
            {/* 1. FONDO LIMPIO CON DESTELLOS AZULES */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Cuadrícula sutil Nedimi (Gris muy claro) */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:60px_60px] opacity-40" />
                
                {/* Contenedor con Parallax para las estelas de luz azul */}
                <motion.div
                    style={{ x: isMobile ? 0 : springX, y: isMobile ? 0 : springY }}
                    className="absolute inset-0 w-full h-full"
                >
                    {[...Array(8)].map((_, i) => (
                        <DataLine key={i} index={i} total={8} />
                    ))}
                </motion.div>

                {/* GRAN RESPLANDOR AZUL CENTRAL (Fuerte pero desvanecido) */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-600 rounded-full blur-[140px] md:blur-[180px] pointer-events-none"
                />
            </div>

            {/* 2. CONTENIDO CENTRAL */}
            <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center mt-8">

                {/* Badge Superior Informal */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-100 rounded-full mb-8 shadow-sm"
                >
                    <Sparkles size={14} className="text-blue-600 fill-blue-600" />
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-blue-600">
                        La paz mental que tu tienda buscaba
                    </span>
                </motion.div>

                {/* Título Principal Nedimi Style */}
                <div className="space-y-4 w-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[11vw] sm:text-6xl lg:text-[5.5rem] xl:text-[7rem] font-[1000] leading-[0.85] italic uppercase tracking-tighter text-slate-950"
                    >
                        MÁS QUE UN SISTEMA, <br />
                        <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-8">
                            ES EL CONTROL TOTAL
                        </span>
                    </motion.h1>
                </div>

                {/* Subtítulo más humano */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-10 text-slate-500 text-lg md:text-2xl max-w-2xl lg:max-w-3xl font-medium leading-relaxed px-4"
                >
                    Olvídate de las dudas al final del día. Con Nedimi POS <span className="text-slate-900 font-bold">sabes exactamente cuánto dinero tienes</span> y qué te falta surtir, sin vueltas ni complicaciones.
                </motion.p>

                {/* Línea de base Nedimi */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100px" }}
                    transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                    className="h-2 bg-blue-600 mt-12 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                />
            </div>
        </section>
    );
};

// --- Sub-componente: Estelas de luz azul ---
const DataLine = ({ index, total }: { index: number, total: number }) => {
    const laneHeight = 10 + (index * (80 / (total - 1)));
    const duration = 10 + (index % 3) * 4;
    const lineWidth = 150 + (index % 4) * 80;

    return (
        <motion.div
            initial={{ left: "-20%", opacity: 0 }}
            animate={{
                left: "110%",
                opacity: [0, 0.2, 0.2, 0]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: index * 2,
                ease: "linear"
            }}
            // Ahora las líneas son de un azul suave que cruza el fondo blanco
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent pointer-events-none"
            style={{
                top: `${laneHeight}%`,
                width: `${lineWidth}px`
            }}
        >
            {/* Pequeño punto de luz al frente de la línea */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
        </motion.div>
    );
};