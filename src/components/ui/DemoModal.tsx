import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Zap, CheckCircle2, Lock, User, Building2, Mail, Eye, EyeOff, AlertCircle, Loader2, KeyRound } from 'lucide-react';
import { useState } from 'react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const DemoModal = ({ isOpen, onClose }: Props) => {
    const [businessName, setBusinessName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isPassFocused, setIsPassFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleResetAndClose = () => {
        onClose();
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
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
        handleResetAndClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
                    {/* Backdrop con Blur Dinámico */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleResetAndClose}
                        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
                    />

                    {/* Contenedor del Modal */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-lg bg-[#0f172a] border border-white/10 rounded-[2rem] shadow-2xl shadow-[#00C1A3]/5 overflow-hidden z-10"
                    >
                        {/* Luces de ambiente sutiles en las esquinas */}
                        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#00C1A3]/10 blur-[100px] pointer-events-none" />
                        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[100px] pointer-events-none" />

                        {/* Botón Cerrar Pulido */}
                        <button
                            onClick={handleResetAndClose}
                            className="absolute top-6 right-6 text-slate-400 hover:text-white transition-all bg-white/5 hover:bg-white/10 p-2 rounded-xl z-20"
                        >
                            <X size={18} />
                        </button>

                        <div className="p-8 md:p-12">
                            {/* Header */}
                            <div className="text-center mb-10">
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6"
                                >
                                    <Zap size={12} className="fill-current" />
                                    Activación en 60 segundos
                                </motion.div>

                                <h2 className="text-4xl font-black text-white mb-3 tracking-tight">
                                    Impulsa tu <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-emerald-400">
                                        negocio hoy
                                    </span>
                                </h2>
                                <p className="text-slate-400 text-sm font-medium tracking-tight">
                                    Crea tu cuenta de NedimiPOS y empieza a vender.
                                </p>
                            </div>

                            {/* Formulario */}
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="relative group">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-[#00C1A3] transition-colors" />
                                        <input
                                            required
                                            type="text"
                                            value={businessName}
                                            onChange={(e) => setBusinessName(e.target.value)}
                                            placeholder="Negocio"
                                            className="w-full h-12 pl-11 pr-4 rounded-xl border border-white/5 bg-slate-900/50 text-white focus:border-[#00C1A3]/50 focus:ring-4 focus:ring-[#00C1A3]/5 outline-none transition-all placeholder:text-slate-600 text-sm"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-[#00C1A3] transition-colors" />
                                        <input
                                            required
                                            type="text"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                            placeholder="Tu Nombre"
                                            className="w-full h-12 pl-11 pr-4 rounded-xl border border-white/5 bg-slate-900/50 text-white focus:border-[#00C1A3]/50 focus:ring-4 focus:ring-[#00C1A3]/5 outline-none transition-all placeholder:text-slate-600 text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-[#00C1A3] transition-colors" />
                                    <input
                                        required
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="correo@empresa.com"
                                        className="w-full h-12 pl-11 pr-4 rounded-xl border border-white/5 bg-slate-900/50 text-white focus:border-[#00C1A3]/50 focus:ring-4 focus:ring-[#00C1A3]/5 outline-none transition-all placeholder:text-slate-600 text-sm"
                                    />
                                </div>

                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-[#00C1A3] transition-colors" />
                                    <input
                                        required
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onFocus={() => setIsPassFocused(true)}
                                        onBlur={() => setIsPassFocused(false)}
                                        placeholder="Contraseña"
                                        className="w-full h-12 pl-11 pr-12 rounded-xl border border-white/5 bg-slate-900/50 text-white focus:border-[#00C1A3]/50 focus:ring-4 focus:ring-[#00C1A3]/5 outline-none transition-all placeholder:text-slate-600 text-sm font-medium"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                                    >
                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>

                                <AnimatePresence>
                                    {isPassFocused && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="bg-blue-500/5 border border-blue-500/10 rounded-lg p-3 flex items-center gap-3"
                                        >
                                            <AlertCircle size={14} className="text-blue-400 shrink-0" />
                                            <p className="text-[10px] text-blue-300 font-semibold uppercase tracking-wider">
                                                Mínimo 8 caracteres para máxima seguridad.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* AVISO DE CONTRASEÑA - IMPORTANTE */}
                                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                                    <KeyRound className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                    <div className="space-y-1">
                                        <p className="text-[10px] text-amber-200 font-bold uppercase tracking-wider">
                                            ¡Guarda tu contraseña!
                                        </p>
                                        <p className="text-[9px] text-amber-200/60 leading-tight uppercase font-medium">
                                            Esta será tu clave de acceso para entrar a la Demo. Asegúrate de recordarla o anotarla.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                                    <CheckCircle2 className="w-4 h-4 text-[#00C1A3] shrink-0" />
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                                        30 días gratis <span className="text-white">sin tarjetas</span>.
                                    </p>
                                </div>

                                <motion.button
                                    disabled={isLoading}
                                    whileHover={!isLoading ? { scale: 1.01, y: -2 } : {}}
                                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                                    className="w-full h-14 bg-[#00C1A3] text-[#0b1120] font-black rounded-xl uppercase tracking-widest shadow-xl shadow-[#00C1A3]/20 transition-all flex items-center justify-center gap-3 mt-4"
                                >
                                    {isLoading ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <>
                                            <span className="text-sm">Empezar ahora</span>
                                            <Zap size={16} className="fill-current" />
                                        </>
                                    )}
                                </motion.button>
                            </form>

                            {/* Footer del Modal */}
                            <div className="mt-8 pt-8 border-t border-white/5 flex justify-center items-center gap-6">
                                <div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
                                    <ShieldCheck size={14} className="text-white" />
                                    <span className="text-[9px] text-white font-bold uppercase tracking-[0.2em]">SSL Secured</span>
                                </div>
                                <div className="w-px h-3 bg-white/10" />
                                <div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
                                    <Lock size={14} className="text-white" />
                                    <span className="text-[9px] text-white font-bold uppercase tracking-[0.2em]">AES-256 Bit</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};