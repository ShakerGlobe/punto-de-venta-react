import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PricingHome = () => {
    const navigate = useNavigate();
    // Estado para controlar si vemos precios mensuales o anuales
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            title: "Plan Inicial",
            priceMonthly: "199",
            priceAnnual: "179",
            annualTotal: "2,148",
            description: "Ideal para empezar a dejar la libreta.",
            icon: <Zap size={24} className="text-[#00C1A3]" />,
            features: [
                "1 Usuario",
                "Ventas e inventario ilimitado",
                "Usa tu cel como escáner",
                "Primer mes GRATIS",
                "Soporte estándar"
            ],
            highlight: false
        },
        {
            title: "Plan Esencial",
            priceMonthly: "499",
            priceAnnual: "449",
            annualTotal: "5,388",
            description: "Para negocios que ya están creciendo.",
            icon: <Star size={24} className="text-amber-400" />,
            features: [
                "Hasta 3 Usuarios",
                "Ventas e inventario ilimitado",
                "Soporte Premium 24/7",
                "Primer mes GRATIS",
                "Reportes avanzados de ventas"
            ],
            highlight: true
        },
        {
            title: "Plan Pro",
            priceMonthly: "799",
            priceAnnual: "719",
            annualTotal: "8,628",
            description: "Control total para dueños exigentes.",
            icon: <Rocket size={24} className="text-purple-400" />,
            features: [
                "Hasta 5 Usuarios",
                "Soporte Premium prioritario",
                "Multisucursal incluido",
                "Primer mes GRATIS",
                "Exportación de datos a Excel"
            ],
            highlight: false
        }
    ];

    return (
        <div className="bg-[#020617] w-full overflow-hidden" id="precios">
            <section className="relative py-8 lg:py-12 flex flex-col items-center justify-center px-6">

                {/* FONDO TÉCNICO Y BRILLOS */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:80px_80px] opacity-50" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-[#00C1A3]/10 blur-[120px] lg:blur-[160px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto w-full relative z-10">

                    {/* ENCABEZADO DE LA SECCIÓN */}
                    <div className="flex flex-col gap-4 text-center items-center mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 lg:py-2 bg-[#00C1A3]/10 border border-[#00C1A3]/30 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(0,193,163,0.15)]"
                        >
                            <ShieldCheck size={14} className="text-[#00C1A3] animate-pulse" />
                            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[#00C1A3]">
                                Sin Letras Chiquitas
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-[1000] leading-[0.95] italic uppercase tracking-tighter text-white"
                        >
                            PLANES QUE CRECEN <br className="hidden sm:block" />
                            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-emerald-400 to-[#00C1A3] bg-[length:200%_auto] animate-gradient-x pb-1 lg:pb-2">
                                CON TU NEGOCIO
                            </span>
                        </motion.h2>
                    </div>

                    {/* TOGGLE MENSUAL / ANUAL CORREGIDO */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center mb-10 lg:mb-14"
                    >
                        <div className="relative flex p-1 bg-slate-900/60 rounded-full border border-white/10 backdrop-blur-md w-full max-w-[340px] lg:max-w-[400px]">

                            {/* Fondo animado del botón activo ajustado para no superponerse */}
                            <div
                                className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-[#00C1A3] rounded-full transition-transform duration-300 ease-in-out ${isAnnual ? 'translate-x-full' : 'translate-x-0'
                                    }`}
                            />

                            <button
                                onClick={() => setIsAnnual(false)}
                                className={`relative z-10 flex-1 px-2 lg:px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 flex items-center justify-center ${!isAnnual ? 'text-[#020617]' : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                Pago Mensual
                            </button>

                            <button
                                onClick={() => setIsAnnual(true)}
                                className={`relative z-10 flex-1 px-2 lg:px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 flex items-center justify-center gap-1.5 lg:gap-2 ${isAnnual ? 'text-[#020617]' : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                Pago Anual
                                <span className={`text-[10px] px-1.5 lg:px-2 py-0.5 rounded-full uppercase tracking-wider ${isAnnual ? 'bg-[#020617]/20 text-[#020617]' : 'bg-[#00C1A3]/20 text-[#00C1A3]'
                                    }`}>
                                    -10%
                                </span>
                            </button>
                        </div>
                    </motion.div>

                    {/* GRID DE CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className={`relative flex flex-col p-8 rounded-3xl backdrop-blur-md border transition-all duration-300 ${plan.highlight
                                    ? 'bg-[#00C1A3]/10 border-[#00C1A3]/50 shadow-[0_0_40px_rgba(0,193,163,0.2)] md:-translate-y-4'
                                    : 'bg-slate-900/60 border-white/10 shadow-inner hover:bg-slate-900/80'
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00C1A3] text-[#020617] px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-[0_5px_15px_rgba(0,193,163,0.4)]">
                                        Más Popular
                                    </div>
                                )}

                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-xl bg-slate-800/50 border border-white/5">
                                        {plan.icon}
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-[1000] italic uppercase text-white tracking-wide">
                                        {plan.title}
                                    </h3>
                                </div>

                                <p className="text-slate-400 font-light text-sm mb-6 h-10">
                                    {plan.description}
                                </p>

                                {/* PRECIO DINÁMICO */}
                                <div className="mb-2 flex items-baseline">
                                    <span className="text-white text-lg font-bold mr-1">$</span>
                                    <span className="text-5xl font-[1000] italic text-white tracking-tighter transition-all duration-300">
                                        {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                                    </span>
                                    <span className="text-slate-500 font-bold ml-2 text-sm uppercase tracking-widest">
                                        MXN / mes
                                    </span>
                                </div>

                                {/* TEXTO DE FACTURACIÓN ANUAL */}
                                <div className="h-6 mb-6">
                                    {isAnnual ? (
                                        <span className="text-xs text-[#00C1A3] font-medium">
                                            *Facturado anualmente en un solo pago de ${plan.annualTotal}
                                        </span>
                                    ) : (
                                        <span className="text-xs text-transparent">Espacio reservado</span>
                                    )}
                                </div>

                                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-300 font-light text-sm lg:text-base">
                                            <div className={`p-1 rounded-full ${plan.highlight ? 'bg-[#00C1A3]/20' : 'bg-white/5'}`}>
                                                <Check size={14} className={plan.highlight ? "text-[#00C1A3]" : "text-slate-400"} />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* BOTÓN INFERIOR - TOPE DE GAMA */}
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-full sm:w-auto"
                        >
                            <button
                                onClick={() => navigate('/register')}
                                className="group relative w-full sm:w-auto px-8 py-4 lg:px-12 lg:py-5 bg-[#00C1A3] text-[#020617] font-black rounded-2xl lg:rounded-3xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_15px_40px_rgba(0,193,163,0.3)] hover:shadow-[0_20px_50px_rgba(0,193,163,0.5)]"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2 lg:gap-3 text-sm lg:text-lg italic uppercase tracking-widest">
                                    Probar Gratis <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                            </button>
                        </motion.div>
                        <p className="mt-6 text-slate-500 font-light text-lg">
                            * El primer mes es totalmente gratis. No se requiere ingresar método de pago.
                        </p>
                    </div>

                </div>
            </section>

            <style>{`
        @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .animate-gradient-x { animation: gradient-x 4s ease infinite; }
      `}</style>
        </div>
    );
};

export default PricingHome;