import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
    DollarSign,
    ShoppingCart,
    Zap,
    TrendingUp,
    CreditCard,
    CheckCircle2
} from 'lucide-react';

export const LoadingScreen = () => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                const increment = prev > 80 ? 0.5 : 2;
                return Math.min(prev + increment, 100);
            });
        }, 30);
        return () => clearInterval(interval);
    }, []);

    const statusMessages = [
        { limit: 20, text: "INICIALIZANDO TERMINAL...", icon: <CreditCard size={14} /> },
        { limit: 50, text: "CONECTANDO PASARELAS DE PAGO...", icon: <DollarSign size={14} /> },
        { limit: 80, text: "SINCRONIZANDO STOCK GLOBAL...", icon: <ShoppingCart size={14} /> },
        { limit: 100, text: "SISTEMA LISTO PARA VENDER", icon: <Zap size={14} /> },
    ];

    const currentStatus = statusMessages.find(m => percent <= m.limit) || statusMessages[3];

    return (
        <motion.div
            initial={{ y: 0 }}
            // SALIDA DE "PERSIANA" (Sólida, sin opacidad, sin colores raros)
            exit={{
                y: "-100%",
                transition: {
                    duration: 0.6,
                    ease: [0.9, 0, 0.1, 1] // Ease muy agresivo al inicio y suave al final
                }
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617] overflow-hidden"
        >
            {/* 1. FONDO DE CUADRÍCULA (Solo verde, nada de azul) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.15]"
                    style={{
                        backgroundImage: `radial-gradient(#00C1A3 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: "110vh", x: `${Math.random() * 100}vw`, opacity: 0 }}
                        animate={{ y: "-10vh", opacity: [0, 0.5, 0] }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                        className="absolute text-[#00C1A3]/30"
                    >
                        {i % 2 === 0 ? <DollarSign size={24} /> : <TrendingUp size={24} />}
                    </motion.div>
                ))}
            </div>

            {/* 2. CONTENEDOR CENTRAL */}
            <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-16">
                    {/* Quitamos el borde azul que causaba el ruido visual */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-16 border border-[#00C1A3]/10 rounded-full"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-24 border border-[#00C1A3]/5 rounded-full"
                    />

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative group"
                    >
                        <motion.div
                            animate={{
                                boxShadow: ["0 0 20px rgba(0,193,163,0.1)", "0 0 50px rgba(0,193,163,0.3)", "0 0 20px rgba(0,193,163,0.1)"]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-[#00C1A3]/10 blur-3xl rounded-full"
                        />

                        <h1 className="text-5xl md:text-7xl font-[1000] italic uppercase tracking-tighter text-white">
                            NEDIMI<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-emerald-400">POS</span>
                        </h1>

                        <div className="absolute -bottom-6 left-0 right-0 text-center">
                            <span className="text-[10px] font-black tracking-[0.5em] text-emerald-500/80 uppercase">
                                The Future of Retail
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* 3. TERMINAL DE CARGA */}
                <div className="w-80 space-y-6">
                    <div className="relative h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percent}%` }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-600 to-[#00C1A3] shadow-[0_0_20px_#00C1A3]"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-end font-mono">
                            <div className="flex flex-col">
                                <span className="text-[9px] text-slate-500 uppercase tracking-widest mb-1">Status Report</span>
                                <div className="flex items-center gap-2 text-[#00C1A3]">
                                    <motion.div
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 0.5, repeat: Infinity }}
                                    >
                                        {currentStatus.icon}
                                    </motion.div>
                                    <span className="text-[11px] font-bold tracking-tighter uppercase">
                                        {currentStatus.text}
                                    </span>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-3xl font-[1000] italic text-white leading-none">
                                    {Math.round(percent)}%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quitamos el Overlay verde/turquesa del final que causaba el efecto de "color raro" */}

            <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>
    );
};