import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
    onOpenModal: () => void;
}

export const HeroHome = ({ onOpenModal }: HeroProps) => {
    const images = [
        "/images/punto de venta 1.jpeg",
        "/images/punto de venta 2.jpeg"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        /* Se actualizó el fondo a slate-950 para match total con los otros componentes */
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6 bg-slate-950 text-white">

            {/* LUCES AMBIENTALES DE COHERENCIA (NUEVO) */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00C1A3]/10 blur-[120px] rounded-full -z-0" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full -z-0" />

            {/* FONDO DINÁMICO (ÓRBITAS) */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[600px] h-[600px] border-[2px] border-[#00C1A3]/20 rounded-full border-dashed"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[800px] h-[800px] border border-blue-500/10 rounded-full"
                />
            </div>

            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* TEXTO */}
                <div className="flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-fit flex items-center gap-3 px-4 py-1 bg-gradient-to-r from-[#00C1A3] to-blue-600 text-black text-xs font-black uppercase tracking-widest"
                    >
                        <Zap size={14} fill="currentColor" />
                        <span>Dominio Total de Ventas</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-7xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.8] uppercase italic"
                    >
                        Ary<span className="text-[#00C1A3]">POS</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 max-w-md leading-relaxed border-l-4 border-[#00C1A3] pl-6"
                    >
                        La potencia de un sistema empresarial en la palma de tu mano.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onOpenModal}
                        className="group relative w-fit h-16 px-12 bg-white text-black font-black text-xl transition-all duration-300 overflow-hidden"
                    >
                        <span className="absolute inset-0 w-0 bg-[#00C1A3] transition-all duration-300 ease-out group-hover:w-full"></span>
                        <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                            PROBAR YA <ArrowRight />
                        </span>
                    </motion.button>
                </div>

                {/* IMÁGENES CON SHADOW NEÓN */}
                <div className="relative h-[450px] md:h-[550px] w-full flex items-center justify-center mt-12 lg:mt-0">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={index}
                            src={images[index]}
                            initial={{ opacity: 0, scale: 0.92, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: -40 }}
                            transition={{
                                duration: 1.2,
                                ease: "easeInOut"
                            }}
                            className="absolute w-[90%] aspect-video object-cover border-2 border-white/10 shadow-[20px_20px_0px_#00C1A3] bg-slate-800 rounded-sm"
                        />
                    </AnimatePresence>

                    {/* INDICADORES */}
                    <div className="absolute -bottom-10 flex gap-3">
                        {images.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1.5 transition-all duration-500 rounded-full ${index === i
                                    ? "w-12 bg-[#00C1A3]"
                                    : "w-3 bg-slate-700"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};