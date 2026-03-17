import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import {
    Users,
    CheckCircle2,
    Zap,
    ShieldCheck,
    Lock,
    Scan,
    PieChart,
    FileSpreadsheet,
    XCircle,
    ArrowRightLeft,
    Notebook,
    PackageSearch,
    LifeBuoy,
    Smartphone,
    Monitor
} from 'lucide-react';
import React, { MouseEvent, useEffect, useState } from 'react';

// --- COMPONENTE DE TARJETA CON SPOTLIGHT ---
const BenefitCard = ({ item, i }: { item: any, i: number }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            className={`${item.size} group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-white/5 bg-slate-900/40 backdrop-blur-xl p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:border-[#00C1A3]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:hover:-translate-y-2 min-h-[320px] md:min-h-[380px]`}
        >
            {/* Efecto Spotlight (Oculto en móviles para mejor rendimiento táctil) */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] md:rounded-[2.5rem] opacity-0 transition duration-500 md:group-hover:opacity-100 hidden md:block"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            500px circle at ${mouseX}px ${mouseY}px,
                            ${item.colorSpotlight},
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10">
                <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 md:mb-8 shadow-inner transition-colors group-hover:bg-white/[0.08]"
                >
                    {item.icon}
                </motion.div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-colors duration-300 italic uppercase">
                    {item.title}
                </h3>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-[90%] md:max-w-[280px] font-light group-hover:text-slate-300 transition-colors">
                    {item.desc}
                </p>
            </div>

            <div className="relative z-10 mt-6 md:mt-8">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#00C1A3]/10 border border-[#00C1A3]/20 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-[#00C1A3] shadow-[0_0_15px_rgba(0,193,163,0.1)]">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                    </motion.div>
                    <span>{item.badge || "Cloud Ready"}</span>
                </div>
            </div>
        </motion.div>
    );
};

// --- COMPONENTE PRINCIPAL ---
export const BenefitsHome = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Detección de dispositivo
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

    function handleParallax(e: MouseEvent) {
        if (isMobile) return;
        const { currentTarget, clientX, clientY } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        mouseX.set(x * 30);
        mouseY.set(y * 30);
    }

    const benefits = [
        {
            title: "Terminal Inteligente",
            desc: "Cobros rápidos con escáner mediante cámara o venta manual. Vende por pieza o gramaje.",
            icon: <Scan className="w-6 h-6 md:w-8 md:h-8 text-[#00C1A3]" />,
            size: "md:col-span-2 lg:col-span-4",
            colorSpotlight: "rgba(0, 193, 163, 0.12)",
            badge: "Ventas Express"
        },
        {
            title: "Ganancias",
            desc: "Cálculo automático de utilidad neta y reportes de margen por producto.",
            icon: <PieChart className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />,
            size: "md:col-span-1 lg:col-span-2",
            colorSpotlight: "rgba(59, 130, 246, 0.12)",
            badge: "Finanzas"
        },
        {
            title: "Inventario",
            desc: "Alertas de stock bajo y carga masiva de productos sin errores.",
            icon: <PackageSearch className="w-6 h-6 md:w-8 md:h-8 text-orange-400" />,
            size: "md:col-span-1 lg:col-span-2",
            colorSpotlight: "rgba(251, 146, 60, 0.12)",
            badge: "Control Stock"
        },
        {
            title: "Seguridad y Roles",
            desc: "Control total de acceso para Administradores y Usuarios con cierre automático.",
            icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />,
            size: "md:col-span-2 lg:col-span-4",
            colorSpotlight: "rgba(52, 211, 153, 0.12)",
            badge: "Multi-Usuario"
        },
        {
            title: "Excel Pro",
            desc: "Exporta reportes detallados en un clic para tu contabilidad.",
            icon: <FileSpreadsheet className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />,
            size: "md:col-span-1 lg:col-span-3",
            colorSpotlight: "rgba(168, 85, 247, 0.12)",
            badge: "Reportes"
        },
        {
            title: "Soporte 24/7",
            desc: "Acompañamiento técnico real para que nunca dejes de vender.",
            icon: <LifeBuoy className="w-6 h-6 md:w-8 md:h-8 text-pink-400" />,
            size: "md:col-span-1 lg:col-span-3",
            colorSpotlight: "rgba(236, 72, 153, 0.12)",
            badge: "Premium"
        }
    ];

    const stats = [
        { label: "Dashboard", value: "Real-Time", icon: <Zap className="w-4 h-4" /> },
        { label: "Seguridad", value: "SSL 256", icon: <ShieldCheck className="w-4 h-4" /> },
        { label: "Acceso", value: "Global", icon: <Lock className="w-4 h-4" /> }
    ];

    return (
        <section id="benefits" className="py-20 md:py-32 bg-[#020617] relative overflow-hidden scroll-mt-20">
            {/* Brillo de fondo estático para rendimiento */}
            <div className="absolute top-0 right-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-[#00C1A3]/5 blur-[100px] lg:blur-[140px] rounded-full -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">

                {/* --- BLOQUE 1: COMPARATIVA --- */}
                <div className="mb-24 md:mb-40" onMouseMove={handleParallax}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 md:mb-20"
                    >
                        <span className="inline-block text-[#00C1A3] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[10px] md:text-xs bg-[#00C1A3]/10 px-4 sm:px-6 py-2 md:py-2.5 rounded-full border border-[#00C1A3]/20 mb-6 md:mb-8 shadow-[0_0_20px_rgba(0,193,163,0.1)]">
                            Optimización Total
                        </span>
                        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-[1000] text-white tracking-tighter italic uppercase leading-[0.9]">
                            Deja el <span className="text-slate-800 drop-shadow-md">caos</span>,<br />
                            toma el <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-cyan-400">control</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
                        {/* Icono central de intercambio (Oculto en móviles para no estorbar el diseño apilado) */}
                        <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                            <motion.div
                                animate={{ rotate: 360 + 45 }}
                                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                                className="w-20 h-20 bg-gradient-to-tr from-[#00C1A3] to-cyan-400 rounded-3xl flex items-center justify-center border-[8px] border-[#020617] shadow-[0_0_40px_rgba(0,193,163,0.3)]"
                            >
                                <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 12, ease: "linear" }}>
                                    <ArrowRightLeft className="text-[#020617]" size={24} strokeWidth={3} />
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Tarjeta 1: Vieja Escuela */}
                        <motion.div
                            style={{ x: isMobile ? 0 : springX, y: isMobile ? 0 : springY }}
                            className="group bg-slate-900/40 border border-white/5 p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3.5rem] backdrop-blur-md relative overflow-hidden"
                        >
                            <div className="flex items-center gap-4 mb-8 sm:mb-10">
                                <XCircle className="text-red-500/50 w-8 h-8 shrink-0" />
                                <h3 className="text-xl sm:text-2xl font-black uppercase text-slate-500 italic tracking-tighter">Vieja Escuela</h3>
                            </div>
                            <div className="space-y-6 sm:space-y-8 relative z-10">
                                {["Cuentas en papel.", "Filas lentas.", "Inventario ciego."].map((text, idx) => (
                                    <div key={idx} className="flex gap-4 sm:gap-5 items-center opacity-60">
                                        <Notebook className="text-red-500/40 shrink-0" size={20} />
                                        <p className="text-xs sm:text-sm font-bold uppercase text-slate-400 tracking-wider">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tarjeta 2: Nedimi POS */}
                        <motion.div
                            style={{ x: isMobile ? 0 : useSpring(mouseX, { stiffness: 40, damping: 25 }), y: isMobile ? 0 : useSpring(mouseY, { stiffness: 40, damping: 25 }) }}
                            className="bg-gradient-to-br from-[#00C1A3]/10 via-[#00C1A3]/5 to-transparent border border-[#00C1A3]/30 p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3.5rem] backdrop-blur-xl relative overflow-hidden shadow-2xl"
                        >
                            <motion.div
                                animate={{ translateY: [-100, 600] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                                className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00C1A3]/60 to-transparent z-0 will-change-transform"
                            />
                            <div className="flex items-center gap-4 mb-8 sm:mb-10 relative z-10">
                                <CheckCircle2 className="text-[#00C1A3] w-8 h-8 shrink-0 drop-shadow-[0_0_15px_rgba(0,193,163,0.5)]" />
                                <h3 className="text-xl sm:text-2xl font-black uppercase text-white italic tracking-tighter">Nedimi POS</h3>
                            </div>
                            <div className="space-y-6 sm:space-y-8 relative z-10">
                                {["Control nube 24/7.", "Ventas express.", "Reportes auto."].map((text, idx) => (
                                    <div key={idx} className="flex gap-4 sm:gap-5 items-center">
                                        <div className="p-1.5 rounded-lg bg-[#00C1A3]/10 border border-[#00C1A3]/20">
                                            <Zap className="text-[#00C1A3] shrink-0 fill-[#00C1A3]/20" size={16} />
                                        </div>
                                        <p className="text-xs sm:text-sm font-bold uppercase text-white tracking-wider">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* --- BLOQUE 2: BENTO GRID --- */}
                <div className="mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 md:mb-20 text-center md:text-left"
                    >
                        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-[1000] text-white tracking-tighter leading-[0.9] italic uppercase">
                            TODO EL PODER <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-emerald-400 to-cyan-400">
                                EN TIEMPO REAL
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 auto-rows-fr">
                        {benefits.map((item, i) => (
                            <BenefitCard key={i} item={item} i={i} />
                        ))}
                    </div>
                </div>

                {/* --- BLOQUE 3: COMPATIBILIDAD TOTAL --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 md:mb-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/[0.02] border border-white/5 rounded-[2.5rem] md:rounded-[3rem] p-8 sm:p-10 md:p-14 backdrop-blur-md transition-all duration-500 hover:border-[#00C1A3]/30 hover:shadow-[0_20px_50px_rgba(0,193,163,0.1)] group/block"
                >
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex text-[#00C1A3] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] mb-4 md:mb-6 px-3 py-1 bg-[#00C1A3]/10 rounded-full border border-[#00C1A3]/20"
                        >
                            Compatibilidad total
                        </motion.div>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-[1000] text-white uppercase italic leading-[0.9] mb-4 md:mb-6 tracking-tighter">
                            Usa Nedimi en <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 group-hover/block:from-[#00C1A3] group-hover/block:to-emerald-400 transition-all duration-500">cualquier dispositivo</span>
                        </h3>
                        <p className="text-slate-400 text-sm md:text-base lg:text-lg mb-8 max-w-lg font-light leading-relaxed">
                            No necesitas equipos costosos. Tu negocio se mueve contigo en celular, tablet o computadora, con sincronización instantánea.
                        </p>
                        <div className="flex flex-wrap gap-3 md:gap-4">
                            {[
                                { label: "Móvil / Tablet", icon: <Smartphone size={16} /> },
                                { label: "Web / PC", icon: <Monitor size={16} /> }
                            ].map((btn, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2.5 text-slate-300 font-bold text-[10px] md:text-[11px] uppercase tracking-widest border border-white/10 bg-white/5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-default group-hover/block:border-[#00C1A3]/20"
                                >
                                    <span className="text-[#00C1A3]">{btn.icon}</span> {btn.label}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex flex-col gap-3 md:gap-4">
                        {[
                            { text: "Instalación en menos de 5 minutos", icon: "⚡" },
                            { text: "Respaldos automáticos en la nube", icon: "☁️" },
                            { text: "Acceso global sin límites", icon: "🌐" }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-4 sm:p-5 md:p-6 rounded-2xl bg-slate-900/60 border border-white/5 font-bold text-white italic uppercase text-[10px] sm:text-[11px] flex items-center gap-4 group/item hover:border-[#00C1A3]/30 hover:bg-slate-900/80 transition-all shadow-lg"
                            >
                                <span className="text-lg md:text-xl drop-shadow-md">{feature.icon}</span>
                                <span className="opacity-70 group-hover/item:opacity-100 transition-opacity tracking-widest">{feature.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* --- BLOQUE 4: STATS --- */}
                <div className="pt-16 md:pt-20 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center sm:items-start group"
                        >
                            <div className="flex items-center gap-3 text-[#00C1A3] mb-3 md:mb-4">
                                <div className="p-2 md:p-2.5 rounded-xl bg-[#00C1A3]/10 border border-[#00C1A3]/20 group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-60 group-hover:opacity-100 transition-opacity">{stat.label}</span>
                            </div>
                            <span className="text-4xl sm:text-5xl md:text-6xl font-[1000] text-white tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-500 transition-all duration-500 italic">
                                {stat.value}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};