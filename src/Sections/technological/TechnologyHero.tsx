import { motion, useMotionValue, useSpring } from "framer-motion";
import { Cpu } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

export const TechnologyHero = () => {
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
        if (!containerRef.current || isMobile) return;
        const rect = containerRef.current.getBoundingClientRect();
        // Dividir por un número negativo hace que el fondo se mueva en dirección opuesta al mouse (efecto 3D)
        mouseX.set((e.clientX - rect.left - rect.width / 2) / -25);
        mouseY.set((e.clientY - rect.top - rect.height / 2) / -25);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-[70vh] lg:min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-[#020617] px-6 py-20 md:py-24 group"
        >
            {/* 1. FONDO DINÁMICO */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Rejilla técnica base + Textura de ruido */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:60px_60px] md:[background-size:80px_80px] opacity-40 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />
                <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Contenedor con Parallax para las líneas */}
                <motion.div
                    style={{ x: isMobile ? 0 : springX, y: isMobile ? 0 : springY }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Generación de Líneas Verdes */}
                    {[...Array(12)].map((_, i) => (
                        <TechLine key={i} index={i} total={12} />
                    ))}
                </motion.div>

                {/* Resplandor Central (Azul Tech mezclado con Nedimi Green) */}
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-gradient-to-tr from-blue-600/10 via-[#00C1A3]/10 to-transparent blur-[120px] md:blur-[140px] rounded-full"
                />
            </div>

            {/* 2. CONTENIDO CENTRAL */}
            <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center text-center mt-8">

                {/* Badge Superior */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 md:mb-8 shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-md"
                >
                    <Cpu size={14} className="text-blue-400 animate-pulse" />
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-blue-400">
                        Vanguardia Tecnológica
                    </span>
                </motion.div>

                {/* Título Principal */}
                <div className="space-y-2 md:space-y-4 w-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[11vw] sm:text-7xl lg:text-[7.5rem] xl:text-[8.5rem] font-[1000] leading-[0.9] italic uppercase tracking-tighter text-white"
                    >
                        INGENIERÍA DE <br />
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#00C1A3] to-emerald-400 drop-shadow-sm pb-2">
                            ALTO RENDIMIENTO
                        </span>
                    </motion.h1>
                </div>

                {/* Subtítulo */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 md:mt-8 text-slate-400 text-base sm:text-lg md:text-2xl max-w-2xl lg:max-w-4xl font-light leading-relaxed px-4"
                >
                    Fusionamos hardware robusto con sistemas <span className="text-white font-medium underline decoration-[#00C1A3]/50 decoration-2 underline-offset-4">Cloud Native</span> para ofrecerte una estabilidad inquebrantable en cada proceso.
                </motion.p>

                {/* Línea de base decorativa */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "80px", opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                    className="h-1.5 bg-gradient-to-r from-blue-400 to-[#00C1A3] mt-10 md:mt-12 rounded-full shadow-[0_0_15px_rgba(0,193,163,0.5)]"
                />
            </div>
        </section>
    );
};

// --- Sub-componente: Líneas de luz ---
const TechLine = ({ index, total }: { index: number, total: number }) => {
    const laneHeight = 5 + (index * (90 / (total - 1)));
    const duration = 7 + (index % 4) * 2;
    const lineWidth = 120 + (index % 3) * 80;

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
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#00C1A3] to-transparent pointer-events-none will-change-transform"
            style={{
                top: `${laneHeight}%`,
                width: `${lineWidth}px`
            }}
        >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 md:w-1.5 md:h-1.5 bg-[#00C1A3] rounded-full shadow-[0_0_12px_#00C1A3]" />
        </motion.div>
    );
};