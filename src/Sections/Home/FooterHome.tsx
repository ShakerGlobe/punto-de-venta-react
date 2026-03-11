import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Rocket, Zap, ShieldCheck, Cloud, Mail, Phone, MapPin,
    Facebook, Instagram, Linkedin, Youtube // Añadido Youtube
} from 'lucide-react';
import { useRef } from 'react';

interface FooterHomeProps {
    onOpenModal: () => void;
}

export const FooterHome = ({ onOpenModal }: FooterHomeProps) => {
    const containerRef = useRef(null);
    const currentYear = new Date().getFullYear();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <footer ref={containerRef} className="relative pt-24 pb-12 overflow-visible bg-[#020617]">
            {/* DECORACIÓN DE FONDO */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[600px] bg-[#00C1A3]/10 blur-[80px] md:blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* --- SECCIÓN CTA --- */}
                <motion.div style={{ scale, opacity }} className="relative group mb-24">
                    <div className="relative bg-white/[0.02] border border-white/10 rounded-[2rem] md:rounded-[4rem] p-6 sm:p-12 md:p-20 text-center backdrop-blur-3xl shadow-2xl">

                        {/* RAYO: Corregido para que no se corte y con animación de pulso */}
                        <div className="absolute -top-10 -right-10 md:-top-16 md:-right-16 opacity-10 group-hover:opacity-30 transition-all duration-700 pointer-events-none">
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    filter: ["drop-shadow(0 0 0px #00C1A3)", "drop-shadow(0 0 20px #00C1A3)", "drop-shadow(0 0 0px #00C1A3)"]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <Zap size={140} className="md:size-[220px] text-[#00C1A3] rotate-12" />
                            </motion.div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-6xl font-[1000] text-white mb-8 tracking-tighter italic uppercase leading-[1.2] px-4">
                                ¿LISTO PARA <br className="sm:hidden" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-cyan-500 inline-block pr-3">
                                    {" "}EVOLUCIONAR?
                                </span>
                            </h2>

                            <button
                                onClick={onOpenModal}
                                className="group relative w-full sm:w-auto px-8 md:px-12 py-5 bg-[#00C1A3] text-[#020617] text-base md:text-lg font-[1000] uppercase rounded-xl md:rounded-2xl overflow-hidden flex items-center justify-center gap-4 mx-auto transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,193,163,0.3)]"
                            >
                                <span className="relative z-10">¡EMPEZAR AHORA!</span>
                                <Rocket size={22} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* --- SECCIÓN DE NAVEGACIÓN Y CONTACTOS --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-t border-white/5 pt-16">
                    <div className="space-y-6 text-center sm:text-left">
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">
                            Nedimi<span className="text-[#00C1A3]">POS</span>
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
                            Llevando la gestión de negocios al siguiente nivel con tecnología cloud de última generación.
                        </p>

                        {/* REDES SOCIALES INCLUYENDO YOUTUBE */}
                        <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                            <a href="https://www.facebook.com/profile.php?id=100092165101068" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-[#00C1A3] hover:bg-[#00C1A3]/10 transition-all group">
                                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://www.instagram.com/nedimi.mx/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-[#00C1A3] hover:bg-[#00C1A3]/10 transition-all group">
                                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://www.youtube.com/@NedimiPOS" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-[#FF0000] hover:bg-[#FF0000]/10 transition-all group">
                                <Youtube size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://www.linkedin.com/company/nedimi/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-[#00C1A3] hover:bg-[#00C1A3]/10 transition-all group">
                                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://www.tiktok.com/@nedimimx" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-[#00C1A3] hover:bg-[#00C1A3]/10 transition-all group">
                                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.89-.23-2.74.24-.81.47-1.38 1.31-1.55 2.24-.12.61-.11 1.26.12 1.85.43 1.2 1.68 1.9 2.92 1.86 1.34-.01 2.45-1.03 2.62-2.35.09-1.21.01-2.42.01-3.63V0z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Navegación */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6 opacity-50">Navegación</h4>
                        <ul className="space-y-4 text-slate-300 text-sm font-medium">
                            <li><a href="#home" className="hover:text-[#00C1A3] transition-colors">Inicio</a></li>
                            <li><a href="#benefits" className="hover:text-[#00C1A3] transition-colors">Beneficios</a></li>
                            <li><a href="#showcase" className="hover:text-[#00C1A3] transition-colors">Dispositivos</a></li>
                            <li><a href="#faq" className="hover:text-[#00C1A3] transition-colors">Ayuda / FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6 opacity-50">Contacto Directo</h4>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            <li className="flex flex-col gap-2 items-center sm:items-start">
                                <div className="flex items-center gap-3">
                                    <Mail size={16} className="text-[#00C1A3]" />
                                    <a href="mailto:orlando.palacios@nedimi.com" className="hover:text-white transition-colors text-[13px]">orlando.palacios@nedimi.com</a>
                                </div>
                                <div className="flex items-center gap-3 ml-0 sm:ml-7">
                                    <a href="mailto:brenda.meza@nedimi.com" className="hover:text-white transition-colors text-[13px]">brenda.meza@nedimi.com</a>
                                </div>
                            </li>
                            <li className="flex items-center justify-center sm:justify-start gap-3 pt-2">
                                <Phone size={16} className="text-[#00C1A3]" />
                                <a href="tel:+5215564604183" className="hover:text-white transition-colors font-bold">+52 1 55 6460 4183</a>
                            </li>
                            <li className="flex items-center justify-center sm:justify-start gap-3">
                                <MapPin size={16} className="text-[#00C1A3] shrink-0" />
                                <span className="text-[13px]">Ciudad de México, MX</span>
                            </li>
                        </ul>
                    </div>

                    {/* Status Card */}
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-[#00C1A3] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Sistema Online</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mb-4 font-medium uppercase leading-relaxed">
                            Sincronización Cloud activa en tiempo real.
                        </p>
                        <div className="flex justify-center sm:justify-start gap-3 text-[#00C1A3]/60">
                            <Cloud size={18} /><ShieldCheck size={18} />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 text-center">
                    <p>© {currentYear} NEDIMI SOLUTIONS. TODOS LOS DERECHOS RESERVADOS.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos</a>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `@keyframes shimmer { 100% { transform: translateX(100%); } }` }} />
        </footer>
    );
};