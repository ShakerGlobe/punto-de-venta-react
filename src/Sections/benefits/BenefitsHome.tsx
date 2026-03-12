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
import { MouseEvent } from 'react';

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
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
            onMouseMove={handleMouseMove}
            whileHover={{ y: -8 }}
            className={`${item.size} group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#001f3f]/30 backdrop-blur-xl p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:border-[#00C1A3]/30 shadow-2xl min-h-[380px]`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-20 md:opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            ${item.colorSpotlight},
                            transparent 80%
                        )
                    `,
                }}
            />

            <motion.div
                className="absolute inset-0 rounded-[2.5rem] border border-white/5 group-hover:border-[#00C1A3]/20 transition-colors duration-700"
            />

            <div className="relative z-10">
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-slate-950/60 backdrop-blur-2xl border border-white/10 flex items-center justify-center mb-6 md:mb-8 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"
                >
                    {item.icon}
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-[#00C1A3] transition-colors duration-300 italic uppercase">
                    {item.title}
                </h3>

                <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-[280px]">
                    {item.desc}
                </p>
            </div>

            <div className="relative z-10 mt-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00C1A3]">
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

export const BenefitsHome = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

    function handleParallax(e: MouseEvent) {
        const { currentTarget, clientX, clientY } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        mouseX.set(x * 25);
        mouseY.set(y * 25);
    }

    const benefits = [
        {
            title: "Terminal Inteligente",
            desc: "Cobros rápidos con escáner mediante cámara o venta manual. Vende por pieza o gramaje.",
            icon: <Scan className="w-7 h-7 md:w-8 md:h-8 text-[#00C1A3]" />,
            size: "md:col-span-2 lg:col-span-4",
            colorSpotlight: "rgba(0, 193, 163, 0.15)",
            badge: "Ventas Express"
        },
        {
            title: "Ganancias",
            desc: "Cálculo automático de utilidad neta y reportes de margen por producto.",
            icon: <PieChart className="w-7 h-7 md:w-8 md:h-8 text-blue-400" />,
            size: "md:col-span-1 lg:col-span-2",
            colorSpotlight: "rgba(59, 130, 246, 0.15)",
            badge: "Finanzas"
        },
        {
            title: "Inventario",
            desc: "Alertas de stock bajo y carga masiva de productos sin errores.",
            icon: <PackageSearch className="w-7 h-7 md:w-8 md:h-8 text-orange-400" />,
            size: "md:col-span-1 lg:col-span-2",
            colorSpotlight: "rgba(251, 146, 60, 0.15)",
            badge: "Control Stock"
        },
        {
            title: "Seguridad y Roles",
            desc: "Control total de acceso para Administradores y Usuarios con cierre automático.",
            icon: <Users className="w-7 h-7 md:w-8 md:h-8 text-emerald-400" />,
            size: "md:col-span-2 lg:col-span-4",
            colorSpotlight: "rgba(52, 211, 153, 0.15)",
            badge: "Multi-Usuario"
        },
        {
            title: "Excel Pro",
            desc: "Exporta reportes detallados en un clic para tu contabilidad.",
            icon: <FileSpreadsheet className="w-7 h-7 md:w-8 md:h-8 text-purple-400" />,
            size: "md:col-span-1 lg:col-span-3",
            colorSpotlight: "rgba(168, 85, 247, 0.15)",
            badge: "Reportes"
        },
        {
            title: "Soporte 24/7",
            desc: "Acompañamiento técnico real para que nunca dejes de vender.",
            icon: <LifeBuoy className="w-7 h-7 md:w-8 md:h-8 text-pink-400" />,
            size: "md:col-span-1 lg:col-span-3",
            colorSpotlight: "rgba(236, 72, 153, 0.15)",
            badge: "Premium"
        }
    ];

    const stats = [
        { label: "Dashboard", value: "Real-Time", icon: <Zap className="w-4 h-4 text-[#00C1A3]" /> },
        { label: "Seguridad", value: "SSL 256", icon: <ShieldCheck className="w-4 h-4 text-[#00C1A3]" /> },
        { label: "Acceso", value: "Global", icon: <Lock className="w-4 h-4 text-[#00C1A3]" /> }
    ];

    return (
        <section id="benefits" className="py-24 md:py-40 bg-[#020617] relative overflow-hidden scroll-mt-20">
            <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00C1A3]/5 blur-[140px] rounded-full -z-10"
            />

            <div className="max-w-7xl mx-auto px-6">
                {/* --- BLOQUE 1: COMPARATIVA --- */}
                <div className="mb-40" onMouseMove={handleParallax}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="inline-block text-[#00C1A3] font-black uppercase tracking-[0.4em] text-[10px] bg-[#00C1A3]/10 px-5 py-2.5 rounded-full border border-[#00C1A3]/20 mb-8">
                            Optimización Total
                        </span>
                        <h2 className="text-5xl md:text-8xl font-[1000] text-white tracking-tighter italic uppercase leading-[0.8] mb-4">
                            Deja el <span className="text-slate-800">caos</span>,<br />
                            toma el <span className="text-[#00C1A3]">control</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex">
                            <motion.div
                                animate={{ rotate: 360 + 45 }}
                                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                                className="w-16 h-16 md:w-20 md:h-20 bg-[#00C1A3] rounded-3xl items-center justify-center border-[6px] md:border-[8px] border-[#020617] shadow-[0_0_50px_rgba(0,193,163,0.5)] flex relative"
                            >
                                <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>
                                    <ArrowRightLeft className="text-[#020617]" size={24} strokeWidth={3} />
                                </motion.div>
                            </motion.div>
                        </div>

                        <motion.div
                            style={{ x: springX, y: springY }}
                            className="group bg-slate-900/40 border border-white/5 p-10 rounded-[3.5rem] backdrop-blur-md relative overflow-hidden"
                        >
                            <div className="flex items-center gap-4 mb-10">
                                <XCircle className="text-red-500/50 w-8 h-8" />
                                <h3 className="text-2xl font-black uppercase text-slate-500 italic tracking-tighter">Vieja Escuela</h3>
                            </div>
                            <div className="space-y-8 relative z-10">
                                {["Cuentas en papel.", "Filas lentas.", "Inventario ciego."].map((text, idx) => (
                                    <div key={idx} className="flex gap-5 items-start opacity-60">
                                        <Notebook className="text-red-500/40 shrink-0 mt-1" size={22} />
                                        <p className="text-sm font-bold uppercase text-slate-400">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ x: useSpring(mouseX, { stiffness: 40, damping: 25 }), y: useSpring(mouseY, { stiffness: 40, damping: 25 }) }}
                            className="bg-gradient-to-br from-[#00C1A3]/20 via-[#00C1A3]/5 to-transparent border border-[#00C1A3]/30 p-10 rounded-[3.5rem] backdrop-blur-xl relative overflow-hidden shadow-2xl"
                        >
                            <motion.div
                                animate={{ translateY: [-200, 600] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                                className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00C1A3]/40 to-transparent z-0"
                            />
                            <div className="flex items-center gap-4 mb-10">
                                <CheckCircle2 className="text-[#00C1A3] w-8 h-8 drop-shadow-[0_0_10px_#00C1A3]" />
                                <h3 className="text-2xl font-black uppercase text-white italic tracking-tighter">Nedimi POS</h3>
                            </div>
                            <div className="space-y-8 relative z-10">
                                {["Control nube 24/7.", "Ventas express.", "Reportes auto."].map((text, idx) => (
                                    <div key={idx} className="flex gap-5 items-start">
                                        <Zap className="text-[#00C1A3] shrink-0 mt-1 fill-[#00C1A3]/20" size={22} />
                                        <p className="text-sm font-bold uppercase text-white">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* --- BLOQUE 2: BENTO GRID --- */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h2 className="text-5xl md:text-8xl font-[1000] text-white tracking-[-0.05em] leading-[0.9]">
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

                {/* --- BLOQUE: COMPATIBILIDAD TOTAL (REACTIVO Y ANIMADO) --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/[0.03] border border-white/10 rounded-[3rem] p-8 md:p-14 backdrop-blur-md transition-all duration-500 hover:border-[#00C1A3]/40 hover:shadow-[0_0_50px_rgba(0,193,163,0.1)] group/block"
                >
                    <div>
                        <motion.h4
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-[#00C1A3] font-black uppercase tracking-[0.3em] text-[10px] mb-6"
                        >
                            Compatibilidad total
                        </motion.h4>
                        <h3 className="text-3xl md:text-5xl font-bold text-white uppercase italic leading-[1.1] mb-6 tracking-tighter">
                            Usa Nedimi en <span className="group-hover/block:text-[#00C1A3] transition-colors duration-500">cualquier dispositivo</span>
                        </h3>
                        <p className="text-slate-400 text-lg mb-10 max-w-md">
                            No necesitas equipos costosos. Tu negocio se mueve contigo en celular, tablet o PC.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { label: "Móvil", icon: <Smartphone size={16} /> },
                                { label: "Web / PC", icon: <Monitor size={16} /> }
                            ].map((btn, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-3 text-white font-bold text-[11px] uppercase border border-white/10 bg-white/5 px-6 py-3 rounded-2xl hover:bg-[#00C1A3] hover:text-[#020617] transition-all duration-300 cursor-default"
                                >
                                    {btn.icon} {btn.label}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        {[
                            { text: "Instalación en menos de 5 minutos", icon: "⚡" },
                            { text: "Respaldos automáticos cada hora", icon: "🛡️" },
                            { text: "Acceso sin límites geográficos", icon: "🌐" }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-slate-950/40 border border-white/5 font-bold text-white italic uppercase text-[11px] flex items-center gap-4 group/item hover:border-[#00C1A3]/30 transition-colors"
                            >
                                <span className="text-lg">{feature.icon}</span>
                                <span className="opacity-70 group-hover/item:opacity-100 transition-opacity tracking-widest">{feature.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* --- BLOQUE 3: STATS --- */}
                <div className="pt-20 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-12">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center lg:items-start group"
                        >
                            <div className="flex items-center gap-3 text-[#00C1A3] mb-2">
                                <div className="p-2 rounded-lg bg-[#00C1A3]/10 border border-[#00C1A3]/20">
                                    {stat.icon}
                                </div>
                                <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-50">{stat.label}</span>
                            </div>
                            <span className="text-4xl md:text-5xl font-[1000] text-white tracking-tighter group-hover:text-[#00C1A3] transition-colors duration-500">
                                {stat.value}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};