import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import {
    ShoppingCart,
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
    Clock,
    LayoutDashboard
} from 'lucide-react';
import { MouseEvent } from 'react';

// --- COMPONENTE DE TARJETA CON SPOTLIGHT ---
const BenefitCard = ({ item, i }: { item: any, i: number }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            whileHover={{ y: -12 }}
            // Agregado min-h-[380px] para que en móvil no se colapsen por el contenido
            className={`${item.size} group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#001f3f]/40 backdrop-blur-md p-10 flex flex-col justify-between transition-all duration-500 hover:border-[#00C1A3]/40 shadow-2xl min-h-[400px] md:min-h-full`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
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

            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />

            <div className="relative z-10">
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    className="w-16 h-16 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-8 shadow-inner"
                >
                    {item.icon}
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-[#00C1A3] transition-colors duration-300 italic uppercase">
                    {item.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-[320px]">
                    {item.desc}
                </p>
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00C1A3]/60">
                    <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <CheckCircle2 className="w-4 h-4" />
                    </motion.div>
                    <span>Funcionalidad Nedimi</span>
                </div>
            </div>
        </motion.div>
    );
};

// --- COMPONENTE PRINCIPAL ---
export const BenefitsHome = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    function handleParallax(e: MouseEvent) {
        const { currentTarget, clientX, clientY } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        mouseX.set(x * 20);
        mouseY.set(y * 20);
    }

    const benefits = [
        {
            title: "Terminal Inteligente",
            desc: "Cobros rápidos con escáner mediante cámara o venta manual. Vende por pieza o gramaje.",
            icon: <Scan className="w-8 h-8 text-[#00C1A3]" />,
            size: "md:col-span-2 lg:col-span-2",
            gradient: "from-[#00C1A3]/20 to-transparent",
            colorSpotlight: "rgba(0, 193, 163, 0.15)"
        },
        {
            title: "Control de Ganancias",
            desc: "Registra precios de proveedor y obtén el cálculo de tu ganancia neta automáticamente.",
            icon: <PieChart className="w-8 h-8 text-blue-400" />,
            size: "md:col-span-1 lg:col-span-1",
            gradient: "from-blue-500/20 to-transparent",
            colorSpotlight: "rgba(59, 130, 246, 0.15)"
        },
        {
            title: "Reportes a Excel",
            desc: "Exporta desgloses detallados de tus ventas diarias directamente a formato Excel.",
            icon: <FileSpreadsheet className="w-8 h-8 text-purple-400" />,
            size: "md:col-span-1 lg:col-span-1",
            gradient: "from-purple-500/20 to-transparent",
            colorSpotlight: "rgba(168, 85, 247, 0.15)"
        },
        {
            title: "Seguridad y Roles",
            desc: "Control de acceso para Administradores y Usuarios. Cierre de sesión por inactividad.",
            icon: <Users className="w-8 h-8 text-emerald-400" />,
            size: "md:col-span-2 lg:col-span-2",
            gradient: "from-emerald-500/20 to-transparent",
            colorSpotlight: "rgba(52, 211, 153, 0.15)"
        }
    ];

    const stats = [
        { label: "Dashboard", value: "Real-Time", icon: <Zap className="w-4 h-4 text-[#00C1A3]" /> },
        { label: "Seguridad", value: "SSL", icon: <ShieldCheck className="w-4 h-4 text-[#00C1A3]" /> },
        { label: "Acceso", value: "Cloud", icon: <Lock className="w-4 h-4 text-[#00C1A3]" /> }
    ];

    return (
        <section id="benefits" className="py-20 md:py-32 bg-transparent relative overflow-hidden scroll-mt-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00C1A3]/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6">

                {/* --- BLOQUE 1: COMPARATIVA --- */}
                <div className="mb-32" onMouseMove={handleParallax}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.span
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="text-[#00C1A3] font-black uppercase shadow-[0_0_20px_rgba(0,193,163,0.2)] tracking-[0.4em] text-[10px] bg-[#00C1A3]/10 px-4 py-2 rounded-full border border-[#00C1A3]/20"
                        >
                            El cambio es inevitable
                        </motion.span>
                        {/* Ajuste de tamaño de fuente para móvil: text-4xl */}
                        <h2 className="text-4xl md:text-7xl font-[1000] text-white mt-8 tracking-tighter italic uppercase leading-[0.85]">
                            Deja el <span className="text-slate-700">caos</span>,<br />
                            toma el <span className="text-[#00C1A3] drop-shadow-[0_0_15px_rgba(0,193,163,0.5)]">control</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 relative">
                        {/* El Rombo VS se oculta en móvil para evitar que tape el texto */}
                        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], rotate: 45 }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="w-16 h-16 bg-[#00C1A3] rounded-2xl items-center justify-center border-[6px] border-[#020617] shadow-[0_0_40px_rgba(0,193,163,0.6)] flex"
                            >
                                <ArrowRightLeft className="text-[#020617] -rotate-45" size={24} strokeWidth={3} />
                            </motion.div>
                            <motion.div
                                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute inset-0 bg-[#00C1A3] rounded-2xl rotate-45 -z-10"
                            />
                        </div>

                        {/* Antes */}
                        <motion.div
                            style={{ x: springX, y: springY }}
                            className="group bg-slate-900/20 border border-white/5 p-8 md:p-10 rounded-[3rem] backdrop-blur-md relative overflow-hidden"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
                                    <XCircle className="text-red-500/70" />
                                </motion.div>
                                <h3 className="text-xl font-black uppercase text-slate-500 italic">Negocio Tradicional</h3>
                            </div>
                            <div className="space-y-6 relative z-10">
                                <div className="flex gap-4 group/item transition-colors">
                                    <Notebook className="text-red-500/30 shrink-0 group-hover/item:text-red-500/60" size={20} />
                                    <p className="text-xs font-bold uppercase text-slate-500">Cuentas en papel que nunca cuadran.</p>
                                </div>
                                <div className="flex gap-4 group/item transition-colors">
                                    <Clock className="text-red-500/30 shrink-0 group-hover/item:text-red-500/60" size={20} />
                                    <p className="text-xs font-bold uppercase text-slate-500">Filas lentas y clientes molestos.</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>

                        {/* Después */}
                        <motion.div
                            style={{ x: useSpring(mouseX, { stiffness: 60, damping: 25 }), y: useSpring(mouseY, { stiffness: 60, damping: 25 }) }}
                            className="bg-gradient-to-br from-[#00C1A3]/10 to-transparent border border-[#00C1A3]/30 p-8 md:p-10 rounded-[3rem] backdrop-blur-md relative overflow-hidden"
                        >
                            <motion.div
                                animate={{ translateY: [-100, 400] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00C1A3]/50 to-transparent z-0"
                            />
                            <div className="flex items-center gap-4 mb-8">
                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                                    <CheckCircle2 className="text-[#00C1A3] drop-shadow-[0_0_8px_#00C1A3]" />
                                </motion.div>
                                <h3 className="text-xl font-black uppercase text-white italic">Nedimi POS</h3>
                            </div>
                            <div className="space-y-6 relative z-10">
                                <div className="flex gap-4 text-[#00C1A3] group/item">
                                    <LayoutDashboard className="shrink-0 transition-transform group-hover/item:scale-125" size={20} />
                                    <p className="text-xs font-bold uppercase text-white">Control total en la nube 24/7.</p>
                                </div>
                                <div className="flex gap-4 text-[#00C1A3] group/item">
                                    <Zap className="shrink-0 fill-current transition-transform group-hover/item:scale-125" size={20} />
                                    <p className="text-xs font-bold uppercase text-white">Ventas express en segundos.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* --- BLOQUE 2: TARJETAS --- */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-center lg:text-left mb-16"
                    >
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                            Todo el poder <br />
                            <span className="relative inline-block mt-2">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-emerald-400 to-cyan-400">
                                    en tiempo real
                                </span>
                            </span>
                        </h2>
                    </motion.div>

                    {/* El grid cambia a 1 columna en móvil, manteniendo tus 3 columnas originales en Desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto md:auto-rows-[350px]">
                        {benefits.map((item, i) => (
                            <BenefitCard key={i} item={item} i={i} />
                        ))}
                    </div>
                </div>

                {/* --- BLOQUE 3: STATS --- */}
                <div className="mt-28 pt-16 border-t border-white/5 flex flex-wrap justify-center lg:justify-start gap-12 md:gap-16 items-center">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + (idx * 0.1), duration: 0.5 }}
                            className="flex flex-col items-center lg:items-start group"
                        >
                            <div className="flex items-center gap-2 text-[#00C1A3] mb-1">
                                <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                                    {stat.icon}
                                </motion.div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">{stat.label}</span>
                            </div>
                            <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter group-hover:text-[#00C1A3] transition-colors duration-500">
                                {stat.value}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};