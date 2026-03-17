import { motion } from "framer-motion";
import { ShieldCheck, BarChart3, Clock, Database, TrendingUp, Zap } from "lucide-react";
import React from "react";

export const WhyChoosePOS = () => {
    // Mejoramos la estructura de los colores para aplicarlos dinámicamente en fondos y bordes
    const reasons = [
        {
            title: "Adiós al Error Humano",
            desc: "Automatiza cálculos y cobros. Elimina las cuentas hechas a mano que desangran tu utilidad.",
            icon: <Zap size={28} />,
            color: "text-emerald-400",
            bgHover: "group-hover:bg-emerald-500/10",
            borderHover: "group-hover:border-emerald-500/30",
            glow: "bg-emerald-500/20"
        },
        {
            title: "Control de Inventario Real",
            desc: "Sabe exactamente qué tienes y qué te falta en tiempo real. Se acabó el 'deja voy a ver si hay'.",
            icon: <Database size={28} />,
            color: "text-cyan-400",
            bgHover: "group-hover:bg-cyan-500/10",
            borderHover: "group-hover:border-cyan-500/30",
            glow: "bg-cyan-500/20"
        },
        {
            title: "Reportes de Inteligencia",
            desc: "Gráficas claras de tus ventas y ganancias. Toma decisiones basadas en datos, no en suposiciones.",
            icon: <BarChart3 size={28} />,
            color: "text-purple-400",
            bgHover: "group-hover:bg-purple-500/10",
            borderHover: "group-hover:border-purple-500/30",
            glow: "bg-purple-500/20"
        },
        {
            title: "Seguridad Blindada",
            desc: "Control total sobre los movimientos de tus empleados y resguardo de efectivo. Evita el robo hormiga.",
            icon: <ShieldCheck size={28} />,
            color: "text-blue-400",
            bgHover: "group-hover:bg-blue-500/10",
            borderHover: "group-hover:border-blue-500/30",
            glow: "bg-blue-500/20"
        },
        {
            title: "Velocidad de Atención",
            desc: "Despacha a tus clientes en segundos. Un cliente que no hace fila es un cliente que regresa.",
            icon: <Clock size={28} />,
            color: "text-amber-400",
            bgHover: "group-hover:bg-amber-500/10",
            borderHover: "group-hover:border-amber-500/30",
            glow: "bg-amber-500/20"
        },
        {
            title: "Escalabilidad Total",
            desc: "Diseñado para crecer. Desde un local pequeño hasta una cadena de sucursales sincronizadas en la nube.",
            icon: <TrendingUp size={28} />,
            color: "text-[#00C1A3]",
            bgHover: "group-hover:bg-[#00C1A3]/10",
            borderHover: "group-hover:border-[#00C1A3]/30",
            glow: "bg-[#00C1A3]/20"
        }
    ];

    return (
        <section className="relative py-16 md:py-24 lg:py-32 bg-[#020617] overflow-hidden">
            {/* Fondo decorativo sutil mejorado */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(0,193,163,0.06)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Cabecera de la sección */}
                <div className="text-center mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 md:mb-6"
                    >
                        <span className="text-[#00C1A3] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] text-[10px] sm:text-xs bg-[#00C1A3]/10 px-4 sm:px-6 py-2 rounded-full border border-[#00C1A3]/20 shadow-[0_0_20px_rgba(0,193,163,0.1)]">
                            Ingeniería para tu crecimiento
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[1000] text-white italic uppercase tracking-tighter leading-[0.9] md:leading-[0.95]"
                    >
                        ¿POR QUÉ NECESITAS <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-emerald-400 to-[#00C1A3] drop-shadow-sm">
                            UN SISTEMA POS?
                        </span>
                    </motion.h2>
                </div>

                {/* Grid de razones */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className={`group relative p-6 md:p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 ${reason.borderHover} ${reason.bgHover} hover:-translate-y-1 hover:shadow-2xl`}
                        >
                            {/* Glow radial dinámico en la esquina superior derecha al hacer hover */}
                            <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${reason.glow}`} />

                            <div className="relative z-10">
                                {/* Contenedor del ícono dinámico */}
                                <div className={`mb-6 p-4 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white/10 transition-all duration-300 ${reason.color}`}>
                                    {reason.icon}
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 uppercase italic tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-colors">
                                    {reason.title}
                                </h3>

                                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light group-hover:text-slate-300 transition-colors">
                                    {reason.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};