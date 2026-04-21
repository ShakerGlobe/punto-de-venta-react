import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import {
    ShieldCheck,
    Scale,
    MapPin,
    Database,
    Target,
    CheckCircle2,
    Globe,
    Share2,
    Fingerprint,
    XCircle,
    BellOff,
    Cookie,
    Lock,
    RefreshCcw,
    MessageSquare
} from 'lucide-react';

// --- SUB-COMPONENTE: TARJETA DE PRIVACIDAD ---
const PrivacyArticle = ({ title, label, icon, children, i }: any) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            onMouseMove={handleMouseMove}
            className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white/80 backdrop-blur-sm p-8 md:p-12 mb-8 transition-all duration-500 hover:border-[#00C1A3]/30 shadow-xl shadow-slate-200/50"
        >
            {/* Spotlight Effect interactivo */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(0, 193, 163, 0.06),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-sm text-[#00C1A3]">
                        {React.cloneElement(icon, { size: 28 })}
                    </div>
                    <div>
                        {label && (
                            <span className="text-[#00C1A3] font-black text-[10px] tracking-[0.3em] uppercase block mb-1">
                                {label}
                            </span>
                        )}
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 italic uppercase tracking-tighter group-hover:text-[#00C1A3] transition-colors">
                            {title}
                        </h2>
                    </div>
                </div>
                <div className="text-slate-500 text-lg leading-relaxed space-y-6 font-medium">
                    {children}
                </div>
            </div>
        </motion.article>
    );
};

const PrivacyNotice: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-white pt-32 pb-20 overflow-hidden">
            
            {/* --- DESTELLOS VERDES NEDIMI (Animados y Visibles) --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Cuadrícula base sutil */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:60px_60px] opacity-30" />
                
                {/* Destello Superior Izquierdo */}
                <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-5%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#00C1A3] rounded-full blur-[120px] md:blur-[160px]" 
                />
                
                {/* Destello Central Derecho */}
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/2 right-[-10%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-emerald-400 rounded-full blur-[100px] md:blur-[150px]" 
                />

                {/* Destello Inferior Izquierdo */}
                <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[-10%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#00C1A3] rounded-full blur-[120px]" 
                />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                
                {/* ENCABEZADO */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <span className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-[#00C1A3] text-[10px] font-black uppercase tracking-[0.3em] shadow-sm">
                        <Lock size={12} /> Privacidad Garantizada
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black text-slate-950 mt-10 tracking-tighter italic uppercase leading-[0.85]">
                        Aviso de <br />
                        <span className="text-[#00C1A3] underline decoration-emerald-100 decoration-8 underline-offset-8">
                            Privacidad
                        </span>
                    </h1>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-12">
                        Última actualización: <span className="text-slate-900">11 de marzo de 2026</span>
                    </p>
                </motion.header>

                <div className="relative">
                    {/* SECCIÓN 1 */}
                    <PrivacyArticle
                        label="Documento Legal"
                        title="NEDIMI POS"
                        icon={<ShieldCheck />}
                        i={1}
                    >
                        <p>
                            En cumplimiento con la Ley Federal de Protección de Datos Personales, <strong className="text-slate-900">NEDIMIPOS S.A. de C.V.</strong> pone a su disposición el presente Aviso de Privacidad Integral.
                        </p>
                    </PrivacyArticle>

                    {/* SECCIÓN 2 */}
                    <PrivacyArticle
                        label="Responsable"
                        title="Identidad y Domicilio"
                        icon={<MapPin />}
                        i={2}
                    >
                        <p>
                            <strong className="text-slate-900">NEDIMIPOS</strong>, operado por <strong className="text-slate-900">eSoft Pasion S.A. de C.V.</strong>, con domicilio en Montecito #38, Piso 33, Col. Nápoles, Ciudad de México.
                        </p>
                    </PrivacyArticle>

                    {/* SECCIÓN 3 */}
                    <PrivacyArticle
                        label="Recopilación"
                        title="Datos Personales"
                        icon={<Database />}
                        i={3}
                    >
                        <p>Recabamos los datos necesarios para la correcta operación de su negocio en la nube:</p>
                        <ul className="space-y-3 mt-6">
                            {[
                                { t: "Identificación", d: "Nombre, correo y teléfono." },
                                { t: "Operación", d: "Ventas, inventarios y reportes." },
                                { t: "Fiscales", d: "RFC para facturación." }
                            ].map((item, idx) => (
                                <li key={idx} className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 flex gap-4">
                                    <CheckCircle2 className="text-[#00C1A3] shrink-0" size={20} />
                                    <div>
                                        <strong className="text-slate-900 block text-sm uppercase italic">{item.t}</strong>
                                        <span className="text-sm">{item.d}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </PrivacyArticle>
                </div>

                {/* PIE LEGAL */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 pt-16 border-t border-slate-100 flex flex-col items-center gap-8 text-center"
                >
                    <Scale className="text-slate-200 w-12 h-12" />
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] max-w-2xl leading-loose">
                        Este aviso es parte integrante de los términos de Nedimi Solutions. El uso de la plataforma implica la aceptación total de estas políticas.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default PrivacyNotice;