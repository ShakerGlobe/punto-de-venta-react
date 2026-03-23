import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home as HomeIcon, ShoppingCart, Package, Users, BarChart3, ChevronRight, LogOut, Cpu, MousePointer2 } from "lucide-react";

export const DemoHero = ({ children, activePage, setActivePage, isDarkMode }) => {

    const menuItems = [
        { id: 'inicio', name: 'Inicio', icon: <HomeIcon size={18} /> },
        { id: 'ventas', name: 'Ventas', icon: <Package size={18} /> },
        { id: 'usuarios', name: 'Usuarios', icon: <Users size={18} /> },
        { id: 'catalogo', name: 'Catálogo', icon: <ShoppingCart size={18} /> },
        { id: 'reportes', name: 'Reportes', icon: <BarChart3 size={18} /> },
    ];

    const containerStyle = isDarkMode
        ? "bg-[#050335]/40 border-white/10 shadow-[0_0_50px_-12px_rgba(0,193,163,0.15)]"
        : "bg-white border-slate-200 shadow-2xl";

    const sidebarStyle = isDarkMode
        ? "bg-[#050335]/60 border-white/5"
        : "bg-slate-50 border-slate-200";

    return (
        <section className="relative min-h-screen bg-[#020617] overflow-hidden flex flex-col items-center">

            {/* Fondo Vivo (Luces de ambiente) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-[#00C1A3]/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-24 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* BLOQUE 1: HERO PANTALLA COMPLETA */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-[100vh] w-full flex flex-col items-center justify-center text-center relative z-10 px-4"
            >
                {/* Nuevo Logo/Badge Superior: "Nedimi Core" */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-xl"
                >
                    <div className="w-6 h-6 rounded-full bg-[#00C1A3] flex items-center justify-center shadow-[0_0_15px_rgba(0,193,163,0.5)]">
                        <Cpu size={12} className="text-[#050335]" />
                    </div>
                    <span className="text-[#00C1A3] text-[10px] font-black tracking-[0.3em] uppercase">Powered by Nedimi Engine</span>
                </motion.div>

                <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-7xl md:text-9xl font-black italic text-white uppercase tracking-tighter leading-[0.85]"
                >
                    Demo <br />
                    <span className="text-[#00C1A3] drop-shadow-[0_0_30px_rgba(0,193,163,0.5)]">Interactiva</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-slate-500 text-sm md:text-base mt-10 tracking-[0.4em] uppercase font-bold max-w-2xl"
                >
                    Toma el control total de tu negocio
                </motion.p>

                {/* Indicador de Scroll Refinado para que no choque */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="absolute bottom-12 flex flex-col items-center gap-3 text-white/20"
                >
                    <MousePointer2 size={18} className="rotate-180" />
                    <div className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent" />
                </motion.div>
            </motion.div>

            {/* BLOQUE 2: FRAME DEL SOFTWARE (Sección de la Demo) */}
            <div id="software-demo" className="container mx-auto px-4 pb-40 max-w-[95%] lg:max-w-[1440px] relative z-10 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative flex flex-col md:flex-row h-[850px] backdrop-blur-3xl border rounded-[3.5rem] overflow-hidden transition-all duration-700 ${containerStyle}`}
                >

                    {/* SIDEBAR */}
                    <aside className={`w-full md:w-[300px] border-r p-10 flex flex-col justify-between transition-colors duration-500 ${sidebarStyle}`}>
                        <div>
                            <div className="flex items-center gap-4 text-[#00C1A3] font-black italic text-3xl mb-16 tracking-tighter group cursor-pointer">
                                <motion.div
                                    whileHover={{ rotate: 15, scale: 1.15 }}
                                    className="w-12 h-12 rounded-2xl bg-[#00C1A3] flex items-center justify-center text-[#050335] not-italic shadow-[0_0_20px_rgba(0,193,163,0.4)]"
                                >
                                    N
                                </motion.div>
                                <span className="group-hover:text-white transition-all uppercase leading-none">
                                    NEDIMI<br /><span className="text-[10px] tracking-[0.5em] text-white/40 not-italic">SOFTWARE</span>
                                </span>
                            </div>

                            <nav className="space-y-3">
                                {menuItems.map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActivePage(item.id)}
                                        className={`w-full flex items-center justify-between px-6 py-5 rounded-[1.8rem] text-sm transition-all duration-300 group ${activePage === item.id
                                            ? 'bg-[#00C1A3] text-[#050335] font-black shadow-xl shadow-[#00C1A3]/20'
                                            : isDarkMode ? 'text-slate-400 hover:bg-white/5' : 'text-slate-500 hover:bg-black/5'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            {item.icon}
                                            {item.name}
                                        </div>
                                        {activePage === item.id && <ChevronRight size={16} strokeWidth={4} />}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <button className="w-full flex items-center gap-4 px-6 py-4 text-red-500/70 font-bold text-xs uppercase tracking-widest hover:text-red-500 hover:bg-red-500/10 rounded-2xl transition-all border border-transparent">
                            <LogOut size={18} /> Finalizar Sesión
                        </button>
                    </aside>

                    {/* CONTENIDO PRINCIPAL */}
                    <main className="flex-1 overflow-y-auto p-8 md:p-14 custom-scrollbar">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePage + isDarkMode}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                                className="h-full"
                            >
                                {children}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </motion.div>
            </div>
        </section>
    );
};