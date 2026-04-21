import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Home as HomeIcon, ShoppingCart, Package, Users,
    BarChart3, ChevronRight, LogOut, Sparkles, ChevronDown
} from "lucide-react";

export const DemoHero = ({ children, activePage, setActivePage }) => {
    // ESTADOS PARA DESPLEGAR SUBMENÚS
    const [openMenus, setOpenMenus] = useState({
        catalogo: false,
        reportes: false
    });

    const toggleSubMenu = (menu) => {
        setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
    };

    // Estructura de menú simplificada
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

    return (
        <section className="relative min-h-screen bg-white overflow-hidden flex flex-col items-center">
            
            {/* 1. FONDO LIMPIO CON DESTELLOS AZULES */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:60px_60px] opacity-40" />
                <div className="absolute top-24 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-24 right-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px]" />
            </div>

            {/* BLOQUE 1: HERO (Dos columnas para texto e imagen) */}
            <div className="max-w-7xl mx-auto w-full relative z-10 px-6 pt-32 pb-20">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    
                    {/* COLUMNA IZQUIERDA: TEXTO */}
                    <div className="w-full lg:w-3/5 text-center lg:text-left">
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-100 rounded-full mb-8 shadow-sm"
                        >
                            <Sparkles size={14} className="text-blue-600 fill-blue-600" />
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-blue-600">
                                Prueba el futuro de tu tienda
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl xl:text-8xl font-[1000] italic uppercase text-slate-950 tracking-tighter leading-[0.85] mb-8"
                        >
                            DEMO <br />
                            <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-8">
                                INTERACTIVA
                            </span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-500 text-lg md:text-xl font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            No te lo imagines, úsalo. Explora cómo Nedimi POS toma el control de tu negocio de forma fácil, rápida y sin complicaciones.
                        </motion.p>
                    </div>

                    {/* COLUMNA DERECHA: ESPACIO PARA TU IMAGEN */}
                    <div className="w-full lg:w-2/5 flex justify-center items-center relative">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="relative w-full max-w-[450px] aspect-square flex items-center justify-center"
                        >
                            <img 
                                src="/images/punto-de-venta-1.jpeg" 
                                alt="Demo Visual" 
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                            
                            {/* Destello decorativo detrás de la imagen */}
                            <div className="absolute inset-0 bg-blue-600/5 blur-3xl -z-10 rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* BLOQUE 2: FRAME DEL SOFTWARE (MÁS OSCURO PARA CONTRASTE) */}
            <div id="software-demo" className="container mx-auto px-4 pb-40 max-w-[95%] lg:max-w-[1440px] relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative flex flex-col md:flex-row h-[850px] bg-slate-950 border-[12px] border-slate-900 rounded-[3.5rem] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.5)]"
                >
                    {/* SIDEBAR OSCURO PREMIUM */}
                    <aside className="w-full md:w-[320px] bg-slate-900 border-r border-white/5 p-8 flex flex-col justify-between transition-all">
                        <div className="overflow-y-auto custom-scrollbar pr-2">
                            {/* Logo Nedimi en Sidebar */}
                            <div className="flex items-center gap-4 text-white font-[1000] italic text-3xl mb-12 tracking-tighter px-2">
                                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white not-italic shadow-[0_0_20px_rgba(37,99,235,0.4)]">N</div>
                                <span className="uppercase leading-none text-2xl">NEDIMI<br /><span className="text-[9px] tracking-[0.5em] text-blue-400 not-italic">SOFTWARE</span></span>
                            </div>

                            <nav className="space-y-2">
                                {menuItems.map(item => (
                                    <div key={item.id} className="flex flex-col">
                                        <button
                                            onClick={() => item.hasSub ? toggleSubMenu(item.id) : setActivePage(item.id)}
                                            className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl text-sm transition-all duration-300 ${activePage.startsWith(item.id)
                                                ? 'bg-blue-600 text-white font-black shadow-lg shadow-blue-600/20'
                                                : 'text-slate-400 hover:bg-white/5'
                                                }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                {React.cloneElement(item.icon, { className: activePage.startsWith(item.id) ? "text-white" : "text-blue-500/60" })}
                                                <span className="tracking-wide uppercase italic text-[13px]">{item.name}</span>
                                            </div>
                                            {item.hasSub ? (
                                                <ChevronDown size={16} className={`transition-transform duration-300 ${openMenus[item.id] ? 'rotate-180' : ''}`} />
                                            ) : (
                                                activePage === item.id && <ChevronRight size={14} strokeWidth={4} />
                                            )}
                                        </button>

                                        {/* SUB-ITEMS */}
                                        <AnimatePresence>
                                            {item.hasSub && openMenus[item.id] && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden ml-11 flex flex-col border-l border-white/5 mt-1"
                                                >
                                                    {item.subItems.map(sub => (
                                                        <button
                                                            key={sub.id}
                                                            onClick={() => setActivePage(sub.id)}
                                                            className={`py-3 px-4 text-[11px] font-bold uppercase tracking-widest text-left transition-colors hover:text-blue-400 ${activePage === sub.id ? 'text-blue-400' : 'text-slate-500'
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

                        <button className="w-full flex items-center gap-4 px-6 py-4 text-red-400/70 font-black text-[10px] uppercase tracking-widest hover:text-red-400 hover:bg-red-400/10 rounded-2xl transition-all mt-6">
                            <LogOut size={16} /> Finalizar Sesión
                        </button>
                    </aside>

                    {/* CONTENIDO PRINCIPAL (Lienzo blanco para la demo) */}
                    <main className="flex-1 overflow-y-auto bg-white p-8 md:p-14 custom-scrollbar">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePage}
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