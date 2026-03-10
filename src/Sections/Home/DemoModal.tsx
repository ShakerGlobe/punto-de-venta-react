import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Zap, Star, CheckCircle2, Lock, User, Building2, Mail } from 'lucide-react';
import { useState } from 'react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const DemoModal = ({ isOpen, onClose }: Props) => {
    const [step, setStep] = useState(1);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Fondo con Blur ultra profundo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 40, rotateX: 15 }}
                        animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 40 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        className="relative bg-[#0b1120] border border-white/10 w-full max-w-xl rounded-[3rem] p-1 shadow-[0_0_100px_rgba(0,193,163,0.1)] overflow-hidden"
                    >
                        {/* Borde de gradiente animado */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00C1A3]/20 via-transparent to-blue-500/20 pointer-events-none" />

                        <div className="relative bg-[#0b1120] rounded-[2.9rem] p-8 lg:p-12">
                            <button
                                onClick={onClose}
                                className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors z-20 bg-white/5 p-2 rounded-full"
                            >
                                <X size={20} />
                            </button>

                            {/* Header del Modal */}
                            <div className="relative z-10 text-center mb-10">
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00C1A3]/10 border border-[#00C1A3]/20 text-[#00C1A3] text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                                >
                                    <Zap className="w-3 h-3 fill-[#00C1A3]" />
                                    Activación Inmediata
                                </motion.div>

                                <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tighter leading-none">
                                    Impulsa tu <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-emerald-400">
                                        negocio hoy
                                    </span>
                                </h2>
                                <p className="text-slate-400 text-sm font-medium">Únete a la nueva generación de comercios inteligentes.</p>
                            </div>

                            {/* Formulario con Micro-interacciones */}
                            <form className="relative z-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative group">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-[#00C1A3] transition-colors" />
                                        <input
                                            type="text"
                                            placeholder="Nombre del Negocio"
                                            className="w-full h-14 pl-12 pr-5 rounded-2xl border border-white/5 bg-slate-900/50 text-white focus:border-[#00C1A3]/50 focus:bg-slate-900 focus:ring-4 focus:ring-[#00C1A3]/10 outline-none transition-all placeholder:text-slate-600"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-[#00C1A3] transition-colors" />
                                        <input
                                            type="text"
                                            placeholder="Tu Nombre"
                                            className="w-full h-14 pl-12 pr-5 rounded-2xl border border-white/5 bg-slate-900/50 text-white focus:border-[#00C1A3]/50 focus:bg-slate-900 focus:ring-4 focus:ring-[#00C1A3]/10 outline-none transition-all placeholder:text-slate-600"
                                        />
                                    </div>
                                </div>

                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-[#00C1A3] transition-colors" />
                                    <input
                                        type="email"
                                        placeholder="correo@tuempresa.com"
                                        className="w-full h-14 pl-12 pr-5 rounded-2xl border border-white/5 bg-slate-900/50 text-white focus:border-[#00C1A3]/50 focus:bg-slate-900 focus:ring-4 focus:ring-[#00C1A3]/10 outline-none transition-all placeholder:text-slate-600"
                                    />
                                </div>

                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-[#00C1A3] transition-colors" />
                                    <input
                                        type="password"
                                        placeholder="Crea una contraseña segura"
                                        className="w-full h-14 pl-12 pr-5 rounded-2xl border border-white/5 bg-slate-900/50 text-white focus:border-[#00C1A3]/50 focus:bg-slate-900 focus:ring-4 focus:ring-[#00C1A3]/10 outline-none transition-all placeholder:text-slate-600"
                                    />
                                    <div className="absolute bottom-0 left-0 h-1 bg-[#00C1A3] rounded-full transition-all duration-500" style={{ width: '40%', opacity: 0.5 }}></div>
                                </div>

                                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                                    <CheckCircle2 className="w-5 h-5 text-[#00C1A3] mt-0.5 shrink-0" />
                                    <p className="text-[11px] text-slate-400 leading-relaxed uppercase tracking-wider font-bold">
                                        Acceso completo por 30 días <span className="text-white">sin compromiso</span>. Tu inventario se sincronizará automáticamente.
                                    </p>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: '#00dcb9' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full h-16 bg-[#00C1A3] text-[#0b1120] font-black rounded-2xl uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(0,193,163,0.2)] transition-all flex items-center justify-center gap-3 mt-6 group"
                                >
                                    <span>Comenzar ahora</span>
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    >
                                        <Zap className="w-5 h-5 fill-current" />
                                    </motion.div>
                                </motion.button>
                            </form>

                            {/* Trust Badge */}
                            <div className="mt-8 flex justify-center items-center gap-6 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                                <ShieldCheck className="w-5 h-5 text-white" />
                                <span className="text-[10px] text-white font-bold uppercase tracking-widest">Encriptación SSL 256-bit</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};