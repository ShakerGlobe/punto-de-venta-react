import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

interface NavbarProps {
    onOpenModal: () => void;
}

export const Navbar = ({ onOpenModal }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    // Barra de progreso de lectura
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Beneficios', path: '/beneficios' },
        { name: 'Tecnología', path: '/tecnologia' },
        { name: 'FAQ', path: '/preguntas' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Bloqueo de scroll en el body cuando el menú móvil está abierto
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    const handleNavigation = (path: string) => {
        setMobileMenuOpen(false);
        navigate(path);
    };

    return (
        <>
            <nav className={`fixed top-0 w-full z-[120] transition-all duration-500 ${scrolled || mobileMenuOpen
                    ? 'bg-[#020617]/80 backdrop-blur-2xl py-4 lg:py-5 border-b border-[#00C1A3]/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                    : 'bg-transparent py-6 lg:py-8'
                }`}>
                {/* Indicador de Scroll en la parte inferior de la Navbar */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00C1A3] via-cyan-400 to-[#00C1A3] origin-left z-[130]"
                    style={{ scaleX }}
                />

                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-[140]">
                    {/* --- LOGO --- */}
                    <Link
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="group cursor-pointer flex items-center gap-1.5"
                    >
                        <span className="text-2xl md:text-3xl font-[1000] italic tracking-tighter text-white uppercase transition-transform group-hover:scale-105">
                            Nedimi<span className="text-[#00C1A3]">POS</span>
                        </span>
                        <motion.div
                            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                            transition={{ repeat: Infinity, duration: 2.5 }}
                            className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#00C1A3] rounded-full shadow-[0_0_12px_#00C1A3]"
                        />
                    </Link>

                    {/* --- MENÚ DESKTOP --- */}
                    <div className="hidden lg:flex items-center bg-white/[0.03] border border-white/10 p-1.5 rounded-full backdrop-blur-md shadow-inner">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <button
                                    key={link.path}
                                    onClick={() => handleNavigation(link.path)}
                                    className={`relative px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] transition-colors duration-300 rounded-full ${isActive ? 'text-[#020617]' : 'text-slate-400 hover:text-white'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-gradient-to-r from-[#00C1A3] to-emerald-400 rounded-full z-0 shadow-[0_0_15px_rgba(0,193,163,0.4)]"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* --- BOTONES DE ACCIÓN --- */}
                    <div className="flex items-center gap-4 lg:gap-6">
                        {/* Botón Desktop */}
                        <button
                            onClick={() => navigate('/register')}
                            className="hidden sm:flex items-center gap-2 relative px-7 py-3 bg-white/5 border border-white/10 hover:bg-[#00C1A3] hover:border-[#00C1A3] text-white hover:text-[#020617] text-xs font-[1000] rounded-xl group transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(0,193,163,0.4)] hover:-translate-y-0.5"
                        >
                            <Sparkles size={14} className="group-hover:animate-pulse" />
                            <span className="tracking-widest uppercase italic">Probar Gratis</span>
                        </button>

                        {/* Toggle Menú Móvil */}
                        <button
                            className="lg:hidden p-2 text-white relative flex items-center justify-center transition-transform active:scale-90"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            <AnimatePresence mode="wait">
                                {mobileMenuOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                        <X size={32} className="text-[#00C1A3]" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                        <Menu size={32} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- OVERLAY MENÚ MÓVIL --- */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 bg-[#020617]/95 z-[115] flex flex-col justify-between overflow-y-auto"
                    >
                        {/* Decoración de fondo */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00C1A3]/10 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

                        {/* Contenedor de Links */}
                        <div className="flex flex-col gap-6 w-full px-8 pt-32 pb-10 relative z-10">
                            {navLinks.map((link, i) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <motion.button
                                        key={link.path}
                                        initial={{ opacity: 0, x: -40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                                        onClick={() => handleNavigation(link.path)}
                                        className={`group flex items-center justify-between w-full text-left py-4 border-b border-white/5 ${isActive ? 'text-[#00C1A3]' : 'text-white'
                                            }`}
                                    >
                                        <span className="text-4xl sm:text-5xl font-[1000] uppercase tracking-tighter italic group-hover:translate-x-4 transition-transform duration-300">
                                            {link.name}
                                        </span>
                                        {isActive && <ChevronRight size={32} className="text-[#00C1A3]" />}
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Footer del Menú Móvil */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            className="px-8 pb-12 w-full relative z-10 flex flex-col gap-6 mt-auto"
                        >
                            <button
                                onClick={() => { navigate('/register'); setMobileMenuOpen(false); }}
                                className="w-full py-5 bg-gradient-to-r from-[#00C1A3] to-emerald-400 text-[#020617] font-black italic uppercase text-lg rounded-2xl shadow-[0_20px_40px_rgba(0,193,163,0.3)] flex items-center justify-center gap-2 active:scale-95 transition-transform"
                            >
                                <Sparkles size={20} />
                                PROBAR GRATIS AHORA
                            </button>

                            <div className="flex flex-col items-center gap-2">
                                <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-bold">Protocolo Seguro Activado</p>
                                <p className="text-slate-600 text-[9px] uppercase tracking-[0.2em] font-medium">Nedimi POS © {new Date().getFullYear()}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};