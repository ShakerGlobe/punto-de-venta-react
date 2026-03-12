import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Bloquear scroll correctamente
    useEffect(() => {
        if (mobileMenuOpen) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }
    }, [mobileMenuOpen]);

    const handleNavigation = (path: string) => {
        setMobileMenuOpen(false);
        navigate(path);
    };

    return (
        <>
            <nav className={`fixed top-0 w-full z-[120] transition-all duration-500 ${scrolled || mobileMenuOpen
                    ? 'bg-[#020617]/85 backdrop-blur-2xl py-3 border-b border-[#00C1A3]/20'
                    : 'bg-transparent py-6 md:py-8'
                }`}>
                {/* BARRA DE PROGRESO */}
                <motion.div
                    className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00C1A3] to-cyan-500 origin-left z-[130]"
                    style={{ scaleX }}
                />

                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* LOGO */}
                    <Link
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="group cursor-pointer flex items-center gap-1 z-[130]"
                    >
                        <span className="text-xl md:text-2xl font-[1000] italic tracking-tighter text-white uppercase">
                            Nedimi<span className="text-[#00C1A3]">POS</span>
                        </span>
                        <motion.div
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="w-1.5 h-1.5 bg-[#00C1A3] rounded-full shadow-[0_0_10px_#00C1A3]"
                        />
                    </Link>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md gap-8">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <button
                                    key={link.path}
                                    onClick={() => handleNavigation(link.path)}
                                    className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all relative py-1 ${isActive ? 'text-[#00C1A3]' : 'text-slate-400 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-underline"
                                            className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00C1A3] shadow-[0_0_10px_#00C1A3]"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* BOTONES DERECHA */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={onOpenModal}
                            className="hidden sm:block relative px-6 py-2.5 bg-[#00C1A3] text-[#020617] text-[10px] font-[1000] rounded-xl group shadow-[0_0_20px_rgba(0,193,163,0.3)] transition-transform hover:scale-105 active:scale-95 overflow-hidden"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                            <span className="relative z-10">PROBAR GRATIS</span>
                        </button>

                        <button
                            className="md:hidden p-2 text-white z-[130] relative"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* MOBILE MENU - USANDO PORTAL O POSICIÓN FIJA INDEPENDIENTE */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#020617] z-[110] flex flex-col justify-center items-center overflow-hidden"
                    >
                        {/* Círculo de luz de fondo para que no se vea vacío */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00C1A3]/5 blur-[120px] rounded-full pointer-events-none" />

                        <div className="flex flex-col gap-8 w-full px-10 relative z-[111]">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.path}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => handleNavigation(link.path)}
                                    className={`text-center text-4xl font-[1000] uppercase tracking-tighter italic ${location.pathname === link.path ? 'text-[#00C1A3]' : 'text-white'
                                        }`}
                                >
                                    {link.name}
                                </motion.button>
                            ))}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-10 flex flex-col items-center"
                            >
                                <button
                                    onClick={() => { onOpenModal(); setMobileMenuOpen(false); }}
                                    className="w-full max-w-xs py-5 bg-[#00C1A3] text-[#020617] font-black italic uppercase rounded-2xl shadow-[0_20px_40px_rgba(0,193,163,0.2)]"
                                >
                                    PROBAR GRATIS
                                </button>
                                <p className="text-slate-500 text-[10px] mt-8 uppercase tracking-[0.3em] font-bold">Nedimi POS © 2026</p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{ __html: `@keyframes shimmer { 100% { transform: translateX(100%); } }` }} />
        </>
    );
};