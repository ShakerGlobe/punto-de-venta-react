import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { X, MessageSquareHeart } from 'lucide-react';
import { useState, useEffect } from 'react';

export const WhatsAppButton = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const phoneNumber = "525564604183";
    const message = "¡Hola! Vi la página de Nedimi POS y me gustaría recibir más información.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Efecto para mostrar el tooltip automáticamente después de 4 segundos
    useEffect(() => {
        const timer = setTimeout(() => setShowTooltip(true), 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        // Contenedor principal: pointer-events-none para que el área invisible no bloquee clics en la página
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[110] flex flex-col items-end gap-3 md:gap-4 pointer-events-none">

            {/* --- TOOLTIP PRO (Notificación de Soporte) --- */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10, filter: "blur(5px)" }}
                        transition={{ type: "spring", stiffness: 250, damping: 20 }}
                        className="pointer-events-auto bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 p-4 md:p-5 rounded-2xl md:rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-[220px] md:w-[260px] relative origin-bottom-right"
                    >
                        {/* Triángulo simulando burbuja de chat */}
                        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-[#0f172a] border-b border-r border-white/10 rotate-45" />

                        {/* Botón de cerrar */}
                        <button
                            onClick={() => setShowTooltip(false)}
                            className="absolute top-3 right-3 text-slate-500 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors"
                            aria-label="Cerrar mensaje"
                        >
                            <X size={14} />
                        </button>

                        {/* Cabecera del Tooltip */}
                        <div className="flex items-center gap-2.5 mb-2.5">
                            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#00C1A3]/10 border border-[#00C1A3]/30 text-[#00C1A3]">
                                <MessageSquareHeart size={14} />
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#0f172a] rounded-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[11px] text-white font-bold leading-none">Soporte Nedimi</span>
                                <span className="text-[9px] text-emerald-400 uppercase tracking-widest font-black mt-1 animate-pulse">En línea</span>
                            </div>
                        </div>

                        {/* Cuerpo del mensaje */}
                        <p className="text-slate-300 text-xs md:text-[13px] leading-relaxed font-light">
                            ¿Necesitas ayuda con tu configuración o cotización? <span className="text-white font-bold">Escríbenos ahora.</span>
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- BOTÓN PRINCIPAL FLOTANTE --- */}
            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="pointer-events-auto relative group flex items-center justify-center"
                onClick={() => setShowTooltip(false)} // Si hace clic, ocultamos el tooltip
            >
                {/* Glow dinámico de fondo (Nedimi Style) */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00C1A3] to-emerald-400 rounded-full blur-[20px] opacity-40 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Cuerpo del botón */}
                <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#020617] border border-[#00C1A3]/30 rounded-full overflow-hidden shadow-2xl transition-colors group-hover:border-[#00C1A3] group-hover:bg-[#00C1A3]">

                    {/* Efecto de barrido de luz */}
                    <motion.div
                        animate={{ x: ["-200%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear", repeatDelay: 1 }}
                        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[30deg]"
                    />

                    {/* Icono de WhatsApp */}
                    <FaWhatsapp className="text-[#00C1A3] text-2xl md:text-[32px] relative z-10 transition-colors duration-300 group-hover:text-[#020617]" />
                </div>

                {/* Badge de notificación */}
                <span className="absolute -top-1 -right-1 md:top-0 md:right-0 w-4 h-4 md:w-5 md:h-5 bg-red-500 border-2 border-[#020617] rounded-full z-20 flex items-center justify-center shadow-lg">
                    <span className="w-full h-full bg-red-500 rounded-full animate-ping opacity-75 absolute" />
                    <span className="text-[8px] md:text-[9px] font-black text-white relative">1</span>
                </span>
            </motion.a>

        </div>
    );
};