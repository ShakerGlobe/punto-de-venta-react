import { motion } from "framer-motion";
import { Database, Globe2, ShieldCheck, FileSpreadsheet, Zap } from "lucide-react";
import React from "react";

export const InfrastructureHome = () => {
    const infoBlocks = [
        { 
            label: "Cero Olvidos", 
            value: "Toda tu info en un solo lugar", 
            description: "Si lo anotas en el celular, aparece en tu compu. Así de fácil.",
            icon: <Database size={32} />, 
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        { 
            label: "Sin Pausas", 
            value: "Tu tienda nunca se detiene", 
            description: "Accede a tu negocio a la hora que sea, desde donde quieras.",
            icon: <Globe2 size={32} />, 
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        { 
            label: "Seguridad", 
            value: "Tu información bajo llave", 
            description: "Tus datos están protegidos y respaldados todos los días.",
            icon: <ShieldCheck size={32} />, 
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        { 
            label: "Reportes", 
            value: "Tus ventas en un clic", 
            description: "Descarga tu lista de ventas para llevar un orden perfecto.",
            icon: <FileSpreadsheet size={32} />, 
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
    ];

    return (
        <section className="w-full relative bg-white py-24 lg:py-32 px-6 overflow-hidden">
            
            {/* --- DESTELLOS AZULES (Identidad Nedimi) --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-600/10 rounded-full blur-[160px]" />
                <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                
                {/* CABECERA: Tono menos técnico, más de beneficio */}
                <div className="mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm"
                    >
                        <Zap size={14} className="text-blue-600 fill-blue-600" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
                            Tranquilidad para tu bolsillo
                        </span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-[1000] italic uppercase text-slate-950 tracking-tighter leading-[0.9]"
                    >
                        Tu información siempre <br />
                        <span className="text-blue-600 underline decoration-blue-100 decoration-8">
                            segura y a la mano
                        </span>
                    </motion.h2>
                </div>

                {/* GRID DE TARJETAS: Estilo Píldora/Botonazo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {infoBlocks.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-10 rounded-[3rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,102,255,0.05)] flex flex-col items-center text-center transition-all duration-500 hover:border-blue-200 hover:shadow-blue-500/10"
                        >
                            {/* Icon Container Centrado */}
                            <div className={`mb-8 p-6 rounded-[2rem] ${item.bg} border border-blue-50 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white shadow-sm`}>
                                <div className={`relative z-10 ${item.color} group-hover:text-white transition-colors duration-500`}>
                                    {item.icon}
                                </div>
                            </div>
                            
                            {/* Texto centrado e informal */}
                            <div className="space-y-4">
                                <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-blue-600 transition-colors">
                                    {item.label}
                                </p>
                                <h3 className="text-xl lg:text-2xl font-[1000] italic uppercase tracking-tighter text-slate-900 leading-tight">
                                    {item.value}
                                </h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Detalle visual: "Puntos de carga" en azul */}
                            <div className="mt-8 flex gap-1.5 opacity-30 group-hover:opacity-100 transition-opacity">
                                {[1, 2, 3].map((dot) => (
                                    <div 
                                        key={dot} 
                                        className="w-1.5 h-1.5 rounded-full bg-blue-600"
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};