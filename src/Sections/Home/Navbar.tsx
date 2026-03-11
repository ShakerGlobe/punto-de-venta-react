import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
    onOpenModal: () => void;
}

export const Navbar = ({ onOpenModal }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const navLinks = [
        { name: 'Inicio', id: 'home' },
        { name: 'Beneficios', id: 'benefits' },
        { name: 'Tecnología', id: 'showcase' },
        { name: 'FAQ', id: 'faq' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['home', 'benefits', 'showcase', 'faq'];
            const current = sections.find(id => {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // Detecta si la sección está cruzando el cuarto superior de la pantalla
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled
            ? 'bg-[#020617]/85 backdrop-blur-2xl py-3 border-b border-[#00C1A3]/20'
            : 'bg-transparent py-6 md:py-8'
            }`}>

            {/* BARRA DE PROGRESO */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] md:h-[3px] bg-gradient-to-r from-[#00C1A3] via-emerald-400 to-cyan-500 origin-left z-[110]"
                style={{ scaleX }}
            />

            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Logo */}
                <div
                    className="group cursor-pointer flex items-center gap-1 z-[110]"
                    onClick={() => scrollToSection('home')}
                >
                    <span className="text-xl md:text-2xl font-[1000] italic tracking-tighter text-white uppercase transition-colors">
                        Nedimi<span className="text-[#00C1A3]">POS</span>
                    </span>
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-1.5 h-1.5 bg-[#00C1A3] rounded-full shadow-[0_0_10px_#00C1A3]"
                    />
                </div>

                {/* Navegación Desktop */}
                <div className="hidden md:flex items-center bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all relative py-1 ${activeSection === link.id ? 'text-[#00C1A3]' : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            {link.name}
                            {activeSection === link.id && (
                                <motion.span
                                    layoutId="nav-underline"
                                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00C1A3] shadow-[0_0_10px_#00C1A3]"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Botón CTA y Menú Mobile */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={onOpenModal}
                        className="hidden sm:block relative px-5 md:px-7 py-2.5 md:py-3 bg-[#00C1A3] text-[#020617] text-[10px] md:text-[11px] font-[1000] uppercase tracking-widest rounded-xl overflow-hidden group transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,193,163,0.3)]"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                        <span className="relative z-10">PROBAR GRATIS</span>
                    </button>

                    {/* Hamburger Button */}
                    <button
                        className="md:hidden p-2 text-white z-[110]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Menú Mobile Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 w-full h-screen bg-[#020617] flex flex-col items-center justify-center gap-8 z-[105]"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`text-2xl font-black uppercase tracking-widest ${activeSection === link.id ? 'text-[#00C1A3]' : 'text-white'}`}
                            >
                                {link.name}
                            </button>
                        ))}
                        <button
                            onClick={onOpenModal}
                            className="mt-4 px-10 py-5 bg-[#00C1A3] text-[#020617] font-black rounded-2xl"
                        >
                            COMENZAR AHORA
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
            `}} />
        </nav>
    );
};