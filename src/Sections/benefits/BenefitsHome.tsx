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
    Monitor,
    Sparkles
} from 'lucide-react';
import React, { MouseEvent, useEffect, useState } from 'react';

// --- COMPONENTE DE TARJETA CON SPOTLIGHT MEJORADO ---
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
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onMouseMove={handleMouseMove}
            className={`${item.size} group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/60 backdrop-blur-2xl p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:border-[#00C1A3]/50 hover:shadow-[0_0_50px_rgba(0,193,163,0.15)] md:hover:-translate-y-2 min-h-[350px]`}
        >
            {/* Spotlight más vibrante */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-500 group-hover:opacity-100 hidden md:block"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            ${item.colorSpotlight},
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon Container con Neón */}
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 shadow-2xl transition-all group-hover:border-${item.colorBrand}/50 group-hover:bg-white/10`}
                    style={{ boxShadow: `0 0 20px ${item.colorSpotlight}` }}
                >
                    {item.icon}
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-[1000] text-white mb-4 tracking-tighter italic uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00C1A3] transition-all duration-300">
                    {item.title}
                </h3>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light group-hover:text-slate-200 transition-colors">
                    {item.desc}
                </p>
            </div>

            <div className="relative z-10 mt-8 flex justify-center">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:border-[#00C1A3]/40 group-hover:bg-[#00C1A3]/10 group-hover:text-[#00C1A3] transition-all duration-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{item.badge || "Premium"}</span>
                </div>
            </div>
        </motion.div>
    );
};

export const BenefitsHome = () => {
    const [isMobile, setIsMobile] = useState(false);

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
        mouseX.set(x * 40);
        mouseY.set(y * 40);
    }

    const benefits = [
        {
            title: "Terminal Inteligente",
            desc: "Cobros rápidos con escáner mediante cámara o venta manual. Vende por pieza o gramaje.",
            icon: <Scan className="w-8 h-8 text-[#00C1A3]" />,
            size: "md:col-span-2 lg:col-span-4",
            colorSpotlight: "rgba(0, 193, 163, 0.2)",
            colorBrand: "[#00C1A3]",
            badge: "Ventas Express"
        },
        {
            title: "Ganancias",
            desc: "Cálculo automático de utilidad neta y reportes detallados.",
            icon: <PieChart className="w-8 h-8 text-blue-400" />,
            size: "md:col-span-1 lg:col-span-2",
            colorSpotlight: "rgba(59, 130, 246, 0.2)",
            colorBrand: "blue-400",
            badge: "Finanzas"
        },
        {
            title: "Inventario",
            desc: "Alertas de stock bajo y carga masiva sin errores.",
            icon: <PackageSearch className="w-8 h-8 text-orange-400" />,
            size: "md:col-span-1 lg:col-span-2",
            colorSpotlight: "rgba(251, 146, 60, 0.2)",
            colorBrand: "orange-400",
            badge: "Control Stock"
        },
        {
            title: "Seguridad y Roles",
            desc: "Control total de acceso para Administradores y Usuarios.",
            icon: <Users className="w-8 h-8 text-emerald-400" />,
            size: "md:col-span-2 lg:col-span-4",
            colorSpotlight: "rgba(52, 211, 153, 0.2)",
            colorBrand: "emerald-400",
            badge: "Multi-Usuario"
        }
    ];

    const stats = [
        { label: "Dashboard", value: "Real-Time", icon: <Zap className="w-5 h-5" />, color: "from-[#00C1A3] to-emerald-500" },
        { label: "Seguridad", value: "SSL 256", icon: <ShieldCheck className="w-5 h-5" />, color: "from-blue-500 to-cyan-400" },
        { label: "Acceso", value: "Global", icon: <Lock className="w-5 h-5" />, color: "from-purple-500 to-pink-500" }
    ];

    return (
        <section id="benefits" className="py-24 md:py-40 bg-[#020617] relative overflow-hidden flex flex-col items-center">
            
            {/* Background Glows Mejorados */}
            <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-[#00C1A3]/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center">

                {/* --- HEADER CENTRADO --- */}
                <div className="text-center mb-24 md:mb-32 max-w-4xl" onMouseMove={handleParallax}>
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block text-[#00C1A3] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs bg-[#00C1A3]/10 px-8 py-3 rounded-full border border-[#00C1A3]/30 mb-8 shadow-[0_0_30px_rgba(0,193,163,0.2)]"
                    >
                        DEJA DE PERDER DINERO EN TU TIENDA
                    </motion.span>
                    <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-[1000] text-white tracking-tighter italic uppercase leading-[0.85] mb-8">
                        TOMA CONTROL DE TU TIENDA <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-cyan-400 to-blue-500 drop-shadow-[0_0_30px_rgba(0,193,163,0.3)]">
                            DESDE HOY
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Deja atrás las libretas, los errores y el desorden.
                        Con Nedimi POS puedes controlar tu dinero, tu inventario y tus ventas de forma fácil desde tu celular.
                    </p>
                </div>

                {/* --- COMPARATIVA DINÁMICA --- */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mb-40 relative items-center">
                    
                    {/* Icono Central */}
                    <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            className="w-24 h-24 bg-gradient-to-tr from-[#00C1A3] to-cyan-500 rounded-[2rem] flex items-center justify-center border-[10px] border-[#020617] shadow-[0_0_60px_rgba(0,193,163,0.4)]"
                        >
                            <ArrowRightLeft className="text-[#020617]" size={28} strokeWidth={3} />
                        </motion.div>
                    </div>

                    {/* Lado Caos */}
                    <motion.div
                        style={{ x: isMobile ? 0 : springX, y: isMobile ? 0 : springY }}
                        className="p-10 md:p-14 rounded-[3rem] bg-slate-900/40 border border-white/5 opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <XCircle className="text-red-500 w-8 h-8" />
                            <h3 className="text-2xl font-black uppercase text-slate-500 italic">SIN SISTEMA (COMO LO HACES HOY)</h3>
                        </div>
                        <ul className="space-y-6">
                            {["Ventas anotadas a mano", "Pérdidas sin darte cuenta", "No sabes cuánto ganas realmente"].map((t, i) => (
                                <li key={i} className="flex gap-4 items-center text-slate-500 font-bold uppercase text-xs tracking-widest">
                                    <Notebook size={18} /> {t}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Lado Nedimi */}
                    <motion.div
                        style={{ x: isMobile ? 0 : useSpring(mouseX, { stiffness: 40, damping: 25 }), y: isMobile ? 0 : useSpring(mouseY, { stiffness: 40, damping: 25 }) }}
                        className="p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-[#00C1A3]/20 via-slate-900 to-slate-900 border border-[#00C1A3]/40 shadow-[0_0_80px_rgba(0,193,163,0.15)] relative overflow-hidden"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <CheckCircle2 className="text-[#00C1A3] w-8 h-8 drop-shadow-[0_0_10px_#00C1A3]" />
                            <h3 className="text-2xl font-black uppercase text-white italic">Con Nedimi POS</h3>
                        </div>
                        <ul className="space-y-6">
                            {["Ventas rápidas desde tu celular", "Inventario controlado automáticamente", "Ves cuánto ganas en tiempo real"].map((t, i) => (
                                <li key={i} className="flex gap-4 items-center text-white font-bold uppercase text-xs tracking-widest">
                                    <Zap size={18} className="text-[#00C1A3] fill-[#00C1A3]/20" /> {t}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* --- GRID DE BENEFICIOS --- */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-40">
                    {benefits.map((item, i) => (
                        <BenefitCard key={i} item={item} i={i} />
                    ))}
                </div>

                {/* --- STATS FINALES --- */}
                <div className="w-full pt-20 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center group"
                        >
                            <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                                <div className="text-white">{stat.icon}</div>
                            </div>
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-2 group-hover:text-[#00C1A3] transition-colors">{stat.label}</span>
                            <span className="text-5xl md:text-7xl font-[1000] text-white tracking-tighter italic uppercase group-hover:scale-105 transition-transform duration-500">
                                {stat.value}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};