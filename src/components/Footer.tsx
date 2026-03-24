import { motion } from 'framer-motion';
import { Mail, Phone, Facebook, Instagram, Linkedin, ArrowUp, Server, ExternalLink } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
    onOpenModal?: () => void;
}

export const Footer = ({ onOpenModal }: FooterProps) => {
    const containerRef = useRef<HTMLElement>(null);
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

    // Variantes para la animación en cascada (Stagger)
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <footer
            ref={containerRef}
            className="relative pt-16 md:pt-24 pb-8 overflow-hidden bg-[#020617] w-full border-t border-[#00C1A3]/20"
        >
            {/* DECORACIÓN DE FONDO */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00C1A3]/5 blur-[120px] rounded-full" />
                <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16"
                >
                    {/* --- COLUMNA 1: INFO & SOCIALES (Ocupa 4 columnas en LG) --- */}
                    <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6 text-center md:text-left">
                        <Link to="/" onClick={scrollToTop} className="inline-block group">
                            <h3 className="text-3xl font-[1000] italic uppercase tracking-tighter text-white transition-transform group-hover:scale-105">
                                Nedimi<span className="text-[#00C1A3]">POS</span>
                            </h3>
                        </Link>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm mx-auto md:mx-0 font-light">
                            Llevando la gestión de negocios al siguiente nivel con tecnología en la nube de última generación.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                            <SocialLink href="https://www.facebook.com/profile.php?id=100092165101068#" icon={<Facebook size={18} />} hoverColor="hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2]" />
                            <SocialLink href="https://www.instagram.com/nedimi.mx/" icon={<Instagram size={18} />} hoverColor="hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:border-transparent" />

                            {/* ÍCONO DE TIKTOK */}
                            <SocialLink
                                href="https://www.tiktok.com/@nedimimx"
                                icon={
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V15c0 1.93-.56 4.02-1.98 5.37-1.42 1.35-3.5 1.83-5.38 1.53-1.88-.3-3.62-1.55-4.56-3.21-.95-1.65-1.03-3.78-.18-5.46.85-1.68 2.59-2.88 4.46-3.15.54-.08 1.08-.07 1.62.01V11.5c-.88-.12-1.78.11-2.48.66-.71.56-1.12 1.45-1.12 2.34 0 1.33.82 2.58 2.05 3.12 1.23.54 2.75.29 3.73-.62.98-.91 1.25-2.38 1.14-3.68V.02z" />
                                    </svg>
                                }
                                hoverColor="hover:text-white hover:bg-black hover:border-slate-800"
                            />

                            <SocialLink href="https://www.linkedin.com/company/nedimi" icon={<Linkedin size={18} />} hoverColor="hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2]" />
                        </div>
                    </motion.div>

                    {/* --- COLUMNA 2: NAVEGACIÓN (Ocupa 2 columnas en LG) --- */}
                    <motion.div variants={itemVariants} className="lg:col-span-2 text-center md:text-left">
                        <h4 className="text-[#00C1A3] font-black uppercase tracking-[0.2em] text-[10px] mb-6">Navegación</h4>
                        <ul className="space-y-4 text-slate-300 text-sm font-medium">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} onClick={scrollToTop} className="group flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors w-fit mx-auto md:mx-0">
                                        <span className="w-0 h-[2px] bg-[#00C1A3] transition-all duration-300 group-hover:w-3" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* --- COLUMNA 3: CONTACTO DIRECTO (Ocupa 3 columnas en LG) --- */}
                    <motion.div variants={itemVariants} className="lg:col-span-3 text-center md:text-left">
                        <h4 className="text-[#00C1A3] font-black uppercase tracking-[0.2em] text-[10px] mb-6">Contacto Directo</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:orlando.palacios@nedimi.com" className="flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-[#00C1A3]/30 transition-all text-sm text-slate-300 hover:text-white group">
                                    <Mail size={16} className="text-[#00C1A3] group-hover:scale-110 transition-transform" />
                                    <span className="truncate">orlando.palacios@nedimi.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:brenda.meza@nedimi.com" className="flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-[#00C1A3]/30 transition-all text-sm text-slate-300 hover:text-white group">
                                    <Mail size={16} className="text-[#00C1A3] group-hover:scale-110 transition-transform" />
                                    <span className="truncate">brenda.meza@nedimi.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/525564604183" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-[#00C1A3]/10 hover:border-[#00C1A3]/50 transition-all text-sm text-slate-300 hover:text-white group mt-2">
                                    <Phone size={16} className="text-[#00C1A3] group-hover:scale-110 transition-transform" />
                                    <span className="font-bold tracking-wide">+52 1 55 6460 4183</span>
                                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#00C1A3] ml-auto" />
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* --- COLUMNA 4: STATUS + BOTÓN UP (Ocupa 3 columnas en LG) --- */}
                    <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col gap-4">
                        <div className="bg-[#0f172a] p-6 rounded-3xl border border-slate-800 text-center md:text-left shadow-xl relative overflow-hidden group">
                            {/* Brillo interno */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C1A3]/5 rounded-full blur-[40px] group-hover:bg-[#00C1A3]/10 transition-colors" />

                            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 relative z-10">
                                <div className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                                    <Server size={12} /> Sistemas Operativos
                                </span>
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed font-medium relative z-10">
                                Sincronización en la nube y bases de datos funcionando con normalidad.
                            </p>

                            {/* BOTÓN VOLVER ARRIBA */}
                            <button
                                onClick={scrollToTop}
                                className="mt-6 w-full group/btn relative flex items-center justify-center gap-2 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-[#00C1A3] hover:border-[#00C1A3] hover:text-[#020617] active:scale-95 z-10 overflow-hidden"
                            >
                                <ArrowUp size={14} className="group-hover/btn:-translate-y-1 transition-transform" />
                                <span className="relative z-10">Volver arriba</span>
                            </button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* --- BOTTOM BAR --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500"
                >
                    <p className="text-center md:text-left">© {currentYear} NEDIMI SOLUTIONS. TODOS LOS DERECHOS RESERVADOS.</p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        <Link to="/privacidad" onClick={scrollToTop} className="hover:text-[#00C1A3] transition-colors">Privacidad</Link>
                        <a href="#" className="hover:text-[#00C1A3] transition-colors">Términos</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

// Componente secundario tipado correctamente
interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    hoverColor: string;
}

const SocialLink = ({ href, icon, hoverColor }: SocialLinkProps) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-10 h-10 bg-white/[0.03] border border-white/10 rounded-xl text-slate-400 transition-all duration-300 flex items-center justify-center hover:-translate-y-1 hover:shadow-lg ${hoverColor}`}
    >
        {icon}
    </a>
);