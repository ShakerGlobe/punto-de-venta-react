import { motion } from "framer-motion";
import { Database, Globe2, ShieldCheck, FileSpreadsheet } from "lucide-react";
import React from "react";

export const InfrastructureHome = () => {
    // Se ajustaron las propiedades para manejar brillos, textos y bordes dinámicos
    const stats = [
        { label: "Sincronización", value: "Cloud", icon: <Database size={28} />, color: "from-[#00C1A3]", border: "hover:border-[#00C1A3]/50", glow: "group-hover:shadow-[0_0_30px_rgba(0,193,163,0.15)]", textHover: "group-hover:text-[#00C1A3]" },
        { label: "Disponibilidad", value: "24/7", icon: <Globe2 size={28} />, color: "from-blue-500", border: "hover:border-blue-500/50", glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]", textHover: "group-hover:text-blue-400" },
        { label: "Respaldo", value: "Diario", icon: <ShieldCheck size={28} />, color: "from-emerald-500", border: "hover:border-emerald-500/50", glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]", textHover: "group-hover:text-emerald-400" },
        { label: "Reportes", value: "Excel", icon: <FileSpreadsheet size={28} />, color: "from-purple-500", border: "hover:border-purple-500/50", glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]", textHover: "group-hover:text-purple-400" },
    ];

    return (
        <section className="w-full relative bg-[#020617] py-16 md:py-24 lg:py-32 px-6 overflow-hidden">
            {/* Fondo sutil para cohesión visual con el Hero */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,193,163,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-[1000] italic uppercase text-white tracking-tight"
                    >
                        Infraestructura <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-emerald-400">Robusta</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 text-slate-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto font-light"
                    >
                        Tecnología de nivel empresarial diseñada para mantener tu negocio operativo, seguro y sincronizado en todo momento.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`group relative p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-slate-900/40 border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${stat.border} ${stat.glow}`}
                        >
                            {/* Uso del 'color' original: Gradiente de fondo al hacer hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} to-transparent opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6 p-4 md:p-5 bg-white/5 rounded-2xl w-fit group-hover:bg-white text-slate-300 group-hover:text-[#020617] transition-all duration-500 shadow-lg">
                                    {stat.icon}
                                </div>
                                <div className="mt-auto">
                                    <h3 className={`text-4xl md:text-5xl font-[1000] text-white mb-2 md:mb-3 tracking-tighter transition-colors duration-300 ${stat.textHover}`}>
                                        {stat.value}
                                    </h3>
                                    <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-500 group-hover:text-slate-300 transition-colors duration-300">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};