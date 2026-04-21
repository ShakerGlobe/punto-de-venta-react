import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PricingHome = () => {
    const navigate = useNavigate();
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            title: "Plan Inicial",
            priceMonthly: "199",
            priceAnnual: "179",
            annualTotal: "2,148",
            description: "Ideal para empezar a dejar la libreta.",
            icon: <Zap size={24} />,
            features: [
                "1 Usuario",
                "Ventas e inventario ilimitado",
                "Usa tu cel como escáner",
                "Primer mes GRATIS",
                "Capacitación Inicial"
            ],
            highlight: false
        },
        {
            title: "Plan Esencial",
            priceMonthly: "499",
            priceAnnual: "449",
            annualTotal: "5,388",
            description: "Para negocios que ya están creciendo.",
            icon: <Star size={24} />,
            features: [
                "Hasta 3 Usuarios",
                "Ventas e inventario ilimitado",
                "Soporte Premium 24/7",
                "Primer mes GRATIS",
                "Reportes avanzados"
            ],
            highlight: true // Este será el bloque azul
        },
        {
            title: "Plan Pro",
            priceMonthly: "799",
            priceAnnual: "719",
            annualTotal: "8,628",
            description: "Control total para dueños exigentes.",
            icon: <Rocket size={24} />,
            features: [
                "Hasta 5 Usuarios",
                "Soporte prioritario",
                "Multisucursal incluido",
                "Primer mes GRATIS",
                "Exportar datos a Excel"
            ],
            highlight: false
        }
    ];

    return (
        <section className="bg-white w-full py-20 md:py-32 overflow-hidden relative" id="precios">
            
            {/* --- DESTELLOS AZULES --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-600/5 rounded-full blur-[160px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* ENCABEZADO HUMANO */}
                <div className="flex flex-col gap-4 text-center items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-100 rounded-full shadow-sm"
                    >
                        <ShieldCheck size={14} className="text-blue-600" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
                            Precios Claros, Sin Sorpresas
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-[1000] leading-[0.9] italic uppercase tracking-tighter text-slate-950"
                    >
                        PLANES QUE CRECEN <br />
                        <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-8">
                            CON TU NEGOCIO
                        </span>
                    </motion.h2>
                </div>

                {/* TOGGLE PAGO LIMPIO */}
                <div className="flex justify-center mb-16">
                    <div className="relative flex p-1.5 bg-slate-100 rounded-full border border-slate-200 w-full max-w-[360px]">
                        <motion.div
                            animate={{ x: isAnnual ? '100%' : '0%' }}
                            className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-blue-600 rounded-full shadow-lg"
                        />
                        <button
                            onClick={() => setIsAnnual(false)}
                            className={`relative z-10 flex-1 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-colors ${!isAnnual ? 'text-white' : 'text-slate-500'}`}
                        >
                            Mensual
                        </button>
                        <button
                            onClick={() => setIsAnnual(true)}
                            className={`relative z-10 flex-1 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${isAnnual ? 'text-white' : 'text-slate-500'}`}
                        >
                            Anual <span className="text-[9px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-md">-10%</span>
                        </button>
                    </div>
                </div>

                {/* GRID DE PLANES */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-20">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col p-10 rounded-[2.5rem] border transition-all duration-500 ${
                                plan.highlight
                                ? 'bg-blue-600 border-blue-600 text-white shadow-[0_40px_80px_-15px_rgba(37,99,235,0.4)] scale-105 z-20'
                                : 'bg-white border-slate-100 text-slate-900 shadow-xl shadow-slate-200/50 hover:border-blue-200'
                            }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-slate-950 text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                                    ¡Más Vendido!
                                </div>
                            )}

                            <div className="flex items-center gap-4 mb-8">
                                <div className={`p-4 rounded-2xl ${plan.highlight ? 'bg-white/10 text-white' : 'bg-blue-50 text-blue-600'}`}>
                                    {plan.icon}
                                </div>
                                <h3 className="text-2xl font-[1000] italic uppercase tracking-tight">
                                    {plan.title}
                                </h3>
                            </div>

                            <p className={`text-sm font-medium mb-8 ${plan.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                                {plan.description}
                            </p>

                            <div className="mb-2 flex items-baseline gap-1">
                                <span className="text-2xl font-bold">$</span>
                                <span className="text-6xl font-[1000] italic tracking-tighter">
                                    {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                                </span>
                                <span className={`text-[10px] font-black uppercase tracking-widest ml-2 ${plan.highlight ? 'text-blue-200' : 'text-slate-400'}`}>
                                    MXN / mes
                                </span>
                            </div>

                            <div className="h-6 mb-8">
                                {isAnnual && (
                                    <span className={`text-[10px] font-bold uppercase tracking-wide ${plan.highlight ? 'text-blue-200' : 'text-blue-600'}`}>
                                        *Pago anual de ${plan.annualTotal}
                                    </span>
                                )}
                            </div>

                            <ul className="space-y-5 mb-10 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm font-bold uppercase italic tracking-tight">
                                        <div className={`p-1 rounded-full ${plan.highlight ? 'bg-white/20' : 'bg-blue-50'}`}>
                                            <Check size={14} className={plan.highlight ? "text-white" : "text-blue-600"} strokeWidth={4} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => navigate('/register')}
                                className={`w-full py-5 rounded-2xl font-black italic uppercase tracking-widest text-sm transition-all active:scale-95 ${
                                    plan.highlight
                                    ? 'bg-white text-blue-600 shadow-xl hover:bg-slate-50'
                                    : 'bg-slate-900 text-white shadow-lg hover:bg-slate-800'
                                }`}
                            >
                                Seleccionar Plan
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* CTA FINAL INFERIOR */}
                <div className="flex flex-col items-center text-center">
                    <button
                        onClick={() => navigate('/register')}
                        className="group flex items-center gap-4 px-12 py-6 bg-blue-600 text-white font-[1000] italic uppercase rounded-2xl shadow-[0_20px_50px_-10px_rgba(37,99,235,0.5)] hover:scale-105 transition-all active:scale-95"
                    >
                        <span className="text-xl tracking-widest">Empezar Mes Gratis</span>
                        <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                    <p className="mt-8 text-slate-400 font-medium text-lg italic">
                        * No necesitas tarjeta de crédito para probarlo.
                    </p>
                </div>
            </div>
        </section>
    );
};