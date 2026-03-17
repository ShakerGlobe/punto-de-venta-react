import { motion } from 'framer-motion';
import { CloudSync, ShieldCheck, Zap, Database, Globe, MonitorSmartphone } from 'lucide-react';
import React from 'react';

export const DeviceShowcaseHome = () => {
    return (
        <section id="showcase" className="py-20 md:py-32 bg-[#020617] text-white overflow-hidden relative scroll-mt-20">
            {/* Luces ambientales y Textura */}
            <div className="absolute top-1/2 -right-24 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#00C1A3]/10 blur-[100px] md:blur-[140px] rounded-full -z-10 pointer-events-none" />
            <div className="absolute bottom-0 -left-24 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-600/10 blur-[100px] md:blur-[140px] rounded-full -z-10 pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-20 lg:gap-24 items-center">

                {/* --- LADO GRÁFICO: El Núcleo de Datos --- */}
                <div className="relative flex justify-center items-center h-[350px] sm:h-[450px] md:h-[550px] order-2 lg:order-1 w-full max-w-md mx-auto lg:max-w-none">

                    {/* Partículas de Sincronización ascendentes */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -100, -150],
                                opacity: [0, 0.8, 0],
                                scale: [0, 1.2, 0]
                            }}
                            transition={{
                                duration: 3 + (i % 3), // Variabilidad en la velocidad
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeInOut"
                            }}
                            className="absolute w-1 md:w-1.5 h-1 md:h-1.5 bg-gradient-to-t from-[#00C1A3] to-emerald-300 rounded-full shadow-[0_0_12px_#00C1A3] will-change-transform"
                            style={{ left: `${30 + (i * 6)}%`, top: '60%' }}
                        />
                    ))}

                    {/* Órbitas - Tamaño responsive y optimizado */}
                    <motion.div
                        animate={{ rotate: 360, rotateX: [70, 75, 70] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-[22rem] md:h-[22rem] border-[1.5px] border-[#00C1A3]/20 rounded-full shadow-[0_0_40px_rgba(0,193,163,0.1)] will-change-transform"
                    />
                    <motion.div
                        animate={{ rotate: -360, rotateX: [65, 60, 65], rotateY: [10, 20, 10] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] border-[1px] border-blue-500/10 rounded-full will-change-transform"
                    />

                    {/* Nodo Central (Glassmorphism) */}
                    <div className="relative group">
                        {/* Brillo pulsante detrás del nodo */}
                        <motion.div
                            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-[#00C1A3] blur-[50px] md:blur-[80px] rounded-full"
                        />
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative z-10 p-8 sm:p-10 md:p-12 bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center cursor-default"
                        >
                            {/* Brillo interno tipo espejo */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                            <MonitorSmartphone className="w-14 h-14 sm:w-16 sm:h-16 md:w-[100px] md:h-[100px] text-[#00C1A3] relative z-10 drop-shadow-[0_0_15px_rgba(0,193,163,0.4)] group-hover:scale-110 transition-transform duration-500" />
                        </motion.div>

                        {/* Indicadores flotantes re-estilizados */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 md:-top-10 md:-right-10 p-3 md:p-4 bg-slate-900/80 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10 shadow-2xl flex items-center gap-2 md:gap-3"
                        >
                            <Database className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 md:-bottom-10 md:-left-10 p-3 md:p-4 bg-slate-900/80 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10 shadow-2xl flex items-center gap-2 md:gap-3"
                        >
                            <CloudSync className="w-4 h-4 md:w-5 md:h-5 text-[#00C1A3]" />
                            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#00C1A3] animate-pulse shadow-[0_0_8px_rgba(0,193,163,0.8)]" />
                        </motion.div>
                    </div>
                </div>

                {/* --- LADO DE INFORMACIÓN --- */}
                <div className="relative order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Etiqueta / Badge Superior unificada */}
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#00C1A3]/10 border border-[#00C1A3]/20 rounded-full mb-6 md:mb-8">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00C1A3] animate-pulse" />
                            <span className="text-[#00C1A3] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px]">
                                Ecosistema Nedimi
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-[1000] mb-6 tracking-tighter leading-[0.9] italic uppercase text-white">
                            Control total <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-emerald-400 to-blue-500 drop-shadow-sm">
                                multi-dispositivo
                            </span>
                        </h2>

                        <p className="text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light">
                            Gestiona tu sucursal desde <span className="text-white font-medium">nedimipos.com/TuTienda</span>.
                            <br className="hidden sm:block" /> Todo sincronizado en la nube con <span className="text-white font-medium underline decoration-[#00C1A3]/50 underline-offset-4">baja latencia</span>.
                        </p>

                        {/* Tarjetas de características (Feature List) */}
                        <div className="grid gap-3 md:gap-4">
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
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: 0.1 + (idx * 0.1), duration: 0.5 }}
                                    whileHover={{ x: 8, backgroundColor: 'rgba(255,255,255,0.03)' }}
                                    className="flex items-center gap-4 md:gap-5 p-4 sm:p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 bg-slate-900/20 transition-all duration-300 group cursor-default"
                                >
                                    <div className="p-3 md:p-4 bg-slate-900 rounded-xl md:rounded-2xl group-hover:scale-110 group-hover:bg-[#00C1A3]/10 transition-all duration-300 shadow-inner border border-white/5 shrink-0 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-sm md:text-base text-white group-hover:text-[#00C1A3] transition-colors italic uppercase tracking-tight mb-0.5">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-light">{item.desc}</p>
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