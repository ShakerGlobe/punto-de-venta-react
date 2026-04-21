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

    // --- ESTADOS DEL MODAL ---
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (status.type === 'error' || status.type === 'warning') {
            setStatus({ loading: false, message: '', type: '' });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.nombre.trim() || !formData.empresa.trim() || !formData.email.trim() || !formData.password.trim()) {
            setStatus({ loading: false, message: 'Completa todos los campos.', type: 'warning' });
            return;
        }
        setShowModal(true);
    };

    const handleAccept = async () => {
        setIsSubmitting(true);
        setStatus({ loading: true, message: '', type: '' });
        try {
            const response = await fetch('/api/registro.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.success) {
                setIsCompleted(true);
                setFormData({ nombre: '', empresa: '', email: '', password: '' });
                setTimeout(() => setShowModal(false), 4000);
            } else {
                setShowModal(false);
                setStatus({ loading: false, message: data.error || 'Error al crear cuenta.', type: 'error' });
            }
        } catch (error) {
            setShowModal(false);
            setStatus({ loading: false, message: 'Error de conexión.', type: 'error' });
        } finally {
            setIsSubmitting(false);
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
        mouseX.set((e.clientX - rect.left - rect.width / 2) / 25);
        mouseY.set((e.clientY - rect.top - rect.height / 2) / 25);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-6 py-20"
        >
            {/* FONDO LIMPIO CON DESTELLOS AZULES */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:60px_60px] opacity-40" />
                <motion.div style={{ x: springX, y: springY }} className="absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                        <DataLine key={i} index={i} total={6} />
                    ))}
                </motion.div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[900px] h-[600px] bg-blue-600/5 rounded-full blur-[140px]" />
            </div>

            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
                
                {/* --- LADO IZQUIERDO: CONTENIDO --- */}
                <div className="flex flex-col gap-10 text-center lg:text-left items-center lg:items-start">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
                            <Sparkles size={14} className="text-blue-600" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">Comienza tu prueba gratis</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-[1000] text-slate-950 italic uppercase tracking-tighter leading-[0.85]">
                            PRUÉBALO GRATIS Y <br />
                            <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-8">TOMA EL CONTROL</span>
                        </h1>
                        <p className="text-slate-500 text-lg md:text-xl font-medium max-w-md">
                            Descubre cómo puedes controlar tus ventas e inventario <span className="text-slate-950 font-bold">desde tu celular</span>. Sin compromisos.
                        </p>
                    </motion.div>

                    {/* STATS DE CONFIANZA */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Prueba Gratis</span>
                            <span className="text-3xl font-[1000] text-blue-600 italic uppercase">15 Días</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Inversión</span>
                            <span className="text-3xl font-[1000] text-blue-600 italic uppercase">Desde $199</span>
                        </div>
                    </motion.div>
                </div>

                {/* --- LADO DERECHO: FORMULARIO --- */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative">
                    <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,102,255,0.12)] relative overflow-hidden group">
                        
                        <div className="relative z-10 space-y-8">
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-black text-slate-950 uppercase italic tracking-tighter">Crea tu cuenta</h2>
                                <p className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Activación instantánea</p>
                            </div>

                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <InputField icon={<User size={18} />} label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" required />
                                    <InputField icon={<Building2 size={18} />} label="Nombre de tu Tienda" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Ej. Abarrotes Mary" required />
                                </div>
                                <InputField icon={<Mail size={18} />} label="Correo Electrónico" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="ejemplo@gmail.com" required />
                                <InputField icon={<Lock size={18} />} label="Contraseña" name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} placeholder="••••••••" required isPassword showPassword={showPassword} onTogglePassword={() => setShowPassword(!showPassword)} />

                                {/* AVISO DE SEGURIDAD AZUL */}
                                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl">
                                    <p className="text-[11px] text-slate-600 font-bold uppercase italic leading-snug">
                                        Esta contraseña será tu <span className="text-blue-600">llave maestra</span> para entrar al sistema. Guárdala bien.
                                    </p>
                                </div>

                                <AnimatePresence>
                                    {status.message && (
                                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className={`p-3 rounded-xl flex items-center gap-3 text-sm font-bold border ${status.type === 'error' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                                            <AlertTriangle size={16} /> <span>{status.message}</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="pt-4">
                                    {/* BOTÓN: COLOR AZUL, DISEÑO ORIGINAL MANTENIDO */}
                                    <button
                                        type="submit"
                                        className="w-full group/btn relative py-5 bg-blue-600 text-white font-[1000] italic uppercase rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-600/30"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-3 text-lg tracking-widest">
                                            SOLICITAR ACCESO <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* --- MODAL DE ÉXITO --- */}
            <AnimatePresence>
                {showModal && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
                        <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-white p-10 rounded-[3rem] shadow-2xl max-w-md w-full text-center space-y-6 border border-slate-100">
                            {!isCompleted ? (
                                <>
                                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                        <User size={32} />
                                    </div>
                                    <h3 className="text-3xl font-[1000] text-slate-950 italic uppercase">¿Todo listo?</h3>
                                    <p className="text-slate-500 font-medium">Crearemos la cuenta para <strong className="text-slate-900">{formData.empresa}</strong></p>
                                    <div className="flex gap-4 pt-4">
                                        <button onClick={() => setShowModal(false)} className="flex-1 py-4 bg-slate-100 text-slate-600 font-bold rounded-2xl">Cancelar</button>
                                        <button onClick={handleAccept} className="flex-1 py-4 bg-blue-600 text-white font-black italic uppercase rounded-2xl shadow-lg shadow-blue-600/20">
                                            {isSubmitting ? <Loader2 className="animate-spin mx-auto" /> : "¡Sí, vamos!"}
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="py-6">
                                    <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-3xl font-[1000] text-slate-950 italic uppercase mt-6">¡Éxito total!</h3>
                                    <p className="text-blue-600 font-black uppercase tracking-widest text-xs mt-4">Revisa tu correo para activar tu cuenta.</p>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

// --- SUB-COMPONENTES ---

const DataLine = ({ index, total }: { index: number, total: number }) => {
    const laneHeight = 15 + (index * (70 / (total - 1)));
    return (
        <motion.div
            initial={{ left: "-20%", opacity: 0 }}
            animate={{ left: "110%", opacity: [0, 0.2, 0.2, 0] }}
            transition={{ duration: 12 + index, repeat: Infinity, delay: index * 2, ease: "linear" }}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            style={{ top: `${laneHeight}%`, width: `${150 + index * 50}px` }}
        />
    );
};

const InputField = ({ icon, label, placeholder, type = "text", name, value, onChange, required, isPassword, showPassword, onTogglePassword }: any) => (
    <div className="space-y-2 group">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2 group-focus-within:text-blue-600 transition-colors">{label}</label>
        <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">{icon}</div>
            <input
                type={type} name={name} value={value} onChange={onChange} required={required} placeholder={placeholder}
                className={`w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 ${isPassword ? 'pr-12' : 'pr-4'} text-slate-900 placeholder:text-slate-300 outline-none focus:border-blue-600/50 focus:bg-white focus:ring-4 focus:ring-blue-600/5 transition-all text-sm font-bold`}
            />
            {isPassword && (
                <button type="button" onClick={onTogglePassword} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            )}
        </div>
    </div>
);