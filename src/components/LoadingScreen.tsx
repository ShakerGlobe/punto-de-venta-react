import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const LoadingScreen = () => {
    const [percent, setPercent] = useState(0);

    // Simulador de carga para el contador
    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev) => (prev < 100 ? prev + 1 : 100));
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                scale: 1.1,
                filter: "blur(20px)",
                opacity: 0,
                transition: { duration: 1, ease: [0.7, 0, 0.3, 1] }
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617] overflow-hidden"
        >
            {/* 1. FONDO DE MALLA TECNOLÓGICA */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(#00C1A3 1px, transparent 1px), linear-gradient(90deg, #00C1A3 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* 2. LUCES AMBIENTALES DINÁMICAS */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.2, 0.4, 0.2],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#00C1A3]/30 blur-[150px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.4, 1, 1.4],
                        opacity: [0.1, 0.3, 0.1],
                        rotate: [0, -90, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 blur-[150px] rounded-full"
                />
            </div>

            {/* 3. LÍNEA DE ESCANEO LÁSER */}
            <motion.div
                animate={{ translateY: ['-100vh', '100vh'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00C1A3] to-transparent z-20 opacity-50 shadow-[0_0_20px_#00C1A3]"
            />

            {/* 4. CONTENIDO CENTRAL */}
            <div className="relative z-10 flex flex-col items-center">

                {/* LOGO CON ANIMACIÓN DE REVELADO */}
                <motion.div
                    initial={{ letterSpacing: "1em", opacity: 0, filter: "blur(10px)" }}
                    animate={{ letterSpacing: "0.4em", opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative mb-12"
                >
                    {/* Aura de poder detrás del logo */}
                    <motion.div
                        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 blur-[40px] bg-[#00C1A3]/40 rounded-full"
                    />

                    <h1 className="relative text-3xl md:text-5xl font-[1000] uppercase italic text-white select-none">
                        NEDIMI<span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00C1A3] to-[#007a67] drop-shadow-[0_0_15px_rgba(0,193,163,0.6)]">POS</span>
                    </h1>
                </motion.div>

                {/* BARRA DE CARGA PRO */}
                <div className="flex flex-col items-center gap-6">
                    <div className="relative w-64 h-[4px] bg-white/10 rounded-full overflow-hidden border border-white/5 backdrop-blur-sm">
                        {/* Progreso real */}
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: `${percent}%` }}
                            className="absolute top-0 left-0 h-full bg-[#00C1A3] shadow-[0_0_15px_#00C1A3]"
                        />
                        {/* Brillo viajero */}
                        <motion.div
                            animate={{ left: ["-100%", "200%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        />
                    </div>

                    {/* ESTADO Y PORCENTAJE */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-3">
                            <span className="text-[#00C1A3] font-mono text-xl font-black tracking-tighter">
                                {percent}%
                            </span>
                            <div className="h-4 w-[1px] bg-white/20" />
                            <motion.span
                                animate={{ opacity: [1, 0.4, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400"
                            >
                                {percent < 40 ? "Cargando Módulos..." : percent < 80 ? "Sincronizando Base de Datos..." : "Optimizando Interfaz..."}
                            </motion.span>
                        </div>
                    </div>
                </div>
            </div>

            {/* EFECTO DE RUIDO CINEMATOGRÁFICO */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>
    );
};