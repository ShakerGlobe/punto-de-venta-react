import { motion } from "framer-motion";
import { Database, Globe2, ShieldCheck, FileSpreadsheet, Activity } from "lucide-react";
import React from "react";

export const InfrastructureHome = () => {
    const stats = [
        { 
            label: "Sincronización", 
            value: "Cloud", 
            icon: <Database size={32} />, 
            color: "from-[#00C1A3] to-emerald-500", 
            iconColor: "text-[#00C1A3]",
            shadow: "shadow-[#00C1A3]/20",
            bg: "bg-[#00C1A3]/10"
        },
        { 
            label: "Disponibilidad", 
            value: "24/7", 
            icon: <Globe2 size={32} />, 
            color: "from-blue-500 to-cyan-400", 
            iconColor: "text-blue-400",
            shadow: "shadow-blue-500/20",
            bg: "bg-blue-500/10"
        },
        { 
            label: "Respaldo", 
            value: "Diario", 
            icon: <ShieldCheck size={32} />, 
            color: "from-purple-500 to-pink-500", 
            iconColor: "text-purple-400",
            shadow: "shadow-purple-500/20",
            bg: "bg-purple-500/10"
        },
        { 
            label: "Reportes", 
            value: "Excel", 
            icon: <FileSpreadsheet size={32} />, 
            color: "from-amber-400 to-orange-500", 
            iconColor: "text-amber-400",
            shadow: "shadow-amber-500/20",
            bg: "bg-amber-400/10"
        },
    ];

    return (
        <section className="w-full relative bg-[#020617] py-24 lg:py-5 px-6 overflow-hidden">
            
            {/* FONDO TÉCNICO */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,193,163,0.05)_0%,transparent_70%)] pointer-events-none" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                
                {/* CABECERA CENTRADA */}
                <div className="mb-24 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10"
                    >
                        <Activity size={14} className="text-[#00C1A3] animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Sistemas de Alta Disponibilidad</span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-[1000] italic uppercase text-white tracking-tighter leading-none"
                    >
                        NÚCLEO <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-blue-400 to-purple-500 animate-gradient-x">
                            TECNOLÓGICO
                        </span>
                    </motion.h2>
                </div>

                {/* GRID DE TARJETAS CENTRADAS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -12, scale: 1.02 }}
                            className={`group relative p-10 rounded-[3rem] bg-slate-900/40 border border-white/5 backdrop-blur-2xl flex flex-col items-center text-center transition-all duration-500 ${stat.shadow} hover:border-white/20`}
                        >
                            {/* Brillo de fondo al hover */}
                            <div className={`absolute inset-0 rounded-[3rem] bg-gradient-to-b ${stat.color} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500`} />

                            {/* Icon Container Centrado */}
                            <div className={`mb-8 p-6 rounded-[2rem] ${stat.bg} border border-white/10 group-hover:bg-white group-hover:border-transparent transition-all duration-500 shadow-2xl relative overflow-hidden`}>
                                {/* Reflejo interno del icono */}
                                <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${stat.color}`} />
                                
                                <div className={`relative z-10 ${stat.iconColor} group-hover:text-[#020617] group-hover:scale-110 transition-all duration-500`}>
                                    {stat.icon}
                                </div>
                            </div>

                            {/* Texto Centrado */}
                            <div className="space-y-3 mt-auto">
                                <p className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-500 group-hover:text-white transition-colors duration-300">
                                    {stat.label}
                                </p>
                                <h3 className={`text-5xl lg:text-6xl font-[1000] italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${stat.color} drop-shadow-sm`}>
                                    {stat.value}
                                </h3>
                            </div>

                            {/* Indicador de carga inferior */}
                            <div className="mt-8 flex gap-1.5">
                                {[1, 2, 3].map((dot) => (
                                    <motion.div
                                        key={dot}
                                        animate={{ opacity: [0.2, 1, 0.2] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: dot * 0.2 }}
                                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stat.color}`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 4s ease infinite;
                }
            `}</style>
        </section>
    );
};