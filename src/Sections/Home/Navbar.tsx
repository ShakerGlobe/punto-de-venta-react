import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface NavbarProps {
    onOpenModal: () => void;
}

export const Navbar = ({ onOpenModal }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Configuración de la barra de progreso superior
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['home', 'benefits', 'showcase', 'faq'];
            const current = sections.find(id => {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // Detecta si la sección está en el viewport
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
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-[80] transition-all duration-500 ${scrolled
                ? 'bg-slate-950/90 backdrop-blur-xl py-4 border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
                : 'bg-transparent py-8'
            }`}>
            {/* BARRA DE PROGRESO DE LECTURA */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-[#00C1A3] origin-left z-[100]"
                style={{ scaleX }}
            />

            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div
                    className="group text-2xl font-black italic tracking-tighter cursor-pointer flex items-center"
                    onClick={() => scrollToSection('home')}
                >
                    <span className="text-[#00C1A3] group-hover:text-white transition-colors">Ary</span>
                    <span className="text-white ml-1 group-hover:text-[#00C1A3] transition-colors">POS</span>
                    <div className="ml-2 w-1.5 h-1.5 bg-[#00C1A3] rounded-full animate-pulse" />
                </div>

                {/* Enlaces de Navegación */}
                <div className="hidden md:flex items-center gap-10">
                    {[
                        { name: 'Inicio', id: 'home' },
                        { name: 'Beneficios', id: 'benefits' },
                        { name: 'Tecnología', id: 'showcase' },
                        { name: 'Preguntas', id: 'faq' }
                    ].map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all relative group ${activeSection === link.id ? 'text-[#00C1A3]' : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#00C1A3] transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                                }`} />
                        </button>
                    ))}
                </div>

                {/* Botón con Shimmer */}
                <div className="flex items-center">
                    <button
                        onClick={onOpenModal}
                        className="relative px-8 py-3 bg-[#00C1A3] text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full overflow-hidden group transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,193,163,0.3)]"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        <span className="relative z-10">Probar Gratis</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};