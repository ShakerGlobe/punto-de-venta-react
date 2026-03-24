import { motion, AnimatePresence } from "framer-motion";
import { 
    Zap, 
    ShieldAlert, 
    TrendingDown, 
    TrendingUp, 
    DollarSign,
    Skull,
    Notebook,
    Eraser,
    SearchX,
    CheckCircle2,
    BarChart3,
    Smartphone
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const BusinessSurvivalMeter = () => {
    const [isChaos, setIsChaos] = useState(true);

    // Efecto de parpadeo aleatorio para el estado de Caos
    const [glitch, setGlitch] = useState(false);
    useEffect(() => {
        if (!isChaos) return;
        const interval = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 150);
        }, 3000);
        return () => clearInterval(interval);
    }, [isChaos]);

    const navigate = useNavigate();

    return (
        <section className={`relative py-2 md:py-14 overflow-hidden transition-colors duration-700 ${isChaos ? 'bg-[#0a0000]' : 'bg-[#020617]'}`}>
            
            {/* --- FONDO ATMOSFÉRICO --- */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence>
                    {isChaos ? (
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent animate-pulse"
                        />
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00C1A3]/10 via-transparent to-transparent"
                        />
                    )}
                </AnimatePresence>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
                
                {/* --- TÍTULO DE IMPACTO --- */}
                <div className="text-center mb-10 overflow-visible max-w-3xl">
                    <motion.div
                        animate={isChaos ? { x: [-1, 1, -1] } : {}}
                        transition={{ repeat: Infinity, duration: 0.1 }}
                        className={`inline-flex items-center gap-2 px-5 py-1.5 rounded-full border mb-6 uppercase font-black tracking-[0.3em] text-[9px] ${isChaos ? 'bg-red-500/10 border-red-500/50 text-red-500' : 'bg-[#00C1A3]/10 border-[#00C1A3]/50 text-[#00C1A3]'}`}
                    >
                        {isChaos ? <ShieldAlert size={12} className="animate-bounce" /> : <CheckCircle2 size={12} />}
                        {isChaos ? "TU NEGOCIO ESTÁ EN RIESGO" : "NEGOCIO BLINDADO Y SINCRONIZADO"}
                    </motion.div>

                    <h2 className={`text-4xl md:text-7xl font-[1000] italic uppercase tracking-tighter leading-[0.85] overflow-visible ${isChaos ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-cyan-400'}`}>
                        {isChaos ? (
                            <span className={glitch ? 'opacity-50 blur-sm' : ''}>
                                ¿Vas a dejar tu patrimonio <br />
                                <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]">en una libreta?</span>
                            </span>
                        ) : (
                            <span>Toma el control <br />del futuro.</span>
                        )}
                    </h2>
                </div>

                {/* --- NÚCLEO INTERACTIVO --- */}
                <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
                    
                    {/* El Reactor / Botón */}
                    <div className="relative w-64 h-64 flex items-center justify-center">
                        <motion.div 
                            animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className={`absolute inset-0 rounded-full border-2 border-dashed ${isChaos ? 'border-red-900/40' : 'border-[#00C1A3]/30'}`}
                        />
                        
                        <button 
                            onClick={() => setIsChaos(!isChaos)}
                            className="group relative z-20 w-44 h-44 rounded-full flex flex-col items-center justify-center transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl"
                        >
                            <div className={`absolute inset-0 rounded-full blur-[30px] transition-colors duration-700 ${isChaos ? 'bg-red-600/40' : 'bg-[#00C1A3]/30'}`} />
                            <div className={`relative w-full h-full rounded-full border-4 flex flex-col items-center justify-center gap-1 backdrop-blur-xl transition-all duration-700 ${isChaos ? 'bg-red-950/40 border-red-500 shadow-[inset_0_0_20px_rgba(239,68,68,0.5)]' : 'bg-[#020617]/80 border-[#00C1A3] shadow-[inset_0_0_30px_rgba(0,193,163,0.3)]'}`}>
                                {isChaos ? (
                                    <>
                                        <Skull size={32} className="text-red-500 animate-pulse" />
                                        <span className="text-[10px] font-black text-red-500 tracking-[0.2em] uppercase">Peligro</span>
                                        <span className="text-white font-black text-[11px] uppercase italic">DETENER CAOS</span>
                                    </>
                                ) : (
                                    <>
                                        <TrendingUp size={32} className="text-[#00C1A3]" />
                                        <span className="text-[10px] font-black text-[#00C1A3] tracking-[0.2em] uppercase">Éxito</span>
                                        <span className="text-white font-black text-[11px] uppercase italic">ACTIVO</span>
                                    </>
                                )}
                            </div>
                        </button>
                    </div>

                    {/* LOGO DE NEDIMI AL LADO */}
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="flex items-center gap-2">
                            <span className={`text-3xl md:text-5xl font-[1000] italic tracking-tighter uppercase transition-colors duration-700 ${isChaos ? 'text-white/20' : 'text-white'}`}>
                                Nedimi<span className={isChaos ? 'text-red-900/40' : 'text-[#00C1A3]'}>POS</span>
                            </span>
                            {!isChaos && (
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-3 h-3 bg-[#00C1A3] rounded-full shadow-[0_0_15px_#00C1A3]" />
                            )}
                        </div>
                        <p className={`text-[10px] font-black uppercase tracking-[0.4em] transition-colors duration-700 ${isChaos ? 'text-red-900/50' : 'text-[#00C1A3]'}`}>
                            {isChaos ? "SISTEMA DESCONECTADO" : "TECNOLOGÍA A TU FAVOR"}
                        </p>
                    </div>
                </div>

                {/* --- TARJETAS DE IMPACTO --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    <PainCard 
                        icon={isChaos ? <Notebook size={24}/> : <CheckCircle2 size={24}/>}
                        title={isChaos ? "Cuentas en Papel" : "Todo en la Nube"}
                        desc={isChaos ? "Libretas manchadas, hojas perdidas y errores matemáticos. Si el papel se pierde, tu dinero también." : "Acceso instantáneo desde cualquier lugar. Tu información está segura y respaldada para siempre."}
                        isChaos={isChaos}
                    />
                    <PainCard 
                        icon={isChaos ? <Eraser size={24}/> : <BarChart3 size={24}/>}
                        title={isChaos ? "Fugas Invisibles" : "Ganancia Real"}
                        desc={isChaos ? "El 'robo hormiga' y los errores de cambio son invisibles a mano. Estás perdiendo dinero sin saberlo." : "Reportes automáticos de utilidad. Mira exactamente cuánto estás ganando por cada producto vendido."}
                        isChaos={isChaos}
                    />
                    <PainCard 
                        icon={isChaos ? <SearchX size={24}/> : <Smartphone size={24}/>}
                        title={isChaos ? "Sin Inventario" : "Control Total"}
                        desc={isChaos ? "No sabes qué tienes ni qué te falta hasta que se acaba. Vendes a ciegas y pierdes clientes." : "Alertas de stock bajo. Nunca vuelvas a decirle 'no tenemos' a un cliente interesado."}
                        isChaos={isChaos}
                    />
                </div>

                {/* --- CTA FINAL --- */}
                <motion.div 
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    className="mt-12 flex flex-col items-center gap-4"
                >
                    <p className={`text-[11px] font-black tracking-widest uppercase italic transition-colors duration-700 ${isChaos ? 'text-red-500/60' : 'text-slate-500'}`}>
                        {isChaos ? "¿Vas a esperar a que tu negocio sea solo un recuerdo?" : "La era digital ya está aquí. Únete a ella 👇"}
                    </p>
                    <button 
                        onClick={() => navigate('/register')}
                        className="px-10 py-4 bg-[#00C1A3] text-[#020617] font-[1000] italic uppercase tracking-widest rounded-xl shadow-[0_15px_40px_rgba(0,193,163,0.3)] hover:scale-105 transition-all active:scale-95"
                    >
                        Adquirir Nedimi POS Ahora
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

// --- SUB-COMPONENTE DE TARJETA ---
const PainCard = ({ icon, title, desc, isChaos }: any) => (
    <div className={`p-6 rounded-[2rem] border transition-all duration-700 ${isChaos ? 'bg-red-500/5 border-red-500/10' : 'bg-white/5 border-[#00C1A3]/20 shadow-2xl shadow-[#00C1A3]/5'}`}>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${isChaos ? 'bg-red-500/20 text-red-500' : 'bg-[#00C1A3]/20 text-[#00C1A3]'}`}>
            {icon}
        </div>
        <h4 className={`text-lg font-black italic uppercase tracking-tight mb-2 transition-colors ${isChaos ? 'text-red-200/40' : 'text-white'}`}>{title}</h4>
        <p className={`text-[12px] leading-relaxed font-light transition-colors ${isChaos ? 'text-slate-600' : 'text-slate-400'}`}>
            {desc}
        </p>
    </div>
);