"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { 
    Zap, User, Building2, Mail, Lock, ArrowRight, ShieldCheck, 
    Sparkles, KeyRound, AlertTriangle, CheckCircle2, X, Loader2 
} from "lucide-react";
import React, { useRef, useState } from "react";

export const RegisterHome = () => { // <--- Nombre corregido
    const containerRef = useRef<HTMLDivElement>(null);

    // --- 1. ESTADOS DEL FORMULARIO ---
    const [formData, setFormData] = useState({
        nombre: '',
        empresa: '',
        email: '',
        password: ''
    });

    const [status, setStatus] = useState({
        loading: false,
        message: '',
        type: '' // 'success' o 'error'
    });

    // --- ESTADOS DEL MODAL DE CONFIRMACIÓN ---
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // Cargando en el modal
    const [isCompleted, setIsCompleted] = useState(false);

    // --- 2. MANEJADORES DE EVENTOS ---
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Quitar error visual si el usuario vuelve a escribir
        if(status.type === 'error') setStatus({ ...status, message: '', type: '' });
    };

    // Al darle a "Solicitar Acceso", SOLO abrimos el modal
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ loading: false, message: '', type: '' });
        setShowModal(true);
    };

    // Al darle a "Aceptar" en el modal, HACEMOS LA PETICIÓN A PHP
    const handleAccept = async () => {
        setIsSubmitting(true);

        try {
            const response = await fetch('https://nedimi.com/nedimipos/api/registro.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                // Activar animación de éxito en el modal
                setIsCompleted(true);
                setFormData({ nombre: '', empresa: '', email: '', password: '' });
                
                // Redirigir después de 2 segundos
                setTimeout(() => {
                    window.location.href = "/nedimipos/puntodeventa/"; // <--- NO OLVIDES PONER TU RUTA
                }, 2000);
            } else {
                // Si hay error (ej. correo duplicado), cerrar modal y mostrar error en el formulario
                setShowModal(false);
                setStatus({ loading: false, message: data.error, type: 'error' });
            }
        } catch (error) {
            console.error('Error:', error);
            setShowModal(false);
            setStatus({ loading: false, message: 'Fallo de conexión con el servidor.', type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCancel = () => {
        setShowModal(false);
        setIsCompleted(false);
    };

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
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:80px_80px] opacity-40" />

                <motion.div style={{ x: springX, y: springY }} className="absolute inset-0">
                    {[...Array(10)].map((_, i) => (
                        <DataLine key={i} index={i} total={10} />
                    ))}
                </motion.div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C1A3]/10 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
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

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-5">
                                <InputField 
                                    icon={<User size={18} />} 
                                    label="Nombre" 
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    placeholder="Tu nombre" 
                                    required
                                />
                                <InputField 
                                    icon={<Building2 size={18} />} 
                                    label="Empresa" 
                                    name="empresa"
                                    value={formData.empresa}
                                    onChange={handleChange}
                                    placeholder="Tu negocio" 
                                    required
                                />
                            </div>
                            <InputField 
                                icon={<Mail size={18} />} 
                                label="Email Corporativo" 
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="nombre@empresa.com" 
                                required
                            />
                            <InputField 
                                icon={<Lock size={18} />} 
                                label="Contraseña" 
                                name="password"
                                type="password" 
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••" 
                                required
                            />

                            <div className="bg-amber-500/5 border-l-2 border-amber-500/40 p-4 space-y-2 rounded-r-xl">
                                <div className="flex items-center gap-2">
                                    <KeyRound size={14} className="text-amber-500" />
                                    <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest italic">
                                        Security Notice
                                    </span>
                                </div>
                                <p className="text-[11px] text-slate-400 font-medium leading-relaxed uppercase italic">
                                    La contraseña que definas será tu <span className="text-amber-200">llave de acceso única</span> para la terminal demo. <span className="text-white">Asegúrate de guardarla.</span>
                                </p>
                            </div>

                            {/* --- MENSAJES DE ERROR VISUALES --- */}
                            {status.message && status.type === 'error' && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                    className="p-3 rounded-xl flex items-center gap-3 text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/20"
                                >
                                    <AlertTriangle size={16} className="flex-shrink-0" />
                                    <span>{status.message}</span>
                                </motion.div>
                            )}

                            <div className="pt-4">
                                <button 
                                    type="submit"
                                    className="w-full group relative py-5 bg-[#00C1A3] text-[#020617] font-[1000] italic uppercase rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_rgba(0,193,163,0.3)]"
                                >
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

            {/* --- MODAL DE CONFIRMACIÓN ANIMADO --- */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-md px-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="bg-slate-900 border border-white/10 p-8 rounded-[2rem] shadow-2xl max-w-md w-full relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#00C1A3]/10 blur-[80px] rounded-full pointer-events-none" />

                            <div className="relative z-10 text-center space-y-6">
                                <AnimatePresence mode="wait">
                                    {!isCompleted ? (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <div className="w-16 h-16 bg-[#00C1A3]/10 text-[#00C1A3] rounded-full flex items-center justify-center mx-auto border border-[#00C1A3]/30">
                                                <User size={32} />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-[1000] text-white italic uppercase">Confirmar Registro</h3>
                                                <p className="text-slate-400 font-light mt-2">¿Estás seguro de que deseas crear la cuenta para <strong>{formData.empresa}</strong>?</p>
                                            </div>
                                            <div className="flex items-center gap-3 pt-4">
                                                <button 
                                                    onClick={handleCancel}
                                                    disabled={isSubmitting}
                                                    className="flex-1 py-3.5 px-4 bg-white/5 hover:bg-white/10 text-slate-300 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                                                >
                                                    <X size={18} /> Cancelar
                                                </button>
                                                <button 
                                                    onClick={handleAccept}
                                                    disabled={isSubmitting}
                                                    className="flex-1 py-3.5 px-4 bg-[#00C1A3] text-[#020617] font-black italic uppercase tracking-wider rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_rgba(0,193,163,0.3)] flex items-center justify-center gap-2 disabled:opacity-80 disabled:hover:scale-100"
                                                >
                                                    {isSubmitting ? (
                                                        <><Loader2 size={18} className="animate-spin" /> Creando...</>
                                                    ) : (
                                                        <>Aceptar <ArrowRight size={18} /></>
                                                    )}
                                                </button>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="space-y-6 py-4"
                                        >
                                            <motion.div 
                                                animate={{ rotate: [0, 10, -10, 0] }} 
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                                className="w-20 h-20 bg-[#00C1A3]/20 text-[#00C1A3] rounded-full flex items-center justify-center mx-auto border-2 border-[#00C1A3]"
                                            >
                                                <CheckCircle2 size={40} />
                                            </motion.div>
                                            <div>
                                                <h3 className="text-3xl font-[1000] text-white italic uppercase tracking-tighter">Registro Completado</h3>
                                                <p className="text-[#00C1A3] font-bold tracking-widest uppercase text-xs mt-3 animate-pulse">Redirigiendo a tu sistema...</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
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

const InputField = ({ icon, label, placeholder, type = "text", name, value, onChange, required }: any) => (
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
                name={name}
                value={value}
                onChange={onChange}
                required={required}
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