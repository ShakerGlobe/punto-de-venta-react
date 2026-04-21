import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, HelpCircle, TrendingUp, Users2, PackageSearch, Sparkles, ExternalLink } from 'lucide-react';

const faqs = [
    {
        q: "¿Realmente es gratis por 30 días?",
        a: "¡Totalmente! Tienes acceso al 100% de las funciones profesionales de Nedimi POS sin restricciones. Queremos que compruebes el valor del sistema en tu tienda real antes de decidir.",
        tag: "Promo",
        icon: <TrendingUp className="w-4 h-4" />
    },
    {
        q: "¿Necesito comprar un escáner?",
        a: "No es necesario. Puedes usar la cámara de tu celular o tablet como un escáner profesional. Si ya tienes uno físico, también es compatible.",
        tag: "Equipo",
        icon: <PackageSearch className="w-4 h-4" />
    },
    {
        q: "¿Puedo controlar a mis empleados?",
        a: "Sí. Puedes crear cuentas para tus ayudantes con permisos limitados. Así tú cuidas tus precios y configuración mientras ellos solo se encargan de vender.",
        tag: "Seguridad",
        icon: <Users2 className="w-4 h-4" />
    },
    {
        q: "¿Cómo calculo mis ganancias reales?",
        a: "Nedimi POS hace la cuenta por ti. Registras a cuánto le compras al proveedor y a cuánto vendes; el sistema te dice tu ganancia neta al final del día.",
        tag: "Dinero",
        icon: <TrendingUp className="w-4 h-4" />
    },
    {
        q: "¿El sistema avisa si se acaba un producto?",
        a: "¡Claro! Te mandamos alertas cuando te queden pocas piezas de algún producto para que nunca le digas 'no hay' a tus clientes.",
        tag: "Inventario",
        icon: <PackageSearch className="w-4 h-4" />
    }
];

export const FAQHome = () => {
    const [active, setActive] = useState<number | null>(null);

    // Configuración de WhatsApp
    const WHATSAPP_NUMBER = "525534618549";
    const WHATSAPP_MESSAGE = encodeURIComponent("Hola, quiero probar el sistema para mi tienda");
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

    return (
        <section id="faq" className="py-10 md:py-16 bg-white relative overflow-hidden scroll-mt-20">
            
            {/* --- DESTELLOS VERDES REFORZADOS (Más visibles) --- */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00C1A3]/15 blur-[140px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Reestructuración: Acordeón a la Izquierda (span 2), Texto a la Derecha (span 1) */}
                <div className="grid lg:grid-cols-3 gap-16 items-start">

                    {/* --- COLUMNA IZQUIERDA: ACORDEÓN --- */}
                    <div className="lg:col-span-2 space-y-4 order-2 lg:order-1">
                        {faqs.map((faq, i) => {
                            const isActive = active === i;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`group rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                                        isActive
                                        ? 'bg-white border-emerald-200 shadow-2xl shadow-emerald-500/10'
                                        : 'bg-white border-slate-100 hover:border-emerald-100'
                                    }`}
                                >
                                    <button
                                        onClick={() => setActive(isActive ? null : i)}
                                        className="w-full p-6 sm:p-8 flex items-center justify-between text-left gap-4"
                                    >
                                        <div className="flex flex-col gap-2">
                                            <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${isActive ? 'text-[#00C1A3]' : 'text-slate-400'}`}>
                                                {faq.icon}
                                                {faq.tag}
                                            </div>
                                            <span className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>
                                                {faq.q}
                                            </span>
                                        </div>

                                        <div className={`shrink-0 p-3 rounded-full border transition-all duration-500 ${
                                            isActive
                                            ? 'bg-[#00C1A3] border-[#00C1A3] text-white rotate-45 shadow-lg shadow-emerald-200'
                                            : 'bg-slate-50 border-slate-100 text-slate-400'
                                        }`}>
                                            <Plus size={20} />
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 sm:px-8 pb-8">
                                                    <div className="pt-6 border-t border-slate-50">
                                                        <p className="text-slate-500 text-lg leading-relaxed font-medium">
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
                    </div>

                    {/* --- COLUMNA DERECHA: TEXTO Y SOPORTE (Sticky) --- */}
                    <div className="lg:col-span-1 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:sticky lg:top-32"
                        >
                            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-8 shadow-sm">
                                <HelpCircle size={14} className="text-[#00C1A3]" />
                                <span className="text-[#00C1A3] text-[10px] font-black uppercase tracking-[0.3em]">Centro de Ayuda</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-[1000] text-slate-950 mb-8 tracking-tighter leading-[0.85] italic uppercase">
                                Resolvemos <br />
                                <span className="text-[#00C1A3] underline decoration-emerald-100 decoration-8 underline-offset-8">
                                    tus dudas
                                </span>
                            </h2>
                            <p className="text-slate-500 text-lg mb-12 leading-relaxed font-medium">
                                Todo lo que necesitas saber para poner tu negocio en orden con la ayuda de <span className="text-slate-900 font-bold">Nedimi POS</span>.
                            </p>

                            <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-xl shadow-slate-200/50">
                                <h4 className="font-black text-slate-900 text-2xl mb-4 italic uppercase tracking-tight">¿Prefieres hablar?</h4>
                                <p className="text-slate-500 text-base mb-8 font-medium leading-relaxed">
                                    Nuestro equipo te ayuda a resolver cualquier duda sobre el sistema <span className="text-[#00C1A3] font-bold">al instante</span>.
                                </p>

                                {/* BOTÓN DE WHATSAPP: Diseño Footer mantenido */}
                                <a 
                                    href={whatsappUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center gap-3 p-3 rounded-2xl bg-[#25D366] text-white hover:bg-[#1EBE5C] hover:shadow-md transition-all active:scale-[0.98] group"
                                >
                                    <div className="bg-white/20 p-2 rounded-xl text-white">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.338 11.897-11.896a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                    </div>
                                    <span className="text-[14px] font-bold tracking-wide">Hablar con un experto</span>
                                    <ExternalLink size={14} className="text-white/60 ml-auto group-hover:text-white transition-colors" />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};