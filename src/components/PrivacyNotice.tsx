import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { 
    ShieldCheck, 
    Database, 
    Target, 
    Fingerprint, 
    Mail, 
    Scale,
    CheckCircle2
} from 'lucide-react';

interface PrivacyNoticeProps {
    companyName?: string;
    lastUpdated?: string;
    contactEmail?: string;
}

// --- SUB-COMPONENTE DE ARTÍCULO CON ESTILO "BENEFIT CARD" ---
const PrivacyArticle = ({ title, number, icon, children, i }: any) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            onMouseMove={handleMouseMove}
            className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#001f3f]/40 backdrop-blur-md p-8 md:p-12 mb-8 transition-all duration-500 hover:border-[#00C1A3]/40 shadow-2xl"
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(0, 193, 163, 0.1),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                    <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-14 h-14 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-center shadow-inner"
                    >
                        {icon}
                    </motion.div>
                    <div>
                        <span className="text-[#00C1A3] font-mono text-sm tracking-[0.3em] opacity-50 uppercase block mb-1">
                            Sección {number}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-[1000] text-white italic uppercase tracking-tighter group-hover:text-[#00C1A3] transition-colors">
                            {title}
                        </h2>
                    </div>
                </div>
                <div className="text-slate-300 text-lg leading-relaxed space-y-4">
                    {children}
                </div>
            </div>
        </motion.article>
    );
};

const PrivacyNotice: React.FC<PrivacyNoticeProps> = ({
    companyName = "Nedimi POS",
    lastUpdated = "11 de marzo de 2026",
    contactEmail = "orlando.palacios@nedimi.com"
}) => {
    return (
        <section className="relative min-h-screen bg-[#020617] pt-32 pb-20 overflow-hidden">
            {/* DECORACIÓN DE FONDO (Igual que en tus otros componentes) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#00C1A3]/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-5xl mx-auto px-6">
                {/* ENCABEZADO IMPACTANTE */}
                <motion.header 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-20"
                >
                    <motion.span
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="text-[#00C1A3] font-black uppercase tracking-[0.4em] text-[10px] bg-[#00C1A3]/10 px-4 py-2 rounded-full border border-[#00C1A3]/20"
                    >
                        Transparencia Total
                    </motion.span>
                    <h1 className="text-5xl md:text-8xl font-[1000] text-white mt-8 tracking-tighter italic uppercase leading-none">
                        Aviso de <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-emerald-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(0,193,163,0.3)]">
                            Privacidad
                        </span>
                    </h1>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-8">
                        Última actualización: <span className="text-slate-300">{lastUpdated}</span>
                    </p>
                </motion.header>

                <div className="relative">
                    {/* SECCIÓN 1 */}
                    <PrivacyArticle 
                        number="01" 
                        title="Responsable Legal" 
                        icon={<ShieldCheck className="text-[#00C1A3] w-7 h-7" />}
                        i={1}
                    >
                        <p>
                            En <strong className="text-white">{companyName}</strong>, nos tomamos en serio la seguridad de tu negocio. Somos los responsables exclusivos del tratamiento de tus datos, asegurando que cada bit de información esté protegido bajo estándares de cifrado de grado industrial.
                        </p>
                    </PrivacyArticle>

                    {/* SECCIÓN 2 */}
                    <PrivacyArticle 
                        number="02" 
                        title="Datos Recabados" 
                        icon={<Database className="text-blue-400 w-7 h-7" />}
                        i={2}
                    >
                        <p className="mb-6">Para garantizar la potencia de nuestro sistema POS, recolectamos:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'Identificación del comercio', 
                                'Información fiscal para CFDI', 
                                'Métricas de transacciones', 
                                'Logs de acceso y seguridad'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <CheckCircle2 size={18} className="text-[#00C1A3]" />
                                    <span className="text-sm font-bold uppercase tracking-tight text-slate-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </PrivacyArticle>

                    {/* SECCIÓN 3 */}
                    <PrivacyArticle 
                        number="03" 
                        title="Finalidad" 
                        icon={<Target className="text-purple-400 w-7 h-7" />}
                        i={3}
                    >
                        <p>
                            Tus datos tienen un solo propósito: <span className="text-white font-bold italic underline decoration-[#00C1A3]">hacer que tu negocio crezca</span>. Los utilizamos para sincronizar tus ventas en la nube, generar reportes inteligentes y prevenir accesos no autorizados a tu inventario.
                        </p>
                    </PrivacyArticle>

                    {/* SECCIÓN 4 */}
                    <PrivacyArticle 
                        number="04" 
                        title="Derechos ARCO" 
                        icon={<Fingerprint className="text-emerald-400 w-7 h-7" />}
                        i={4}
                    >
                        <p className="mb-8">
                            Tienes el control total. Accede, rectifica o cancela tus datos en cualquier momento. Creemos en la soberanía de la información del emprendedor.
                        </p>
                        <a 
                            href={`mailto:${contactEmail}`}
                            className="inline-flex items-center gap-3 bg-[#00C1A3] text-[#020617] font-[1000] uppercase text-sm tracking-widest py-4 px-8 rounded-2xl transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,193,163,0.4)]"
                        >
                            <Mail size={18} />
                            Contactar a Privacidad
                        </a>
                    </PrivacyArticle>
                </div>

                {/* PIE DE PÁGINA LEGAL */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 pt-12 border-t border-white/5 flex flex-col items-center gap-6"
                >
                    <Scale className="text-slate-700 w-10 h-10" />
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] text-center max-w-2xl leading-relaxed">
                        Este documento es parte integrante de los términos y condiciones de Nedimi Solutions. El uso de la plataforma implica la aceptación total de estas políticas.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default PrivacyNotice;