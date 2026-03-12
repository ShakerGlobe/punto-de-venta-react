import { motion } from "framer-motion";
import { ShieldCheck, BarChart3, Clock, Database, TrendingUp, Zap } from "lucide-react";

export const WhyChoosePOS = () => {
    const reasons = [
        {
            title: "Adiós al Error Humano",
            desc: "Automatiza cálculos y cobros. Elimina las cuentas hechas a mano que desangran tu utilidad.",
            icon: <Zap className="text-emerald-400" />,
            glow: "group-hover:shadow-emerald-500/20"
        },
        {
            title: "Control de Inventario Real",
            desc: "Sabe exactamente qué tienes y qué te falta en tiempo real. Se acabó el 'deja voy a ver si hay'.",
            icon: <Database className="text-cyan-400" />,
            glow: "group-hover:shadow-cyan-500/20"
        },
        {
            title: "Reportes de Inteligencia",
            desc: "Gráficas claras de tus ventas y ganancias. Toma decisiones basadas en datos, no en suposiciones.",
            icon: <BarChart3 className="text-purple-400" />,
            glow: "group-hover:shadow-purple-500/20"
        },
        {
            title: "Seguridad Blindada",
            desc: "Control total sobre los movimientos de tus empleados y resguardo de efectivo. Evita el robo hormiga.",
            icon: <ShieldCheck className="text-blue-400" />,
            glow: "group-hover:shadow-blue-500/20"
        },
        {
            title: "Velocidad de Atención",
            desc: "Despacha a tus clientes en segundos. Un cliente que no hace fila es un cliente que regresa.",
            icon: <Clock className="text-amber-400" />,
            glow: "group-hover:shadow-amber-500/20"
        },
        {
            title: "Escalabilidad Total",
            desc: "Diseñado para crecer. Desde un local pequeño hasta una cadena de sucursales sincronizadas en la nube.",
            icon: <TrendingUp className="text-[#00C1A3]" />,
            glow: "group-hover:shadow-[#00C1A3]/20"
        }
    ];

    return (
        <section className="relative py-24 bg-[#020617] overflow-hidden">
            {/* Fondo decorativo sutil */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#00C1A3/5_0%,transparent_50%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Cabecera de la sección */}
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#00C1A3] font-black uppercase tracking-[0.4em] text-[10px]"
                    >
                        Ingeniería para tu crecimiento
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-[1000] text-white italic uppercase tracking-tighter mt-4"
                    >
                        ¿POR QUÉ NECESITAS <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-emerald-500">
                            UN SISTEMA POS?
                        </span>
                    </motion.h2>
                </div>

                {/* Grid de razones */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#00C1A3]/30 transition-all duration-500"
                        >
                            {/* Glow effect on hover */}
                            <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 ${reason.glow} -z-10`} />
                            
                            <div className="mb-6 p-3 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                {reason.icon}
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight">
                                {reason.title}
                            </h3>
                            
                            <p className="text-slate-400 text-sm leading-relaxed font-light">
                                {reason.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};