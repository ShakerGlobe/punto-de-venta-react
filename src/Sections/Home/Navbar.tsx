import { useState, useEffect } from 'react';

interface NavbarProps {
    onOpenModal: () => void;
}

export const Navbar = ({ onOpenModal }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Lógica simple para detectar sección activa
            const sections = ['home', 'benefits', 'showcase', 'faq'];
            const current = sections.find(id => {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
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
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* Logo con Glitch sutil al hover */}
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
                            {/* Línea decorativa debajo del activo */}
                            <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#00C1A3] transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                                }`} />
                        </button>
                    ))}
                </div>

                {/* Acción Única Promocional */}
                <div className="flex items-center">
                    <button
                        onClick={onOpenModal}
                        className="relative px-8 py-3 bg-[#00C1A3] text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full overflow-hidden group transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,193,163,0.3)]"
                    >
                        {/* Brillo que recorre el botón */}
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />

                        <span className="relative z-10">Probar Gratis</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};