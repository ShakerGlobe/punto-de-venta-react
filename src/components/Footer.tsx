import { motion } from 'framer-motion';
import { Mail, Phone, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface FooterProps {
    onOpenModal?: () => void;
}

export const Footer = ({ onOpenModal }: FooterProps) => {
    const containerRef = useRef(null);
    const location = useLocation();
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer 
            ref={containerRef} 
            className="relative pt-24 pb-12 overflow-visible bg-[#020617] w-full"
        >
            {/* DECORACIÓN DE FONDO */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[600px] bg-[#00C1A3]/10 blur-[80px] md:blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-t border-white/5 pt-16">
                    {/* --- COLUMNA 1: INFO --- */}
                    <div className="space-y-6 text-center sm:text-left">
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">
                            Nedimi<span className="text-[#00C1A3]">POS</span>
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
                            Llevando la gestión de negocios al siguiente nivel con tecnología cloud de última generación.
                        </p>

                        <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                            <SocialLink href="https://www.facebook.com/profile.php?id=100092165101068#" icon={<Facebook size={18} />} hoverColor="hover:text-[#1877F2]" />
                            <SocialLink href="https://www.instagram.com/nedimi.mx/" icon={<Instagram size={18} />} hoverColor="hover:text-[#E4405F]" />
                            
                            {/* ÍCONO DE TIKTOK (SVG MANUAL PARA EVITAR ERRORES) */}
                            <SocialLink 
                                href="https://www.tiktok.com/@nedimimx" 
                                icon={
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V15c0 1.93-.56 4.02-1.98 5.37-1.42 1.35-3.5 1.83-5.38 1.53-1.88-.3-3.62-1.55-4.56-3.21-.95-1.65-1.03-3.78-.18-5.46.85-1.68 2.59-2.88 4.46-3.15.54-.08 1.08-.07 1.62.01V11.5c-.88-.12-1.78.11-2.48.66-.71.56-1.12 1.45-1.12 2.34 0 1.33.82 2.58 2.05 3.12 1.23.54 2.75.29 3.73-.62.98-.91 1.25-2.38 1.14-3.68V.02z" />
                                    </svg>
                                } 
                                hoverColor="hover:text-white hover:bg-black" 
                            />
                            
                            <SocialLink href="https://www.linkedin.com/company/nedimi" icon={<Linkedin size={18} />} hoverColor="hover:text-[#0A66C2]" />
                        </div>
                    </div>

                    {/* --- COLUMNA 2: NAVEGACIÓN --- */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6 opacity-50">Navegación</h4>
                        <ul className="space-y-4 text-slate-300 text-sm font-medium">
                            <li><Link to="/" className="hover:text-[#00C1A3] transition-colors">Inicio</Link></li>
                            <li><Link to="/beneficios" className="hover:text-[#00C1A3] transition-colors">Beneficios</Link></li>
                            <li><Link to="/tecnologia" className="hover:text-[#00C1A3] transition-colors">Tecnología</Link></li>
                            <li><Link to="/preguntas" className="hover:text-[#00C1A3] transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* --- COLUMNA 3: CONTACTO --- */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6 opacity-50">Contacto Directo</h4>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            <li className="flex flex-col gap-2 text-[13px]">
                                <a href="mailto:orlando.palacios@nedimi.com" className="hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-2">
                                    <Mail size={14} className="text-[#00C1A3]" /> orlando.palacios@nedimi.com
                                </a>
                                <a href="mailto:brenda.meza@nedimi.com" className="hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-2">
                                    <Mail size={14} className="text-[#00C1A3]" /> brenda.meza@nedimi.com
                                </a>
                            </li>
                            <li className="flex items-center justify-center sm:justify-start gap-2 pt-2">
                                <Phone size={14} className="text-[#00C1A3]" />
                                <a href="https://wa.me/525564604183" className="hover:text-[#00C1A3] transition-colors font-bold">+52 1 55 6460 4183</a>
                            </li>
                        </ul>
                    </div>

                    {/* --- COLUMNA 4: STATUS + BOTÓN UP --- */}
                    <div className="flex flex-col gap-4">
                        <div className="bg-white/[0.03] p-6 rounded-3xl border border-white/10 text-center sm:text-left h-fit">
                            <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                                <div className="w-2 h-2 rounded-full bg-[#00C1A3] animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Sistema Online</span>
                            </div>
                            <p className="text-[11px] text-slate-500 uppercase leading-relaxed font-bold">
                                Sincronización Cloud activa 2026.
                            </p>

                            {/* BOTÓN VOLVER ARRIBA */}
                            <button 
                                onClick={scrollToTop}
                                className="mt-6 w-full group flex items-center justify-center gap-2 py-3 bg-[#00C1A3]/10 border border-[#00C1A3]/20 rounded-2xl text-[#00C1A3] text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-[#00C1A3] hover:text-[#020617] active:scale-95"
                            >
                                <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                                Volver arriba
                            </button>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    <p>© {currentYear} NEDIMI SOLUTIONS. TODOS LOS DERECHOS RESERVADOS.</p>
                    <div className="flex gap-8">
                        <Link to="/privacidad" className="hover:text-[#00C1A3] transition-colors">Privacidad</Link>
                        <a href="#" className="hover:text-white transition-colors">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon, hoverColor }: any) => (
    <a href={href} target="_blank" rel="noopener noreferrer" 
       className={`p-2.5 bg-white/5 rounded-xl text-slate-400 ${hoverColor} hover:bg-white/10 transition-all group inline-flex items-center justify-center`}>
        {icon}
    </a>
);