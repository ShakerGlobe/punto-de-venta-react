import { motion } from 'framer-motion';
import { CloudSync, ShieldCheck, Zap, Database, Globe, MonitorSmartphone } from 'lucide-react';
import React from 'react';

export const DeviceShowcaseHome = () => {
    return (
        <section id="showcase" className="py-24 md:py-32 bg-white text-slate-900 overflow-hidden relative scroll-mt-20">
            
            {/* --- DESTELLOS AZULES (Identidad Nedimi) --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 -right-24 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-blue-600/10 blur-[130px] rounded-full" />
                <div className="absolute bottom-0 -left-24 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-400/10 blur-[130px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">

                {/* --- LADO GRÁFICO: EL NÚCLEO CONECTADO --- */}
                <div className="relative flex justify-center items-center h-[350px] sm:h-[450px] md:h-[550px] order-2 lg:order-1 w-full max-w-md mx-auto lg:max-w-none">

                    {/* Partículas de Sincronización (Ahora Azules) */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -120],
                                opacity: [0, 0.6, 0],
                                scale: [0, 1, 0]
                            }}
                            transition={{
                                duration: 4 + (i % 2),
                                repeat: Infinity,
                                delay: i * 0.6,
                                ease: "easeInOut"
                            }}
                            className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_#3b82f6]"
                            style={{ left: `${35 + (i * 8)}%`, top: '65%' }}
                        />
                    ))}

                    {/* Órbitas Sutiles */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[24rem] md:h-[24rem] border border-slate-200 rounded-full"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                        className="absolute w-72 h-72 sm:w-[22rem] sm:h-[22rem] md:w-[28rem] md:h-[28rem] border border-blue-100 rounded-full"
                    />

                    {/* Nodo Central (Modo Oscuro para Contraste) */}
                    <div className="relative group">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-blue-600 blur-[60px] rounded-full"
                        />
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative z-10 p-10 md:p-14 bg-slate-950 border-[10px] border-white rounded-[3rem] md:rounded-[4rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] flex items-center justify-center"
                        >
                            <MonitorSmartphone className="w-16 h-16 md:w-24 md:h-24 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                        </motion.div>

                        {/* Indicadores Flotantes (Multi-dispositivo) */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 p-4 bg-white shadow-xl rounded-2xl border border-slate-100"
                        >
                            <Database className="w-6 h-6 text-blue-600" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-4 -left-4 p-4 bg-white shadow-xl rounded-2xl border border-slate-100"
                        >
                            <CloudSync className="w-6 h-6 text-blue-400" />
                        </motion.div>
                    </div>
                </div>

                {/* --- LADO DE INFORMACIÓN HUMANA --- */}
                <div className="relative order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-100 rounded-full mb-8 shadow-sm">
                            <Zap size={14} className="text-blue-600 fill-blue-600" />
                            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">
                                Ecosistema Nedimi
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-[1000] mb-8 tracking-tighter leading-[0.85] italic uppercase text-slate-950">
                            Control total <br />
                            <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-8">
                                multi-dispositivo
                            </span>
                        </h2>

                        <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-12 max-w-xl font-medium">
                            Tu negocio no tiene límites. Entra a tu tienda desde <span className="text-slate-950 font-bold">cualquier celular o computadora</span>. Todo se sincroniza solito en la nube.
                        </p>

                        {/* Feature List (Estilo Botonazo) */}
                        <div className="grid gap-4">
                            {[
                                {
                                    icon: <Globe />,
                                    title: "Vende desde donde sea",
                                    desc: "Usa tu navegador favorito. No importa si es Android, iPhone o PC."
                                },
                                {
                                    icon: <Zap />,
                                    title: "Sincronización al instante",
                                    desc: "Lo que cobras en el mostrador se ve reflejado en tu cel al segundo."
                                },
                                {
                                    icon: <ShieldCheck />,
                                    title: "Cero preocupaciones",
                                    desc: "Tu información tiene respaldo diario. Tus cuentas siempre seguras."
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-5 p-6 rounded-[2.5rem] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-xl shadow-slate-200/50 transition-all group cursor-default"
                                >
                                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        {React.cloneElement(item.icon, { size: 24 })}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-black text-lg text-slate-900 italic uppercase tracking-tight mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-500 text-sm font-medium leading-snug">{item.desc}</p>
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