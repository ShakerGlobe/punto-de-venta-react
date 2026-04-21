import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const WhatsAppButton = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    // Número y mensaje actualizados
    const phoneNumber = "525534618549";
    const message = "Hola, quiero probar el sistema para mi tienda";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Mostrar el tooltip después de 6 segundos
    useEffect(() => {
        const timer = setTimeout(() => setShowTooltip(true), 6000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[110] flex flex-col items-end gap-3 md:gap-4 pointer-events-none">

            {/* --- TOOLTIP AMIGABLE --- */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="pointer-events-auto bg-white border border-slate-200 p-4 md:p-5 rounded-[1.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] w-[240px] md:w-[280px] relative origin-bottom-right"
                    >
                        {/* Triángulo del tooltip */}
                        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-slate-200 rotate-45" />

                        <button
                            onClick={() => setShowTooltip(false)}
                            className="absolute top-3 right-3 text-slate-400 hover:text-blue-600 bg-slate-50 p-1.5 rounded-full transition-colors"
                        >
                            <X size={14} />
                        </button>

                        <div className="flex items-center gap-3 mb-3">
                            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 border border-blue-100 p-1.5">
                                <img
                                    src="/images/nedimi-pos-04.png"
                                    alt="Nedimi Soporte"
                                    className="w-full h-full object-contain"
                                />
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[13px] text-slate-900 font-black italic uppercase tracking-tight">Equipo Nedimi</span>
                                <span className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">En línea</span>
                            </div>
                        </div>

                        <p className="text-slate-600 text-[13px] leading-relaxed font-medium italic">
                            ¡Hola! ¿Te gustaría ver cómo funciona el sistema en tu tienda? <br />
                            <span className="text-blue-600 font-black uppercase text-[11px] tracking-wider mt-2 block">Chatea con nosotros</span>
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- BOTÓN DE WHATSAPP (Solo Icono de WhatsApp) --- */}
            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowTooltip(false)}
                // Estructura de expansión inteligente
                className="pointer-events-auto relative group flex items-center h-14 md:h-16 bg-blue-600 shadow-2xl shadow-blue-600/30 text-white rounded-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] max-w-[180px] md:max-w-[64px] md:hover:max-w-[280px]"
            >
                {/* ICONO DE WHATSAPP (Ancla fija a la izquierda) */}
                <div className="flex items-center justify-center w-14 md:w-16 shrink-0 h-full relative z-10">
                    <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8 drop-shadow-md" />

                    {/* Notificación roja (Punto de atención) */}
                    <span className="absolute top-3.5 right-3.5 md:top-4 md:right-4 w-3.5 h-3.5 bg-red-500 border-2 border-blue-600 rounded-full z-20 flex items-center justify-center md:group-hover:opacity-0 transition-opacity duration-300">
                        <span className="w-full h-full bg-red-500 rounded-full animate-ping opacity-60 absolute" />
                    </span>
                </div>

                {/* TEXTO EXPANDIBLE */}
                <div className="flex items-center whitespace-nowrap overflow-hidden">
                    
                    {/* Móvil: Texto corto siempre visible */}
                    <div className="flex md:hidden items-center pr-6">
                        <span className="font-black italic uppercase text-xs tracking-widest">¿Hablamos?</span>
                    </div>

                    {/* Desktop: Texto largo en Hover */}
                    <div className="hidden md:flex items-center pr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <span className="font-black italic uppercase text-sm tracking-[0.1em]">¿Hablamos?</span>
                    </div>

                </div>

                {/* Efecto de brillo de barrido */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
            </motion.a>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes shimmer { 100% { transform: translateX(100%); } }
            ` }} />

        </div>
    );
};