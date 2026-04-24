import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Zap, Rocket, ShieldCheck, ArrowRight, X, UserCheck, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PricingHome = () => {
    const navigate = useNavigate();
    const [isAnnual, setIsAnnual] = useState(false);

    // --- ESTADOS Y VARIABLES PARA STRIPE ---
    const [showModal, setShowModal] = useState(false);
    const [selectedPlanInfo, setSelectedPlanInfo] = useState<{ id: string, name: string } | null>(null);
    const POS_LOGIN_URL = 'https://nedimipos.com/puntodeventa/index.php'; 

    // Configuración de WhatsApp para Plan Corporativo
    const phoneNumber = "525534618549";
    const message = "Hola, quiero saber más sobre el plan corporativo";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const plans = [
        {
            id: "plan_inicial", 
            title: "Plan Inicial",
            priceMonthly: "197",
            priceAnnual: "167", // Equivalente de 1997 / 12
            annualTotal: "1,997",
            description: "Ideal para empezar a dejar la libreta.",
            icon: <Zap size={24} />,
            features: [
                "1 Usuario",
                "Ventas e inventario ilimitado",
                "Usa tu cel como escáner",
                "15 días GRATIS",
                "Capacitación Inicial"
            ],
            highlight: false
        },
        {
            id: "plan_esencial", 
            title: "Plan Esencial",
            priceMonthly: "497",
            priceAnnual: "417", // Equivalente de 4997 / 12
            annualTotal: "4,997",
            description: "Para negocios que ya están creciendo.",
            icon: <Star size={24} />,
            features: [
                "Hasta 3 Usuarios",
                "Ventas e inventario ilimitado",
                "Soporte Premium 24/7",
                "15 días GRATIS",
                "Reportes avanzados"
            ],
            highlight: true
        },
        {
            title: "Plan Corporativo", 
            isEnterprise: true, 
            description: "Control total para multisucursales.",
            icon: <Rocket size={24} />,
            features: [
                "Hasta 5 Usuarios",
                "Soporte prioritario",
                "Multisucursal incluido",
                "15 días GRATIS",
                "Exportar datos a Excel"
            ],
            highlight: false
        }
    ];

    // --- FUNCIONES PARA EL MANEJO DEL MODAL STRIPE ---
    const handleSelectPlan = (planId: string, planName: string) => {
        const finalPlanId = isAnnual ? `${planId}_anual` : `${planId}_mensual`;
        setSelectedPlanInfo({ id: finalPlanId, name: planName });
        setShowModal(true);
    };

    const handleTengoCuenta = () => {
        if (selectedPlanInfo) {
            window.location.href = `${POS_LOGIN_URL}?checkout_plan=${selectedPlanInfo.id}`;
        }
    };

    const handleCrearCuenta = () => {
        navigate('/register');
        setShowModal(false);
    };

    return (
        <section className="bg-white w-full py-20 md:py-32 overflow-hidden relative" id="precios">
            
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00C1A3]/15 rounded-full blur-[140px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="flex flex-col gap-4 text-center items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-50 border border-emerald-100 rounded-full shadow-sm"
                    >
                        <ShieldCheck size={14} className="text-[#00C1A3]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00C1A3]">
                            Precios Claros, Sin Sorpresas
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-[1000] leading-[0.95] italic uppercase tracking-tighter text-slate-950"
                    >
                        PLANES QUE CRECEN <br />
                        <span className="text-[#00C1A3] underline decoration-emerald-100 decoration-8 underline-offset-8">
                            CON TU NEGOCIO
                        </span>
                    </motion.h2>
                </div>

                <div className="flex justify-center mb-16">
                    <div className="relative flex p-1.5 bg-slate-100 rounded-full border border-slate-200 w-full max-w-[340px]">
                        <motion.div
                            animate={{ x: isAnnual ? '100%' : '0%' }}
                            className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-[#00C1A3] rounded-full shadow-lg"
                        />
                        <button
                            onClick={() => setIsAnnual(false)}
                            className={`relative z-10 flex-1 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors ${!isAnnual ? 'text-white' : 'text-slate-500'}`}
                        >
                            Mensual
                        </button>
                        <button
                            onClick={() => setIsAnnual(true)}
                            className={`relative z-10 flex-1 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${isAnnual ? 'text-white' : 'text-slate-500'}`}
                        >
                            Anual <span className={`text-[9px] px-2 py-0.5 rounded-md ${isAnnual ? 'bg-white/20 text-white' : 'bg-emerald-100 text-[#00C1A3]'}`}>-10%</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-20">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] border transition-all duration-500 ${
                                plan.highlight
                                ? 'bg-[#00C1A3] border-[#00C1A3] text-white shadow-[0_40px_80px_-15px_rgba(0,193,163,0.4)] scale-100 md:scale-105 z-20'
                                : 'bg-white border-slate-100 text-slate-900 shadow-xl shadow-slate-200/50 hover:border-[#00C1A3]/30'
                            }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-slate-950 text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                                    ¡Más Vendido!
                                </div>
                            )}

                            <div className="flex items-center gap-4 mb-8">
                                <div className={`p-4 rounded-2xl ${plan.highlight ? 'bg-white/10 text-white' : 'bg-emerald-50 text-[#00C1A3]'}`}>
                                    {plan.icon}
                                </div>
                                <h3 className="text-2xl font-[1000] italic uppercase tracking-tight">
                                    {plan.title}
                                </h3>
                            </div>

                            <p className={`text-sm font-medium mb-8 ${plan.highlight ? 'text-emerald-50' : 'text-slate-500'}`}>
                                {plan.description}
                            </p>

                            <div className="mb-2 flex items-baseline gap-1 min-h-[80px]">
                                {plan.isEnterprise ? (
                                    <span className="text-3xl md:text-4xl font-[1000] italic tracking-tighter leading-tight uppercase">
                                        Consulta con ventas
                                    </span>
                                ) : (
                                    <>
                                        <span className="text-2xl font-bold">$</span>
                                        <span className="text-5xl md:text-6xl font-[1000] italic tracking-tighter">
                                            {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                                        </span>
                                        <span className={`text-[9px] font-black uppercase tracking-widest ml-2 ${plan.highlight ? 'text-emerald-100' : 'text-slate-400'}`}>
                                            MXN / mes
                                        </span>
                                    </>
                                )}
                            </div>

                            <div className="h-6 mb-8">
                                {isAnnual && !plan.isEnterprise && (
                                    <span className={`text-[10px] font-bold uppercase tracking-wide ${plan.highlight ? 'text-emerald-100' : 'text-[#00C1A3]'}`}>
                                        *Pago anual de ${plan.annualTotal}
                                    </span>
                                )}
                            </div>

                            <ul className="space-y-5 mb-10 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm font-bold uppercase italic tracking-tight">
                                        <div className={`p-1 rounded-full ${plan.highlight ? 'bg-white/20' : 'bg-emerald-50'}`}>
                                            <Check size={14} className={plan.highlight ? "text-white" : "text-[#00C1A3]"} strokeWidth={4} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {plan.isEnterprise ? (
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-5 rounded-2xl font-black italic uppercase tracking-widest text-sm transition-all active:scale-95 flex items-center justify-center gap-3 bg-[#25D366] text-white shadow-lg shadow-emerald-200/50 hover:bg-[#1EBE5C]"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.338 11.897-11.896a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                    Consultar
                                </a>
                            ) : (
                                <button
                                    onClick={() => handleSelectPlan(plan.id!, plan.title)}
                                    className={`w-full py-5 rounded-2xl font-black italic uppercase tracking-widest text-sm transition-all active:scale-95 ${
                                        plan.highlight
                                        ? 'bg-white text-[#00C1A3] shadow-xl hover:bg-slate-50'
                                        : 'bg-slate-900 text-white shadow-lg hover:bg-slate-800'
                                    }`}
                                >
                                    Seleccionar Plan
                                </button>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col items-center text-center">
                    <button
                        onClick={() => navigate('/register')}
                        className="group flex items-center gap-4 px-8 md:px-12 py-5 md:py-6 bg-[#00C1A3] text-white font-[1000] italic uppercase rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,193,163,0.5)] hover:scale-105 transition-all active:scale-95"
                    >
                        <span className="text-lg md:text-xl tracking-widest">Empezar Mi Demo Gratis</span>
                        <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                    <p className="mt-8 text-slate-400 font-medium text-base italic">
                        * No necesitas tarjeta de crédito para probarlo.
                    </p>
                </div>
            </div>

            {/* --- MODAL DE AUTENTICACIÓN --- */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }} 
                            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                            onClick={() => setShowModal(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-white rounded-[2rem] p-8 max-w-md w-full shadow-2xl z-10 overflow-hidden"
                        >
                            <button 
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-slate-50 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="text-center mb-8 mt-2">
                                <h3 className="text-2xl font-[1000] italic uppercase text-slate-900 mb-2">
                                    ¡Casi listo!
                                </h3>
                                <p className="text-slate-500 font-medium">
                                    Has seleccionado el <span className="font-[1000] text-[#00C1A3]">{selectedPlanInfo?.name} {isAnnual ? '(Anual)' : '(Mensual)'}</span>. Para continuar con el pago, necesitamos saber si ya eres parte de Nedimi.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <button
                                    onClick={handleTengoCuenta}
                                    className="flex items-center justify-center gap-3 w-full py-4 bg-[#00C1A3] text-white rounded-2xl font-[1000] uppercase tracking-widest text-sm hover:bg-[#00a88f] transition-colors shadow-lg shadow-[#00C1A3]/30"
                                >
                                    <UserCheck size={20} />
                                    Ya tengo cuenta
                                </button>
                                
                                <div className="relative flex items-center py-2">
                                    <div className="flex-grow border-t border-slate-200"></div>
                                    <span className="flex-shrink-0 mx-4 text-slate-400 text-[10px] font-black tracking-widest uppercase">O</span>
                                    <div className="flex-grow border-t border-slate-200"></div>
                                </div>

                                <button
                                    onClick={handleCrearCuenta}
                                    className="flex items-center justify-center gap-3 w-full py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-[1000] uppercase tracking-widest text-sm hover:border-[#00C1A3] hover:text-[#00C1A3] transition-colors"
                                >
                                    <UserPlus size={20} />
                                    Crear cuenta nueva
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};