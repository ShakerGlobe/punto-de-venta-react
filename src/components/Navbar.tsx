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

    // La barra de progreso ahora funcionará en cualquier página que tenga scroll
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Actualizamos los IDs por las rutas (paths) que definimos en App.jsx
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

    // Función simple de navegación
    const handleNavigation = (path: string) => {
        setMobileMenuOpen(false);
        navigate(path);
    };

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled
            ? 'bg-[#020617]/85 backdrop-blur-2xl py-3 border-b border-[#00C1A3]/20'
            : 'bg-transparent py-6 md:py-8'
            }`}>

            {/* BARRA DE PROGRESO GLOBAL */}
            <motion.div 
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00C1A3] to-cyan-500 origin-left z-[110]" 
                style={{ scaleX }} 
            />

            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                
                {/* Logo - Ahora es un Link real */}
                <Link 
                    to="/" 
                    className="group cursor-pointer flex items-center gap-1 z-[110]"
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

                {/* Desktop Menu - Basado en Rutas */}
                <div className="hidden md:flex items-center bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md gap-8">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <button
                                key={link.path}
                                onClick={() => handleNavigation(link.path)}
                                className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all relative py-1 ${
                                    isActive ? 'text-[#00C1A3]' : 'text-slate-400 hover:text-white'
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

                {/* Botón CTA */}
                <div className="flex items-center gap-4">
                    <button 
                        onClick={onOpenModal} 
                        className="hidden sm:block relative px-6 py-2.5 bg-[#00C1A3] text-[#020617] text-[10px] font-[1000] rounded-xl group shadow-[0_0_20px_rgba(0,193,163,0.3)] transition-transform hover:scale-105 active:scale-95 overflow-hidden"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                        <span className="relative z-10">PROBAR GRATIS</span>
                    </button>
                    
                    <button 
                        className="md:hidden p-2 text-white z-[110]" 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: -20 }} 
                        className="fixed inset-0 bg-[#020617] flex flex-col items-center justify-center gap-8 z-[105]"
                    >
                        {navLinks.map((link) => (
                            <button 
                                key={link.path} 
                                onClick={() => handleNavigation(link.path)} 
                                className={`text-2xl font-black uppercase tracking-widest ${
                                    location.pathname === link.path ? 'text-[#00C1A3]' : 'text-white'
                                }`}
                            >
                                {link.name}
                            </button>
                        ))}
                        <button 
                            onClick={() => { onOpenModal(); setMobileMenuOpen(false); }} 
                            className="mt-4 px-10 py-5 bg-[#00C1A3] text-[#020617] font-black rounded-2xl shadow-[0_0_30px_rgba(0,193,163,0.2)]"
                        >
                            COMENZAR AHORA
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{ __html: `@keyframes shimmer { 100% { transform: translateX(100%); } }` }} />
        </nav>
    );
};