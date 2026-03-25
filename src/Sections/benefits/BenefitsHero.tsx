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

    // --- Lógica de Parallax e Interacción ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    // Suavizamos la animación del parallax
    const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current || isMobile) return; // Desactivar en móvil
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left - rect.width / 2) / -20); // Movimiento inverso sutil
        mouseY.set((e.clientY - rect.top - rect.height / 2) / -20);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-[70vh] lg:min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-[#020617] px-6 py-10 md:py-10 group"
        >
            {/* 1. FONDO DINÁMICO */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Cuadrícula sutil de referencia + Ruido (Estilo Nedimi) */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:60px_60px] md:[background-size:80px_80px] opacity-40 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />
                <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Contenedor con Parallax para las líneas */}
                <motion.div
                    style={{ x: isMobile ? 0 : springX, y: isMobile ? 0 : springY }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Generación de Líneas Verdes */}
                    {[...Array(12)].map((_, i) => (
                        <DataLine key={i} index={i} total={12} />
                    ))}
                </motion.div>

                {/* Resplandor Central de Poder animado */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-tr from-[#00C1A3]/20 to-cyan-500/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"
                />
            </div>

            {/* 2. CONTENIDO CENTRAL */}
            <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center mt-8">

                {/* Badge Superior */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 bg-[#00C1A3]/10 border border-[#00C1A3]/20 rounded-full mb-6 md:mb-8 shadow-[0_0_20px_rgba(0,193,163,0.15)] backdrop-blur-md"
                >
                    <Sparkles size={14} className="text-[#00C1A3] animate-pulse" />
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#00C1A3]">
                        TODO LO QUE NECESITAS PARA TU TIENDA
                    </span>
                </motion.div>

                {/* Título Principal */}
                <div className="space-y-2 md:space-y-4 w-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[12vw] sm:text-5xl lg:text-[5rem] xl:text-[6.5rem] font-[1000] leading-[0.9] italic uppercase tracking-tighter text-white"
                    >
                        NO ES SOLO UN SISTEMA <br />
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-emerald-400 to-cyan-400 drop-shadow-sm pb-2">
                            ES CONTROL PARA TU NEGOCIO
                        </span>
                    </motion.h1>
                </div>

                {/* Subtítulo */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 md:mt-8 text-slate-400 text-base sm:text-lg md:text-2xl max-w-2xl lg:max-w-3xl font-light leading-relaxed px-4"
                >
                    Deja de trabajar a ciegas. Con Nedimi POS <span className="text-white font-medium">tienes control de tu dinero, tus productos, y tus ventas</span> en un solo lugar, de forma fácil y sin complicarte.
                </motion.p>

                {/* Línea de base decorativa */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "80px", opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                    className="h-1.5 bg-gradient-to-r from-[#00C1A3] to-cyan-400 mt-10 md:mt-12 rounded-full shadow-[0_0_15px_#00C1A3]"
                />
            </div>
        </section>
    );
};

// --- Sub-componente: Líneas de luz que cruzan el fondo ---
const DataLine = ({ index, total }: { index: number, total: number }) => {
    // Distribuimos equitativamente a lo largo del alto
    const laneHeight = 5 + (index * (90 / (total - 1)));
    const duration = 8 + (index % 3) * 3;
    const lineWidth = 100 + (index % 4) * 60;

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
                delay: index * 1.5,
                ease: "linear"
            }}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#00C1A3] to-transparent pointer-events-none will-change-transform"
            style={{
                top: `${laneHeight}%`,
                width: `${lineWidth}px`
            }}
        >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 md:w-1.5 md:h-1.5 bg-[#00C1A3] rounded-full shadow-[0_0_10px_#00C1A3]" />
        </motion.div>
    );
};