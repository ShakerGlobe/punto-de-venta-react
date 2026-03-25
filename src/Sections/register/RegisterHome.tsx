"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import {
    Zap, User, Building2, Mail, Lock, ArrowRight, ShieldCheck,
    Sparkles, KeyRound, AlertTriangle, CheckCircle2, X, Loader2,
    Eye, EyeOff
} from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

export const RegisterHome = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

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
        type: '' 
    });

    const [showPassword, setShowPassword] = useState(false);

    // --- ESTADOS DEL MODAL DE CONFIRMACIÓN ---
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    // --- EFECTOS DE UX ---
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [showModal]);

    // --- 2. MANEJADORES DE EVENTOS Y VALIDACIÓN ---
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (status.type === 'error' || status.type === 'warning') {
            setStatus({ loading: false, message: '', type: '' });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.nombre.trim() || !formData.empresa.trim() || !formData.email.trim() || !formData.password.trim()) {
            setStatus({ loading: false, message: 'Por favor, completa todos los campos.', type: 'warning' });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({ loading: false, message: 'Ingresa un correo electrónico válido.', type: 'warning' });
            return;
        }

        if (formData.password.length < 6) {
            setStatus({ loading: false, message: 'La contraseña debe tener al menos 6 caracteres.', type: 'warning' });
            return;
        }

        setStatus({ loading: false, message: '', type: '' });
        setShowModal(true); 
    };

    // --- 3. CONEXIÓN A LA BASE DE DATOS ---
    const handleAccept = async () => {
        setIsSubmitting(true);
        setStatus({ loading: true, message: '', type: '' });

        try {
            const response = await fetch('/api/registro.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`Error del servidor: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                setIsCompleted(true);
                setFormData({ nombre: '', empresa: '', email: '', password: '' });

                // Ya no redirigimos al sistema. Cerramos el modal tras 4 segundos.
                setTimeout(() => {
                    setShowModal(false);
                    setIsCompleted(false);
                }, 4000);
            } else {
                setShowModal(false);
                setStatus({ loading: false, message: data.error || 'No se pudo crear la cuenta.', type: 'error' });
            }
        } catch (error) {
            console.error('Error en el registro:', error);
            setShowModal(false);
            setStatus({ loading: false, message: 'Hubo un problema de conexión. Inténtalo de nuevo.', type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCancel = () => {
        if (!isSubmitting) {
            setShowModal(false);
            setIsCompleted(false);
        }
    };

    // --- Lógica de Parallax ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 25 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 25 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current || isMobile) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left - rect.width / 2) / 20);
        mouseY.set((e.clientY - rect.top - rect.height / 2) / 20);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] px-6 py-16 md:py-24"
        >
            {/* FONDO ANIMADO */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:80px_80px] opacity-40 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />

                {!isMobile && (
                    <motion.div style={{ x: springX, y: springY }} className="absolute inset-0">
                        {[...Array(8)].map((_, i) => (
                            <DataLine key={i} index={i} total={8} />
                        ))}
                    </motion.div>
                )}

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-gradient-to-tr from-[#00C1A3]/10 to-emerald-500/5 blur-[120px] lg:blur-[150px] rounded-full" />
            </div>

            <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                {/* --- LADO IZQUIERDO: TEXTOS --- */}
                <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left items-center lg:items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4 lg:space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00C1A3]/10 border border-[#00C1A3]/20 rounded-full shadow-[0_0_15px_rgba(0,193,163,0.15)]">
                            <Sparkles size={14} className="text-[#00C1A3]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#00C1A3]">COMIENZA TU PRUEBA GRATIS</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-[1000] text-white italic uppercase tracking-tighter leading-[0.9] md:leading-[0.85]">
                            PRUÉBALO GRATIS Y TOMA EL CONTROL <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-emerald-400 drop-shadow-sm">
                                DE TU TIENDA
                            </span>
                        </h1>
                        <p className="text-slate-400 text-base sm:text-lg md:text-xl font-light max-w-md mx-auto lg:mx-0">
                            Empieza hoy sin compromiso. Configura tu tienda en minutos y descubre cómo puedes controlar tus ventas, inventario y dinero <span className="text-white font-medium">desde tu celular.</span>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center lg:justify-start gap-10 lg:flex-col lg:gap-8"
                    >
                        {/* ITEM: PRUEBA GRATIS */}
                        <div className="flex flex-col items-center lg:items-start group">
                            <span className="text-[13px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1 group-hover:text-[#00C1A3] transition-colors">
                                PRUEBA GRATIS
                            </span>
                            <span className="text-2xl md:text-4xl font-[1000] text-[#00C1A3] italic uppercase tracking-tighter leading-none">
                                30 DÍAS
                            </span>
                        </div>

                        {/* ITEM: PRECIO MES */}
                        <div className="flex flex-col items-center lg:items-start group">
                            <span className="text-[13px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1 group-hover:text-[#00C1A3] transition-colors">
                                PRECIO POR MES
                            </span>
                            <span className="text-2xl md:text-4xl font-[1000] text-[#00C1A3] italic uppercase tracking-tighter leading-none">
                                $499 MXN
                            </span>
                        </div>

                        {/* ITEM: PRECIO AÑO */}
                        <div className="flex flex-col items-center lg:items-start group">
                            <span className="text-[13px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1 group-hover:text-[#00C1A3] transition-colors">
                                PRECIO POR AÑO
                            </span>
                            <span className="text-2xl md:text-4xl font-[1000] text-[#00C1A3] italic uppercase tracking-tighter leading-none">
                                $4,997 MXN
                            </span>
                        </div>

                        {/* ITEM: SIN CONTRATOS */}
                        <div className="flex flex-col items-center lg:items-start group">
                            <span className="text-[13px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1 group-hover:text-[#00C1A3] transition-colors">
                                SIN CONTRATOS
                            </span>
                            <span className="text-2xl md:text-4xl font-[1000] text-[#00C1A3] italic uppercase tracking-tighter leading-none">
                                CANCELA CUANDO QUIERAS
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* --- LADO DERECHO: FORMULARIO --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-900/60 backdrop-blur-3xl border border-white/10 p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden w-full max-w-xl mx-auto lg:max-w-none group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-[2rem] md:rounded-[3rem]" />

                    <div className="relative z-10 space-y-6 md:space-y-8">
                        <div className="text-center sm:text-left">
                            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase italic tracking-tighter">Crear Cuenta</h2>
                            <p className="text-[#00C1A3] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] mt-1.5 italic">Protocolo de Despliegue v2.0</p>
                        </div>

                        <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
                            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
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
                            
                            {/* CAMPO DE CONTRASEÑA CON EL TOGGLE */}
                            <InputField
                                icon={<Lock size={18} />}
                                label="Contraseña (Mín. 6 caracteres)"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                required
                                isPassword={true}
                                showPassword={showPassword}
                                onTogglePassword={() => setShowPassword(!showPassword)}
                            />

                            <div className="bg-amber-500/5 border-l-2 border-amber-500/40 p-3 md:p-4 space-y-1.5 md:space-y-2 rounded-r-xl">
                                <div className="flex items-center gap-2">
                                    <KeyRound size={14} className="text-amber-500" />
                                    <span className="text-[9px] sm:text-[10px] font-black text-amber-500 uppercase tracking-widest italic">
                                        Security Notice
                                    </span>
                                </div>
                                <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium leading-relaxed uppercase italic">
                                    La contraseña que definas será tu <span className="text-amber-200">llave de acceso única</span> para la terminal demo. <span className="text-white">Asegúrate de guardarla.</span>
                                </p>
                            </div>

                            {/* --- MENSAJES DE ERROR VISUALES --- */}
                            <AnimatePresence>
                                {status.message && (status.type === 'error' || status.type === 'warning') && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, y: -10 }}
                                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className={`p-3 rounded-xl flex items-center gap-3 text-xs sm:text-sm font-medium border overflow-hidden ${status.type === 'error'
                                                ? 'bg-red-500/10 text-red-400 border-red-500/20'
                                                : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                            }`}
                                    >
                                        <AlertTriangle size={16} className="flex-shrink-0" />
                                        <span>{status.message}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="pt-2 md:pt-4">
                                <button
                                    type="submit"
                                    className="w-full group/btn relative py-4 md:py-5 bg-gradient-to-r from-[#00C1A3] to-emerald-400 text-[#020617] font-[1000] italic uppercase rounded-xl md:rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_15px_30px_rgba(0,193,163,0.3)] focus:outline-none focus:ring-4 focus:ring-[#00C1A3]/50"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg tracking-widest leading-none">
                                        SOLICITAR ACCESO <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity" />
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
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/90 backdrop-blur-md p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="bg-slate-900 border border-white/10 p-6 sm:p-8 md:p-10 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)] max-w-md w-full relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] h-[250px] bg-[#00C1A3]/20 blur-[80px] rounded-full pointer-events-none" />

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
                                            <div className="w-16 h-16 bg-[#00C1A3]/10 text-[#00C1A3] rounded-full flex items-center justify-center mx-auto border border-[#00C1A3]/30 shadow-inner">
                                                <User size={32} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl sm:text-2xl font-[1000] text-white italic uppercase tracking-tight">Confirmar Registro</h3>
                                                <p className="text-slate-400 font-light text-sm sm:text-base mt-2">¿Estás seguro de que deseas crear la cuenta para <strong className="text-white">{formData.empresa}</strong>?</p>
                                            </div>

                                            <div className="flex flex-col-reverse sm:flex-row items-center gap-3 pt-4">
                                                <button
                                                    onClick={handleCancel}
                                                    disabled={isSubmitting}
                                                    className="w-full sm:flex-1 py-3.5 px-4 bg-white/5 hover:bg-white/10 text-slate-300 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                                                >
                                                    <X size={18} /> Cancelar
                                                </button>
                                                <button
                                                    onClick={handleAccept}
                                                    disabled={isSubmitting}
                                                    className="w-full sm:flex-1 py-3.5 px-4 bg-[#00C1A3] text-[#020617] font-black italic uppercase tracking-wider rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_rgba(0,193,163,0.3)] flex items-center justify-center gap-2 disabled:opacity-80 disabled:hover:scale-100"
                                                >
                                                    {isSubmitting ? (
                                                        <><Loader2 size={18} className="animate-spin" /> Procesando</>
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
                                            className="space-y-6 py-6"
                                        >
                                            <motion.div
                                                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                                className="w-20 h-20 bg-[#00C1A3]/20 text-[#00C1A3] rounded-full flex items-center justify-center mx-auto border-2 border-[#00C1A3] shadow-[0_0_30px_rgba(0,193,163,0.3)]"
                                            >
                                                <CheckCircle2 size={40} />
                                            </motion.div>
                                            <div>
                                                <h3 className="text-2xl sm:text-3xl font-[1000] text-white italic uppercase tracking-tighter">¡Registro Exitoso!</h3>
                                                <p className="text-[#00C1A3] font-bold tracking-widest uppercase text-xs mt-3 animate-pulse">
                                                    Por favor, revisa tu bandeja de entrada para activar tu cuenta.
                                                </p>
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
    const laneHeight = 10 + (index * (80 / (total - 1)));
    return (
        <motion.div
            initial={{ left: "-20%", opacity: 0 }}
            animate={{ left: "110%", opacity: [0, 0.3, 0.3, 0] }}
            transition={{ duration: 10 + index, repeat: Infinity, delay: index * 1.5, ease: "linear" }}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#00C1A3] to-transparent will-change-transform"
            style={{ top: `${laneHeight}%`, width: `${100 + index * 50}px` }}
        >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#00C1A3] rounded-full shadow-[0_0_10px_#00C1A3]" />
        </motion.div>
    );
};

interface InputFieldProps {
    icon: React.ReactNode;
    label: string;
    placeholder: string;
    type?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    isPassword?: boolean;
    showPassword?: boolean;
    onTogglePassword?: () => void;
}

const InputField = ({ icon, label, placeholder, type = "text", name, value, onChange, required, isPassword, showPassword, onTogglePassword }: InputFieldProps) => (
    <div className="space-y-1.5 group">
        <label className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2 group-focus-within:text-[#00C1A3] transition-colors">
            {label}
        </label>
        <div className="relative">
            <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#00C1A3] transition-colors">
                {icon}
            </div>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className={`w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl py-3.5 sm:py-4 pl-10 sm:pl-12 ${isPassword ? 'pr-12' : 'pr-4'} text-white placeholder:text-slate-600 outline-none focus:border-[#00C1A3]/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-[#00C1A3]/20 transition-all text-xs sm:text-sm font-medium`}
            />
            {isPassword && (
                <button
                    type="button"
                    onClick={onTogglePassword}
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-[#00C1A3] transition-colors focus:outline-none"
                >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            )}
        </div>
    </div>
);

const StatusItem = ({ label, value }: { label: string, value: string }) => (
    <div className="flex items-center gap-2 sm:gap-3 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 lg:bg-transparent lg:border-transparent lg:px-0 lg:py-0 transition-colors hover:bg-white/10">
        <div className="w-1.5 h-1.5 rounded-full bg-[#00C1A3] animate-pulse shadow-[0_0_5px_#00C1A3]" />
        <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}:</span>
        <span className="text-[9px] sm:text-[10px] font-black text-white uppercase italic">{value}</span>
    </div>
);