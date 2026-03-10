import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, HelpCircle, MessageCircle } from 'lucide-react';

const faqs = [
    {
        q: "¿Realmente es gratis por 30 días?",
        a: "¡Totalmente! Creemos en la transparencia. Tienes acceso al 100% de las funciones profesionales sin restricciones. Queremos que compruebes el valor de AryPOS en tu operación real antes de decidir."
    },
    {
        q: "¿Necesito tarjeta de crédito para la demo?",
        a: "No. Solo pedimos los datos básicos de tu negocio. Sin letras chiquitas ni cargos ocultos automáticos al terminar el mes."
    },
    {
        q: "¿El software funciona sin internet?",
        a: "Sí. AryPOS está diseñado con tecnología híbrida: vende localmente con total fluidez y, en cuanto detecta conexión, sincroniza tus datos automáticamente con la nube."
    },
    {
        q: "¿Puedo usarlo en varios dispositivos?",
        a: "¡Claro! Tu cuenta es multi-plataforma. Puedes monitorear tus ventas desde tu celular mientras tu personal atiende desde una tablet o PC."
    }
];

export const FAQHome = () => {
    const [active, setActive] = useState<number | null>(null);

    return (
        /* Se agregó id="faq" y scroll-mt-20 */
        <section id="faq" className="py-32 bg-transparent relative overflow-hidden scroll-mt-20">
            {/* Decoración de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#00C1A3]/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-16">

                    {/* Columna de Título y Soporte */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl font-black text-white mb-6 tracking-tighter">
                                Dudas <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-blue-400">
                                    comunes
                                </span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-8">
                                Todo lo que necesitas saber para digitalizar tu negocio hoy mismo.
                            </p>

                            {/* Card de ayuda rápida */}
                            <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-[#00C1A3]/20 rounded-2xl text-[#00C1A3]">
                                        <MessageCircle size={24} />
                                    </div>
                                    <span className="font-bold text-white">¿Aún tienes dudas?</span>
                                </div>
                                <p className="text-slate-500 text-sm mb-4">Nuestro equipo técnico está listo para ayudarte con la configuración inicial.</p>
                                <button className="text-[#00C1A3] text-sm font-bold uppercase tracking-widest hover:underline transition-all">
                                    Contactar soporte →
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Columna de Acordeón */}
                    <div className="lg:col-span-2 space-y-4">
                        {faqs.map((faq, i) => {
                            const isActive = active === i;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`group rounded-[2rem] border transition-all duration-500 overflow-hidden ${isActive
                                        ? 'bg-[#00C1A3]/5 border-[#00C1A3]/30 shadow-[0_0_30px_rgba(0,193,163,0.05)]'
                                        : 'bg-white/5 border-white/5 hover:border-white/10'
                                        }`}
                                >
                                    <button
                                        onClick={() => setActive(isActive ? null : i)}
                                        className="w-full p-8 flex items-center justify-between text-left"
                                    >
                                        <div className="flex items-center gap-5">
                                            <span className={`text-sm font-black transition-colors ${isActive ? 'text-[#00C1A3]' : 'text-slate-600'}`}>
                                                0{i + 1}
                                            </span>
                                            <span className={`text-xl font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                                                {faq.q}
                                            </span>
                                        </div>

                                        <motion.div
                                            animate={{ rotate: isActive ? 45 : 0, scale: isActive ? 1.2 : 1 }}
                                            className={`p-2 rounded-full transition-colors ${isActive ? 'bg-[#00C1A3] text-black' : 'bg-white/5 text-slate-500'}`}
                                        >
                                            <Plus size={20} />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                            >
                                                <div className="px-8 pb-8 ml-10 text-slate-400 text-lg leading-relaxed border-t border-white/5 pt-4">
                                                    {faq.a}
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