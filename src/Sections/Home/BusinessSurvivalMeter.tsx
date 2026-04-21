import { motion, AnimatePresence } from "framer-motion";
import { 
    Notebook, 
    Smartphone, 
    TrendingDown, 
    TrendingUp, 
    AlertCircle,
    CheckCircle2,
    Zap,
    SearchX,
    ClipboardCheck
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const BusinessSurvivalMeter = () => {
    const [isModern, setIsModern] = useState(false);

    return (
        <section className="relative py-10 bg-white overflow-hidden transition-colors duration-700">
            
            {/* --- DESTELLOS VERDES REFORZADOS (Ahora mucho más visibles) --- */}
            <div className="absolute inset-0 pointer-events-none">
                <AnimatePresence>
                    {isModern ? (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: 0.6, scale: 1 }} 
                            exit={{ opacity: 0 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00C1A3] rounded-full blur-[140px]"
                        />
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 0.2 }} 
                            exit={{ opacity: 0 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-300 rounded-full blur-[120px]"
                        />
                    )}
                </AnimatePresence>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
                
                {/* --- TÍTULO --- */}
                <div className="text-center mb-16 max-w-3xl">
                    <div className={`inline-flex items-center gap-2 px-4 py-1 rounded-full mb-6 uppercase font-black tracking-widest text-[10px] border transition-all ${
                        isModern ? 'bg-emerald-100 border-emerald-200 text-[#00C1A3]' : 'bg-slate-100 border-slate-200 text-slate-500'
                    }`}>
                        {isModern ? <Zap size={12} fill="currentColor" /> : <AlertCircle size={12} />}
                        {isModern ? "Tu negocio en el siglo XXI" : "¿Sigues en la era del papel?"}
                    </div>

                    <h2 className="text-4xl md:text-6xl font-[1000] uppercase tracking-tighter leading-[0.9] text-slate-950 italic">
                        {isModern ? (
                            <span>Todo bajo control <br /><span className="text-[#00C1A3] underline decoration-emerald-200">y sin estrés</span></span>
                        ) : (
                            <span>El desorden te está <br /><span className="text-slate-400">quitando dinero</span></span>
                        )}
                    </h2>
                </div>

                {/* --- INTERRUPTOR DE REALIDAD (El "Reactor") --- */}
                <div className="flex flex-col items-center gap-10 mb-16">
                    <div className="relative group">
                        {/* Efecto de aura intensificado en verde */}
                        <div className={`absolute -inset-6 rounded-full blur-3xl transition-all duration-700 ${
                            isModern ? 'bg-[#00C1A3]/30 opacity-100' : 'bg-slate-500/10 opacity-50'
                        }`} />
                        
                        <button 
                            onClick={() => setIsModern(!isModern)}
                            className={`relative z-20 w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center transition-all duration-500 border-8 shadow-2xl active:scale-95 ${
                                isModern ? 'bg-[#00C1A3] border-white text-white' : 'bg-white border-slate-100 text-slate-400'
                            }`}
                        >
                            {isModern ? <Smartphone size={48} className="animate-bounce" /> : <Notebook size={48} />}
                            <span className="text-[10px] font-black uppercase mt-2 tracking-tighter">
                                {isModern ? "¡Listo!" : "Cambiar"}
                            </span>
                        </button>
                    </div>
                    
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest animate-pulse">
                        {isModern ? "Haz clic para volver al pasado" : "Haz clic para ver el futuro de tu tienda"}
                    </p>
                </div>

                {/* --- LAS TARJETAS DE REALIDAD --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <RealityCard 
                        icon={isModern ? <Smartphone /> : <Notebook />}
                        title={isModern ? "En tu Celular" : "En la libreta"}
                        desc={isModern ? "Revisa tus ventas desde donde estés. Tu info está en la nube, segura y a la mano." : "Si se moja, se pierde o se la llevan, adiós a tus cuentas. Es un riesgo que no necesitas."}
                        active={isModern}
                    />
                    <RealityCard 
                        icon={isModern ? <TrendingUp /> : <TrendingDown />}
                        title={isModern ? "Ganancia Real" : "Cuentas chuecas"}
                        desc={isModern ? "Nedimi suma todo por ti. Sabes exactamente cuánto dinero entró y cuánto ganaste." : "Hacer cuentas a mano cansa y es fácil equivocarse. ¿Seguro que no te falta dinero en caja?"}
                        active={isModern}
                    />
                    <RealityCard 
                        icon={isModern ? <ClipboardCheck /> : <SearchX />}
                        title={isModern ? "Stock Perfecto" : "¿Todavía hay?"}
                        desc={isModern ? "Te avisamos cuando se acabe el refresco o las papas. No más clientes yéndose con las manos vacías." : "Te das cuenta que falta producto hasta que el cliente te lo pide. Así se pierden ventas."}
                        active={isModern}
                    />
                </div>

                {/* --- LLAMADO A LA ACCIÓN (Diseño de botón original mantenido) --- */}
                <motion.div 
                    className="mt-16 md:mt-20 text-center w-full px-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Link 
                        to="/register"
                        className={`inline-block w-full sm:w-auto px-6 md:px-12 py-4 md:py-5 rounded-2xl font-black italic uppercase tracking-widest text-sm md:text-lg transition-all shadow-2xl active:scale-95 ${
                            isModern 
                            ? 'bg-[#00C1A3] text-white shadow-[#00C1A3]/40 scale-100 sm:scale-110' 
                            : 'bg-slate-900 text-white shadow-slate-900/20'
                        }`}
                    >
                        {isModern ? "¡Probar GRATIS ahora!" : "Dejar la libreta hoy mismo"}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

const RealityCard = ({ icon, title, desc, active }: any) => (
    <div className={`p-8 rounded-[2.5rem] border-2 transition-all duration-500 ${
        active 
        ? 'bg-emerald-50 border-emerald-100 shadow-xl shadow-emerald-500/5' 
        : 'bg-white border-slate-100'
    }`}>
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors shadow-sm ${
            active ? 'bg-[#00C1A3] text-white' : 'bg-slate-100 text-slate-400'
        }`}>
            {React.cloneElement(icon, { size: 28 })}
        </div>
        <h4 className={`text-xl font-black italic uppercase tracking-tight mb-3 ${active ? 'text-emerald-900' : 'text-slate-800'}`}>
            {title}
        </h4>
        <p className={`text-sm leading-relaxed font-medium ${active ? 'text-emerald-700/70' : 'text-slate-500'}`}>
            {desc}
        </p>
    </div>
);