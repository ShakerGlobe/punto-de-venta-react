import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Store, ShieldCheck, Package, CheckCircle2 } from 'lucide-react';

export const LoadingScreen = () => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Simulación de carga fluida
                const increment = prev > 85 ? 0.3 : prev > 40 ? 1 : 2;
                return Math.min(prev + increment, 100);
            });
        }, 30);
        return () => clearInterval(interval);
    }, []);

    const statusMessages = [
        { limit: 35, text: "Preparando tu punto de venta...", icon: <Store size={18} /> },
        { limit: 65, text: "Asegurando tu conexión...", icon: <ShieldCheck size={18} /> },
        { limit: 90, text: "Cargando catálogo de productos...", icon: <Package size={18} /> },
        { limit: 100, text: "¡Todo listo para vender!", icon: <CheckCircle2 size={18} /> },
    ];

    const currentStatus = statusMessages.find(m => percent <= m.limit) || statusMessages[3];

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                y: "-10%",
                filter: "blur(10px)",
                transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] }
            }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white overflow-hidden"
        >
            {/* 1. FONDOS AMBIENTALES (Ahora en Verde Nedimi) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#00C1A3]/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-emerald-400/5 rounded-full blur-[80px]" />
            </div>

            {/* 2. CONTENIDO CENTRAL */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-6">

                {/* Logo con animación de "respiración" y spinner verde */}
                <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 sm:w-28 sm:h-28 bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl shadow-emerald-900/5 flex items-center justify-center p-4 mb-6 relative"
                >
                    <img
                        src="/images/nedimi-pos-04.png"
                        alt="Nedimi POS Logo"
                        className="w-full h-full object-contain"
                    />
                    {/* Borde rotativo en Verde Nedimi */}
                    <div 
                        className="absolute inset-0 rounded-[2.5rem] border-2 border-transparent border-t-[#00C1A3] animate-spin" 
                        style={{ animationDuration: '3s' }} 
                    />
                </motion.div>

                {/* Texto de Marca en Verde */}
                <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-12">
                    Nedimi<span className="text-[#00C1A3]">POS</span>
                </h1>

                {/* 3. ZONA DE PROGRESO */}
                <div className="w-full flex flex-col items-center gap-6">

                    {/* Barra de Progreso Estilo Píldora */}
                    <div className="w-full sm:w-64 h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner border border-slate-50">
                        <motion.div
                            className="h-full bg-[#00C1A3] rounded-full shadow-[0_0_10px_rgba(0,193,163,0.4)]"
                            initial={{ width: "0%" }}
                            animate={{ width: `${percent}%` }}
                            transition={{ ease: "linear", duration: 0.1 }}
                        />
                    </div>

                    {/* Mensajes de Estado Dinámicos */}
                    <div className="flex flex-col items-center gap-2 h-14">
                        <div className="flex items-center gap-2.5 text-slate-500 font-bold text-sm italic uppercase tracking-tight">
                            <motion.div
                                key={currentStatus.text}
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className={percent >= 100 ? "text-emerald-500" : "text-[#00C1A3]"}
                            >
                                {currentStatus.icon}
                            </motion.div>

                            <motion.span
                                key={currentStatus.text + "text"}
                                initial={{ y: 5, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="tracking-wide"
                            >
                                {currentStatus.text}
                            </motion.span>
                        </div>

                        {/* Porcentaje numérico */}
                        <span className="text-xs font-black text-slate-300 font-mono tracking-widest">
                            {Math.round(percent)}%
                        </span>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};