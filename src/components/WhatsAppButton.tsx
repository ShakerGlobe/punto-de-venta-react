import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export const WhatsAppButton = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const phoneNumber = "525564604183";
    const message = "¡Hola! Vi la página de Nedimi POS y me gustaría recibir más información.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Efecto para mostrar el tooltip automáticamente después de 3 segundos
    useEffect(() => {
        const timer = setTimeout(() => setShowTooltip(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[999] flex flex-col items-end gap-4">

            {/* Tooltip Pro / Notificación de Soporte */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-[#001f3f]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl max-w-[200px] relative mb-2 hidden md:block"
                    >
                        <button
                            onClick={() => setShowTooltip(false)}
                            className="absolute top-2 right-2 text-slate-500 hover:text-white transition-colors"
                        >
                            <span className="text-[10px]">✕</span>
                        </button>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">En línea</span>
                        </div>
                        <p className="text-white text-xs leading-relaxed font-medium">
                            ¿Necesitas ayuda con tu configuración? **Escríbenos.**
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Botón Principal */}
            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
            >
                {/* Glow dinámico de fondo (Nedimi Style) */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00C1A3] to-blue-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

                {/* Cuerpo del botón */}
                <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#0a0a0a] border border-white/20 rounded-full overflow-hidden shadow-2xl">
                    {/* Efecto de barrido de luz */}
                    <motion.div
                        animate={{ x: [-100, 100] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[30deg]"
                    />

                    {/* Icono con color de la marca */}
                    <FaWhatsapp className="text-[#00C1A3] text-2xl md:text-3xl relative z-10 transition-colors group-hover:text-white" />
                </div>

                {/* Badge de notificación */}
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-[#0a0a0a] rounded-full z-20 flex items-center justify-center">
                    <span className="w-full h-full bg-red-500 rounded-full animate-ping opacity-75 absolute" />
                    <span className="text-[8px] font-bold text-white relative">1</span>
                </span>
            </motion.a>
        </div>
    );
};