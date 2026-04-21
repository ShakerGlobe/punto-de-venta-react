import { motion } from 'framer-motion';
import {
    Database,
    Zap,
    Server,
    Smartphone,
    Cloud,
    ShieldCheck,
    Battery,
    Sparkles
} from 'lucide-react';
import React from 'react';

// --- SUB-COMPONENTE: MÓDULO TECNOLÓGICO ---
const TechModule = ({ icon, title, label }: { icon: any, title: string, label: string }) => (
    <div className="flex flex-col items-center text-center gap-4 p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-[#00C1A3]/30 hover:shadow-2xl shadow-slate-200/50 transition-all group">
        <div className="p-4 rounded-2xl bg-emerald-50 text-[#00C1A3] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00C1A3] group-hover:text-white shadow-sm">
            {React.cloneElement(icon, { size: 28 })}
        </div>
        <div>
            <h4 className="text-slate-900 font-[1000] italic uppercase text-lg tracking-tight mb-2">{title}</h4>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">{label}</p>
        </div>
    </div>
);

export const TechStackHome = () => {
    return (
        <section className="w-full bg-white py-10 md:py-10 relative overflow-hidden flex flex-col items-center">

            {/* --- DESTELLOS VERDES REFORZADOS (Visibilidad Pro) --- */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Flare superior izquierdo */}
                <div className="absolute top-1/4 left-[-5%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#00C1A3]/15 rounded-full blur-[120px] md:blur-[160px]" />
                {/* Flare inferior derecho */}
                <div className="absolute bottom-1/4 right-[-5%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-emerald-400/15 rounded-full blur-[100px] md:blur-[140px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10 flex flex-col items-center">

                {/* CABECERA CENTRADA UNIFICADA */}
                <div className="text-center mb-20 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-[#00C1A3] text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-sm"
                    >
                        <Zap size={14} className="fill-[#00C1A3]" />
                        Tecnología a tu favor
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-7xl font-[1000] text-slate-950 italic uppercase tracking-tighter leading-[0.95] mb-8">
                        Funciona <br />
                        <span className="text-[#00C1A3] underline decoration-emerald-100 decoration-8 underline-offset-4">
                            Sin Complicaciones.
                        </span>
                    </h2>
                    
                    <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                        Nedimi POS está hecho para que no tengas que ser un experto. 
                        No necesitas equipos caros ni instalaciones difíciles. 
                        ¡Entras y empiezas a vender!
                    </p>
                </div>

                {/* Grid de Tecnología (1 col móvil, 2 tablet, 4 desktop) */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    <TechModule
                        icon={<Server />}
                        title="Siempre Listo"
                        label="Tus datos se guardan solitos y siempre están ahí cuando los necesitas."
                    />
                    <TechModule
                        icon={<Database />}
                        title="Cuentas Reales"
                        label="Cero errores. Ni un solo peso o producto se pierde en tus registros."
                    />
                    <TechModule
                        icon={<Zap />}
                        title="Cobros Volando"
                        label="Registra tus ventas en un segundo y no hagas esperar a tus clientes."
                    />
                    <TechModule
                        icon={<Smartphone />}
                        title="Usa lo que tienes"
                        label="Funciona perfecto en el celular o la compu que ya usas hoy mismo."
                    />
                </div>

                {/* Bloque de Eficiencia (Batería y Rendimiento) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-slate-50 border border-slate-100 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12"
                >
                    <div className="max-w-xl relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex items-center gap-3 text-[#00C1A3] mb-6">
                            <Battery size={32} className="animate-pulse" />
                            <span className="font-[1000] italic uppercase tracking-widest text-xl">Cuida tus equipos</span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-[1000] text-slate-950 uppercase italic tracking-tighter leading-none mb-6">
                            Ahorro de energía y <br /> <span className="text-[#00C1A3]">máxima velocidad</span>
                        </h3>
                        <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                            Diseñamos Nedimi para que sea ligero. No calienta tu celular ni gasta tu batería rápido. 
                            Esto hace que tus dispositivos duren más años y siempre respondan al instante.
                        </p>
                        <div className="flex items-center gap-2 text-[10px] font-black text-[#00C1A3] uppercase bg-emerald-100/50 border border-emerald-200 px-5 py-2.5 rounded-2xl w-fit shadow-sm">
                            <ShieldCheck size={14} />
                            Estabilidad total las 24 horas
                        </div>
                    </div>

                    {/* Gráfico de Carga Circular Nedimi Green */}
                    <div className="relative w-56 h-56 md:w-80 md:h-80 flex items-center justify-center z-10">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="50%" cy="50%" r="42%" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-200" />
                            <motion.circle
                                cx="50%" cy="50%" r="42%" stroke="currentColor" strokeWidth="12" fill="transparent"
                                className="text-[#00C1A3]"
                                strokeDasharray="264"
                                initial={{ strokeDashoffset: 264 }}
                                whileInView={{ strokeDashoffset: 264 - (264 * 0.98) }}
                                viewport={{ once: true }}
                                transition={{ duration: 2.5, ease: "easeOut" }}
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-5xl md:text-6xl font-[1000] text-slate-950 tracking-tighter italic">98%</span>
                            <span className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Eficiencia</span>
                        </div>
                        
                        {/* Brillo detrás del círculo */}
                        <div className="absolute inset-0 bg-[#00C1A3]/10 blur-3xl -z-10 rounded-full" />
                    </div>

                    {/* Icono de nube decorativo verde sutil */}
                    <Cloud size={300} className="absolute -bottom-20 -right-20 text-[#00C1A3]/5 -z-0 rotate-12" />
                </motion.div>
            </div>
        </section>
    );
};