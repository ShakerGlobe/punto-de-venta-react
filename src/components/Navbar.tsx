import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Sparkles, UserCircle } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

interface NavbarProps {
    onOpenModal: () => void;
}

export const Navbar = ({ onOpenModal }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Beneficios', path: '/beneficios' },
        { name: 'Tecnología', path: '/tecnologia' },
        { name: 'Demo', path: '/demo' },
        { name: 'Planes', path: '/Planes' },
        { name: 'FAQ', path: '/preguntas' },
        
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    const handleNavigation = (path: string) => {
        setMobileMenuOpen(false);
        navigate(path);
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00C1A3] via-cyan-400 to-[#00C1A3] origin-left z-[150] shadow-[0_0_10px_#00C1A3]"
                style={{ scaleX }}
            />

            <header className={`fixed w-full z-[140] flex justify-center top-0 px-4 sm:px-6 pointer-events-none`}>
                <nav
                    className={`w-full flex justify-between items-center transition-all duration-500 ease-in-out pointer-events-auto will-change-transform ${scrolled && !mobileMenuOpen
                        ? 'max-w-6xl bg-slate-900/95 backdrop-blur-2xl border border-white/20 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)] py-3 px-6 sm:px-10 mt-4'
                        : 'max-w-7xl bg-transparent py-8 sm:py-10 px-2 sm:px-4 border-transparent mt-0'
                        } ${mobileMenuOpen ? 'bg-transparent py-6 px-2' : ''}`}
                >
                    {/* --- LOGO --- */}
                    <Link
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="group cursor-pointer flex items-center gap-2 relative z-20 shrink-0"
                    >
                        <span className={`font-[1000] italic tracking-tighter text-white uppercase transition-all duration-300 ${scrolled ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl md:text-4xl'
                            }`}>
                            Nedimi<span className="text-[#00C1A3]">POS</span>
                        </span>
                    </Link>

                    {/* --- MENÚ DESKTOP --- */}
                    <div className={`hidden lg:flex items-center transition-all duration-300 ${scrolled ? 'gap-1' : 'gap-2 bg-white/[0.03] border border-white/5 p-1.5 rounded-full shadow-inner'
                        }`}>
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <button
                                    key={link.path}
                                    onClick={() => handleNavigation(link.path)}
                                    className={`relative px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.12em] transition-colors duration-300 rounded-full ${isActive ? 'text-[#020617]' : 'text-slate-300 hover:text-white'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-nav-pill"
                                            className="absolute inset-0 bg-gradient-to-r from-[#00C1A3] to-emerald-400 rounded-full z-0 shadow-[0_0_20px_rgba(0,193,163,0.4)]"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* --- BOTONES DE ACCIÓN --- */}
                    <div className="flex items-center gap-3 relative z-20 shrink-0">
                        {/* Botón Inicia Sesión (RESALTADO - Desktop) */}
                        <button
                            onClick={() => window.location.href = '/puntodeventa/'}
                            className={`hidden sm:flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 text-amber-950 font-[1000] rounded-full group transition-all duration-300 shadow-[0_10px_20px_rgba(245,158,11,0.2)] hover:shadow-[0_15px_30px_rgba(245,158,11,0.4)] active:scale-95 ${scrolled ? 'px-6 py-3 text-[10px]' : 'px-8 py-4 text-xs'
                                }`}
                        >
                            <UserCircle size={scrolled ? 14 : 16} />
                            <span className="tracking-widest uppercase italic leading-none">Inicia Sesión</span>
                        </button>

                        {/* Botón Probar Gratis (Desktop) */}
                        <button
                            onClick={() => navigate('/register')}
                            className={`hidden sm:flex items-center justify-center gap-2 bg-[#00C1A3] text-[#020617] font-[1000] rounded-full group transition-all duration-300 shadow-[0_10px_20px_rgba(0,193,163,0.2)] hover:shadow-[0_15px_30px_rgba(0,193,163,0.4)] active:scale-95 ${scrolled ? 'px-6 py-3 text-[10px]' : 'px-8 py-4 text-xs'
                                }`}
                        >
                            <Sparkles size={scrolled ? 14 : 16} className="group-hover:animate-pulse" />
                            <span className="tracking-widest uppercase italic leading-none">Probar Gratis</span>
                        </button>

                        <button
                            className={`lg:hidden rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center transition-all active:scale-90 hover:bg-white/10 backdrop-blur-md ${scrolled ? 'p-2.5' : 'p-4'
                                }`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <AnimatePresence mode="wait">
                                {mobileMenuOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                        <X size={24} className="text-[#00C1A3]" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                        <Menu size={24} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </nav>
            </header>

            {/* --- MENÚ MÓVIL --- */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 bg-[#020617]/95 z-[130] flex flex-col justify-between overflow-y-auto"
                    >
                        <div className="flex flex-col gap-4 w-full px-8 pt-32 pb-10 relative z-10 mt-10">
                            {navLinks.map((link, i) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <motion.button
                                        key={link.path}
                                        initial={{ opacity: 0, x: -40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ delay: i * 0.1 }}
                                        onClick={() => handleNavigation(link.path)}
                                        className={`group flex items-center justify-between w-full text-left py-4 border-b border-white/5 ${isActive ? 'text-[#00C1A3]' : 'text-white'
                                            }`}
                                    >
                                        <span className="text-3xl sm:text-4xl font-[1000] uppercase tracking-tighter italic">
                                            {link.name}
                                        </span>
                                        {isActive && <ChevronRight size={28} />}
                                    </motion.button>
                                );
                            })}
                        </div>
                        <div className="px-8 pb-12 w-full mt-auto flex flex-col gap-4">
                            {/* Botón Inicia Sesión (RESALTADO - Móvil) */}
                            <button
                                onClick={() => { window.location.href = '/puntodeventa/'; setMobileMenuOpen(false); }}
                                className="w-full py-5 bg-gradient-to-r from-amber-500 to-amber-400 text-amber-950 shadow-[0_15px_30px_rgba(245,158,11,0.3)] font-[1000] italic uppercase tracking-widest text-lg rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
                            >
                                <UserCircle size={20} /> INICIA SESIÓN
                            </button>

                            {/* Botón Probar Gratis (Móvil) */}
                            <button
                                onClick={() => { navigate('/register'); setMobileMenuOpen(false); }}
                                className="w-full py-5 bg-[#00C1A3] text-[#020617] font-[1000] italic uppercase tracking-widest text-lg rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
                            >
                                <Sparkles size={20} /> PROBAR GRATIS
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};