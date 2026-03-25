import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, BarChart3, Clock, Database, TrendingUp, Zap, CheckCircle2 } from "lucide-react";
import React, { useRef } from "react";

export const WhyChoosePOS = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax muy sutil para el fondo
    const yBg = useTransform(scrollYProgress, [0, 1], [0, 150]);

    const reasons = [
        {
            title: "DEJA DE EQUIVOCARTE AL COBRAR",
            desc: "Olvídate de cuentas mal hechas o precios incorrectos. Todo se calcula automáticamente.",
            icon: <Zap size={24} />,
            color: "text-emerald-400",
            bgHover: "group-hover:bg-emerald-500/[0.03]",
            borderHover: "group-hover:border-emerald-500/30",
            glow: "bg-emerald-500/20"
        },
        {
            title: "CONOCE EXACTAMENTE QUÉ TIENES",
            desc: "Deja de “creer” que hay producto. Ve en tiempo real qué tienes y qué te falta.",
            icon: <Database size={24} />,
            color: "text-cyan-400",
            bgHover: "group-hover:bg-cyan-500/[0.03]",
            borderHover: "group-hover:border-cyan-500/30",
            glow: "bg-cyan-500/20"
        },
        {
            title: "ENTIENDE TU NEGOCIO EN SEGUNDOS",
            desc: "Mira cuánto vendes, qué ganas y qué productos te dejan más dinero.",
            icon: <BarChart3 size={24} />,
            color: "text-purple-400",
            bgHover: "group-hover:bg-purple-500/[0.03]",
            borderHover: "group-hover:border-purple-500/30",
            glow: "bg-purple-500/20"
        },
        {
            title: "EVITA PÉRDIDAS Y ROBO HORMIGA",
            desc: "Controla lo que entra y sale. Detecta faltantes y protege tu dinero.",
            icon: <ShieldCheck size={24} />,
            color: "text-blue-400",
            bgHover: "group-hover:bg-blue-500/[0.03]",
            borderHover: "group-hover:border-blue-500/30",
            glow: "bg-blue-500/20"
        },
        {
            title: "ATIENDE MÁS RÁPIDO A TUS CLIENTES",
            desc: "Registra ventas en segundos y evita filas en tu tienda.",
            icon: <Clock size={24} />,
            color: "text-amber-400",
            bgHover: "group-hover:bg-amber-500/[0.03]",
            borderHover: "group-hover:border-amber-500/30",
            glow: "bg-amber-500/20"
        },
        {
            title: "CRECE SIN COMPLICARTE",
            desc: "Empieza con una tienda y administra todo fácilmente desde un solo lugar.",
            icon: <TrendingUp size={24} />,
            color: "text-[#00C1A3]",
            bgHover: "group-hover:bg-[#00C1A3]/[0.03]",
            borderHover: "group-hover:border-[#00C1A3]/30",
            glow: "bg-[#00C1A3]/20"
        }
    ];

    return (
        <section ref={containerRef} className="relative py-20 md:py-32 lg:py-40 bg-[#020617] overflow-hidden">
            {/* FONDO DINÁMICO */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:60px_60px] opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
                <motion.div
                    style={{ y: yBg }}
                    className="absolute top-0 right-0 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-[#00C1A3]/5 blur-[100px] lg:blur-[160px] rounded-full"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* --- LAYOUT ASIMÉTRICO (Grid dividido) --- */}
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">

                    {/* CABECERA (Pegajosa en Desktop) */}
                    <div className="lg:sticky lg:top-32 space-y-6 md:space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-[#00C1A3]/10 border border-[#00C1A3]/20 shadow-[0_0_15px_rgba(0,193,163,0.15)] mb-6 md:mb-8">
                                <CheckCircle2 size={14} className="text-[#00C1A3] animate-pulse" />
                                <span className="text-[#00C1A3] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] md:text-[10px]">
                                    SOLUCIONA LOS PROBLEMAS DE TU TIENDA
                                </span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-[1000] text-white italic uppercase tracking-tighter leading-[0.9] md:leading-[0.95]">
                                Si no tienes control <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-emerald-400 to-cyan-400 drop-shadow-sm pb-2">
                                    Estás perdiendo dinero
                                </span>
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0"
                        >
                            Si hoy llevas tu tienda con libreta o de memoria, es normal que pierdas dinero sin darte cuenta.
                            Nedimi POS te ayuda a tener control total de tus productos, ventas y dinero en segundos.
                        </motion.p>
                    </div>

                    {/* TARJETAS DE BENEFICIOS (Staggering Flow) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
                        {reasons.map((reason, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.1 + (i * 0.1), // Efecto cascada
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20
                                }}
                                viewport={{ once: true, margin: "-50px" }}
                                className={`group relative p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-slate-900/60 backdrop-blur-xl border border-white/5 overflow-hidden transition-all duration-500 ${reason.borderHover} ${reason.bgHover} hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] cursor-default`}
                            >
                                {/* Brillo interno en hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Glow radial dinámico (Optimizado) */}
                                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${reason.glow}`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icono con animación sutil */}
                                    <div className={`mb-6 p-3 md:p-4 w-fit rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/10 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white/10 transition-all duration-300 shadow-inner ${reason.color}`}>
                                        {reason.icon}
                                    </div>

                                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 uppercase italic tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-colors duration-300">
                                        {reason.title}
                                    </h3>

                                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-light mt-auto group-hover:text-slate-300 transition-colors duration-300">
                                        {reason.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};