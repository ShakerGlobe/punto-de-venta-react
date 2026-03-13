import { motion, useMotionValue, useSpring } from "framer-motion";
import { Zap, User, Building2, Mail, Lock, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import React, { useRef } from "react";

export const RegisterHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // --- Lógica de Parallax ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 25 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 25 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left - rect.width / 2) / 20);
        mouseY.set((e.clientY - rect.top - rect.height / 2) / 20);
    };

    return (
        <section 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#020617] px-6 py-12"
        >
            {/* 1. FONDO: Líneas verdes constantes */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:80px_80px] opacity-40" />
                
                <motion.div style={{ x: springX, y: springY }} className="absolute inset-0">
                    {[...Array(10)].map((_, i) => (
                        <DataLine key={i} index={i} total={10} />
                    ))}
                </motion.div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C1A3]/10 blur-[150px] rounded-full" />
            </div>

            {/* 2. CONTENIDO: Formulario y Texto */}
            <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
                
                {/* Lado Izquierdo: Mensaje de Valor */}
                <div className="hidden lg:flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00C1A3]/10 border border-[#00C1A3]/20 rounded-full">
                            <Sparkles size={14} className="text-[#00C1A3]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00C1A3]">Trial Activation</span>
                        </div>
                        
                        <h1 className="text-7xl font-[1000] text-white italic uppercase tracking-tighter leading-[0.85]">
                            COMIENZA TU <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-emerald-400">
                                PRUEBA GRATIS
                            </span>
                        </h1>
                        <p className="text-slate-400 text-xl font-light max-w-md">
                            Activa tu licencia de evaluación y descubre por qué <span className="text-white font-medium">Nedimi POS</span> es la opción #1 para ingenierías comerciales.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        <StatusItem label="Encryption" value="SSL+ Verified" />
                        <StatusItem label="Database" value="Real-time Sync" />
                        <StatusItem label="Access" value="Full Suite" />
                    </div>
                </div>

                {/* Lado Derecho: La Consola de Registro */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-900/40 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group"
                >
                    <div className="relative z-10 space-y-8">
                        <div>
                            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">Crear Cuenta</h2>
                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-1 italic">Protocolo de Despliegue v2.0</p>
                        </div>

                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-5">
                                <InputField icon={<User size={18} />} label="Nombre" placeholder="Tu nombre" />
                                <InputField icon={<Building2 size={18} />} label="Empresa" placeholder="Tu negocio" />
                            </div>
                            <InputField icon={<Mail size={18} />} label="Email Corporativo" placeholder="nombre@empresa.com" />
                            <InputField icon={<Lock size={18} />} label="Contraseña" type="password" placeholder="••••••••" />

                            <div className="pt-4">
                                <button className="w-full group relative py-5 bg-[#00C1A3] text-[#020617] font-[1000] italic uppercase rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_rgba(0,193,163,0.3)]">
                                    <span className="relative z-10 flex items-center justify-center gap-3 text-lg tracking-widest leading-none">
                                        SOLICITAR ACCESO <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// --- Sub-componentes auxiliares ---

const DataLine = ({ index, total }: { index: number, total: number }) => {
    const laneHeight = 5 + (index * (90 / (total - 1))); 
    return (
        <motion.div
            initial={{ left: "-20%", opacity: 0 }}
            animate={{ left: "110%", opacity: [0, 0.4, 0.4, 0] }}
            transition={{ duration: 8 + index, repeat: Infinity, delay: index * 1.5, ease: "linear" }}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#00C1A3] to-transparent"
            style={{ top: `${laneHeight}%`, width: `${100 + index * 50}px` }}
        >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#00C1A3] rounded-full shadow-[0_0_10px_#00C1A3]" />
        </motion.div>
    );
};

const InputField = ({ icon, label, placeholder, type = "text" }: any) => (
    <div className="space-y-1.5 group">
        <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2 group-focus-within:text-[#00C1A3] transition-colors">
            {label}
        </label>
        <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#00C1A3] transition-colors">
                {icon}
            </div>
            <input 
                type={type}
                placeholder={placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-700 outline-none focus:border-[#00C1A3]/50 focus:bg-white/[0.08] transition-all text-sm font-medium"
            />
        </div>
    </div>
);

const StatusItem = ({ label, value }: { label: string, value: string }) => (
    <div className="flex items-center gap-3">
        <div className="w-1 h-1 rounded-full bg-[#00C1A3] animate-pulse" />
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}:</span>
        <span className="text-[10px] font-black text-white uppercase italic">{value}</span>
    </div>
);