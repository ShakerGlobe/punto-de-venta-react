import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Zap, CheckCircle2, Lock, User, Building2, Mail, Eye, EyeOff, AlertCircle, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const DemoModal = ({ isOpen, onClose }: Props) => {
    // Estados del formulario
    const [businessName, setBusinessName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Estados de UI
    const [showPassword, setShowPassword] = useState(false);
    const [isPassFocused, setIsPassFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // FUNCIÓN PRO: Limpiar todo al cerrar
    const handleResetAndClose = () => {
        onClose();
        // Pequeño timeout para que no se vea el cambio mientras el modal desaparece
        setTimeout(() => {
            setBusinessName("");
            setUserName("");
            setEmail("");
            setPassword("");
            setShowPassword(false);
            setIsPassFocused(false);
            setIsLoading(false);
        }, 300);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulación de envío
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
        handleResetAndClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Fondo con Blur ultra profundo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleResetAndClose}
                        className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 40, rotateX: 15 }}
                        animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 40 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        className="relative bg-[#0b1120] border border-white/10 w-full max-w-xl rounded-[2.5rem] md:rounded-[3rem] p-1 shadow-[0_0_100px_rgba(0,193,163,0.1)] overflow-hidden max-h-[95vh] overflow-y-auto lg:overflow-visible"
                    >
                        {/* Borde de gradiente animado */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00C1A3]/20 via-transparent to-blue-500/20 pointer-events-none" />

                        <div className="relative bg-[#0b1120] rounded-[2.4rem] md:rounded-[2.9rem] p-6 md:p-12">
                            <button
                                onClick={handleResetAndClose}
                                className="absolute top-4 right-4 md:top-8 md:right-8 text-slate-500 hover:text-white transition-colors z-20 bg-white/5 p-2 rounded-full"
                            >
                                <X size={20} />
                            </button>

                            {/* Header del Modal */}
                            <div className="relative z-10 text-center mb-8 md:mb-10">
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00C1A3]/10 border border-[#00C1A3]/20 text-[#00C1A3] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-4 md:mb-6"
                                >
                                    <Zap className="w-3 h-3 fill-[#00C1A3]" />
                                    Activación Inmediata
                                </motion.div>

                                <h2 className="text-3xl md:text-5xl font-black text-white mb-3 md:mb-4 tracking-tighter leading-none">
                                    Impulsa tu <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-emerald-400">
                                        negocio hoy
                                    </span>
                                </h2>
                                <p className="text-slate-400 text-xs md:text-sm font-medium uppercase tracking-tighter">Únete a la nueva generación de comercios inteligentes.</p>
                            </div>

                            {/* Formulario */}
                            <form className="relative z-10 space-y-4 md:space-y-5" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative group">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-[#00C1A3] transition-colors" />
                                        <input
                                            required
                                            type="text"
                                            value={businessName}
                                            onChange={(e) => setBusinessName(e.target.value)}
                                            placeholder="Nombre del Negocio"
                                            className="w-full h-12 md:h-14 pl-12 pr-5 rounded-2xl border border-white/5 bg-slate-900/50 text-white focus:border-[#00C1A3]/50 focus:bg-slate-900 focus:ring-4 focus:ring-[#00C1A3]/10 outline-none transition-all placeholder:text-slate-600 text-sm md:text-base"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-[#00C1A3] transition-colors" />
                                        <input
                                            required
                                            type="text"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                            placeholder="Tu Nombre"
                                            className="w-full h-12 md:h-14 pl-12 pr-5 rounded-2xl border border-white/5 bg-slate-900/50 text-white focus:border-[#00C1A3]/50 focus:bg-slate-900 focus:ring-4 focus:ring-[#00C1A3]/10 outline-none transition-all placeholder:text-slate-600 text-sm md:text-base"
                                        />
                                    </div>
                                </div>

                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-[#00C1A3] transition-colors" />
                                    <input
                                        required
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="correo@tuempresa.com"
                                        className="w-full h-12 md:h-14 pl-12 pr-5 rounded-2xl border border-white/5 bg-slate-900/50 text-white focus:border-[#00C1A3]/50 focus:bg-slate-900 focus:ring-4 focus:ring-[#00C1A3]/10 outline-none transition-all placeholder:text-slate-600 text-sm md:text-base"
                                    />
                                </div>

                                {/* PASSWORD FIELD */}
                                <div className="relative space-y-2">
                                    <div className="relative group">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-[#00C1A3] transition-colors" />
                                        <input
                                            required
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onFocus={() => setIsPassFocused(true)}
                                            onBlur={() => setIsPassFocused(false)}
                                            placeholder="Crea una contraseña segura"
                                            className="w-full h-12 md:h-14 pl-12 pr-14 rounded-2xl border border-white/5 bg-slate-900/50 text-white focus:border-[#00C1A3]/50 focus:bg-slate-900 focus:ring-4 focus:ring-[#00C1A3]/10 outline-none transition-all placeholder:text-slate-600 text-sm md:text-base"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-[#00C1A3] transition-colors"
                                        >
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={showPassword ? "hide" : "show"}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                >
                                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                </motion.div>
                                            </AnimatePresence>
                                        </button>

                                        {/* Barra de fortaleza (solo visible si hay texto) */}
                                        {password.length > 0 && (
                                            <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-[#00C1A3]"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${Math.min((password.length / 8) * 100, 100)}%` }}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <AnimatePresence>
                                        {isPassFocused && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 flex items-start gap-3 overflow-hidden"
                                            >
                                                <AlertCircle size={16} className="text-blue-400 mt-0.5 shrink-0" />
                                                <p className="text-[9px] md:text-[10px] text-blue-200 font-bold uppercase tracking-wider leading-tight">
                                                    Mínimo 8 caracteres. Esta será tu llave de acceso a la plataforma.
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/5">
                                    <CheckCircle2 className="w-5 h-5 text-[#00C1A3] mt-0.5 shrink-0" />
                                    <p className="text-[10px] md:text-[11px] text-slate-400 leading-relaxed uppercase tracking-wider font-bold">
                                        Acceso completo por 30 días <span className="text-white">sin compromiso</span>. No se requiere tarjeta de crédito.
                                    </p>
                                </div>

                                <motion.button
                                    disabled={isLoading}
                                    whileHover={!isLoading ? { scale: 1.02, backgroundColor: '#00dcb9' } : {}}
                                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                                    className="w-full h-14 md:h-16 bg-[#00C1A3] disabled:bg-slate-700 text-[#0b1120] font-[1000] rounded-2xl md:rounded-[1.5rem] uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(0,193,163,0.2)] transition-all flex items-center justify-center gap-3 mt-4 md:mt-6 group"
                                >
                                    {isLoading ? (
                                        <Loader2 className="w-6 h-6 animate-spin text-[#0b1120]" />
                                    ) : (
                                        <>
                                            <span className="text-sm md:text-base">Crear Cuenta Gratis</span>
                                            <Zap className="w-5 h-5 fill-current group-hover:scale-125 transition-transform" />
                                        </>
                                    )}
                                </motion.button>
                            </form>

                            {/* Trust Badge */}
                            <div className="mt-8 flex justify-center items-center gap-4 md:gap-6 opacity-30 grayscale hover:opacity-100 transition-all duration-500">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-white" />
                                    <span className="text-[8px] md:text-[10px] text-white font-bold uppercase tracking-[0.2em]">SSL Secured</span>
                                </div>
                                <div className="w-px h-3 bg-white/20" />
                                <span className="text-[8px] md:text-[10px] text-white font-bold uppercase tracking-[0.2em]">Privacy First</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};