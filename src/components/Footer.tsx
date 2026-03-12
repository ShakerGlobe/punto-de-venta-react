import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Rocket, Zap, ShieldCheck, Cloud, Mail, Phone, MapPin,
    Facebook, Instagram, Linkedin, Youtube
} from 'lucide-react';
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface FooterProps {
    onOpenModal: () => void;
}

export const Footer = ({ onOpenModal }: FooterProps) => {
    const containerRef = useRef(null);
    const location = useLocation();
    const currentYear = new Date().getFullYear();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Beneficios', path: '/beneficios' },
        { name: 'Tecnología', path: '/tecnologia' },
        { name: 'Ayuda / FAQ', path: '/preguntas' }
    ];

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

                        <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                            {/* FACEBOOK AZUL */}
                            <a href="https://www.facebook.com/profile.php?id=100092165101068" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-[#1877F2] hover:bg-[#1877F2]/10 transition-all group">
                                <Facebook size={18} />
                            </a>
                            {/* INSTAGRAM GRADIENT-ISH (usamos el rosa principal) */}
                            <a href="https://www.instagram.com/nedimi.mx/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-[#E4405F] hover:bg-[#E4405F]/10 transition-all group">
                                <Instagram size={18} />
                            </a>
                            {/* YOUTUBE ROJO */}
                            <a href="https://www.youtube.com/@Nedimimx" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-[#FF0000] hover:bg-[#FF0000]/10 transition-all group">
                                <Youtube size={18} />
                            </a>
                            {/* TIKTOK BLACK/WHITE */}
                            <a href="https://www.tiktok.com/@nedimimx" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-white hover:bg-black transition-all group">
                                <svg size={18} viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V15c0 1.93-.56 4.02-1.98 5.37-1.42 1.35-3.5 1.83-5.38 1.53-1.88-.3-3.62-1.55-4.56-3.21-.95-1.65-1.03-3.78-.18-5.46.85-1.68 2.59-2.88 4.46-3.15.54-.08 1.08-.07 1.62.01V11.5c-.88-.12-1.78.11-2.48.66-.71.56-1.12 1.45-1.12 2.34 0 1.33.82 2.58 2.05 3.12 1.23.54 2.75.29 3.73-.62.98-.91 1.25-2.38 1.14-3.68V.02z" />
                                </svg>
                            </a>
                            {/* LINKEDIN AZUL */}
                            <a href="https://www.linkedin.com/company/nedimi/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all group">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Navegación */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6 opacity-50">Navegación</h4>
                        <ul className="space-y-4 text-slate-300 text-sm font-medium">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className={`transition-colors hover:text-[#00C1A3] ${location.pathname === link.path ? 'text-[#00C1A3]' : ''}`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
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
                                <div className="flex items-center gap-3">
                                    <Mail size={16} className="text-[#00C1A3]" />
                                    <a href="mailto:brenda.meza@nedimi.com" className="hover:text-white transition-colors text-[13px]">brenda.meza@nedimi.com</a>
                                </div>
                            </li>
                            <li className="flex items-center justify-center sm:justify-start gap-3 pt-2">
                                <Phone size={16} className="text-[#00C1A3]" />
                                {/* ENLACE A WHATSAPP */}
                                <a href="https://wa.me/525564604183" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C1A3] transition-colors font-bold">+52 1 55 6460 4183</a>
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
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 text-center">
                    <p>© {currentYear} NEDIMI SOLUTIONS. TODOS LOS DERECHOS RESERVADOS.</p>
                    <div className="flex gap-8">
                        <Link to="/privacidad" className="hover:text-[#00C1A3] transition-colors">Aviso de Privacidad</Link>
                        <a href="#" className="hover:text-white transition-colors">Términos</a>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `@keyframes shimmer { 100% { transform: translateX(100%); } }` }} />
        </footer>
    );
};