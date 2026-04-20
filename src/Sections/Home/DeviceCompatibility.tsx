import { motion } from "framer-motion";
import { Monitor, Smartphone, CheckCircle2, Cpu, Barcode } from "lucide-react";
import React from "react";

export const DeviceCompatibility = () => {
    return (
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
            
            {/* --- DESTELLOS AZULES DETRÁS DE LOS DISPOSITIVOS (Para dar profundidad) --- */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Un resplandor azul más concentrado justo donde estarán los aparatos */}
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* --- LADO IZQUIERDO: DISPOSITIVOS EN MODO OSCURO (Contraste Total) --- */}
                    <div className="relative flex justify-center items-center h-[450px] md:h-[550px] order-2 lg:order-1">
                        
                        {/* PC Mockup - AHORA EN NEGRO PROFUNDO */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, rotate: -3 }}
                            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            // El marco oscuro elimina el efecto "quemado"
                            className="absolute z-10 w-[95%] max-w-[520px] bg-slate-950 border-[10px] border-slate-900 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] -translate-x-8 -translate-y-10"
                        >
                            <div className="w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-white/5 flex flex-col">
                                {/* Barra Superior Estilo Dark Mode */}
                                <div className="h-7 w-full bg-slate-800/50 border-b border-white/5 flex items-center px-4 gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                </div>
                                {/* Interfaz de Nedimi resaltando en el fondo oscuro */}
                                <div className="flex-1 p-6 bg-slate-900 flex flex-col gap-4">
                                    <div className="flex justify-between items-center">
                                        <div className="w-1/2 h-4 bg-blue-500/20 rounded-full" />
                                        <div className="w-8 h-8 bg-blue-600 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
                                    </div>
                                    <div className="grid grid-cols-3 gap-3 flex-1">
                                        <div className="bg-white/5 rounded-xl border border-white/5" />
                                        <div className="bg-white/5 rounded-xl border border-white/5" />
                                        <div className="bg-blue-600/10 rounded-xl border border-blue-500/20" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Smartphone Mockup - NEGRO CON BRILLO AZUL */}
                        <motion.div
                            initial={{ opacity: 0, y: 70, x: 60, rotate: 8 }}
                            whileInView={{ opacity: 1, y: 0, x: 0, rotate: 8 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute z-20 w-[160px] md:w-[220px] aspect-[9/19] bg-slate-950 border-[8px] border-slate-900 rounded-[3rem] shadow-[0_40px_80px_-10px_rgba(0,102,255,0.3)] p-1.5 translate-x-28 translate-y-28 md:translate-x-40 md:translate-y-36"
                        >
                            <div className="w-full h-full bg-slate-900 rounded-[2.2rem] overflow-hidden relative border border-white/10">
                                {/* Scanner con láser azul (Brilla mucho sobre el negro) */}
                                <div className="flex flex-col items-center h-full pt-12 px-5">
                                    <div className="w-full aspect-square border-2 border-dashed border-blue-500/40 rounded-[2rem] flex items-center justify-center relative bg-blue-950/30">
                                        <Barcode size={44} className="text-blue-400 opacity-40" />
                                        <motion.div
                                            animate={{ top: ["5%", "90%", "5%"] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute left-0 w-full h-[3px] bg-blue-500 shadow-[0_0_20px_#3b82f6]"
                                        />
                                    </div>
                                    <div className="mt-8 w-full h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(37,99,235,0.4)]">
                                        <span className="text-xs font-black text-white uppercase tracking-widest italic">Escaneando</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- LADO DERECHO: TEXTO (Se mantiene limpio) --- */}
                    <div className="order-1 lg:order-2 space-y-10">
                        <div className="text-center lg:text-left">
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-6">
                                <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs bg-blue-50 px-6 py-2.5 rounded-full border border-blue-100">
                                    Cero gastos extras
                                </span>
                            </motion.div>
                            
                            <h2 className="text-5xl md:text-7xl font-[1000] text-slate-950 italic uppercase tracking-tighter leading-[0.85]">
                                Usa lo que <br />
                                <span className="text-blue-600">ya tienes</span>
                            </h2>
                        </div>

                        <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                            Olvídate de comprar computadoras caras. Nedimi corre perfecto en tu <span className="text-slate-950 font-bold">celular, tablet o laptop actual.</span> ¡Vende desde cualquier lugar!
                        </p>

                        <div className="grid gap-5">
                            <FeatureItem
                                icon={<Smartphone />}
                                title="Tu celular es el escáner"
                                desc="Usa la cámara para leer códigos de barras. Sin cables, sin estorbos."
                                delay={0.3}
                            />
                            <FeatureItem
                                icon={<Cpu />}
                                title="Sin instalar nada"
                                desc="Entra desde tu navegador y listo. Es tan fácil como abrir una página web."
                                delay={0.4}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureItem = ({ icon, title, desc, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex gap-6 p-6 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
    >
        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
            {React.cloneElement(icon, { size: 28 })}
        </div>
        <div>
            <h4 className="text-slate-950 font-black text-lg uppercase italic tracking-tight mb-1">{title}</h4>
            <p className="text-slate-500 text-sm font-medium leading-snug">{desc}</p>
        </div>
    </motion.div>
);