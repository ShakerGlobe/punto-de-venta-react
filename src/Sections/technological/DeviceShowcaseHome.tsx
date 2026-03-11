import { motion } from 'framer-motion';
import { CloudSync, ShieldCheck, Zap, Server, Database, Globe, MonitorSmartphone, MousePointerClick } from 'lucide-react';

export const DeviceShowcaseHome = () => {
    return (
        <section id="showcase" className="py-20 md:py-32 bg-transparent text-white overflow-hidden relative scroll-mt-20">
            {/* Luces ambientales Nedimi */}
            <div className="absolute top-1/2 -right-24 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#00C1A3]/5 blur-[80px] md:blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 -left-24 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-600/5 blur-[80px] md:blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-24 items-center">

                {/* LADO GRÁFICO: El Núcleo de Datos */}
                {/* Se ajustó la altura en móvil (h-[400px]) para que no ocupe toda la pantalla vertical */}
                <div className="relative flex justify-center items-center h-[400px] md:h-[550px] order-2 lg:order-1">
                    {/* Partículas de Sincronización */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -80, -120],
                                opacity: [0, 1, 0],
                                scale: [0, 1.2, 0]
                            }}
                            transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeInOut"
                            }}
                            className="absolute w-1 md:w-1.5 h-1 md:h-1.5 bg-[#00C1A3] rounded-full shadow-[0_0_10px_#00C1A3]"
                            style={{ left: `${30 + (i * 8)}%`, top: '55%' }}
                        />
                    ))}

                    {/* Órbitas - Tamaño responsive */}
                    <motion.div
                        animate={{ rotate: 360, rotateX: [70, 75, 70] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute w-60 h-60 md:w-80 md:h-80 border-2 border-[#00C1A3]/20 rounded-full shadow-[0_0_30px_rgba(0,193,163,0.1)]"
                    />

                    {/* Nodo Central */}
                    <div className="relative group">
                        <motion.div
                            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute inset-0 bg-[#00C1A3] blur-[60px] md:blur-[100px] rounded-full"
                        />
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative z-10 p-8 md:p-12 bg-[#001f3f]/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl overflow-hidden"
                        >
                            <MonitorSmartphone className="w-16 h-16 md:w-[110px] md:h-[110px] text-[#00C1A3] relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                        </motion.div>

                        {/* Indicadores flotantes - Ajuste de escala y posición */}
                        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 md:-top-12 md:-right-12 p-3 md:p-5 bg-[#001f3f]/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl flex items-center gap-2 md:gap-3">
                            <Database className="w-4 h-4 md:w-6 md:h-6 text-blue-400" />
                            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-blue-400 animate-pulse" />
                        </motion.div>

                        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 p-3 md:p-5 bg-[#001f3f]/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl flex items-center gap-2 md:gap-3">
                            <CloudSync className="w-4 h-4 md:w-6 md:h-6 text-[#00C1A3]" />
                            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#00C1A3] animate-pulse" />
                        </motion.div>
                    </div>
                </div>

                {/* LADO DE INFORMACIÓN */}
                <div className="relative order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 md:w-12 h-[1px] bg-[#00C1A3]" />
                            <span className="text-[#00C1A3] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs">
                                Ecosistema Nedimi
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-8 tracking-tighter leading-[1.1]">
                            Control total <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-blue-400 to-indigo-500">
                                multi-dispositivo
                            </span>
                        </h2>

                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 md:mb-12 max-w-xl">
                            Gestiona tu sucursal desde <span className="text-white font-bold italic">nedimipos.com/TuTienda</span>.
                            <br className="hidden md:block" /> Todo sincronizado en la nube con <span className="text-white font-bold">baja latencia</span>.
                        </p>

                        <div className="grid gap-4 md:gap-5">
                            {[
                                {
                                    icon: <Globe className="text-[#00C1A3] w-5 h-5 md:w-6 md:h-6" />,
                                    title: "Acceso Universal",
                                    desc: "Vende o monitorea stock desde cualquier navegador, estés donde estés."
                                },
                                {
                                    icon: <Zap className="text-blue-400 w-5 h-5 md:w-6 md:h-6" />,
                                    title: "Sincronización Crítica",
                                    desc: "Las ventas se reflejan al instante para una toma de decisiones inmediata."
                                },
                                {
                                    icon: <ShieldCheck className="text-indigo-400 w-5 h-5 md:w-6 md:h-6" />,
                                    title: "Infraestructura Segura",
                                    desc: "Respaldos automáticos y protección de datos. Tu información siempre segura."
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + (idx * 0.1) }}
                                    whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.03)' }}
                                    className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 bg-white/[0.01] transition-all group"
                                >
                                    <div className="p-3 md:p-4 bg-[#001f3f] rounded-xl md:rounded-2xl group-hover:scale-110 group-hover:bg-[#00C1A3]/10 transition-all duration-300 shadow-xl border border-white/5 shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-black text-sm md:text-lg text-white group-hover:text-[#00C1A3] transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-500 text-xs md:text-sm leading-snug">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};