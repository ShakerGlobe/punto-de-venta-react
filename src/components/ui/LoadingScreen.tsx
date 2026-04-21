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
                // Simulación de carga más natural y fluida
                const increment = prev > 85 ? 0.3 : prev > 40 ? 1 : 2;
                return Math.min(prev + increment, 100);
            });
        }, 30);
        return () => clearInterval(interval);
    }, []);

    // Textos comerciales, amigables y cero intimidantes para el tendero
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
            // Salida estilo iOS: Se desvanece suavemente hacia arriba
            exit={{
                opacity: 0,
                y: "-10%",
                filter: "blur(10px)",
                transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] }
            }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-50 overflow-hidden"
        >
            {/* 1. FONDOS AMBIENTALES (Luces azules corporativas muy sutiles) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-400/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-300/10 rounded-full blur-[80px]" />
            </div>

            {/* 2. CONTENEDOR CENTRAL */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-6">

                {/* Logo con animación de "respiración" */}
                <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 sm:w-28 sm:h-28 bg-white border border-slate-200/60 rounded-[2rem] shadow-xl shadow-blue-900/5 flex items-center justify-center p-4 mb-6 relative"
                >
                    {/* USO DE RUTA DIRECTA A PUBLIC (Sin imports) */}
                    <img
                        src="/images/nedimi-pos-04.png"
                        alt="Nedimi POS Logo"
                        className="w-full h-full object-contain"
                    />
                    {/* Pequeño destello rotativo en el borde del logo */}
                    <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent border-t-blue-100 animate-spin" style={{ animationDuration: '3s' }} />
                </motion.div>

                {/* Texto de Marca */}
                <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-12">
                    Nedimi<span className="text-blue-600">POS</span>
                </h1>

                {/* 3. ZONA DE PROGRESO */}
                <div className="w-full flex flex-col items-center gap-5">

                    {/* Barra de Progreso Apple-Style */}
                    <div className="w-full sm:w-64 h-1.5 bg-slate-200/80 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                            className="h-full bg-blue-600 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${percent}%` }}
                            transition={{ ease: "linear", duration: 0.1 }}
                        />
                    </div>

                    {/* Mensajes de Estado Dinámicos */}
                    <div className="flex flex-col items-center gap-1.5 h-12">
                        <div className="flex items-center gap-2 text-slate-500 font-semibold text-sm">
                            <motion.div
                                key={currentStatus.text}
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className={percent >= 100 ? "text-green-500" : "text-blue-600"}
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

                        {/* Porcentaje numérico ultra limpio */}
                        <span className="text-xs font-bold text-slate-400 font-mono">
                            {Math.round(percent)}%
                        </span>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};