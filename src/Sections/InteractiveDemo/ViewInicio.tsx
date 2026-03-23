import React, { useState, useEffect } from "react";
import { TrendingUp, Box, AlertTriangle, Users, Sun, Moon, User, Sparkles, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- COMPONENTE ANIMATED NUMBER (TU ORIGINAL) ---
const AnimatedNumber = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    const isCurrency = value.includes('$');

    useEffect(() => {
        let startTimestamp = null;
        const duration = 2000;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const current = easeOutProgress * numericValue;
            setDisplayValue(current);
            if (progress < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    }, [numericValue]);

    return (
        <span>
            {isCurrency
                ? `$${displayValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                : Math.floor(displayValue)}
        </span>
    );
};

// --- GUÍA DE TUTORIAL CON POSICIÓN DINÁMICA ---
const TutorialCard = ({ step, onNext, onSkip, totalSteps, currentIdx, position = "bottom" }) => (
    <motion.div
        initial={{ opacity: 0, y: position === "bottom" ? 15 : -15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: position === "bottom" ? 15 : -15, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className={`absolute z-[120] w-[320px] bg-white rounded-[2.5rem] p-6 shadow-[0_25px_60px_-15px_rgba(0,193,163,0.3)] border border-[#00C1A3]/30 pointer-events-auto left-1/2 -translate-x-1/2 ${position === "bottom" ? "mt-6 top-full" : "mb-6 bottom-full"
            }`}
    >
        <div className="flex gap-1 mb-4">
            {[...Array(totalSteps)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{ width: i === currentIdx ? 24 : 6, backgroundColor: i === currentIdx ? "#00C1A3" : "#E2E8F0" }}
                    className="h-1 rounded-full"
                />
            ))}
        </div>

        <div className="flex justify-between items-start mb-2">
            <h4 className="text-[#050335] text-lg font-black flex items-center gap-2 tracking-tight">
                <Sparkles size={18} className="text-[#00C1A3]" />
                {step.title}
            </h4>
            <button onClick={onSkip} className="text-slate-300 hover:text-red-500 transition-colors p-1">
                <X size={18} />
            </button>
        </div>

        <p className="text-slate-600 text-[13px] leading-relaxed mb-6 font-medium">
            {step.description}
        </p>

        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNext}
            className="w-full bg-[#050335] text-white py-3.5 rounded-2xl font-black text-[11px] flex items-center justify-center gap-2 hover:bg-[#00C1A3] hover:text-[#050335] transition-all group tracking-widest uppercase"
        >
            {currentIdx === totalSteps - 1 ? "Entendido" : "Siguiente"}
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>

        {/* Triangulito dinámico según posición */}
        <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-[#00C1A3]/20 ${position === "bottom"
            ? "-top-2 border-l border-t"
            : "-bottom-2 border-r border-b"
            }`} />
    </motion.div>
);

export const ViewInicio = ({ isDarkMode, toggleTheme }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isTutorialActive, setIsTutorialActive] = useState(true);

    const steps = [
        { id: "header", title: "Configuración y Perfil", description: "Aquí puedes gestionar tu sesión de administrador y cambiar entre modo claro u oscuro para trabajar con mayor comodidad." },
        { id: "stats", title: "Resumen Operativo", description: "Muestra las ventas totales del día, el número de productos en tu catálogo y el personal que está laborando actualmente." },
        { id: "stock", title: "Control de Inventario", description: "Esta sección detecta automáticamente qué productos están por agotarse para que puedas reabastecer a tiempo." }
    ];

    const nextStep = () => {
        if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
        else setIsTutorialActive(false);
    };

    const theme = {
        card: isDarkMode ? "bg-[#0f172a] border-white/5 shadow-xl" : "bg-white border-slate-200 shadow-sm",
        text: isDarkMode ? "text-slate-200" : "text-slate-800",
    };

    const stats = [
        { id: 'ventas', label: "VENTAS DEL DÍA", value: "$4,500.00", icon: <TrendingUp />, color: "text-[#00C1A3]" },
        { id: 'productos', label: "PRODUCTOS TOTALES", value: "6", icon: <Box />, color: "text-indigo-400" },
        { id: 'stock', label: "BAJOS EN STOCK", value: "2", icon: <AlertTriangle />, color: "text-orange-400" },
        { id: 'staff', label: "USUARIOS ACTIVOS", value: "3", icon: <Users />, color: "text-blue-400" }
    ];

    return (
        <div className="relative min-h-screen p-4 md:p-8 overflow-hidden">
            <AnimatePresence>
                {isTutorialActive && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#050335]/60 backdrop-blur-[3px] z-[100] pointer-events-auto"
                        onClick={() => setIsTutorialActive(false)}
                    />
                )}
            </AnimatePresence>

            <div className={`max-w-7xl mx-auto space-y-6 transition-colors duration-500 ${theme.text}`}>

                {/* HEADER EN FORMA DE PASTILLA (ESTILO UNIFICADO) */}
                <header className={`relative z-[110] flex justify-between items-center mb-10 px-8 py-4 rounded-[2rem] border backdrop-blur-md transition-all duration-500 ${isDarkMode
                        ? 'bg-[#0a0f1d]/60 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
                        : 'bg-white/70 border-slate-200 shadow-xl shadow-slate-200/50'
                    } ${isTutorialActive && currentStep === 0 ? 'ring-2 ring-[#00C1A3]/50 scale-[1.01]' : ''}`}>

                    {/* Sección Izquierda: Título y Módulo */}
                    <div className="flex flex-col">
                        <span className={`text-[10px] uppercase tracking-[0.2em] font-black mb-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                            Panel de Control
                        </span>
                        <h1 className="text-[#00C1A3] text-2xl font-black tracking-tight flex items-center gap-3">
                            <Sparkles size={24} className="fill-[#00C1A3]/20" /> Dashboard
                        </h1>
                    </div>

                    {/* Sección Derecha: Acciones y Perfil */}
                    <div className="flex items-center gap-6">
                        {/* BOTÓN DÍA/NOCHE */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2.5 rounded-2xl transition-all hover:scale-110 active:scale-95 ${isDarkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-100 hover:bg-slate-200'
                                }`}
                        >
                            {isDarkMode ? (
                                <Sun size={22} className="text-yellow-400 fill-yellow-400/20" />
                            ) : (
                                <Moon size={22} className="text-indigo-600 fill-indigo-600/10" />
                            )}
                        </button>

                        {/* Info de Usuario */}
                        <div className={`flex items-center gap-4 pl-6 border-l ${isDarkMode ? 'border-white/10' : 'border-slate-200'}`}>
                            <div className="flex flex-col items-end">
                                <span className={`text-[10px] uppercase font-black ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Sesión activa</span>
                                <span className={`text-sm font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>Admin Nedimi</span>
                            </div>
                            <div className="w-10 h-10 rounded-2xl bg-[#00C1A3] flex items-center justify-center shadow-[0_0_15px_rgba(0,193,163,0.3)]">
                                <User size={20} className="text-[#050335]" fill="currentColor" />
                            </div>
                        </div>
                    </div>

                    {/* TOOLTIP DEL TUTORIAL */}
                    {isTutorialActive && currentStep === 0 && (
                        <TutorialCard
                            step={steps[0]}
                            onNext={nextStep}
                            onSkip={() => setIsTutorialActive(false)}
                            totalSteps={steps.length}
                            currentIdx={currentStep}
                        />
                    )}
                </header>

                {/* BANNER */}
                <div className={`p-8 rounded-[1.5rem] border transition-all relative overflow-hidden ${theme.card}`}>
                    <div className="relative z-10">
                        <h2 className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Bienvenido al sistema, <span className="text-[#00C1A3]">Nedimi Admin</span></h2>
                        <p className="text-slate-500 text-sm mt-1 font-medium italic">Resumen de tu negocio al día de hoy.</p>
                    </div>
                    <div className="absolute top-[-20%] right-[-5%] w-40 h-40 bg-[#00C1A3]/10 rounded-full blur-3xl animate-pulse" />
                </div>

                {/* STATS GRID */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-500 ${isTutorialActive && currentStep === 1 ? 'relative z-[101] scale-[1.02]' : ''}`}>
                    {stats.map((stat) => (
                        <div key={stat.id} className={`p-8 rounded-[1.5rem] border flex flex-col items-center text-center transition-all ${theme.card} group`}>
                            <div className={`p-4 rounded-2xl mb-4 bg-white/5 ${stat.color}`}>{React.cloneElement(stat.icon, { size: 24 })}</div>
                            <p className="text-[10px] font-black uppercase tracking-widest mb-1 text-slate-500">{stat.label}</p>
                            <h3 className={`text-3xl font-black tracking-tight ${stat.color}`}><AnimatedNumber value={stat.value} /></h3>
                        </div>
                    ))}
                    {isTutorialActive && currentStep === 1 && <TutorialCard step={steps[1]} onNext={nextStep} onSkip={() => setIsTutorialActive(false)} totalSteps={steps.length} currentIdx={currentStep} />}
                </div>

                {/* TABLA BAJO STOCK */}
                <div className={`p-8 rounded-[1.5rem] border transition-all relative ${theme.card} ${isTutorialActive && currentStep === 2 ? 'z-[101] scale-[1.01] ring-2 ring-[#00C1A3]/30' : ''}`}>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-500"><AlertTriangle size={24} /></div>
                        <div>
                            <h3 className="text-xl font-black">Atención: Productos con Bajo Stock</h3>
                            <p className="text-sm text-slate-500 font-medium italic">Nedimi te avisa para que nunca te quedes sin stock.</p>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-white/5">
                                    <th className="pb-4">PRODUCTO</th>
                                    <th className="pb-4">PRECIO</th>
                                    <th className="pb-4">STOCK ACTUAL</th>
                                    <th className="pb-4 text-right pr-2">UNIDAD</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { name: "Jamón", price: "$120.00", stock: "0.5", unit: "KG" },
                                    { name: "Papas Chips", price: "$25.00", stock: "10", unit: "PZ" }
                                ].map((item, i) => (
                                    <tr key={i} className="group transition-colors">
                                        <td className="py-5 text-sm font-bold group-hover:text-[#00C1A3] transition-colors">{item.name}</td>
                                        <td className="py-5 text-sm font-black italic">{item.price}</td>
                                        <td className="py-5 text-sm font-black text-orange-400">{item.stock}</td>
                                        <td className="py-5 text-right pr-2">
                                            <span className="text-[10px] font-black bg-blue-500/10 text-blue-400 px-3 py-1 rounded-md uppercase border border-blue-500/10">{item.unit}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* POSICIÓN "TOP" PARA QUE NO SE SALGA POR ABAJO */}
                    {isTutorialActive && currentStep === 2 && <TutorialCard step={steps[2]} onNext={nextStep} onSkip={() => setIsTutorialActive(false)} totalSteps={steps.length} currentIdx={currentStep} position="top" />}
                </div>
            </div>
        </div>
    );
};