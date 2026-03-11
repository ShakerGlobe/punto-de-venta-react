import { motion } from 'framer-motion';

export const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617] overflow-hidden"
        >
            {/* 1. Fondo Dinámico: Luces ambientales que se mueven lento */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                        x: [-20, 20, -20],
                        y: [-20, 20, -20]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00C1A3]/20 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.05, 0.15, 0.05],
                        x: [20, -20, 20],
                        y: [20, -20, 20]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00C1A3]/10 blur-[120px] rounded-full"
                />
            </div>

            {/* 2. Contenido Central */}
            <div className="relative z-10 flex flex-col items-center">

                {/* Logo con Resplandor (Glow) */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative mb-6"
                >
                    {/* Efecto de resplandor detrás del texto */}
                    <motion.div
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 blur-xl bg-[#00C1A3]/30"
                    />

                    <h1 className="relative text-xl md:text-2xl font-black uppercase tracking-[0.4em] text-white">
                        Nedimi<span className="text-[#00C1A3] drop-shadow-[0_0_10px_rgba(0,193,163,0.8)]">POS</span>
                    </h1>
                </motion.div>

                {/* Barra de Carga de "Energía" */}
                <div className="relative flex flex-col items-center">
                    <div className="w-48 h-[3px] bg-white/5 rounded-full overflow-hidden relative">
                        {/* El rastro de luz principal */}
                        <motion.div
                            initial={{ left: "-100%" }}
                            animate={{ left: "100%" }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: "circIn"
                            }}
                            className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-[#00C1A3] to-transparent shadow-[0_0_20px_#00C1A3]"
                        />
                    </div>

                    {/* Partícula de luz que sigue a la carga (opcional pero le da el toque) */}
                    <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="mt-6 text-[10px] font-bold uppercase tracking-[0.5em] text-[#00C1A3]"
                    >
                        Iniciando Sistema
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};