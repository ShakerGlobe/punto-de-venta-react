import { motion } from 'framer-motion';
import { 
    Database, 
    Code2, 
    Server, 
    Smartphone, 
    Cloud, 
    Terminal,
    Cpu,
    ShieldCheck
} from 'lucide-react';
import React from 'react';

// --- MAPA DE COLORES PARA EVITAR CLASES DINÁMICAS QUE FALLAN EN TAILWIND ---
const colorMap: Record<string, string> = {
    blue: "text-blue-400 bg-blue-400/10 border-blue-500/20",
    indigo: "text-indigo-400 bg-indigo-400/10 border-indigo-500/20",
    amber: "text-amber-400 bg-amber-400/10 border-amber-500/20",
    emerald: "text-emerald-400 bg-emerald-400/10 border-emerald-500/20",
};

const TechModule = ({ icon, title, label, colorKey }: { icon: any, title: string, label: string, colorKey: string }) => (
    <div className="flex items-start gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
        <div className={`p-3 rounded-2xl transition-transform group-hover:scale-110 ${colorMap[colorKey]}`}>
            {icon}
        </div>
        <div>
            <h4 className="text-white font-bold italic uppercase text-sm tracking-tight mb-1">{title}</h4>
            <p className="text-slate-500 text-[11px] font-medium leading-tight uppercase tracking-widest">{label}</p>
        </div>
    </div>
);

export const TechStackHome = () => {
    return (
        <section className="w-full bg-[#020617] py-12 md:py-40 relative overflow-hidden flex flex-col items-center">
            
            {/* Fondo de Grid */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#020617] via-transparent to-[#020617] z-0" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center">
                
                <div className="text-center mb-20 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
                    >
                        <Terminal size={12} />
                        Engineering Core
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-[1000] text-white italic uppercase tracking-tighter leading-[0.9] mb-8">
                        Arquitectura <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            Sin Dependencias.
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg font-light leading-relaxed">
                        Nedimi POS utiliza una base tecnológica optimizada para la **máxima compatibilidad**. Al eliminar estructuras pesadas del lado del usuario, garantizamos una rapidez y estabilidad total.
                    </p>
                </div>

                {/* Grid de Tecnología */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <TechModule 
                        icon={<Server size={20} />} 
                        title="Backend PHP 8+" 
                        label="Lógica de servidor robusta y segura."
                        colorKey="blue"
                    />
                    <TechModule 
                        icon={<Database size={20} />} 
                        title="SQL Relacional" 
                        label="Integridad total en tus transacciones."
                        colorKey="indigo"
                    />
                    <TechModule 
                        icon={<Code2 size={20} />} 
                        title="Vanilla JS" 
                        label="Interactividad instantánea y ligera."
                        colorKey="amber"
                    />
                    <TechModule 
                        icon={<Smartphone size={20} />} 
                        title="Universal Web" 
                        label="Compatible con cualquier dispositivo (Computadora o celular)."
                        colorKey="emerald"
                    />
                </div>

                {/* Bloque de Performance */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="w-full p-8 md:p-12 rounded-[3rem] bg-slate-900/60 border border-white/10 backdrop-blur-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
                >
                    <div className="max-w-md relative z-10">
                        <div className="flex items-center gap-3 text-[#00C1A3] mb-6">
                            <Cpu size={28} className="animate-pulse" />
                            <span className="font-black italic uppercase tracking-widest text-xl">Low-Resource Engine</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white uppercase italic tracking-tighter mb-4">Eficiencia Energética</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                            Diseñamos el POS para consumir recursos mínimos. Esto permite una vida útil más larga de tus equipos y una velocidad de respuesta constante sin importar el dispositivo que se tenga.
                        </p>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-xl w-fit">
                            <ShieldCheck size={14} className="text-[#00C1A3]" />
                            Optimizado para Estabilidad 24/7
                        </div>
                    </div>

                    {/* Gráfico de Carga Simulado */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center z-10">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="50%" cy="50%" r="40%" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-800" />
                            <motion.circle 
                                cx="50%" cy="50%" r="40%" stroke="currentColor" strokeWidth="8" fill="transparent" 
                                className="text-[#00C1A3]" 
                                strokeDasharray="251.2"
                                initial={{ strokeDashoffset: 251.2 }}
                                whileInView={{ strokeDashoffset: 251.2 - (251.2 * 0.95) }}
                                transition={{ duration: 2, ease: "easeOut" }}
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-4xl font-[1000] text-white tracking-tighter italic">95%</span>
                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Efficiency</span>
                        </div>
                    </div>

                    <Cloud size={300} className="absolute -bottom-20 -right-20 text-white/[0.02] -z-0 rotate-12" />
                </motion.div>
            </div>
        </section>
    );
};