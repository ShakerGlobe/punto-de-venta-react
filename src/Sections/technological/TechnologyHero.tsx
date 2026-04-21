import { motion, useMotionValue, useSpring } from "framer-motion";
import { Cpu, Zap } from "lucide-react";
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
                {/* Cuadrícula sutil (Slate 100) */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:60px_60px] opacity-40" />
                
                <motion.div
                    style={{ x: isMobile ? 0 : springX, y: isMobile ? 0 : springY }}
                    className="absolute inset-0 w-full h-full"
                >
                    {[...Array(6)].map((_, i) => (
                        <TechLine key={i} index={i} total={6} />
                    ))}
                </motion.div>

                {/* RESPLANDOR AZUL POTENTE (Luz de ingeniería) */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[900px] h-[500px] md:h-[900px] bg-blue-600 rounded-full blur-[140px] md:blur-[180px] pointer-events-none"
                />
            </div>

            {/* 2. CONTENIDO EN ESTRUCTURA DE DOS COLUMNAS */}
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                    
                    {/* COLUMNA TEXTO */}
                    <div className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start">
                        
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-100 rounded-full mb-8 shadow-sm"
                        >
                            <Cpu size={14} className="text-blue-600" />
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-blue-600">
                                Ingeniería de alto rendimiento
                            </span>
                        </motion.div>

                        <div className="space-y-4 w-full">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                // Tamaño ajustado para congruencia con el Home
                                className="text-5xl md:text-6xl xl:text-7xl font-[1000] leading-[1.1] italic uppercase tracking-tighter text-slate-950"
                            >
                                PODER REAL PARA <br />
                                <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-4">
                                    TU NEGOCIO
                                </span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-8 text-slate-500 text-lg md:text-xl max-w-2xl font-medium leading-relaxed"
                        >
                            Fusionamos equipos robustos con <span className="text-slate-900 font-bold text-xl underline decoration-blue-200 decoration-4 underline-offset-4">almacenamiento en la nube activo</span> para ofrecerte estabilidad inquebrantable y rapidez en cada venta.
                        </motion.p>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80px" }}
                            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                            className="h-2 bg-blue-600 mt-10 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                        />
                    </div>

                    {/* COLUMNA PARA LA IMAGEN (Espacio reservado) */}
                    <div className="w-full lg:w-2/5 flex justify-center items-center relative min-h-[350px] md:min-h-[450px]">
                        {/* Contenedor flotante listo para recibir tu imagen técnica */}
                        <motion.div 
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full max-w-[450px] aspect-square rounded-[3.5rem] bg-slate-950 border-[12px] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden"
                        >
                            {/* Placeholder visual representativo de tecnología */}
                            <div className="flex flex-col items-center gap-4 text-white/20">
                                <img 
                                    src="/images/nedimi-pos-03.webp" 
                                    alt="Terminal Punto de Venta Moderna"    
                                />
                            </div>
                            
                            {/* Brillo interno de hardware */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-transparent pointer-events-none" />
                        </motion.div>

                        {/* Sombra de suelo para realismo */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-slate-900/5 blur-2xl rounded-[100%] -z-10" />
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

// --- Sub-componente: Estelas de ingeniería (Azul Nedimi) ---
const TechLine = ({ index, total }: { index: number, total: number }) => {
    const laneHeight = 10 + (index * (80 / (total - 1)));
    const duration = 12 + (index % 4) * 3;
    const lineWidth = 150 + (index % 3) * 100;

    return (
        <motion.div
            initial={{ left: "-25%", opacity: 0 }}
            animate={{
                left: "115%",
                opacity: [0, 0.15, 0.15, 0]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: index * 2,
                ease: "linear"
            }}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent pointer-events-none"
            style={{
                top: `${laneHeight}%`,
                width: `${lineWidth}px`
            }}
        >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_12px_#3b82f6]" />
        </motion.div>
    );
};