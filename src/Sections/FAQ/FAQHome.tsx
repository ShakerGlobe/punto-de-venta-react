import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, HelpCircle, MessageCircle, Shield, TrendingUp, Users2, PackageSearch, Sparkles } from 'lucide-react';

const faqs = [
    {
        q: "¿Realmente es gratis por 30 días?",
        a: "¡Totalmente! Tienes acceso al 100% de las funciones profesionales de Nedimi POS sin restricciones. Queremos que compruebes el valor del sistema en tu operación real antes de decidir.",
        tag: "Promo",
        icon: <TrendingUp className="w-4 h-4" />
    },
    {
        q: "¿Necesito comprar un escáner?",
        a: "No es necesario. Puedes usar la cámara de tu celular o tablet como un escáner profesional. Si ya tienes uno físico USB o Bluetooth, también es 100% compatible.",
        tag: "Dispositivos necesarios",
        icon: <PackageSearch className="w-4 h-4" />
    },
    {
        q: "¿Puedo controlar a mis empleados?",
        a: "Sí. El sistema cuenta con Gestión de Roles. El Administrador tiene control total, mientras que el rol de 'Usuario' tiene permisos limitados para proteger tu configuración y precios.",
        tag: "Seguridad",
        icon: <Users2 className="w-4 h-4" />
    },
    {
        q: "¿Cómo calculo mis ganancias reales?",
        a: "Nedimi POS te permite registrar el precio de proveedor. El sistema resta ese costo del precio de venta y te muestra tu ganancia neta real en los reportes.",
        tag: "Finanzas",
        icon: <TrendingUp className="w-4 h-4" />
    },
    {
        q: "¿Qué pasa si dejo mi sesión abierta?",
        a: "Por seguridad, el sistema cuenta con un cierre automático de sesión por inactividad. Esto protege tus datos sensibles si te alejas de la terminal de ventas.",
        tag: "Seguridad",
        icon: <Shield className="w-4 h-4" />
    },
    {
        q: "¿El sistema avisa si se acaba un producto?",
        a: "Sí. El panel principal (dashboard) muestra alertas de bajo stock en tiempo real y la terminal de ventas te impide vender más de lo que tienes disponible.",
        tag: "Inventario",
        icon: <PackageSearch className="w-4 h-4" />
    }
];

export const FAQHome = () => {
    const [active, setActive] = useState<number | null>(null);

    // Configuración de WhatsApp
    const WHATSAPP_NUMBER = "525564604183";
    const WHATSAPP_MESSAGE = encodeURIComponent("Hola, vengo de la web de Nedimi POS. Me gustaría hablar con un experto sobre el sistema.");
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

    return (
        <section id="faq" className="py-20 md:py-32 bg-[#020617] relative overflow-hidden scroll-mt-20">
            {/* --- DECORACIÓN DE FONDO --- */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] lg:w-[1000px] h-[400px] bg-gradient-to-r from-[#00C1A3]/10 to-blue-500/10 blur-[100px] lg:blur-[140px] rounded-full" />
                <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">

                    {/* --- COLUMNA IZQUIERDA: Título y Soporte --- */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                            className="lg:sticky lg:top-32"
                        >
                            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-[#00C1A3]/10 border border-[#00C1A3]/20 mb-6 md:mb-8 shadow-[0_0_15px_rgba(0,193,163,0.1)]">
                                <HelpCircle size={14} className="text-[#00C1A3] animate-pulse" />
                                <span className="text-[#00C1A3] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">Centro de Ayuda</span>
                            </div>

                            <h2 className="text-5xl sm:text-6xl md:text-7xl font-[1000] text-white mb-6 tracking-tighter leading-[0.9] italic uppercase">
                                Dudas <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-emerald-400 to-cyan-400 drop-shadow-sm pb-2">
                                    resueltas
                                </span>
                            </h2>
                            <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-12 leading-relaxed font-light max-w-md">
                                Todo lo que necesitas saber para digitalizar tu negocio con la tecnología de <span className="text-white font-medium">Nedimi POS</span>.
                            </p>

                            {/* Micro-badge de confianza (Social Proof) */}
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 text-slate-400 text-xs md:text-sm font-bold tracking-tight bg-slate-900/40 p-3 md:p-4 rounded-2xl border border-white/5 w-fit">
                                <div className="flex -space-x-3">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center overflow-hidden shadow-sm">
                                            {/* Avatar simulado con gradientes */}
                                            <div className={`w-full h-full bg-gradient-to-tr ${i % 2 === 0 ? 'from-[#00C1A3]/40 to-emerald-500/40' : 'from-blue-500/40 to-indigo-500/40'}`} />
                                        </div>
                                    ))}
                                </div>
                                <span><span className="text-white">+500 negocios</span> ya lo usan</span>
                            </div>

                            {/* Card de ayuda rápida mejorada */}
                            <div className="group p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-slate-900/60 backdrop-blur-2xl border border-[#00C1A3]/20 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-[#00C1A3]/40">
                                {/* Brillo interno tipo espejo */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00C1A3]/5 via-transparent to-transparent pointer-events-none" />

                                {/* Icono decorativo gigante */}
                                <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 group-hover:rotate-12 duration-500 pointer-events-none">
                                    <MessageCircle size={120} className="text-[#00C1A3]" />
                                </div>

                                <div className="flex items-center justify-between mb-6 md:mb-8 relative z-10">
                                    <div className="p-3 md:p-4 bg-[#00C1A3]/10 border border-[#00C1A3]/20 rounded-2xl text-[#00C1A3] shadow-inner group-hover:bg-[#00C1A3] group-hover:text-[#020617] transition-colors duration-300">
                                        <MessageCircle size={24} />
                                    </div>
                                    {/* Indicador de "En Línea" */}
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[9px] md:text-[10px] text-emerald-500 font-black uppercase tracking-widest">Soporte Activo</span>
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <span className="font-black text-white text-xl md:text-2xl block mb-2 italic uppercase tracking-tight">¿Aún tienes dudas?</span>
                                    <p className="text-slate-400 text-sm md:text-base mb-6 md:mb-8 leading-relaxed font-light">
                                        Nuestro equipo técnico te ayuda con la carga inicial de tus productos <span className="text-white font-medium underline decoration-[#00C1A3]/50 underline-offset-4">sin costo adicional</span>.
                                    </p>

                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn flex items-center justify-center gap-2 w-full py-4 md:py-4 rounded-xl md:rounded-2xl bg-[#00C1A3] text-[#020617] text-[10px] md:text-xs font-[1000] uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_15px_30px_rgba(0,193,163,0.25)] relative overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            <Sparkles size={14} className="group-hover/btn:animate-pulse" />
                                            Hablar con un experto
                                        </span>
                                        {/* Shimmer effect */}
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- COLUMNA DERECHA: Acordeón FAQ --- */}
                    <div className="lg:col-span-2 space-y-4 md:space-y-5">
                        {faqs.map((faq, i) => {
                            const isActive = active === i;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: 0.1 + (i * 0.05), duration: 0.5 }}
                                    className={`group rounded-[1.5rem] sm:rounded-[2rem] border transition-all duration-500 overflow-hidden ${isActive
                                            ? 'bg-slate-900/60 border-[#00C1A3]/40 shadow-[0_20px_50px_rgba(0,193,163,0.1)] backdrop-blur-xl'
                                            : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                                        }`}
                                >
                                    <button
                                        onClick={() => setActive(isActive ? null : i)}
                                        className="w-full p-5 sm:p-6 md:p-8 flex items-start sm:items-center justify-between text-left gap-4 transition-colors"
                                    >
                                        <div className="flex flex-col gap-2 md:gap-3 pr-2">
                                            <div className={`flex items-center gap-1.5 md:gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${isActive ? 'text-[#00C1A3]' : 'text-slate-500'}`}>
                                                {faq.icon}
                                                {faq.tag}
                                            </div>
                                            <span className={`text-base sm:text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                                                {faq.q}
                                            </span>
                                        </div>

                                        {/* Icono de abrir/cerrar (Plus / Rotate) */}
                                        <div className={`shrink-0 p-2 sm:p-2.5 md:p-3 rounded-full border transition-all duration-500 shadow-inner mt-1 sm:mt-0 ${isActive
                                                ? 'bg-[#00C1A3] border-[#00C1A3] text-[#020617] rotate-45 shadow-[0_0_15px_rgba(0,193,163,0.4)]'
                                                : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-white group-hover:bg-white/10'
                                            }`}>
                                            <Plus className="w-4 h-4 md:w-5 md:h-5" />
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                {/* Contenido de la respuesta */}
                                                <div className="px-5 sm:px-6 md:px-8 pb-6 md:pb-8">
                                                    <div className="pt-5 md:pt-6 border-t border-white/10">
                                                        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                                                            {faq.a}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}

                        {/* Pie de FAQ (Fallback visual) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="pt-8 pb-4 text-center md:text-left"
                        >
                            <p className="text-slate-500 text-xs md:text-sm font-medium">
                                ¿Tienes una pregunta diferente? <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#00C1A3] font-bold hover:underline transition-all">Escríbenos ahora</a>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};