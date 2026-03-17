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
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00C1A3] via-cyan-400 to-[#00C1A3] origin-left z-[150] shadow-[0_0_10px_#00C1A3]"
                style={{ scaleX }}
            />

            <header
                className={`fixed w-full z-[140] transition-all duration-500 ease-out flex justify-center ${scrolled && !mobileMenuOpen
                        ? 'top-3 sm:top-6 px-4'
                        : 'top-0 px-0'
                    }`}
            >
                <nav
                    className={`w-full flex justify-between items-center transition-all duration-500 ${scrolled && !mobileMenuOpen
                            ? 'max-w-5xl bg-[#020617]/70 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-3 px-5 sm:px-8 lg:gap-10' // Se añadió lg:gap-10 aquí
                            : 'max-w-7xl bg-gradient-to-b from-[#020617]/90 to-transparent py-6 sm:py-8 px-6 sm:px-8'
                        } ${mobileMenuOpen ? 'bg-transparent py-6 px-6' : ''}`}
                >
                    {/* --- LOGO --- */}
                    <Link
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="group cursor-pointer flex items-center gap-1.5 relative z-20"
                    >
                        <span className="text-2xl sm:text-3xl md:text-4xl font-[1000] italic tracking-tighter text-white uppercase transition-transform group-hover:scale-105 drop-shadow-lg">
                            Nedimi<span className="text-[#00C1A3]">POS</span>
                        </span>
                        <motion.div
                            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                            transition={{ repeat: Infinity, duration: 2.5 }}
                            className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#00C1A3] rounded-full shadow-[0_0_15px_#00C1A3] mt-1 sm:mt-2"
                        />
                    </Link>

                    {/* --- MENÚ DESKTOP --- */}
                    <div className="hidden lg:flex items-center gap-2 bg-white/[0.02] border border-white/5 p-1.5 rounded-full shadow-inner">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <button
                                    key={link.path}
                                    onClick={() => handleNavigation(link.path)}
                                    className={`relative px-6 py-2.5 text-xs sm:text-sm font-black uppercase tracking-[0.15em] transition-colors duration-300 rounded-full ${isActive ? 'text-[#020617]' : 'text-slate-300 hover:text-white'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-nav-pill"
                                            className="absolute inset-0 bg-gradient-to-r from-[#00C1A3] to-emerald-400 rounded-full z-0 shadow-[0_0_20px_rgba(0,193,163,0.3)]"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* --- BOTONES DE ACCIÓN --- */}
                    <div className="flex items-center gap-4 lg:gap-6 relative z-20">
                        <button
                            onClick={() => navigate('/register')}
                            className="hidden sm:flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#00C1A3] text-[#020617] text-xs sm:text-sm font-[1000] rounded-xl sm:rounded-2xl group transition-all duration-300 shadow-[0_10px_20px_rgba(0,193,163,0.2)] hover:shadow-[0_15px_30px_rgba(0,193,163,0.4)] hover:-translate-y-0.5 active:scale-95"
                        >
                            <Sparkles size={16} className="group-hover:animate-pulse" />
                            <span className="tracking-widest uppercase italic leading-none pt-0.5">Probar Gratis</span>
                        </button>

                        <button
                            className="lg:hidden p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center transition-all active:scale-90 hover:bg-white/10 shadow-lg backdrop-blur-md"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle Menu"
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

            {/* --- OVERLAY MENÚ MÓVIL --- */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 bg-[#020617]/95 z-[130] flex flex-col justify-between overflow-y-auto"
                    >
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00C1A3]/10 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

                        <div className="flex flex-col gap-6 w-full px-8 pt-32 pb-10 relative z-10 mt-10">
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
                                        className={`group flex items-center justify-between w-full text-left py-5 border-b border-white/5 ${isActive ? 'text-[#00C1A3]' : 'text-white hover:text-slate-300'
                                            }`}
                                    >
                                        <span className="text-4xl sm:text-5xl font-[1000] uppercase tracking-tighter italic group-hover:translate-x-4 transition-transform duration-300 drop-shadow-md">
                                            {link.name}
                                        </span>
                                        {isActive && <ChevronRight size={36} className="text-[#00C1A3]" />}
                                    </motion.button>
                                );
                            })}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            className="px-8 pb-12 w-full relative z-10 flex flex-col gap-6 mt-auto"
                        >
                            <button
                                onClick={() => { navigate('/register'); setMobileMenuOpen(false); }}
                                className="w-full py-5 sm:py-6 bg-[#00C1A3] text-[#020617] font-[1000] italic uppercase tracking-widest text-lg rounded-2xl shadow-[0_20px_40px_rgba(0,193,163,0.3)] flex items-center justify-center gap-3 active:scale-95 transition-transform"
                            >
                                <Sparkles size={20} />
                                PROBAR GRATIS AHORA
                            </button>

                            <div className="flex flex-col items-center gap-2 mt-4">
                                <p className="text-[#00C1A3] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold">Protocolo Seguro Activado</p>
                                <p className="text-slate-500 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium">Nedimi POS © {new Date().getFullYear()}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};