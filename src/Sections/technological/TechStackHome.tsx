import { motion } from 'framer-motion';
import {
    Database,
    Zap,
    Server,
    Smartphone,
    Cloud,
    ShieldCheck,
    Cpu,
    Battery
} from 'lucide-react';
import React from 'react';

const TechModule = ({ icon, title, label }: { icon: any, title: string, label: string }) => (
    <div className="flex flex-col items-center text-center gap-4 p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-xl shadow-slate-200/50 transition-all group">
        <div className="p-4 rounded-2xl bg-blue-50 text-blue-600 transition-transform group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
            {React.cloneElement(icon, { size: 28 })}
        </div>
        <div>
            <h4 className="text-slate-900 font-black italic uppercase text-lg tracking-tight mb-2">{title}</h4>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">{label}</p>
        </div>
    </div>
);

export const TechStackHome = () => {
    return (
        <section className="w-full bg-white py-20 md:py-32 relative overflow-hidden flex flex-col items-center">

            {/* --- DESTELLOS AZULES (Identidad Nedimi) --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[130px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center">

                {/* CABECERA CENTRADA */}
                <div className="text-center mb-20 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-sm"
                    >
                        <Zap size={14} className="fill-blue-600" />
                        Tecnología a tu favor
                    </motion.div>
                    
                    <h2 className="text-5xl md:text-7xl font-[1000] text-slate-950 italic uppercase tracking-tighter leading-[0.9] mb-8">
                        Funciona <br />
                        <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-8">
                            Sin Complicaciones.
                        </span>
                    </h2>
                    
                    <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                        Nedimi POS está hecho para que no tengas que ser un experto. 
                        No necesitas equipos caros ni instalaciones difíciles. 
                        ¡Entras y empiezas a vender!
                    </p>
                </div>

                {/* Grid de Tecnología Humana */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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
                    className="w-full p-8 md:p-16 rounded-[3rem] bg-slate-50 border border-slate-100 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
                >
                    <div className="max-w-xl relative z-10">
                        <div className="flex items-center gap-3 text-blue-600 mb-6">
                            <Battery size={32} className="animate-pulse" />
                            <span className="font-[1000] italic uppercase tracking-widest text-xl">Cuida tus equipos</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-[1000] text-slate-950 uppercase italic tracking-tighter mb-6">
                            Ahorro de energía y <br /> <span className="text-blue-600">máxima velocidad</span>
                        </h3>
                        <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
                            Diseñamos Nedimi para que sea ligero. No calienta tu celular ni gasta tu batería rápido. 
                            Esto hace que tus dispositivos duren más años y siempre respondan al instante.
                        </p>
                        <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase bg-blue-100/50 border border-blue-200 px-5 py-2.5 rounded-2xl w-fit shadow-sm">
                            <ShieldCheck size={14} />
                            Estabilidad total las 24 horas
                        </div>
                    </div>

                    {/* Gráfico de Carga Circular Nedimi */}
                    <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center z-10">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="50%" cy="50%" r="42%" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-200" />
                            <motion.circle
                                cx="50%" cy="50%" r="42%" stroke="currentColor" strokeWidth="12" fill="transparent"
                                className="text-blue-600"
                                strokeDasharray="264"
                                initial={{ strokeDashoffset: 264 }}
                                whileInView={{ strokeDashoffset: 264 - (264 * 0.98) }}
                                viewport={{ once: true }}
                                transition={{ duration: 2.5, ease: "easeOut" }}
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-5xl font-[1000] text-slate-950 tracking-tighter italic">98%</span>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Eficiencia</span>
                        </div>
                        
                        {/* Brillo detrás del círculo */}
                        <div className="absolute inset-0 bg-blue-600/5 blur-3xl -z-10 rounded-full" />
                    </div>

                    {/* Icono de nube decorativo suave */}
                    <Cloud size={280} className="absolute -bottom-20 -right-20 text-blue-600/5 -z-0 rotate-12" />
                </motion.div>
            </div>
        </section>
    );
};