import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, HelpCircle, MessageCircle, Shield, TrendingUp, Users2, PackageSearch } from 'lucide-react';

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
        tag: "Hardware",
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
        a: "Nedimi POS te permite registrar el precio de proveedor. El sistema resta ese costo del precio de venta y te muestra tu ganancia neta real en los reportes de Excel.",
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

    return (
        <section id="faq" className="py-20 md:py-32 bg-transparent relative overflow-hidden scroll-mt-20">
            {/* Decoración de fondo mejorada para visibilidad */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[1000px] h-[300px] md:h-[400px] bg-gradient-to-r from-[#00C1A3]/10 to-blue-500/10 blur-[80px] md:blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

                    {/* Columna de Título y Soporte */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:sticky lg:top-32"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00C1A3]/10 border border-[#00C1A3]/20 text-[#00C1A3] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
                                <HelpCircle size={14} />
                                <span>Centro de Ayuda</span>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
                                Dudas <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-emerald-400">
                                    resueltas
                                </span>
                            </h2>
                            <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed max-w-md">
                                Todo lo que necesitas saber para digitalizar tu negocio con la tecnología de Nedimi POS.
                            </p>

                            {/* Card de ayuda rápida */}
                            <div className="group p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-b from-[#001f3f]/80 to-[#001f3f]/40 border border-white/10 backdrop-blur-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <MessageCircle size={100} className="text-[#00C1A3]" />
                                </div>

                                <div className="flex items-center gap-4 mb-4 relative z-10">
                                    <div className="p-3 bg-[#00C1A3] rounded-2xl text-black shadow-[0_0_20px_rgba(0,193,163,0.3)]">
                                        <MessageCircle size={20} />
                                    </div>
                                    <span className="font-bold text-white text-base md:text-lg">¿Aún tienes dudas?</span>
                                </div>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed relative z-10">
                                    Nuestro equipo técnico te ayuda con la carga inicial de tus productos.
                                </p>
                                <button className="w-full py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-[#00C1A3] hover:text-black transition-all duration-300 relative z-10">
                                    Hablar con un experto
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Columna de Acordeón */}
                    <div className="lg:col-span-2 space-y-4 md:space-y-5">
                        {faqs.map((faq, i) => {
                            const isActive = active === i;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`group rounded-[1.8rem] md:rounded-[2.2rem] border transition-all duration-500 overflow-hidden ${isActive
                                        ? 'bg-[#001f3f]/80 border-[#00C1A3]/40 shadow-[0_20px_40px_rgba(0,193,163,0.08)]'
                                        : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                                        }`}
                                >
                                    <button
                                        onClick={() => setActive(isActive ? null : i)}
                                        className="w-full p-6 md:p-9 flex items-center justify-between text-left"
                                    >
                                        <div className="flex flex-col gap-2 md:gap-3 pr-4">
                                            {/* Tag decorativo */}
                                            <div className={`flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${isActive ? 'text-[#00C1A3]' : 'text-slate-500'}`}>
                                                {faq.icon}
                                                {faq.tag}
                                            </div>
                                            <span className={`text-lg md:text-2xl font-bold tracking-tight transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                                                {faq.q}
                                            </span>
                                        </div>

                                        <div className={`shrink-0 p-2 md:p-3 rounded-full border transition-all duration-500 ${isActive
                                            ? 'bg-[#00C1A3] border-[#00C1A3] text-black rotate-45'
                                            : 'bg-white/5 border-white/10 text-slate-500'}`}
                                        >
                                            <Plus className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                            >
                                                <div className="px-6 md:px-9 pb-8 md:pb-9 border-t border-white/5 pt-6">
                                                    <p className="text-slate-400 text-sm md:text-lg leading-relaxed bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                                        {faq.a}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};