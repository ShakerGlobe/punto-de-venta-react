import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Home as HomeIcon, ShoppingCart, Package, Users,
    BarChart3, ChevronRight, LogOut, Sparkles, ChevronDown
} from "lucide-react";

export const DemoHero = ({ children, activePage, setActivePage }) => {
    const [openMenus, setOpenMenus] = useState({ catalogo: false, reportes: false });
    const toggleSubMenu = (menu) => setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));

    const menuItems = [
        { id: 'inicio', name: 'Inicio', icon: <HomeIcon size={18} /> },
        { id: 'ventas', name: 'Ventas', icon: <Package size={18} /> },
        { id: 'usuarios', name: 'Usuarios', icon: <Users size={18} /> },
        {
            id: 'catalogo', name: 'Catálogo', icon: <ShoppingCart size={18} />, hasSub: true,
            subItems: [
                { id: 'catalogo_productos', name: 'Productos' },
                { id: 'catalogo_proveedores', name: 'Proveedores' },
                { id: 'catalogo_categorias', name: 'Categorías' }
            ]
        },
        {
            id: 'reportes', name: 'Reportes', icon: <BarChart3 size={18} />, hasSub: true,
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
            
            {/* FONDO VERDE NEDIMI */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:60px_60px] opacity-40" />
                <div className="absolute top-24 right-1/4 w-[600px] h-[600px] bg-[#00C1A3]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-24 left-1/4 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[120px]" />
            </div>

            {/* BLOQUE 1: INTRO (Título e Imagen) */}
            <div className="max-w-7xl mx-auto w-full relative z-10 px-6 pt-32">
                <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-16 lg:gap-12">
                    <div className="w-full lg:w-3/5 text-center lg:text-left">
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-50 border border-emerald-100 rounded-full mb-8 shadow-sm">
                            <Sparkles size={14} className="text-[#00C1A3] fill-[#00C1A3]" />
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#00C1A3]">Prueba el futuro de tu tienda</span>
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl xl:text-8xl font-[1000] italic uppercase text-slate-950 tracking-tighter leading-[0.85] mb-8">
                            DEMO <br /> <span className="text-[#00C1A3] underline decoration-emerald-100 decoration-8 underline-offset-8">INTERACTIVA</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-500 text-lg md:text-xl font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Explora cómo Nedimi POS toma el control de tu negocio de forma fácil y rápida.
                        </motion.p>
                    </div>
                    <div className="w-full lg:w-2/5 flex justify-center items-center relative">
                        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="relative w-full max-w-[450px] aspect-square flex items-center justify-center animate-float">
                            <img src="/images/nedimipos.webp" alt="Preview" className="w-full h-full object-contain drop-shadow-[0_35px_60px_rgba(0,193,163,0.2)] rounded-[3rem]" />
                            <div className="absolute inset-0 bg-[#00C1A3]/10 blur-3xl -z-10 rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ESPACIADOR ENTRE INTRO Y SOFTWARE */}
            {/* AQUÍ AJUSTAS LA DISTANCIA DEL CUADRO NEGRO RESPECTO AL TÍTULO */}
            <div className="w-full mt-40 md:mt-64 px-4 relative z-10 pb-40">
                
                {/* BLOQUE 2: EL FRAME DEL SOFTWARE */}
                <div className="container mx-auto max-w-[95%] lg:max-w-[1440px]">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative flex flex-col md:flex-row h-[850px] bg-slate-950 border-[12px] border-slate-900 rounded-[3.5rem] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.5)]">
                        
                        {/* SIDEBAR */}
                        <aside className="w-full md:w-[320px] bg-slate-900 border-r border-white/5 p-8 flex flex-col justify-between">
                            <div className="overflow-y-auto custom-scrollbar pr-2">
                                <div className="flex items-center gap-4 text-white font-[1000] italic text-3xl mb-12 px-2">
                                    <div className="w-10 h-10 rounded-xl bg-[#00C1A3] flex items-center justify-center text-slate-950 shadow-[0_0_20px_rgba(0,193,163,0.4)]">N</div>
                                    <span className="uppercase leading-none text-2xl">NEDIMI<br /><span className="text-[9px] tracking-[0.5em] text-[#00C1A3]">SOFTWARE</span></span>
                                </div>
                                <nav className="space-y-2">
                                    {menuItems.map(item => (
                                        <div key={item.id} className="flex flex-col">
                                            <button onClick={() => item.hasSub ? toggleSubMenu(item.id) : setActivePage(item.id)} className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl text-sm transition-all ${activePage.startsWith(item.id) ? 'bg-[#00C1A3] text-slate-950 font-black shadow-lg shadow-[#00C1A3]/20' : 'text-slate-400 hover:bg-white/5'}`}>
                                                <div className="flex items-center gap-4">
                                                    {React.cloneElement(item.icon, { className: activePage.startsWith(item.id) ? "text-slate-950" : "text-[#00C1A3]/60" })}
                                                    <span className="tracking-wide uppercase italic text-[13px]">{item.name}</span>
                                                </div>
                                                {item.hasSub ? <ChevronDown size={16} className={`${openMenus[item.id] ? 'rotate-180' : ''} transition-transform`} /> : (activePage === item.id && <ChevronRight size={14} strokeWidth={4} />)}
                                            </button>
                                            <AnimatePresence>
                                                {item.hasSub && openMenus[item.id] && (
                                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden ml-11 flex flex-col border-l border-[#00C1A3]/20 mt-1">
                                                        {item.subItems.map(sub => (
                                                            <button key={sub.id} onClick={() => setActivePage(sub.id)} className={`py-3 px-4 text-[11px] font-bold uppercase text-left transition-colors hover:text-[#00C1A3] ${activePage === sub.id ? 'text-[#00C1A3]' : 'text-slate-500'}`}>• {sub.name}</button>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </nav>
                            </div>
                            <button className="w-full flex items-center gap-4 px-6 py-4 text-red-400/70 font-black text-[10px] uppercase hover:text-red-400 hover:bg-red-400/10 rounded-2xl mt-6">
                                <LogOut size={16} /> Finalizar Sesión
                            </button>
                        </aside>

                        {/* CONTENIDO PRINCIPAL (DONDE VAN TUS OTROS ARCHIVOS) */}
                        {/* INDICACIÓN: He cambiado 'p-8 md:p-14' por 'pt-24 px-8 md:pt-32 md:px-14' */}
                        {/* Esto hace que ViewInicio, ViewVentas, etc., bajen dentro del cuadro blanco */}
                        <main className="flex-1 overflow-y-auto bg-white pt-24 px-8 md:pt-32 md:px-14 custom-scrollbar">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activePage}
                                    initial={{ opacity: 0, y: 20 }} // Más empuje inicial
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="h-full"
                                >
                                    {children} {/* <--- AQUÍ RENDERIZAN TUS OTROS ARCHIVOS */}
                                </motion.div>
                            </AnimatePresence>
                        </main>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};