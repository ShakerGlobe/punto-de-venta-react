import React, { useState } from "react"; // Añadimos useState
import { motion, AnimatePresence } from "framer-motion";
import {
    Home as HomeIcon, ShoppingCart, Package, Users,
    BarChart3, ChevronRight, LogOut, Cpu, MousePointer2, ChevronDown
} from "lucide-react";

export const DemoHero = ({ children, activePage, setActivePage, isDarkMode }) => {
    // ESTADOS PARA DESPLEGAR SUBMENÚS
    const [openMenus, setOpenMenus] = useState({
        catalogo: false,
        reportes: false
    });

    const toggleSubMenu = (menu) => {
        setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
    };

    // Estructura de menú con subsecciones
    const menuItems = [
        { id: 'inicio', name: 'Inicio', icon: <HomeIcon size={18} /> },
        { id: 'ventas', name: 'Ventas', icon: <Package size={18} /> },
        { id: 'usuarios', name: 'Usuarios', icon: <Users size={18} /> },
        {
            id: 'catalogo',
            name: 'Catálogo',
            icon: <ShoppingCart size={18} />,
            hasSub: true,
            subItems: [
                { id: 'catalogo_productos', name: 'Productos' },
                { id: 'catalogo_proveedores', name: 'Proveedores' },
                { id: 'catalogo_categorias', name: 'Categorías' }
            ]
        },
        {
            id: 'reportes',
            name: 'Reportes',
            icon: <BarChart3 size={18} />,
            hasSub: true,
            subItems: [
                { id: 'reportes_dia', name: 'Del Día' },
                { id: 'reportes_semanal', name: 'Semanal' },
                { id: 'reportes_mensual', name: 'Mensual' },
                { id: 'reportes_general', name: 'General' }
            ]
        },
    ];

    const containerStyle = isDarkMode
        ? "bg-[#050335]/40 border-white/10 shadow-[0_0_50px_-12px_rgba(0,193,163,0.15)]"
        : "bg-white border-slate-200 shadow-2xl";

    const sidebarStyle = isDarkMode
        ? "bg-[#050335]/60 border-white/5"
        : "bg-slate-50 border-slate-200";

    return (
        <section className="relative min-h-screen bg-[#020617] overflow-hidden flex flex-col items-center">
            {/* ... Fondo Vivo (Se mantiene igual) ... */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-[#00C1A3]/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-24 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* BLOQUE 1: HERO (Se mantiene igual) */}
            <motion.div className="min-h-[100vh] w-full flex flex-col items-center justify-center text-center relative z-10 px-4">
                {/* ... Contenido del Hero ... */}
                <motion.div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-xl">
                    <div className="w-6 h-6 rounded-full bg-[#00C1A3] flex items-center justify-center">
                        <Cpu size={12} className="text-[#050335]" />
                    </div>
                    <span className="text-[#00C1A3] text-[10px] font-black tracking-[0.3em] uppercase">Powered by Nedimi Engine</span>
                </motion.div>
                <motion.h2 className="text-7xl md:text-9xl font-black italic text-white uppercase tracking-tighter leading-[0.85]">
                    Demo <br /> <span className="text-[#00C1A3]">Interactiva</span>
                </motion.h2>
                <motion.p className="text-slate-500 text-sm md:text-base mt-10 tracking-[0.4em] uppercase font-bold max-w-2xl">
                    Toma el control total de tu negocio
                </motion.p>
            </motion.div>

            {/* BLOQUE 2: FRAME DEL SOFTWARE */}
            <div id="software-demo" className="container mx-auto px-4 pb-40 max-w-[95%] lg:max-w-[1440px] relative z-10 pt-20">
                <motion.div className={`relative flex flex-col md:flex-row h-[850px] backdrop-blur-3xl border rounded-[3.5rem] overflow-hidden ${containerStyle}`}>

                    {/* SIDEBAR ACTUALIZADO */}
                    <aside className={`w-full md:w-[320px] border-r p-8 flex flex-col justify-between transition-all ${sidebarStyle}`}>
                        <div className="overflow-y-auto custom-scrollbar pr-2">
                            <div className="flex items-center gap-4 text-[#00C1A3] font-black italic text-3xl mb-12 tracking-tighter px-2">
                                <div className="w-10 h-10 rounded-xl bg-[#00C1A3] flex items-center justify-center text-[#050335] not-italic shadow-[0_0_15px_rgba(0,193,163,0.3)]">N</div>
                                <span className="uppercase leading-none text-2xl">NEDIMI<br /><span className="text-[9px] tracking-[0.5em] text-white/40 not-italic">SOFTWARE</span></span>
                            </div>

                            <nav className="space-y-2">
                                {menuItems.map(item => (
                                    <div key={item.id} className="flex flex-col">
                                        <button
                                            onClick={() => item.hasSub ? toggleSubMenu(item.id) : setActivePage(item.id)}
                                            className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl text-sm transition-all duration-300 ${activePage.startsWith(item.id)
                                                ? 'bg-[#00C1A3] text-[#050335] font-black'
                                                : 'text-slate-400 hover:bg-white/5'
                                                }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                {item.icon}
                                                <span className="tracking-wide">{item.name}</span>
                                            </div>
                                            {item.hasSub ? (
                                                <ChevronDown size={16} className={`transition-transform duration-300 ${openMenus[item.id] ? 'rotate-180' : ''}`} />
                                            ) : (
                                                activePage === item.id && <ChevronRight size={14} strokeWidth={4} />
                                            )}
                                        </button>

                                        {/* RENDERIZADO DE SUB-ITEMS */}
                                        <AnimatePresence>
                                            {item.hasSub && openMenus[item.id] && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden ml-11 flex flex-col border-l border-white/10 mt-1"
                                                >
                                                    {item.subItems.map(sub => (
                                                        <button
                                                            key={sub.id}
                                                            onClick={() => setActivePage(sub.id)}
                                                            className={`py-3 px-4 text-xs text-left transition-colors hover:text-[#00C1A3] ${activePage === sub.id ? 'text-[#00C1A3] font-bold' : 'text-slate-500'
                                                                }`}
                                                        >
                                                            • {sub.name}
                                                        </button>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </nav>
                        </div>

                        <button className="w-full flex items-center gap-4 px-6 py-4 text-red-500/70 font-bold text-[10px] uppercase tracking-widest hover:text-red-500 hover:bg-red-500/10 rounded-2xl transition-all mt-6">
                            <LogOut size={16} /> Finalizar Sesión
                        </button>
                    </aside>

                    {/* CONTENIDO PRINCIPAL (Se mantiene igual) */}
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