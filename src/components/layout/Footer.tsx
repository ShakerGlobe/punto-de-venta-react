import { motion, Variants } from 'framer-motion'; // <-- Importación CLAVE para corregir el error
import { Mail, Phone, Facebook, Instagram, Linkedin, ArrowUp, Server, ExternalLink } from 'lucide-react';
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

    // SOLUCIÓN: Tipado estricto con 'Variants' de framer-motion
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    // SOLUCIÓN: Tipado estricto con 'Variants'
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
                    {/* --- COLUMNA 1: MARCA Y DESCRIPCIÓN (Span 4) --- */}
                    <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col gap-6 items-center sm:items-start text-center sm:text-left">

                        <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 group">
                            {/* rounded-2xl para consistencia */}
                            <div className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-2xl p-2 shadow-sm transition-transform group-hover:-translate-y-1">
                                <img
                                    src="/images/nedimi-pos-04.png"
                                    alt="Nedimi POS Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-3xl font-black tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
                                Nedimi<span className="text-blue-600">POS</span>
                            </span>
                        </Link>

                        <p className="text-slate-600 text-[15px] leading-relaxed max-w-sm font-medium">
                            Potenciando negocios con tecnología en la nube. Un punto de venta rápido, seguro y diseñado para crecer contigo.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <SocialLink href="https://www.facebook.com/profile.php?id=100092165101068" icon={<Facebook size={18} />} hoverClass="hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200" />
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

                    {/* --- COLUMNA 2: NAVEGACIÓN RAPIDA (Span 2) --- */}
                    <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col items-center sm:items-start">
                        <h4 className="text-slate-900 font-extrabold text-[15px] mb-5">Navegación</h4>
                        <ul className="space-y-3.5 flex flex-col items-center sm:items-start">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} onClick={scrollToTop} className="text-slate-500 font-semibold text-[14px] hover:text-blue-600 transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* --- COLUMNA 3: SOPORTE Y CONTACTO (Span 3) --- */}
                    <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col items-center sm:items-start">
                        <h4 className="text-slate-900 font-extrabold text-[15px] mb-5">Ventas y Soporte</h4>
                        <ul className="space-y-3 w-full max-w-[260px] sm:max-w-none">
                            {/* Correos: rounded-2xl */}
                            <li>
                                <a href="mailto:orlando.palacios@nedimi.com" className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all group">
                                    <div className="bg-slate-50 p-2 rounded-xl group-hover:bg-blue-50 transition-colors">
                                        <Mail size={16} className="text-slate-500 group-hover:text-blue-600" />
                                    </div>
                                    <span className="text-[13px] font-semibold text-slate-700 group-hover:text-blue-700 truncate">orlando.palacios@nedimi.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:brenda.meza@nedimi.com" className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all group">
                                    <div className="bg-slate-50 p-2 rounded-xl group-hover:bg-blue-50 transition-colors">
                                        <Mail size={16} className="text-slate-500 group-hover:text-blue-600" />
                                    </div>
                                    <span className="text-[13px] font-semibold text-slate-700 group-hover:text-blue-700 truncate">brenda.meza@nedimi.com</span>
                                </a>
                            </li>
                            {/* WhatsApp Flat y consistente: rounded-2xl */}
                            <li>
                                <a href="https://wa.me/525564604183" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 mt-1 rounded-2xl bg-[#25D366] text-white hover:bg-[#1EBE5C] hover:shadow-md transition-all active:scale-[0.98] group">
                                    <div className="bg-white/20 p-2 rounded-xl text-white">
                                        <Phone size={16} />
                                    </div>
                                    <span className="text-[14px] font-bold tracking-wide">+52 1 55 6460 4183</span>
                                    <ExternalLink size={14} className="text-white/60 ml-auto group-hover:text-white transition-colors" />
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* --- COLUMNA 4: SYSTEM STATUS & SCROLL TOP (Span 3) --- */}
                    <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col gap-4">

                        {/* Tarjeta de Status: rounded-2xl para alinear con el resto */}
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2.5 mb-3">
                                    <div className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-white"></span>
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

                        {/* Botón Volver Arriba: rounded-2xl */}
                        <button
                            onClick={scrollToTop}
                            className="w-full flex items-center justify-center gap-2 py-4 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-2xl text-slate-700 text-[13px] font-extrabold transition-all active:scale-[0.98] group"
                        >
                            <ArrowUp size={18} className="text-slate-400 group-hover:text-blue-600 group-hover:-translate-y-1 transition-transform" />
                            <span>Volver al inicio</span>
                        </button>

                    </motion.div>
                </motion.div>

                {/* --- BARRA INFERIOR DE COPYRIGHT --- */}
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

// Componente secundario: Redondeado (rounded-full)
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