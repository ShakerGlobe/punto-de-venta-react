import { motion, Variants } from 'framer-motion';
import { Mail, Facebook, Instagram, Linkedin, ArrowUp, Server, ExternalLink } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Beneficios', path: '/beneficios' },
        { name: 'Tecnología', path: '/tecnologia' },
        { name: 'FAQ', path: '/preguntas' }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <footer className="relative pt-20 md:pt-24 pb-8 overflow-hidden bg-slate-50 w-full border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16"
                >
                    {/* --- COLUMNA 1: MARCA --- */}
                    <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col gap-6 items-center sm:items-start text-center sm:text-left">
                        <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 group">
                            <div className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-2xl p-2 shadow-sm transition-transform group-hover:-translate-y-1">
                                <img
                                    src="/images/nedimi-pos-04.png"
                                    alt="Nedimi POS Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-3xl font-black tracking-tight text-slate-900 transition-colors group-hover:text-[#00C1A3]">
                                Nedimi<span className="text-[#00C1A3]">POS</span>
                            </span>
                        </Link>

                        <p className="text-slate-600 text-[15px] leading-relaxed max-w-sm font-medium">
                            Potenciando negocios con tecnología en la nube. Un punto de venta rápido, seguro y diseñado para crecer contigo.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <SocialLink href="https://www.facebook.com/profile.php?id=100092165101068" icon={<Facebook size={18} />} hoverClass="hover:text-[#00C1A3] hover:bg-emerald-50 hover:border-emerald-200" />
                            <SocialLink href="https://www.instagram.com/nedimi.mx/" icon={<Instagram size={18} />} hoverClass="hover:text-pink-600 hover:bg-pink-50 hover:border-pink-200" />
                            <SocialLink
                                href="https://www.tiktok.com/@nedimimx"
                                icon={
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V15c0 1.93-.56 4.02-1.98 5.37-1.42 1.35-3.5 1.83-5.38 1.53-1.88-.3-3.62-1.55-4.56-3.21-.95-1.65-1.03-3.78-.18-5.46.85-1.68 2.59-2.88 4.46-3.15.54-.08 1.08-.07 1.62.01V11.5c-.88-.12-1.78.11-2.48.66-.71.56-1.12 1.45-1.12 2.34 0 1.33.82 2.58 2.05 3.12 1.23.54 2.75.29 3.73-.62.98-.91 1.25-2.38 1.14-3.68V.02z" />
                                    </svg>
                                }
                                hoverClass="hover:text-slate-900 hover:bg-slate-200 hover:border-slate-300"
                            />
                            <SocialLink href="https://www.linkedin.com/company/nedimi" icon={<Linkedin size={18} />} hoverClass="hover:text-blue-700 hover:bg-blue-50 hover:border-blue-200" />
                        </div>
                    </motion.div>

                    {/* --- COLUMNA 2: NAVEGACIÓN --- */}
                    <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col items-center sm:items-start">
                        <h4 className="text-slate-900 font-extrabold text-[15px] mb-5">Navegación</h4>
                        <ul className="space-y-3.5 flex flex-col items-center sm:items-start">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} onClick={scrollToTop} className="text-slate-500 font-semibold text-[14px] hover:text-[#00C1A3] transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#00C1A3] transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* --- COLUMNA 3: SOPORTE --- */}
                    <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col items-center sm:items-start">
                        <h4 className="text-slate-900 font-extrabold text-[15px] mb-5">Ventas y Soporte</h4>
                        <ul className="space-y-3 w-full max-w-[260px] sm:max-w-none">
                            <li>
                                <a href="mailto:orlando.palacios@nedimi.com" className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all group">
                                    <div className="bg-slate-50 p-2 rounded-xl group-hover:bg-emerald-50 transition-colors">
                                        <Mail size={16} className="text-slate-500 group-hover:text-[#00C1A3]" />
                                    </div>
                                    <span className="text-[13px] font-semibold text-slate-700 group-hover:text-emerald-700 truncate">orlando.palacios@nedimi.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:brenda.meza@nedimi.com" className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all group">
                                    <div className="bg-slate-50 p-2 rounded-xl group-hover:bg-emerald-50 transition-colors">
                                        <Mail size={16} className="text-slate-500 group-hover:text-[#00C1A3]" />
                                    </div>
                                    <span className="text-[13px] font-semibold text-slate-700 group-hover:text-emerald-700 truncate">brenda.meza@nedimi.com</span>
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://wa.me/525534618549?text=Hola,%20quiero%20mi%20prueba%20gratis" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center gap-3 p-3 mt-1 rounded-2xl bg-[#25D366] text-white hover:bg-[#1EBE5C] hover:shadow-md transition-all active:scale-[0.98] group"
                                >
                                    <div className="bg-white/20 p-2 rounded-xl text-white">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.338 11.897-11.896a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                    </div>
                                    <span className="text-[14px] font-bold tracking-wide">+52 1 55 3461 8549</span>
                                    <ExternalLink size={14} className="text-white/60 ml-auto group-hover:text-white transition-colors" />
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* --- COLUMNA 4: SYSTEM STATUS --- */}
                    <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col gap-4">
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2.5 mb-3">
                                    <div className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C1A3] opacity-50"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00C1A3] border border-white"></span>
                                    </div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                                        <Server size={14} className="text-slate-400" /> Servicios Operativos
                                    </span>
                                </div>
                                <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                                    Nuestra infraestructura en la nube está funcionando sin interrupciones al 100%.
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="w-full flex items-center justify-center gap-2 py-4 bg-[#00C1A3] hover:bg-[#00a88e] border border-[#00C1A3] rounded-2xl text-white text-[13px] font-black uppercase tracking-widest transition-all shadow-lg shadow-[#00C1A3]/20 active:scale-[0.98] group"
                        >
                            <ArrowUp size={18} className="text-white group-hover:-translate-y-1 transition-transform" />
                            <span>Volver al inicio</span>
                        </button>

                    </motion.div>
                </motion.div>

                {/* --- BARRA INFERIOR --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] font-bold text-slate-400"
                >
                    <p className="text-center md:text-left">© {currentYear} NEDIMI SOLUTIONS. Todos los derechos reservados.</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link to="/privacidad" onClick={scrollToTop} className="hover:text-slate-800 transition-colors">Aviso de Privacidad</Link>
                        <Link to="/terminos" onClick={scrollToTop} className="hover:text-slate-800 transition-colors">Términos de Servicio</Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    hoverClass: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverClass }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-11 h-11 bg-white border border-slate-200 rounded-full text-slate-500 transition-all duration-300 flex items-center justify-center shadow-sm ${hoverClass}`}
    >
        {icon}
    </a>
);