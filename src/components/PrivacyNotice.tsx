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
    MessageSquare,
    ExternalLink
} from 'lucide-react';

interface PrivacyNoticeProps {
    companyName?: string;
    lastUpdated?: string;
    contactEmail?: string;
}

// --- SUB-COMPONENTE DE ARTÍCULO CON ESTILO "BENEFIT CARD" ---
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
                        {label && (
                            <span className="text-[#00C1A3] font-mono text-sm tracking-[0.3em] opacity-50 uppercase block mb-1">
                                {label}
                            </span>
                        )}
                        <h2 className="text-2xl md:text-3xl font-[1000] text-white italic uppercase tracking-tighter group-hover:text-[#00C1A3] transition-colors">
                            {title}
                        </h2>
                    </div>
                </div>
                <div className="text-slate-300 text-lg leading-relaxed space-y-6">
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
            {/* DECORACIÓN DE FONDO */}
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
                    {/* SECCIÓN 1 - INTRODUCCIÓN */}
                    <PrivacyArticle
                        label="Documento Legal"
                        title="Aviso de Privacidad NEDIMIPOS"
                        icon={<ShieldCheck className="text-[#00C1A3] w-7 h-7" />}
                        i={1}
                    >
                        <p>
                            En cumplimiento con lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento, <strong className="text-white">NEDIMIPOS S.A. de C.V.</strong> (en adelante, “NEDIMIPOS”), pone a su disposición el presente Aviso de Privacidad Integral.
                        </p>
                        <p>
                            En NEDIMIPOS valoramos su confianza y estamos comprometidos con la protección de su información personal, garantizando en todo momento un tratamiento responsable, transparente y conforme a la normativa aplicable.
                        </p>
                    </PrivacyArticle>

                    {/* SECCIÓN 2 - IDENTIDAD Y DOMICILIO */}
                    <PrivacyArticle
                        label="Responsable"
                        title="Identidad y Domicilio"
                        icon={<MapPin className="text-blue-400 w-7 h-7" />}
                        i={2}
                    >
                        <p>
                            <strong className="text-white">NEDIMIPOS</strong>, operado por <strong className="text-white">eSoft Pasion, Pasión por la Tecnología 2006 S.A. de C.V.</strong>, con domicilio en Montecito #38, Piso 33, Col. Nápoles, Ciudad de México, es responsable del uso y protección de sus datos personales.
                        </p>

                        <div className="flex flex-col gap-3 mt-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                            <p className="text-sm md:text-base">
                                <span className="text-[#00C1A3] font-bold uppercase tracking-widest text-xs mr-2">Sitio Web:</span>
                                <a href="https://nedimipos.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00C1A3] transition-colors underline decoration-white/20 underline-offset-4">
                                    https://nedimipos.com/
                                </a>
                            </p>
                            <p className="text-sm md:text-base">
                                <span className="text-[#00C1A3] font-bold uppercase tracking-widest text-xs mr-2">Correo electrónico:</span>
                                <a href="mailto:contacto@esoftpasion.com" className="text-white hover:text-[#00C1A3] transition-colors underline decoration-white/20 underline-offset-4">
                                    contacto@esoftpasion.com
                                </a>
                            </p>
                        </div>
                    </PrivacyArticle>

                    {/* SECCIÓN 3 - DATOS PERSONALES */}
                    <PrivacyArticle
                        label="Recopilación"
                        title="Datos Personales"
                        icon={<Database className="text-purple-400 w-7 h-7" />}
                        i={3}
                    >
                        <p>
                            Para llevar a cabo las finalidades descritas en el presente aviso, recabaremos las siguientes categorías de datos personales:
                        </p>

                        <ul className="space-y-4 mt-6 mb-6">
                            <li className="bg-white/5 p-5 rounded-2xl border border-white/5">
                                <strong className="text-[#00C1A3] block mb-1">Datos de identificación:</strong>
                                <span className="text-sm md:text-base text-slate-300">Nombre completo, correo electrónico, número telefónico.</span>
                            </li>
                            <li className="bg-white/5 p-5 rounded-2xl border border-white/5">
                                <strong className="text-[#00C1A3] block mb-1">Datos de registro en la plataforma:</strong>
                                <span className="text-sm md:text-base text-slate-300">Usuario, contraseña y datos relacionados con el acceso y uso de la cuenta en NEDIMIPOS.</span>
                            </li>
                            <li className="bg-white/5 p-5 rounded-2xl border border-white/5">
                                <strong className="text-[#00C1A3] block mb-1">Datos de negocio (uso del sistema):</strong>
                                <span className="text-sm md:text-base text-slate-300">Información de ventas, inventario, productos, clientes registrados por el usuario, transacciones y reportes generados dentro de la plataforma.</span>
                            </li>
                            <li className="bg-white/5 p-5 rounded-2xl border border-white/5">
                                <strong className="text-[#00C1A3] block mb-1">Datos fiscales:</strong>
                                <span className="text-sm md:text-base text-slate-300">Registro Federal de Contribuyentes (RFC), razón social y domicilio fiscal, para efectos de facturación.</span>
                            </li>
                            <li className="bg-white/5 p-5 rounded-2xl border border-white/5">
                                <strong className="text-[#00C1A3] block mb-1">Datos técnicos y de navegación:</strong>
                                <span className="text-sm md:text-base text-slate-300">Dirección IP, tipo de navegador, sistema operativo y uso de cookies.</span>
                            </li>
                        </ul>

                        <p className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-200 text-sm md:text-base">
                            <strong className="text-blue-400">Nota importante:</strong> No recabamos datos personales sensibles a través de nuestro sitio web o servicios directos.
                        </p>
                    </PrivacyArticle>

                    {/* SECCIÓN 4 - FINALIDADES DEL TRATAMIENTO */}
                    <PrivacyArticle
                        label="Propósito"
                        title="Finalidades del Tratamiento"
                        icon={<Target className="text-emerald-400 w-7 h-7" />}
                        i={4}
                    >
                        <p>
                            Sus datos personales serán utilizados para las siguientes finalidades, explicadas de manera clara para su mejor comprensión, las cuales se dividen en primarias y secundarias:
                        </p>

                        {/* A. Primarias */}
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-white mb-2">A. Finalidades Primarias (Necesarias)</h3>
                            <p className="text-sm md:text-base text-slate-400 mb-4">
                                Son aquellas indispensables para la relación comercial y la prestación de nuestros servicios:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                                {[
                                    "Crear, registrar y administrar su cuenta en la plataforma NEDIMIPOS.",
                                    "Permitir el uso del sistema para la gestión de ventas, inventarios y operaciones comerciales.",
                                    "Procesar pagos y emitir facturación electrónica (CFDI).",
                                    "Brindar soporte técnico y atención al cliente.",
                                    "Garantizar la seguridad de la plataforma y de la información.",
                                    "Cumplir con obligaciones legales y contractuales.",
                                    "Dar seguimiento a solicitudes de información y procesos comerciales."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                                        <CheckCircle2 className="text-[#00C1A3] w-5 h-5 shrink-0 mt-0.5" />
                                        <span className="text-sm text-slate-300 leading-tight">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Uso en prueba gratuita */}
                        <div className="bg-[#00C1A3]/10 border border-[#00C1A3]/20 rounded-2xl p-6 mb-8">
                            <h4 className="text-[#00C1A3] font-bold uppercase tracking-widest text-sm mb-3">Uso en prueba gratuita</h4>
                            <p className="text-sm text-slate-300 mb-4">En caso de que utilice la prueba gratuita, sus datos serán utilizados para:</p>
                            <ul className="space-y-2">
                                {[
                                    "Crear su cuenta de acceso temporal.",
                                    "Permitirle utilizar las funcionalidades del sistema durante el periodo de prueba.",
                                    "Contactarlo para brindarle acompañamiento y soporte.",
                                    "Dar seguimiento comercial para ofrecer la contratación del servicio."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C1A3] shrink-0" />
                                        <span className="text-sm text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* B. Secundarias */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">B. Finalidades Secundarias (Accesorias)</h3>
                            <p className="text-sm md:text-base text-slate-400 mb-4">
                                Son aquellas que no son indispensables para el servicio solicitado, pero que nos permiten brindarle una mejor atención. Requieren de su consentimiento:
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Enviarle promociones, novedades o actualizaciones de NEDIMIPOS.",
                                    "Compartir contenido informativo o educativo sobre tecnología y negocios.",
                                    "Realizar encuestas de satisfacción."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                                        <div className="w-2 h-2 rounded-sm bg-purple-400 rotate-45 shrink-0" />
                                        <span className="text-sm text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Opt-out Footer */}
                        <p className="p-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 text-sm md:text-base italic">
                            Si usted no desea que sus datos personales sean tratados para estas finalidades secundarias, puede manifestar su negativa desde este momento enviando un correo electrónico a <a href="mailto:contacto@esoftpasion.com" className="text-white hover:text-[#00C1A3] underline decoration-white/20 underline-offset-4 transition-colors">contacto@esoftpasion.com</a> con el asunto <strong className="text-white font-normal">"Negativa de finalidades secundarias"</strong>. Su negativa no será un motivo para que le neguemos los servicios y productos que contrata con nosotros.
                        </p>
                    </PrivacyArticle>

                    {/* SECCIÓN 5 - FORMULARIOS WEB Y LANDING PAGES */}
                    <PrivacyArticle
                        label="Captura de Datos"
                        title="Formularios Web y Landing Pages"
                        icon={<Globe className="text-amber-400 w-7 h-7" />}
                        i={5}
                    >
                        <p>
                            Los datos personales que usted proporcione a través de formularios en nuestro sitio web, landing pages o durante su registro en la plataforma serán utilizados para:
                        </p>

                        <ul className="space-y-3 mt-6 mb-6">
                            {[
                                "Crear y administrar su cuenta.",
                                "Contactarlo para seguimiento comercial o soporte.",
                                "Brindarles acceso a los servicios de NEDIMIPOS."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                                    <CheckCircle2 className="text-[#00C1A3] w-5 h-5 shrink-0" />
                                    <span className="text-sm md:text-base text-slate-300">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mb-4">
                            Al proporcionar sus datos, usted acepta que podamos contactarlo a través de los medios proporcionados (correo electrónico, teléfono o mensajería instantánea).
                        </p>
                        <p className="p-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 text-sm md:text-base italic">
                            En todo momento podrá solicitar dejar de ser contactado conforme a los mecanismos establecidos en este aviso.
                        </p>
                    </PrivacyArticle>

                    {/* SECCIÓN 6 - TRANSFERENCIA DE DATOS */}
                    <PrivacyArticle
                        label="Terceros y Autoridades"
                        title="Transferencia de Datos Personales"
                        icon={<Share2 className="text-blue-400 w-7 h-7" />}
                        i={6}
                    >
                        <p className="mb-4">
                            NEDIMIPOS podrá compartir sus datos personales, sin requerir su consentimiento, en los siguientes casos previstos por el artículo 37 de la Ley:
                        </p>

                        <ul className="space-y-3 mb-8">
                            {[
                                "Con autoridades competentes, para dar cumplimiento a obligaciones legales.",
                                "Con empresas subsidiarias, filiales o del mismo grupo de control de NEDIMIPOS para fines de gestión centralizada."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                                    <span className="text-sm md:text-base text-slate-300">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mb-4 text-slate-300">
                            Adicionalmente, podremos transferir sus datos a los siguientes terceros, quienes actúan como encargados a nuestro nombre, para cumplir con las finalidades primarias:
                        </p>

                        <ul className="space-y-4 mb-6">
                            <li className="bg-white/5 p-5 rounded-2xl border border-white/5">
                                <strong className="text-[#00C1A3] block mb-1">Proveedores de servicios de pago (ej. Stripe, PayPal):</strong>
                                <span className="text-sm md:text-base text-slate-300">Para procesar los pagos de nuestros productos y servicios.</span>
                            </li>
                            <li className="bg-white/5 p-5 rounded-2xl border border-white/5">
                                <strong className="text-[#00C1A3] block mb-1">Proveedores de almacenamiento en la nube (ej. AWS, Azure):</strong>
                                <span className="text-sm md:text-base text-slate-300">Para el almacenamiento seguro de la información.</span>
                            </li>
                            <li className="bg-white/5 p-5 rounded-2xl border border-white/5">
                                <strong className="text-[#00C1A3] block mb-1">Proveedores de servicios de comunicación y correo electrónico:</strong>
                                <span className="text-sm md:text-base text-slate-300">Para la comunicación con usted y el envío de información relevante.</span>
                            </li>
                        </ul>

                        <p className="mb-6 text-slate-300">
                            Cualquier transferencia de datos que no esté contemplada en los supuestos anteriores requerirá de su consentimiento expreso. Estas transferencias se realizan únicamente para cumplir con las finalidades del servicio.
                        </p>

                        <p className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-200 text-sm md:text-base">
                            <strong className="text-blue-400 font-bold uppercase tracking-widest text-xs mr-2">Garantía de Seguridad:</strong>
                            En todos los casos, NEDIMIPOS se asegura de que los terceros con los que comparte información cumplan con estándares adecuados de protección de datos personales, mediante la firma de contratos y cláusulas de confidencialidad conforme a la legislación aplicable.
                        </p>
                    </PrivacyArticle>

                    {/* SECCIÓN 7 - DERECHOS ARCO */}
                    <PrivacyArticle
                        label="Su Control"
                        title="Derechos ARCO"
                        icon={<Fingerprint className="text-[#00C1A3] w-7 h-7" />}
                        i={7}
                    >
                        <p className="mb-6">Usted tiene derecho a:</p>

                        <ul className="space-y-4 mb-8">
                            <li className="bg-white/5 p-5 rounded-2xl border border-white/5">
                                <strong className="text-[#00C1A3] block mb-1">Acceso:</strong>
                                <span className="text-sm md:text-base text-slate-300">Conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos.</span>
                            </li>
                            <li className="bg-white/5 p-5 rounded-2xl border border-white/5">
                                <strong className="text-[#00C1A3] block mb-1">Rectificación:</strong>
                                <span className="text-sm md:text-base text-slate-300">Solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta.</span>
                            </li>
                            <li className="bg-white/5 p-5 rounded-2xl border border-white/5">
                                <strong className="text-[#00C1A3] block mb-1">Cancelación:</strong>
                                <span className="text-sm md:text-base text-slate-300">Solicitar que eliminemos su información de nuestros registros o bases de datos cuando considere que no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa.</span>
                            </li>
                            <li className="bg-white/5 p-5 rounded-2xl border border-white/5">
                                <strong className="text-[#00C1A3] block mb-1">Oposición:</strong>
                                <span className="text-sm md:text-base text-slate-300">Oponerse al uso de sus datos personales para fines específicos.</span>
                            </li>
                        </ul>

                        <p className="mb-4">
                            Para el ejercicio de cualquiera de los derechos ARCO, deberá presentar la solicitud respectiva a través de un correo electrónico a <a href="mailto:contacto@esoftpasion.com" className="text-white hover:text-[#00C1A3] underline decoration-white/20 underline-offset-4 transition-colors">contacto@esoftpasion.com</a> o mediante un escrito libre presentado en nuestro domicilio.
                        </p>

                        <p className="mb-4 text-slate-400 font-bold">La solicitud deberá contener y acompañar lo siguiente:</p>

                        <ul className="space-y-3 mb-8">
                            {[
                                "Su nombre completo y domicilio u otro medio para comunicarle la respuesta.",
                                "Los documentos que acrediten su identidad (copia de identificación oficial vigente) o, en su caso, la representación legal.",
                                "La descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos ARCO.",
                                "Cualquier otro elemento que facilite la localización de los datos personales."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00C1A3]/20 text-[#00C1A3] font-bold text-xs shrink-0 mt-0.5">
                                        {idx + 1}
                                    </span>
                                    <span className="text-sm md:text-base text-slate-300">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-200 text-sm md:text-base">
                            <strong className="text-emerald-400 font-bold uppercase tracking-widest text-xs mr-2">Tiempo de Respuesta:</strong>
                            El plazo para atender su solicitud será de un máximo de 20 días hábiles contados desde la fecha en que se recibió, y le informaremos sobre la procedencia de esta a través del correo electrónico o domicilio que nos haya proporcionado.
                        </p>
                    </PrivacyArticle>

                    {/* SECCIÓN 8 - REVOCACIÓN DEL CONSENTIMIENTO */}
                    <PrivacyArticle
                        label="Retiro de Permisos"
                        title="Revocación del Consentimiento"
                        icon={<XCircle className="text-rose-400 w-7 h-7" />}
                        i={8}
                    >
                        <p className="mb-6">
                            Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. El procedimiento para la revocación del consentimiento será el mismo que el establecido para el ejercicio de los derechos ARCO.
                        </p>
                        <p className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-200 text-sm md:text-base">
                            <strong className="text-amber-400 font-bold uppercase tracking-widest text-xs mr-2">Aviso Importante:</strong>
                            Es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales.
                        </p>
                    </PrivacyArticle>

                    {/* SECCIÓN 9 - LIMITACIÓN DE USO */}
                    <PrivacyArticle
                        label="Privacidad"
                        title="Opciones para Limitar el Uso o Divulgación de sus Datos Personales"
                        icon={<BellOff className="text-pink-400 w-7 h-7" />}
                        i={9}
                    >
                        <p className="mb-4">
                            Con objeto de que usted pueda limitar el uso y divulgación de su información personal, le ofrecemos los siguientes medios:
                        </p>

                        <ul className="space-y-4 mb-6">
                            <li className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/5">
                                <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 shrink-0" />
                                <span className="text-sm md:text-base text-slate-300">
                                    Su inscripción en el Registro Público para Evitar Publicidad (REPEP), que está a cargo de la Procuraduría Federal del Consumidor (PROFECO).
                                </span>
                            </li>
                            <li className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/5">
                                <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 shrink-0" />
                                <span className="text-sm md:text-base text-slate-300">
                                    En todos nuestros correos electrónicos promocionales se incluye un enlace para cancelar la suscripción ("No deseo recibir promociones"), permitiéndole dejar de recibir este tipo de comunicaciones de forma inmediata.
                                </span>
                            </li>
                        </ul>
                    </PrivacyArticle>

                    {/* SECCIÓN 10 - COOKIES Y TRACKING */}
                    <PrivacyArticle
                        label="Navegación Web"
                        title="Uso de Cookies + Tracking"
                        icon={<Cookie className="text-amber-400 w-7 h-7" />}
                        i={10}
                    >
                        <p className="mb-4">
                            Nuestro sitio web <a href="https://nedimipos.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00C1A3] transition-colors underline decoration-white/20 underline-offset-4">https://nedimipos.com/</a> utiliza cookies, web beacons y otras tecnologías similares. Las cookies son pequeños archivos de texto que se almacenan en su navegador para mejorar su experiencia en nuestro sitio. Las utilizamos para:
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            {[
                                "Mejorar la experiencia del usuario",
                                "Asegurar el funcionamiento técnico y la funcionalidad esencial del sitio.",
                                "Analizar el tráfico web y el comportamiento del usuario (ej. mediante Google Analytics) para mejorar nuestros servicios.",
                                "Personalizar el contenido y funcionalidades."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                                    <CheckCircle2 className="text-[#00C1A3] w-5 h-5 shrink-0 mt-0.5" />
                                    <span className="text-sm text-slate-300 leading-tight">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mb-4 text-slate-300">
                            Asimismo, podremos utilizar herramientas de análisis y seguimiento (como píxeles, cookies publicitarias o tecnologías similares) para:
                        </p>

                        <ul className="space-y-3 mb-8">
                            {[
                                "Medir la efectividad de nuestros productos",
                                "Mostrar publicidad personalizada",
                                "Analizar el comportamiento del usuario en nuestros sitios"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                                    <div className="w-2 h-2 rounded-sm bg-purple-400 rotate-45 shrink-0" />
                                    <span className="text-sm text-slate-300">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-200 text-sm md:text-base">
                            <strong className="text-amber-400 font-bold uppercase tracking-widest text-xs mr-2">Configuración del Navegador:</strong>
                            Usted puede deshabilitar el uso de cookies en la configuración de su navegador. Sin embargo, si decide declinarlas, es posible que algunas funciones de nuestro sitio dejen de funcionar correctamente.
                        </p>
                    </PrivacyArticle>

                    {/* SECCIÓN 11 - MEDIDAS DE SEGURIDAD */}
                    <PrivacyArticle
                        label="Protección de Datos"
                        title="Medidas de Seguridad"
                        icon={<Lock className="text-[#00C1A3] w-7 h-7" />}
                        i={11}
                    >
                        <p className="mb-4 text-slate-300">
                            NEDIMIPOS implementa medidas de seguridad administrativas, técnicas y físicas para proteger su información personal contra daño, pérdida, alteración o uso no autorizado.
                        </p>
                        <p className="text-slate-300">
                            Nuestro compromiso es garantizar la confidencialidad, integridad y disponibilidad de sus datos, utilizando tecnologías seguras y buenas prácticas reconocidas en la industria.
                        </p>
                    </PrivacyArticle>

                    {/* SECCIÓN 12 - CAMBIOS AL AVISO */}
                    <PrivacyArticle
                        label="Actualizaciones"
                        title="Cambios al Aviso de Privacidad"
                        icon={<RefreshCcw className="text-indigo-400 w-7 h-7" />}
                        i={12}
                    >
                        <p className="mb-4 text-slate-300">
                            El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales, de nuestras propias necesidades por los productos o servicios que ofrecemos, de nuestras prácticas de privacidad o por otras causas.
                        </p>
                        <p className="text-slate-300">
                            Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad. Las actualizaciones serán publicadas en los medios oficiales de NEDIMIPOS.
                        </p>
                    </PrivacyArticle>

                    {/* SECCIÓN 13 - CONTACTO Y QUEJAS */}
                    <PrivacyArticle
                        label="Soporte Legal"
                        title="Contacto y Quejas"
                        icon={<MessageSquare className="text-emerald-400 w-7 h-7" />}
                        i={13}
                    >
                        <p className="mb-4 text-slate-300">
                            Si usted tiene alguna duda sobre el tratamiento de sus datos personales o considera que su derecho a la protección de datos ha sido lesionado por alguna conducta de nuestros empleados o de nuestras actuaciones, puede ponerse en contacto con nuestro departamento de protección de datos a través del correo electrónico <a href="mailto:contacto@esoftpasion.com" className="text-white hover:text-[#00C1A3] underline decoration-white/20 underline-offset-4 transition-colors">contacto@esoftpasion.com</a>.
                        </p>
                        <p className="text-slate-300">
                            Asimismo, si considera que su derecho ha sido vulnerado, puede acudir ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI). Para más información visite <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00C1A3] underline decoration-white/20 underline-offset-4 transition-colors">www.inai.org.mx</a>
                        </p>
                    </PrivacyArticle>

                    {/* SECCIÓN 14 - ENLACES A TERCEROS */}
                    <PrivacyArticle
                        label="Sitios Externos"
                        title="Enlaces a Terceros"
                        icon={<ExternalLink className="text-cyan-400 w-7 h-7" />}
                        i={14}
                    >
                        <p className="mb-6 text-slate-300">
                            Este sitio web puede contener enlaces a otros sitios de interés. Una vez que usted hace clic en estos enlaces y abandona nuestra página, ya no tenemos control sobre el sitio al que es redirigido y, por lo tanto, no somos responsables de los términos, la privacidad ni la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad.
                        </p>
                        <p className="p-5 bg-[#00C1A3]/10 border border-[#00C1A3]/20 rounded-2xl text-slate-200 text-sm md:text-base leading-relaxed">
                            En <strong className="text-white">NEDIMIPOS</strong> trabajamos continuamente para proteger su información y brindarle un servicio seguro y confiable. Si tiene cualquier duda sobre este Aviso de Privacidad, estaremos encantados de atenderle.
                        </p>
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