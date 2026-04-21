import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { MessageSquare, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const WhatsAppButton = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    // El número de teléfono se mantiene igual
    const phoneNumber = "525564604183";

    // Mensaje B2B directo a la conversión
    const message = "Hola equipo de Nedimi. Me interesa implementar su Punto de Venta en mi negocio. ¿Podrían asesorarme?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Mostrar el tooltip después de unos segundos
    useEffect(() => {
        const timer = setTimeout(() => setShowTooltip(true), 6000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[110] flex flex-col items-end gap-3 md:gap-4 pointer-events-none">

            {/* --- TOOLTIP CORPORATIVO --- */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="pointer-events-auto bg-white border border-slate-200/60 p-4 md:p-5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] w-[240px] md:w-[280px] relative origin-bottom-right"
                    >
                        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-slate-200/60 rotate-45" />

                        <button
                            onClick={() => setShowTooltip(false)}
                            className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 p-1.5 rounded-full transition-colors"
                            aria-label="Cerrar mensaje"
                        >
                            <X size={14} />
                        </button>

                        <div className="flex items-center gap-3 mb-3">
                            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 border border-slate-100 p-1.5">
                                <img
                                    src="/images/nedimi-pos-04.png"
                                    alt="Nedimi Soporte"
                                    className="w-full h-full object-contain"
                                />
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-blue-500 border-2 border-white rounded-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[13px] text-slate-800 font-bold leading-none">Soporte Comercial</span>
                                <span className="text-[11px] text-slate-500 font-medium mt-1">En línea</span>
                            </div>
                        </div>

                        <p className="text-slate-600 text-[13px] leading-relaxed font-medium">
                            ¿Necesitas asesoría para tu negocio? <br />
                            <span className="text-slate-900 font-bold">Inicia un chat con nosotros.</span>
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- BOTÓN INTELIGENTE (Magia CSS) --- */}
            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowTooltip(false)}
                /* LA MAGIA ESTÁ AQUÍ:
                  - En móvil: max-w-[160px] permite que el botón se expanda para mostrar "Soporte".
                  - En desktop (md): max-w-[64px] obliga al botón a ser exactamente 64x64 (un círculo perfecto).
                  - En hover (md:hover): max-w-[240px] permite que se estire como píldora sin "picos".
                */
                className="pointer-events-auto relative group flex items-center h-14 md:h-16 bg-blue-600 shadow-xl shadow-blue-900/20 text-white rounded-full overflow-hidden transition-all duration-300 ease-out max-w-[160px] md:max-w-[64px] md:hover:max-w-[240px]"
            >
                {/* Contenedor del Icono Fijo (Anclado a la izquierda, garantiza las medidas perfectas) */}
                <div className="flex items-center justify-center w-14 md:w-16 shrink-0 h-full relative">
                    <MessageSquare className="w-6 h-6 md:w-7 md:h-7" />

                    {/* El punto rojo de notificación vive DENTRO del icono. 
                        Así no "baila" cuando el botón se estira hacia la izquierda. */}
                    <span className="absolute top-3.5 right-3.5 md:top-4 md:right-4 w-3 h-3 md:w-3.5 md:h-3.5 bg-red-500 border-2 border-blue-600 rounded-full z-20 flex items-center justify-center md:group-hover:opacity-0 transition-opacity duration-200">
                        <span className="w-full h-full bg-red-500 rounded-full animate-ping opacity-60 absolute" />
                    </span>
                </div>

                {/* Textos Ocultos / Visibles */}
                <div className="flex items-center whitespace-nowrap overflow-hidden">

                    {/* VERSIÓN MÓVIL: Siempre visible, muy corto ("Soporte") */}
                    <div className="flex md:hidden items-center gap-1.5 pr-5">
                        <span className="font-bold text-sm tracking-wide">Soporte</span>
                        <FaWhatsapp className="text-white/90 w-4 h-4" />
                    </div>

                    {/* VERSIÓN DESKTOP: Visible solo al Hover ("Contactar Soporte") */}
                    <div className="hidden md:flex items-center gap-2 pr-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                        <span className="font-bold text-base tracking-wide">Contactar Soporte</span>
                        <FaWhatsapp className="text-white/90 w-5 h-5" />
                    </div>

                </div>
            </motion.a>

        </div>
    );
};