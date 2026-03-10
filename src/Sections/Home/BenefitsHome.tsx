import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ShoppingCart, Package, BarChart3, Users, CheckCircle2, Zap, ShieldCheck, Lock } from 'lucide-react';
import { MouseEvent } from 'react';

const BenefitCard = ({ item, i }: { item: any, i: number }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut"
            }}
            onMouseMove={handleMouseMove}
            whileHover={{ y: -12 }}
            className={`${item.size} group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0f172a]/40 backdrop-blur-md p-10 flex flex-col justify-between transition-all duration-500 hover:border-[#00C1A3]/40 shadow-2xl`}
        >
            {/* Spotlight dinámico */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            500px circle at ${mouseX}px ${mouseY}px,
                            ${item.colorSpotlight},
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />

            <div className="relative z-10">
                {/* Icono con animación de flotación infinita */}
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    className="w-16 h-16 rounded-2xl bg-slate-800/80 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-8 shadow-inner"
                >
                    {item.icon}
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-[#00C1A3] transition-colors duration-300">
                    {item.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-[320px]">
                    {item.desc}
                </p>
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00C1A3]/60">
                    <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <CheckCircle2 className="w-4 h-4" />
                    </motion.div>
                    <span>Sistema Activo</span>
                </div>
            </div>
        </motion.div>
    );
};

export const BenefitsHome = () => {
    const benefits = [
        {
            title: "Ventas en segundos",
            desc: "Interfaz diseñada para minimizar clics y acelerar el cobro en horas pico.",
            icon: <ShoppingCart className="w-8 h-8 text-[#00C1A3]" />,
            size: "lg:col-span-2",
            gradient: "from-[#00C1A3]/20 to-transparent",
            colorSpotlight: "rgba(0, 193, 163, 0.15)"
        },
        {
            title: "Stock en Tiempo Real",
            desc: "Sincronización instantánea de inventario en todos tus dispositivos.",
            icon: <Package className="w-8 h-8 text-blue-400" />,
            size: "lg:col-span-1",
            gradient: "from-blue-500/20 to-transparent",
            colorSpotlight: "rgba(59, 130, 246, 0.15)"
        },
        {
            title: "Reportes Claros",
            desc: "Visualiza tus ingresos y egresos sin complicaciones ni datos ocultos.",
            icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
            size: "lg:col-span-1",
            gradient: "from-purple-500/20 to-transparent",
            colorSpotlight: "rgba(168, 85, 247, 0.15)"
        },
        {
            title: "Acceso Seguro",
            desc: "Protección de datos con roles de usuario configurables para tu personal.",
            icon: <Users className="w-8 h-8 text-emerald-400" />,
            size: "lg:col-span-2",
            gradient: "from-emerald-500/20 to-transparent",
            colorSpotlight: "rgba(52, 211, 153, 0.15)"
        }
    ];

    const stats = [
        { label: "Sincronización", value: "Cloud", icon: <Zap className="w-4 h-4 text-[#00C1A3]" /> },
        { label: "Disponibilidad", value: "99.9%", icon: <ShieldCheck className="w-4 h-4 text-[#00C1A3]" /> },
        { label: "Seguridad", value: "SSL", icon: <Lock className="w-4 h-4 text-[#00C1A3]" /> }
    ];

    return (
        /* Se agregó el ID "benefits" y el scroll-mt-20 */
        <section id="benefits" className="py-32 bg-transparent relative overflow-hidden scroll-mt-20">
            {/* Luces de fondo animadas */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00C1A3]/5 blur-[120px] rounded-full -z-10"
            />

            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-24 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-center lg:text-left"
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                            Optimiza tu control <br />
                            <span className="relative inline-block mt-2">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#00C1A3] via-emerald-400 to-cyan-400">
                                    sin complicaciones
                                </span>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
                                    className="absolute h-2 bottom-4 left-0 w-full bg-[#00C1A3]/20 rounded-full -z-10 origin-left"
                                />
                            </span>
                        </h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="text-slate-400 text-xl md:text-2xl max-w-2xl leading-relaxed mx-auto lg:mx-0"
                        >
                            AryPOS centraliza tu operación para que tomes <span className="text-white font-semibold">decisiones basadas en datos reales</span>.
                        </motion.p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[350px]">
                    {benefits.map((item, i) => (
                        <BenefitCard key={i} item={item} i={i} />
                    ))}
                </div>

                {/* Footer de sección con estadísticas animadas */}
                <div className="mt-28 pt-16 border-t border-white/5 flex flex-wrap justify-center lg:justify-start gap-16 items-center">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + (idx * 0.1), duration: 0.5 }}
                            className="flex flex-col items-center lg:items-start group"
                        >
                            <div className="flex items-center gap-2 text-[#00C1A3] mb-1">
                                <motion.div
                                    animate={{ rotate: [0, 15, -15, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    {stat.icon}
                                </motion.div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">{stat.label}</span>
                            </div>
                            <span className="text-4xl font-bold text-white tracking-tighter group-hover:text-[#00C1A3] transition-colors duration-500">
                                {stat.value}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};