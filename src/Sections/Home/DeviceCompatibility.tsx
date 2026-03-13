import { motion } from "framer-motion";
import { Monitor, Smartphone, ScanLine, Camera, CheckCircle2, Cpu } from "lucide-react";

export const DeviceCompatibility = () => {
    return (
        <section className="relative py-24 bg-[#020617] overflow-hidden">
            {/* Elemento decorativo de fondo (Grid técnico) */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00C1A3_1px,transparent_1px),linear-gradient(to_bottom,#00C1A3_1px,transparent_1px)] [background-size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* --- LADO IZQUIERDO: VISUAL DE DISPOSITIVOS --- */}
                    <div className="relative flex justify-center items-center h-[400px] md:h-[500px]">
                        {/* PC Visual */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="absolute z-10 w-2/3 md:w-full max-w-[400px] aspect-video bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-2 md:p-4 -translate-x-12 -translate-y-12"
                        >
                            <div className="w-full h-full bg-slate-950 rounded-lg overflow-hidden border border-white/5 flex flex-col">
                                <div className="h-4 w-full bg-white/5 flex items-center px-2 gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                                </div>
                                <div className="flex-1 flex items-center justify-center">
                                    <Monitor size={40} className="text-[#00C1A3]/20" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Smartphone Visual */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="absolute z-20 w-[140px] md:w-[200px] aspect-[9/19] bg-slate-900 border-4 border-slate-800 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,193,163,0.3)] p-1 md:p-2 translate-x-16 translate-y-16"
                        >
                            <div className="w-full h-full bg-slate-950 rounded-[2rem] overflow-hidden relative group">
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-slate-900 rounded-full" />
                                <div className="flex flex-col items-center justify-center h-full gap-4">
                                    <Camera size={24} className="text-[#00C1A3] animate-pulse" />
                                    <div className="w-3/4 h-1 bg-[#00C1A3]/20 rounded-full overflow-hidden">
                                        <motion.div 
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-1/2 h-full bg-[#00C1A3]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- LADO DERECHO: TEXTO Y CARACTERÍSTICAS --- */}
                    <div className="space-y-8">
                        <div>
                            <motion.span 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-cyan-400 font-black uppercase tracking-[0.3em] text-[10px]"
                            >
                                Flexibilidad Multiplataforma
                            </motion.span>
                            <h2 className="text-4xl md:text-5xl font-[1000] text-white italic uppercase tracking-tighter mt-4 leading-none">
                                TU NEGOCIO <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#00C1A3]">
                                    DONDE SEA QUE ESTÉS
                                </span>
                            </h2>
                        </div>

                        <p className="text-slate-400 text-lg font-light leading-relaxed">
                            Nedimi POS es agnóstico al hardware. Gestiona desde la comodidad de tu oficina en <span className="text-white font-medium">PC</span> o vende directamente en el pasillo con tu <span className="text-white font-medium">Smartphone</span>.
                        </p>

                        {/* Feature Cards */}
                        <div className="grid gap-4">
                            <FeatureItem 
                                icon={<Cpu size={20} />} 
                                title="Optimizado para cualquier dispositivo"
                                desc="Interfaz adaptativa que vuela tanto en Windows, Mac, Android o iOS."
                            />
                            <FeatureItem 
                                icon={<ScanLine size={20} />} 
                                title="Escaneo Inteligente por Cámara"
                                desc="Convierte la cámara de tu celular en un escáner de alto rendimiento. Lee códigos de barras y QR al instante sin hardware extra."
                            />
                            <FeatureItem 
                                icon={<CheckCircle2 size={20} />} 
                                title="Sincronización en la Nube"
                                desc="Empieza una venta en la tablet y termínala en la computadora. Los datos fluyen contigo."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureItem = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <motion.div 
        whileHover={{ x: 10 }}
        className="flex gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all"
    >
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00C1A3]/10 border border-[#00C1A3]/20 flex items-center justify-center text-[#00C1A3]">
            {icon}
        </div>
        <div>
            <h4 className="text-white font-bold text-sm uppercase italic tracking-tight mb-1">{title}</h4>
            <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);