import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu, X, UserCircle, Sparkles, Zap, Play, CreditCard, MessageCircleQuestion, ArrowRight, ChevronRight
} from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

interface NavbarProps {
    onOpenModal: () => void;
}

export const Navbar = ({ onOpenModal }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);

    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { name: 'Beneficios', path: '/beneficios', icon: <Sparkles size={18} /> },
        { name: 'Tecnología', path: '/tecnologia', icon: <Zap size={18} /> },
        { name: 'Demo', path: '/demo', icon: <Play size={18} /> },
        { name: 'Planes', path: '/planes', icon: <CreditCard size={18} /> },
        { name: 'FAQ', path: '/preguntas', icon: <MessageCircleQuestion size={18} /> },
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
            {/* --- HEADER CONTENEDOR (Efecto Glass sutil al scroll) --- */}
            <header
                className={`fixed w-full top-0 z-[140] transition-all duration-300 ${scrolled
                    ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3'
                    : 'bg-transparent py-5 lg:py-7'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between">

                    {/* 1. BRANDING (Identidad de Marca) */}
                    <Link
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 shrink-0 group"
                    >
                        <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center transition-transform group-hover:scale-105">
                            <img
                                src="/images/nedimi-pos-04.png"
                                alt="Nedimi POS"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col -space-y-1">
                            <span className="text-xl lg:text-2xl font-black text-slate-900 tracking-tighter">
                                Nedimi<span className="text-blue-600">POS</span>
                            </span>
                            <span className="text-[10px] font-bold text-blue-600/60 tracking-[0.2em] uppercase ml-0.5">
                                Punto de Venta
                            </span>
                        </div>
                    </Link>

                    {/* 2. NAVIGATION (Menu Centrado Orgánico) */}
                    <nav
                        className="hidden lg:flex items-center bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/40"
                        onMouseLeave={() => setHoveredTab(null)}
                    >
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            const isHovered = hoveredTab === link.path;

                            return (
                                <button
                                    key={link.path}
                                    onClick={() => handleNavigation(link.path)}
                                    onMouseEnter={() => setHoveredTab(link.path)}
                                    className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-[14px] font-bold transition-colors z-10"
                                >
                                    {isActive && !isHovered && (
                                        <div className="absolute inset-0 bg-white rounded-xl shadow-sm shadow-blue-900/5 ring-1 ring-slate-200/50 -z-10" />
                                    )}

                                    {isHovered && (
                                        <motion.div
                                            layoutId="hover-pill"
                                            className="absolute inset-0 bg-white/80 rounded-xl shadow-sm shadow-blue-900/5 ring-1 ring-slate-200/50 -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                        />
                                    )}

                                    <span className={`transition-colors duration-200 ${isActive || isHovered ? 'text-blue-600' : 'text-slate-400'}`}>
                                        {link.icon}
                                    </span>
                                    <span className={`transition-colors duration-200 ${isActive || isHovered ? 'text-blue-700' : 'text-slate-500'}`}>
                                        {link.name}
                                    </span>
                                </button>
                            );
                        })}
                    </nav>

                    {/* 3. ACTIONS (Conversión Directa) */}
                    <div className="flex items-center gap-3 lg:gap-4">

                        {/* --- EL BOTÓN INGRESAR AHORA TIENE BLUR Y ESTRUCTURA --- */}
                        <button
                            onClick={() => window.location.href = '/puntodeventa/'}
                            className="hidden sm:flex items-center gap-2 text-sm font-bold text-slate-600 bg-slate-100/50 backdrop-blur-md border border-slate-200/50 hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all px-4 py-2.5 rounded-xl"
                        >
                            <UserCircle size={18} />
                            Ingresar
                        </button>

                        <button
                            onClick={() => navigate('/register')}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-3 rounded-2xl transition-all shadow-lg shadow-blue-600/20 active:scale-95 group"
                        >
                            <span className="hidden sm:inline">Probar Gratis</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        {/* MOBILE TOGGLE */}
                        <button
                            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Menú Móvil"
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* --- MOBILE OVERLAY --- */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[130] lg:hidden flex justify-center items-end sm:items-center p-4"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ y: 100, scale: 0.95 }}
                            animate={{ y: 0, scale: 1 }}
                            exit={{ y: 100, scale: 0.95 }}
                            className="bg-white w-full max-w-sm rounded-[2.5rem] p-6 sm:p-8 shadow-2xl overflow-hidden relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col gap-2">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-2">Navegación</p>
                                {navLinks.map((link) => {
                                    const isActive = location.pathname === link.path;
                                    return (
                                        <button
                                            key={link.path}
                                            onClick={() => handleNavigation(link.path)}
                                            className={`flex items-center justify-between w-full p-4 rounded-2xl transition-all ${isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-slate-50 text-slate-700'
                                                }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                                                    {link.icon}
                                                </div>
                                                <span className="text-lg font-bold">{link.name}</span>
                                            </div>
                                            <ChevronRight size={20} className={isActive ? 'opacity-100' : 'opacity-20'} />
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="mt-8 flex flex-col gap-3">
                                <button
                                    onClick={() => { window.location.href = '/puntodeventa/'; setMobileMenuOpen(false); }}
                                    className="flex items-center justify-center p-4 rounded-2xl bg-slate-50 text-slate-700 gap-3 border border-slate-100 font-bold active:bg-slate-100"
                                >
                                    <UserCircle size={22} className="text-slate-400" />
                                    <span>Ingresar a mi cuenta</span>
                                </button>
                                <button
                                    onClick={() => { navigate('/register'); setMobileMenuOpen(false); }}
                                    className="flex items-center justify-center p-4 rounded-2xl bg-blue-600 text-white gap-3 shadow-lg shadow-blue-600/20 font-bold active:scale-95 transition-transform"
                                >
                                    <span>Empezar a Probar Gratis</span>
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};