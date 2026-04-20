import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, BarChart3, Clock, Database, TrendingUp, Zap, CheckCircle2 } from "lucide-react";
import React, { useRef } from "react";

export const WhyChoosePOS = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax sutil para los destellos azules del fondo
    const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const reasons = [
        {
            title: "DEJA DE EQUIVOCARTE AL COBRAR",
            desc: "Olvídate de cuentas mal hechas o precios incorrectos. Nedimi calcula todo por ti.",
            icon: <Zap size={24} />,
            color: "text-blue-600",
            bgHover: "group-hover:bg-blue-50",
            borderHover: "group-hover:border-blue-200",
            glow: "bg-blue-400/30" // Glow sutil en hover
        },
        {
            title: "CONOCE EXACTAMENTE QUÉ TIENES",
            desc: "Deja de “creer” que hay mercancía. Mira en tu celular qué tienes y qué te urge surtir.",
            icon: <Database size={24} />,
            color: "text-blue-600",
            bgHover: "group-hover:bg-blue-50",
            borderHover: "group-hover:border-blue-200",
            glow: "bg-blue-400/30"
        },
        {
            title: "ENTIENDE TU NEGOCIO EN SEGUNDOS",
            desc: "Mira cuánto vendiste en el día y qué productos son los que más dinero te dejan.",
            icon: <BarChart3 size={24} />,
            color: "text-blue-600",
            bgHover: "group-hover:bg-blue-50",
            borderHover: "group-hover:border-blue-200",
            glow: "bg-blue-400/30"
        },
        {
            title: "EVITA PÉRDIDAS Y ROBO HORMIGA",
            desc: "Controla lo que entra y sale de tu caja. Protege cada peso de tu esfuerzo.",
            icon: <ShieldCheck size={24} />,
            color: "text-blue-600",
            bgHover: "group-hover:bg-blue-50",
            borderHover: "group-hover:border-blue-200",
            glow: "bg-blue-400/30"
        },
        {
            title: "ATIENDE MÁS RÁPIDO A TUS CLIENTES",
            desc: "Registra ventas volando y evita que se te junte la fila en la tienda.",
            icon: <Clock size={24} />,
            color: "text-blue-600",
            bgHover: "group-hover:bg-blue-50",
            borderHover: "group-hover:border-blue-200",
            glow: "bg-blue-400/30"
        },
        {
            title: "CRECE SIN COMPLICARTE LA VIDA",
            desc: "Administra todo desde un solo lugar. Es tan fácil que no querrás soltarlo.",
            icon: <TrendingUp size={24} />,
            color: "text-blue-600",
            bgHover: "group-hover:bg-blue-50",
            borderHover: "group-hover:border-blue-200",
            glow: "bg-blue-400/30"
        }
    ];

    return (
        <section ref={containerRef} className="relative py-20 md:py-32 lg:py-40 bg-white overflow-hidden">
            
            {/* --- DESTELLOS AZULES DINÁMICOS (Intensificados) --- */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Destello Superior Derecho: Ahora usa blue-600 con más opacidad */}
                <motion.div
                    style={{ y: yBg }}
                    className="absolute top-[10%] right-[-15%] w-[600px] lg:w-[1000px] h-[600px] lg:h-[1000px] bg-blue-600/25 blur-[120px] lg:blur-[180px] rounded-full"
                />
                {/* Destello Inferior Izquierdo: Ahora usa blue-500 con más opacidad */}
                <motion.div
                    style={{ y: -yBg }}
                    className="absolute bottom-[10%] left-[-15%] w-[500px] lg:w-[800px] h-[500px] lg:h-[800px] bg-blue-500/25 blur-[100px] lg:blur-[160px] rounded-full"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-20 items-start">

                    {/* --- CABECERA IZQUIERDA (Sticky) --- */}
                    <div className="lg:sticky lg:top-32 space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm">
                                <CheckCircle2 size={14} className="text-blue-600" />
                                <span className="text-blue-600 font-black uppercase tracking-widest text-[10px]">
                                    Razones para elegirnos
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-[1000] text-slate-950 italic uppercase tracking-tighter leading-[0.85]">
                                Si no tienes <br /> el control, <br />
                                <span className="text-blue-600 underline decoration-blue-200 decoration-8">
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

                    {/* --- TARJETAS DE BENEFICIOS (Derecha) --- */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {reasons.map((reason, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className={`group relative p-8 rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 ${reason.borderHover} ${reason.bgHover} hover:-translate-y-2 hover:shadow-2xl shadow-slate-200/50 cursor-default overflow-hidden`}
                            >
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icono con fondo azul sutil */}
                                    <div className={`mb-6 p-4 w-fit rounded-2xl bg-blue-50 border border-blue-100 group-hover:scale-110 group-hover:bg-white transition-all duration-300 ${reason.color}`}>
                                        {reason.icon}
                                    </div>

                                    <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic tracking-tight leading-tight">
                                        {reason.title}
                                    </h3>

                                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                        {reason.desc}
                                    </p>
                                </div>
                                
                                {/* Brillo sutil en la esquina al hacer hover */}
                                <div className={`absolute top-0 right-0 w-24 h-24 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${reason.glow}`} />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};