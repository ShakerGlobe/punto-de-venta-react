import { motion } from "framer-motion";
import { CheckCircle2, LayoutDashboard, BarChart3 } from "lucide-react";

export const DashboardPreview = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 pb-40 bg-[#020617]">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="relative rounded-[4rem] overflow-hidden bg-slate-900/40 border border-white/10 p-8 md:p-24 backdrop-blur-sm">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-[1000] italic uppercase text-white mb-8 leading-[0.85]">
                            Gestión de <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] to-blue-400">Alto Nivel.</span>
                        </h2>
                        <div className="grid gap-4">
                            {["Cortes de caja", "Alertas de Stock", "Histórico de Ventas"].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white/5 p-5 rounded-3xl border border-white/5">
                                    <CheckCircle2 size={16} className="text-[#00C1A3]" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-slate-200">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Mini Dashboard Animado */}
                    <div className="relative aspect-[4/3] bg-[#020617] rounded-[3rem] border border-white/10 p-10 overflow-hidden shadow-2xl">
                        <LayoutDashboard className="text-slate-700 mb-6" size={24} />
                        <div className="flex items-end gap-3 h-40">
                            {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                                <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} className="flex-1 bg-[#00C1A3] rounded-t-lg" />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};