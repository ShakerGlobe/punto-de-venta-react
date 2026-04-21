import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, BarChart3, Clock, Database, TrendingUp, Zap, CheckCircle2 } from "lucide-react";
import React, { useRef } from "react";

export const WhyChoosePOS = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax para los destellos verdes del fondo
    const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const reasons = [
        {
            title: "DEJA DE EQUIVOCARTE AL COBRAR",
            desc: "Olvídate de cuentas mal hechas o precios incorrectos. Nedimi calcula todo por ti.",
            icon: <Zap size={24} />,
            color: "text-[#00C1A3]",
            bgHover: "group-hover:bg-emerald-50",
            borderHover: "group-hover:border-emerald-200",
            glow: "bg-[#00C1A3]/20" 
        },
        {
            title: "CONOCE EXACTAMENTE QUÉ TIENES",
            desc: "Deja de “creer” que hay mercancía. Mira en tu celular qué tienes y qué te urge surtir.",
            icon: <Database size={24} />,
            color: "text-[#00C1A3]",
            bgHover: "group-hover:bg-emerald-50",
            borderHover: "group-hover:border-emerald-200",
            glow: "bg-[#00C1A3]/20"
        },
        {
            title: "ENTIENDE TU NEGOCIO EN SEGUNDOS",
            desc: "Mira cuánto vendiste en el día y qué productos son los que más dinero te dejan.",
            icon: <BarChart3 size={24} />,
            color: "text-[#00C1A3]",
            bgHover: "group-hover:bg-emerald-50",
            borderHover: "group-hover:border-emerald-200",
            glow: "bg-[#00C1A3]/20"
        },
        {
            title: "EVITA PÉRDIDAS Y ROBO HORMIGA",
            desc: "Controla lo que entra y sale de tu caja. Protege cada peso de tu esfuerzo.",
            icon: <ShieldCheck size={24} />,
            color: "text-[#00C1A3]",
            bgHover: "group-hover:bg-emerald-50",
            borderHover: "group-hover:border-emerald-200",
            glow: "bg-[#00C1A3]/20"
        },
        {
            title: "ATIENDE MÁS RÁPIDO A TUS CLIENTES",
            desc: "Registra ventas volando y evita que se te junte la fila en la tienda.",
            icon: <Clock size={24} />,
            color: "text-[#00C1A3]",
            bgHover: "group-hover:bg-emerald-50",
            borderHover: "group-hover:border-emerald-200",
            glow: "bg-[#00C1A3]/20"
        },
        {
            title: "CRECE SIN COMPLICARTE LA VIDA",
            desc: "Administra todo desde un solo lugar. Es tan fácil que no querrás soltarlo.",
            icon: <TrendingUp size={24} />,
            color: "text-[#00C1A3]",
            bgHover: "group-hover:bg-emerald-50",
            borderHover: "group-hover:border-emerald-200",
            glow: "bg-[#00C1A3]/20"
        }
    ];

    return (
        <section ref={containerRef} className="relative py-10 md:py-14 lg:py-16 bg-white overflow-hidden">
            
            {/* --- DESTELLOS VERDES REFORZADOS --- */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <motion.div
                    style={{ y: yBg }}
                    className="absolute top-[5%] right-[-10%] w-[500px] lg:w-[900px] h-[500px] lg:h-[900px] bg-[#00C1A3]/30 blur-[120px] lg:blur-[180px] rounded-full"
                />
                <motion.div
                    style={{ y: -yBg }}
                    className="absolute bottom-[5%] left-[-10%] w-[400px] lg:w-[700px] h-[400px] lg:h-[700px] bg-emerald-400/20 blur-[100px] lg:blur-[160px] rounded-full"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">

                    {/* --- CABECERA IZQUIERDA (Sticky) --- */}
                    <div className="lg:sticky lg:top-32 space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-8 shadow-sm">
                                <CheckCircle2 size={14} className="text-[#00C1A3]" />
                                <span className="text-[#00C1A3] font-black uppercase tracking-widest text-[10px]">
                                    Razones para elegirnos
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-[1000] text-slate-950 italic uppercase tracking-tighter leading-[0.85]">
                                Si no tienes <br /> el control, <br />
                                <span className="text-[#00C1A3] underline decoration-emerald-100 decoration-8 underline-offset-4">
                                    estás perdiendo dinero
                                </span>
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0"
                        >
                            Llevar tu tienda de memoria o en papel es cansado y riesgoso. 
                            Nedimi POS te da la tranquilidad de saber que cada peso está en su lugar.
                        </motion.p>
                    </div>

                    {/* --- GRID DE TARJETAS (Derecha) --- */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {reasons.map((reason, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className={`group relative p-8 rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 ${reason.borderHover} ${reason.bgHover} hover:-translate-y-2 hover:shadow-2xl shadow-slate-200/50 cursor-default overflow-hidden`}
                            >
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icono con fondo esmeralda sutil */}
                                    <div className={`mb-6 p-4 w-fit rounded-2xl bg-emerald-50 border border-emerald-100 group-hover:scale-110 group-hover:bg-[#00C1A3] group-hover:text-white transition-all duration-300 ${reason.color}`}>
                                        {React.cloneElement(reason.icon as React.ReactElement, { size: 24 })}
                                    </div>

                                    <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic tracking-tight leading-tight group-hover:text-[#00C1A3] transition-colors">
                                        {reason.title}
                                    </h3>

                                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                        {reason.desc}
                                    </p>
                                </div>
                                
                                {/* Brillo en la esquina al hacer hover */}
                                <div className={`absolute top-0 right-0 w-24 h-24 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${reason.glow}`} />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};