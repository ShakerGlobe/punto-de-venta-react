import { motion } from 'framer-motion';
import { CloudSync, ShieldCheck, Zap, Server, Database, Globe, ArrowRight } from 'lucide-react';

export const DeviceShowcaseHome = () => {
    return (
        /* Se agregó id="showcase" y scroll-mt-20 para la navegación */
        <section id="showcase" className="py-32 bg-transparent text-white overflow-hidden relative scroll-mt-20">
            {/* Luces ambientales para coherencia visual con el resto de la página */}
            <div className="absolute top-1/2 -right-24 w-[600px] h-[600px] bg-[#00C1A3]/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 -left-24 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">

                {/* LADO GRÁFICO: El Núcleo de Datos (Visualmente atrayente) */}
                <div className="relative flex justify-center items-center h-[550px]">

                    {/* Partículas de Sincronización (Datos subiendo) */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -120],
                                opacity: [0, 1, 0],
                                scale: [0, 1.2, 0]
                            }}
                            transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeInOut"
                            }}
                            className="absolute w-1.5 h-1.5 bg-[#00C1A3] rounded-full shadow-[0_0_10px_#00C1A3]"
                            style={{ left: `${35 + (i * 6)}%`, top: '55%' }}
                        />
                    ))}

                    {/* Órbitas de Infraestructura */}
                    <motion.div
                        animate={{ rotate: 360, rotateX: [70, 75, 70] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute w-80 h-80 border-2 border-[#00C1A3]/20 rounded-full shadow-[0_0_30px_rgba(0,193,163,0.1)]"
                    />
                    <motion.div
                        animate={{ rotate: -360, rotateX: [60, 65, 60] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[450px] h-[450px] border border-blue-500/10 rounded-full"
                    />

                    {/* Nodo Central */}
                    <div className="relative group">
                        <motion.div
                            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute inset-0 bg-[#00C1A3] blur-[100px] rounded-full"
                        />
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative z-10 p-12 bg-slate-900/60 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] shadow-2xl overflow-hidden"
                        >
                            <CloudSync size={110} className="text-[#00C1A3] relative z-10" />
                            {/* Brillo interno */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                        </motion.div>

                        {/* Indicadores de Micro-servicios orbitando */}
                        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 -right-12 p-5 bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl flex items-center gap-3">
                            <Database size={24} className="text-blue-400" />
                            <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                        </motion.div>

                        <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-12 -left-12 p-5 bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl flex items-center gap-3">
                            <Server size={24} className="text-purple-400" />
                            <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                        </motion.div>
                    </div>
                </div>

                {/* LADO DE INFORMACIÓN: Ampliado y Detallado */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-[1px] bg-[#00C1A3]" />
                            <span className="text-[#00C1A3] font-black uppercase tracking-[0.3em] text-xs">
                                Infraestructura Global
                            </span>
                        </div>

                        <h2 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-[1.1]">
                            Control total <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-blue-400 to-indigo-500">
                                multi-dispositivo
                            </span>
                        </h2>

                        <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-xl">
                            Olvídate de las instalaciones locales. AryPOS opera bajo una red de baja latencia que mantiene tus sucursales conectadas en <span className="text-white font-bold">tiempo real</span>, sin importar dónde estés.
                        </p>

                        <div className="grid gap-5">
                            {[
                                {
                                    icon: <Zap className="text-[#00C1A3] w-6 h-6" />,
                                    title: "Velocidad de Respuesta",
                                    desc: "Latencia optimizada para procesos de venta críticos."
                                },
                                {
                                    icon: <ShieldCheck className="text-blue-400 w-6 h-6" />,
                                    title: "Seguridad Bancaria",
                                    desc: "Encriptación de 256-bit y respaldos automáticos."
                                },
                                {
                                    icon: <Globe className="text-indigo-400 w-6 h-6" />,
                                    title: "Modo Offline",
                                    desc: "Sigue vendiendo aunque pierdas internet temporalmente."
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (idx * 0.1) }}
                                    whileHover={{ x: 15, backgroundColor: 'rgba(255,255,255,0.03)' }}
                                    className="flex items-center gap-6 p-6 rounded-[2.5rem] border border-white/5 bg-white/[0.01] transition-all group"
                                >
                                    <div className="p-4 bg-slate-900 rounded-2xl group-hover:scale-110 group-hover:bg-[#00C1A3]/10 transition-all duration-300 shadow-xl border border-white/5">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-black text-lg text-white group-hover:text-[#00C1A3] transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-500 text-sm">{item.desc}</p>
                                    </div>
                                    <ArrowRight className="ml-auto w-5 h-5 text-slate-700 group-hover:text-[#00C1A3] transition-all opacity-0 group-hover:opacity-100" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};