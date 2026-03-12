import { motion } from "framer-motion";
import { Database, Globe2, ShieldCheck, FileSpreadsheet } from "lucide-react";

export const InfrastructureHome = () => {
    const stats = [
        { label: "Sincronización", value: "Cloud", icon: <Database />, color: "from-[#00C1A3]", border: "hover:border-[#00C1A3]" },
        { label: "Disponibilidad", value: "24/7", icon: <Globe2 />, color: "from-blue-500", border: "hover:border-blue-500" },
        { label: "Respaldo", value: "Diario", icon: <ShieldCheck />, color: "from-emerald-500", border: "hover:border-emerald-500" },
        { label: "Reportes", value: "Excel", icon: <FileSpreadsheet />, color: "from-purple-500", border: "hover:border-purple-500" },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-32 relative bg-[#020617]">
            <div className="text-center mb-20">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl md:text-5xl font-[1000] italic uppercase text-white">
                    Infraestructura <span className="text-[#00C1A3]">Robusta</span>
                </motion.h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                    <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0.4, y: 30 }} className={`group relative p-8 rounded-[2.5rem] bg-slate-900/50 border border-white/20 backdrop-blur-xl overflow-hidden ${stat.border}`}>
                        <div className="relative z-10">
                            <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-white group-hover:text-[#020617] transition-all">{stat.icon}</div>
                            <h3 className="text-5xl font-[1000] text-white mb-2 tracking-tighter">{stat.value}</h3>
                            <p className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-white">{stat.label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};