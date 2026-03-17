import { motion } from "framer-motion";
import { Monitor, Smartphone, ScanLine, Camera, CheckCircle2, Cpu, Barcode } from "lucide-react";
import React from "react";

export const DeviceCompatibility = () => {
    return (
        <section className="relative py-16 md:py-24 lg:py-32 bg-[#020617] overflow-hidden">
            {/* Elemento decorativo de fondo (Grid técnico) */}
            <div className="absolute inset-0 opacity-[0.03] md:opacity-5 bg-[linear-gradient(to_right,#00C1A3_1px,transparent_1px),linear-gradient(to_bottom,#00C1A3_1px,transparent_1px)] [background-size:60px_60px] md:[background-size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* --- LADO IZQUIERDO: VISUAL DE DISPOSITIVOS --- */}
                    <div className="relative flex justify-center items-center h-[350px] sm:h-[400px] md:h-[500px] order-1 lg:order-1 w-full max-w-lg mx-auto lg:max-w-none">
                        {/* Brillo de fondo para resaltar los dispositivos */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#00C1A3]/10 blur-[80px] rounded-full pointer-events-none" />

                        {/* PC Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: -30, rotateY: 10 }}
                            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7 }}
                            className="absolute z-10 w-[85%] sm:w-3/4 md:w-[80%] max-w-[450px] aspect-video bg-[#0f172a] border border-white/10 rounded-xl md:rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-1.5 md:p-3 -translate-x-4 sm:-translate-x-8 md:-translate-x-12 -translate-y-8 md:-translate-y-12"
                        >
                            <div className="w-full h-full bg-[#020617] rounded-lg md:rounded-xl overflow-hidden border border-white/5 flex flex-col relative">
                                {/* Top bar macOS style */}
                                <div className="h-4 md:h-5 w-full bg-white/5 flex items-center px-2 md:px-3 gap-1.5 border-b border-white/5">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-600" />
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-600" />
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-600" />
                                </div>
                                {/* Fake UI */}
                                <div className="flex-1 flex">
                                    <div className="w-1/4 h-full bg-white/[0.02] border-r border-white/5 p-2 flex flex-col gap-2">
                                        <div className="w-full h-2 bg-white/10 rounded-full" />
                                        <div className="w-3/4 h-2 bg-white/5 rounded-full" />
                                        <div className="w-5/6 h-2 bg-white/5 rounded-full mt-auto" />
                                    </div>
                                    <div className="flex-1 p-3 flex flex-col gap-3">
                                        <div className="w-1/3 h-3 bg-[#00C1A3]/20 rounded-full" />
                                        <div className="flex-1 bg-white/[0.02] rounded-lg border border-white/5 flex items-center justify-center relative overflow-hidden">
                                            <Monitor size={32} className="text-[#00C1A3]/30" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Smartphone Visual */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, x: 20 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="absolute z-20 w-[120px] sm:w-[140px] md:w-[180px] aspect-[9/19] bg-[#0f172a] border-2 md:border-4 border-slate-800 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,193,163,0.2)] p-1 md:p-1.5 translate-x-12 sm:translate-x-16 md:translate-x-24 translate-y-12 md:translate-y-16"
                        >
                            <div className="w-full h-full bg-[#020617] rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden relative group border border-white/5">
                                {/* Notch */}
                                <div className="absolute top-1.5 md:top-2 left-1/2 -translate-x-1/2 w-8 md:w-12 h-3 md:h-4 bg-slate-900 rounded-full z-30" />

                                {/* Fake App UI - Scanner */}
                                <div className="flex flex-col items-center h-full pt-8 pb-4 px-3 relative">
                                    <div className="flex justify-between w-full items-center mb-4">
                                        <Camera size={14} className="text-slate-500" />
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    </div>

                                    {/* Escáner animado */}
                                    <div className="relative w-full aspect-square border-2 border-dashed border-[#00C1A3]/40 rounded-xl flex items-center justify-center mt-4">
                                        <Barcode size={40} className="text-white/20" />
                                        {/* Línea láser */}
                                        <motion.div
                                            animate={{ top: ["0%", "98%", "0%"] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 w-full h-[2px] bg-[#00C1A3] shadow-[0_0_10px_#00C1A3]"
                                        />
                                    </div>

                                    <div className="mt-auto w-full h-8 bg-[#00C1A3]/10 rounded-lg border border-[#00C1A3]/30 flex items-center justify-center">
                                        <span className="text-[8px] md:text-[10px] font-bold text-[#00C1A3] uppercase">Escanear</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- LADO DERECHO: TEXTO Y CARACTERÍSTICAS --- */}
                    <div className="order-2 lg:order-2 space-y-8">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block mb-4"
                            >
                                <span className="text-cyan-400 font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs bg-cyan-400/10 px-4 sm:px-5 py-2 rounded-full border border-cyan-400/20">
                                    Flexibilidad Multiplataforma
                                </span>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-[1000] text-white italic uppercase tracking-tighter mt-2 leading-[0.9]"
                            >
                                TU NEGOCIO <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#00C1A3] drop-shadow-sm">
                                    DONDE SEA QUE ESTÉS
                                </span>
                            </motion.h2>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-xl"
                        >
                            Nedimi POS es agnóstico al hardware. Gestiona desde la comodidad de tu oficina en <span className="text-white font-medium">PC</span> o vende directamente en el pasillo con tu <span className="text-white font-medium">Smartphone</span>.
                        </motion.p>

                        {/* Feature Cards */}
                        <div className="grid gap-3 md:gap-4">
                            <FeatureItem
                                icon={<Cpu size={22} />}
                                title="Optimizado para cualquier dispositivo"
                                desc="Interfaz adaptativa que vuela tanto en Windows, Mac, Android o iOS."
                                delay={0.3}
                            />
                            <FeatureItem
                                icon={<ScanLine size={22} />}
                                title="Escaneo Inteligente por Cámara"
                                desc="Convierte la cámara de tu celular en un escáner de alto rendimiento. Lee códigos de barras y QR al instante."
                                delay={0.4}
                            />
                            <FeatureItem
                                icon={<CheckCircle2 size={22} />}
                                title="Sincronización en la Nube"
                                desc="Empieza una venta en la tablet y termínala en la computadora. Los datos fluyen contigo."
                                delay={0.5}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Componente secundario refactorizado para aceptar retraso (delay) en la animación
const FeatureItem = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: delay }}
        whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.04)" }}
        className="flex gap-4 md:gap-5 p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/5 transition-colors cursor-default"
    >
        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#00C1A3]/10 border border-[#00C1A3]/20 flex items-center justify-center text-[#00C1A3]">
            {icon}
        </div>
        <div>
            <h4 className="text-white font-bold text-xs md:text-sm uppercase italic tracking-tight mb-1">{title}</h4>
            <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed font-light">{desc}</p>
        </div>
    </motion.div>
);