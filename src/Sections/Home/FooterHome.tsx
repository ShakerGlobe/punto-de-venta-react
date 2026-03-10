import { motion } from 'framer-motion';
import { ChevronRight, Heart, Terminal, Globe, ShieldCheck } from 'lucide-react';

export const FooterHome = () => {
    const currentYear = new Date().getFullYear();

    // Estos IDs deben coincidir con los que pongas en tus <section id="...">
    const sections = [
        { name: 'Inicio', href: '#home' },
        { name: 'Beneficios', href: '#benefits' },
        { name: 'Tecnología', href: '#showcase' },
        { name: 'Preguntas', href: '#faq' }
    ];

    return (
        <footer className="relative bg-transparent pt-24 pb-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00C1A3]/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="md:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#00C1A3] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,193,163,0.4)]">
                                <Terminal size={20} className="text-[#0b1120]" />
                            </div>
                            <h3 className="text-2xl font-black text-white tracking-tighter">
                                Ary<span className="text-[#00C1A3]">POS</span>
                            </h3>
                        </div>
                        <p className="text-slate-500 text-lg max-w-sm leading-relaxed">
                            Empoderando a los comerciantes con tecnología de alto nivel. Gestión inteligente para negocios que no se detienen.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs">Navegación</h4>
                        <ul className="space-y-4">
                            {sections.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-slate-500 hover:text-[#00C1A3] transition-colors flex items-center gap-2 group"
                                    >
                                        <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs">Seguridad</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-slate-500">
                                <ShieldCheck size={18} className="text-[#00C1A3]" />
                                <span className="text-sm">Datos Encriptados</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-500">
                                <Globe size={18} className="text-[#00C1A3]" />
                                <span className="text-sm">Infraestructura Cloud</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Línea final decorativa */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-slate-600 text-xs font-medium tracking-widest uppercase">
                        © {currentYear} AryPOS — Todos los derechos reservados.
                    </div>

                    {/* El modelo de "Desarrollado con amor" integrado sin descuadrar */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.02] border border-white/5 rounded-full">
                        <span className="text-slate-500 text-[11px] font-medium uppercase tracking-wider">Desarrollado con</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <Heart size={12} className="text-red-500 fill-red-500" />
                        </motion.div>
                        <span className="text-slate-500 text-[11px] font-medium uppercase tracking-wider">para comerciantes</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};