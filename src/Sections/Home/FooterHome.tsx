import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Zap, ShieldCheck, Cloud, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useRef } from 'react';

interface FooterHomeProps {
    onOpenModal: () => void;
}

export const FooterHome = ({ onOpenModal }: FooterHomeProps) => {
    const containerRef = useRef(null);
    const currentYear = new Date().getFullYear();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <footer ref={containerRef} className="relative pt-24 pb-12 overflow-hidden bg-[#020617]">
            {/* DECORACIÓN DE FONDO */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[600px] bg-[#00C1A3]/10 blur-[80px] md:blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* --- SECCIÓN CTA RESPONSIVA --- */}
                <motion.div style={{ scale, opacity }} className="relative group mb-24">
                    <div className="relative bg-white/[0.02] border border-white/10 rounded-[2rem] md:rounded-[4rem] p-8 md:p-20 text-center backdrop-blur-3xl overflow-hidden shadow-2xl">

                        {/* Rayo de fondo optimizado */}
                        <div className="absolute -top-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                            <Zap size={150} className="md:size-[250px] text-[#00C1A3] rotate-12" />
                        </div>

                        <div className="relative z-10">
                            {/* Ajuste de texto para que no se corte: text-3xl en móvil, leading-tight */}
                            <h2 className="text-3xl sm:text-4xl md:text-7xl font-[1000] text-white mb-8 tracking-tighter italic uppercase leading-[1.1] md:leading-none">
                                ¿LISTO PARA <br className="md:hidden" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-cyan-500">
                                    EVOLUCIONAR?
                                </span>
                            </h2>

                            <button
                                onClick={onOpenModal}
                                className="group relative w-full sm:w-auto px-8 md:px-12 py-5 bg-[#00C1A3] text-[#020617] text-base md:text-lg font-[1000] uppercase rounded-xl md:rounded-2xl overflow-hidden flex items-center justify-center gap-4 mx-auto transition-all hover:scale-105 active:scale-95"
                            >
                                <span className="relative z-10">¡EMPEZAR AHORA!</span>
                                <Rocket size={22} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* --- SECCIÓN DE NAVEGACIÓN (Grid Adaptable) --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-t border-white/5 pt-16">
                    {/* Info de Marca */}
                    <div className="space-y-6 text-center sm:text-left">
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">
                            Nedimi<span className="text-[#00C1A3]">POS</span>
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
                            Llevando la gestión de negocios al siguiente nivel con tecnología cloud de última generación.
                        </p>
                        <div className="flex justify-center sm:justify-start gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-[#00C1A3] hover:bg-[#00C1A3]/10 transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Enlaces Rápidos */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6 opacity-50">Navegación</h4>
                        <ul className="space-y-4 text-slate-300 text-sm font-medium">
                            <li><a href="#home" className="hover:text-[#00C1A3] transition-colors">Inicio</a></li>
                            <li><a href="#benefits" className="hover:text-[#00C1A3] transition-colors">Beneficios</a></li>
                            <li><a href="#showcase" className="hover:text-[#00C1A3] transition-colors">Dispositivos</a></li>
                            <li><a href="#faq" className="hover:text-[#00C1A3] transition-colors">Ayuda / FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6 opacity-50">Contacto</h4>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            <li className="flex items-center justify-center sm:justify-start gap-3">
                                <Mail size={16} className="text-[#00C1A3]" /> info@nedimi.com
                            </li>
                            <li className="flex items-center justify-center sm:justify-start gap-3">
                                <Phone size={16} className="text-[#00C1A3]" /> +52 123 456 7890
                            </li>
                            <li className="flex items-center justify-center sm:justify-start gap-3">
                                <MapPin size={16} className="text-[#00C1A3] shrink-0" /> Ciudad de México, MX
                            </li>
                        </ul>
                    </div>

                    {/* Status de Sistema */}
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-[#00C1A3] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Sistema Online</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mb-4 font-medium uppercase leading-relaxed">
                            Sincronización Cloud activa en tiempo real.
                        </p>
                        <div className="flex justify-center sm:justify-start gap-3 text-[#00C1A3]/60">
                            <Cloud size={18} /><ShieldCheck size={18} />
                        </div>
                    </div>
                </div>

                {/* --- COPYRIGHT --- */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 text-center">
                    <p>© {currentYear} NEDIMI SOLUTIONS. TODOS LOS DERECHOS RESERVADOS.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos</a>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `@keyframes shimmer { 100% { transform: translateX(100%); } }` }} />
        </footer>
    );
};