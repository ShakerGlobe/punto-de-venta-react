import React, { useState, useMemo, useEffect } from "react";
import {
    Package, Truck, Plus, Search, Edit, Trash2,
    Layers, ChevronLeft, ChevronRight, Users,
    Sun, Moon, User, X, Scan, CheckCircle2
} from "lucide-react";

export const ViewCatalogo = ({ userRol = "Administrador", seccion = "catalogo_productos" }) => {
    // --- ESTADOS PRINCIPALES ---
    const [activeTab, setActiveTab] = useState<'productos' | 'proveedores' | 'categorias'>('productos');
    const [busqueda, setBusqueda] = useState("");
    const [paginaActual, setPaginaActual] = useState(1);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const elementosPorPagina = 3;

    // --- ESTADOS DEL MODAL ---
    const [showModalNuevo, setShowModalNuevo] = useState(false);
    const [showModalExito, setShowModalExito] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const [nuevoProd, setNuevoProd] = useState({
        nombre: "", stock: "", unidad: "PZ", codigo: "", cat: "", prov: ""
    });

    // --- SINCRONIZACIÓN DE SECCIÓN ---
    useEffect(() => {
        const s = seccion.toLowerCase();
        if (s.includes('prod')) setActiveTab('productos');
        else if (s.includes('prov')) setActiveTab('proveedores');
        else if (s.includes('cat')) setActiveTab('categorias');
        setPaginaActual(1);
    }, [seccion]);

    const getLabel = () => {
        if (activeTab === 'productos') return "Producto";
        if (activeTab === 'proveedores') return "Proveedor";
        if (activeTab === 'categorias') return "Categoría";
        return "";
    };

    // --- DATOS ---
    const [productos] = useState([
        { id: 1, folio: "#1", nombre: "Papas Chips", precio: 25.00, stock: 10, codigo: "750101", cat: "Papas", prov: "Sabritas", unidad: "PZ" },
        { id: 2, folio: "#2", nombre: "Jamón", precio: 120.00, stock: 0.5, codigo: "750102", cat: "Embutidos", prov: "FUD", unidad: "KG" },
        { id: 3, folio: "#3", nombre: "Coca Cola 600ml", precio: 18.00, stock: 24, codigo: "750103", cat: "Bebidas", prov: "Coca Cola", unidad: "PZ" },
        { id: 4, folio: "#4", nombre: "Leche Entera 1L", precio: 28.50, stock: 12, codigo: "750104", cat: "Lácteos", prov: "Alpura", unidad: "PZ" },
        { id: 5, folio: "#5", nombre: "Aguacate Hass", precio: 85.00, stock: 5, codigo: "750105", cat: "Verduras", prov: "Local", unidad: "KG" },
        { id: 6, folio: "#6", nombre: "Detergente en Polvo 1kg", precio: 45.00, stock: 15, codigo: "750106", cat: "Limpieza", prov: "P&G", unidad: "PZ" },
    ]);

    const [proveedores] = useState([
        { id: 1, folio: "#P1", nombre: "Sabritas", contacto: "5555005511" },
        { id: 2, folio: "#P2", nombre: "FUD", contacto: "5511223344" },
        { id: 3, folio: "#P3", nombre: "Coca Cola", contacto: "5588990011" },
        { id: 4, folio: "#P4", nombre: "Alpura", contacto: "5544332211" },
        { id: 5, folio: "#P5", nombre: "Local", contacto: "Varios" },
        { id: 6, folio: "#P6", nombre: "P&G", contacto: "5566778899" }
    ]);

    const [categorias] = useState([
        { id: 1, folio: "#C1", nombre: "Papas" },
        { id: 2, folio: "#C2", nombre: "Embutidos" },
        { id: 3, folio: "#C3", nombre: "Bebidas" },
        { id: 4, folio: "#C4", nombre: "Lácteos" },
        { id: 5, folio: "#C5", nombre: "Verduras" },
        { id: 6, folio: "#C6", nombre: "Limpieza" }
    ]);

    // --- LÓGICA DE FILTRADO ---
    const { datosPaginados, totalPaginas, hayResultados } = useMemo(() => {
        const term = busqueda.toLowerCase().trim();
        let filtrados = [];

        if (activeTab === 'productos') {
            filtrados = productos.filter(p =>
                p.nombre.toLowerCase().includes(term) ||
                p.codigo.includes(term) ||
                p.cat.toLowerCase().includes(term)
            );
        } else if (activeTab === 'proveedores') {
            filtrados = proveedores.filter(p =>
                p.nombre.toLowerCase().includes(term) ||
                p.contacto.includes(term)
            );
        } else {
            filtrados = categorias.filter(c =>
                c.nombre.toLowerCase().includes(term)
            );
        }

        const total = Math.ceil(filtrados.length / elementosPorPagina);
        const inicio = (paginaActual - 1) * elementosPorPagina;

        return {
            datosPaginados: filtrados.slice(inicio, inicio + elementosPorPagina),
            totalPaginas: total > 0 ? total : 1,
            hayResultados: filtrados.length > 0
        };
    }, [busqueda, activeTab, productos, proveedores, categorias, paginaActual]);

    const handleGuardar = () => {
        setShowModalNuevo(false);
        setShowModalExito(true);
    };

    const TabIcon = activeTab === 'productos' ? Package : activeTab === 'proveedores' ? Truck : Layers;

    return (
        <div className={`min-h-screen flex flex-col p-6 font-sans transition-colors duration-500 ${isDarkMode ? 'bg-[#030617] text-slate-200' : 'bg-slate-50 text-slate-800'}`}>

            {/* HEADER PASTILLA */}
            <div className={`flex justify-between items-center mb-6 px-8 py-4 rounded-[2rem] border backdrop-blur-md transition-all duration-500 ${isDarkMode
                ? 'bg-[#0a0f1d]/60 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
                : 'bg-white/70 border-slate-200 shadow-xl shadow-slate-200/50'
                }`}>
                <div className="flex flex-col">
                    <span className={`text-[10px] uppercase tracking-[0.2em] font-black mb-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Módulo de Catálogo</span>
                    <h1 className="text-[#00C1A3] text-2xl font-black tracking-tight flex items-center gap-3 capitalize">
                        <TabIcon size={24} /> {activeTab}
                    </h1>
                </div>

                <div className="flex items-center gap-6">
                    <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2.5 rounded-2xl transition-all hover:scale-110 active:scale-95 ${isDarkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-100 hover:bg-slate-200'}`}>
                        {isDarkMode ? <Sun size={22} className="text-yellow-400 fill-yellow-400/20" /> : <Moon size={22} className="text-indigo-600 fill-indigo-600/10" />}
                    </button>
                    <div className={`flex items-center gap-4 pl-6 border-l ${isDarkMode ? 'border-white/10' : 'border-slate-200'}`}>
                        <div className="flex flex-col items-end">
                            <span className={`text-[10px] uppercase font-black ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Sesión activa</span>
                            <span className={`text-sm font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>Admin Nedimi</span>
                        </div>
                        <div className="w-10 h-10 rounded-2xl bg-[#00C1A3] flex items-center justify-center shadow-[0_0_15px_rgba(0,193,163,0.3)] text-[#050335]">
                            <User size={20} fill="currentColor" />
                        </div>
                    </div>
                </div>
            </div>

            {/* BUSCADOR */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                <div className="relative w-full md:w-96 group">
                    <Search className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isDarkMode ? 'text-slate-500 group-focus-within:text-[#00C1A3]' : 'text-slate-400 group-focus-within:text-[#00C1A3]'}`} size={18} />
                    <input
                        type="text"
                        value={busqueda}
                        onChange={(e) => { setBusqueda(e.target.value); setPaginaActual(1); }}
                        placeholder={`Buscar ${getLabel().toLowerCase()} por nombre o código...`}
                        className={`w-full border p-3 pl-12 rounded-xl text-sm focus:outline-none focus:ring-4 transition-all ${isDarkMode
                            ? 'bg-[#0F172A]/50 border-white/10 text-white focus:ring-[#00C1A3]/10 focus:border-[#00C1A3]/40'
                            : 'bg-white border-slate-200 text-slate-800 focus:ring-[#00C1A3]/10 focus:border-[#00C1A3]'
                            }`}
                    />
                </div>
                <button
                    onClick={() => setShowModalNuevo(true)}
                    className="bg-[#00C1A3] hover:bg-[#00a88e] text-[#050335] px-6 py-3 rounded-xl font-black flex items-center gap-2 text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#00C1A3]/20"
                >
                    <Plus size={18} strokeWidth={3} /> Nuevo {getLabel()}
                </button>
            </div>

            {/* TABLA AJUSTADA */}
            <div className={`w-full border rounded-2xl flex flex-col overflow-hidden shadow-2xl transition-all duration-500 h-fit ${isDarkMode ? 'bg-[#080D1F] border-white/5' : 'bg-white border-slate-200'}`}>
                {/* ... (Contenido de tu tabla igual que antes) ... */}
                {hayResultados ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className={`text-[10px] uppercase tracking-widest font-black ${isDarkMode ? 'bg-[#050918]/50 text-slate-500 border-b border-white/5' : 'bg-slate-50 text-slate-400 border-b border-slate-100'}`}>
                                    <th className="p-5">Folio</th>
                                    <th className="p-5">{activeTab === 'proveedores' ? "Nombre Proveedor" : activeTab === 'categorias' ? "Nombre Categoría" : "Nombre"}</th>
                                    {activeTab === 'productos' && (
                                        <>
                                            <th className="p-5">Precio</th>
                                            <th className="p-5">Stock</th>
                                            <th className="p-5">Código</th>
                                            <th className="p-5">Categoría</th>
                                            <th className="p-5">Proveedor</th>
                                        </>
                                    )}
                                    {activeTab === 'proveedores' && <th className="p-5">Contacto</th>}
                                    <th className="p-5 text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className={`divide-y ${isDarkMode ? 'divide-white/5' : 'divide-slate-100'}`}>
                                {datosPaginados.map((item: any) => (
                                    <tr key={item.id} className={`transition-all duration-300 ${isDarkMode ? 'hover:bg-white/[0.02]' : 'hover:bg-slate-50/50'}`}>
                                        <td className="p-5 text-xs font-mono text-slate-500">{item.folio}</td>
                                        <td className="p-5">
                                            <div className={`text-sm font-bold tracking-wide ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>{item.nombre}</div>
                                        </td>
                                        {activeTab === 'productos' && (
                                            <>
                                                <td className="p-5 text-[#00C1A3] font-black">${item.precio.toFixed(2)}</td>
                                                <td className={`p-5 font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                                    {item.stock} <span className="text-[10px] text-slate-500 ml-1">{item.unidad}</span>
                                                </td>
                                                <td className="p-5 text-xs text-slate-500 font-mono">{item.codigo}</td>
                                                <td className="p-5">
                                                    <span className="bg-[#00C1A3]/10 text-[#00C1A3] px-3 py-1 rounded text-[10px] font-bold uppercase border border-[#00C1A3]/20">{item.cat}</span>
                                                </td>
                                                <td className={`p-5 text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{item.prov}</td>
                                            </>
                                        )}
                                        {activeTab === 'proveedores' && <td className={`p-5 text-sm font-mono ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{item.contacto}</td>}
                                        <td className="p-5 text-center">
                                            <div className="flex justify-center gap-2">
                                                <button className={`p-2 rounded-lg transition-all ${isDarkMode ? 'bg-white/5 hover:bg-[#38BDF8]/20 text-slate-400 hover:text-[#38BDF8]' : 'bg-slate-100 hover:bg-[#38BDF8]/10 text-slate-500 hover:text-[#38BDF8]'}`}><Edit size={16} /></button>
                                                <button className={`p-2 rounded-lg transition-all ${isDarkMode ? 'bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-500' : 'bg-slate-100 hover:bg-red-500/10 text-slate-500 hover:text-red-500'}`}><Trash2 size={16} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center p-20 text-center">
                        <Search size={48} className="text-[#00C1A3] opacity-20 mb-4" />
                        <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>No se encontraron resultados</h3>
                        <p className="text-slate-500 text-sm mt-2">No hay coincidencias para "{busqueda}".</p>
                    </div>
                )}

                {/* PAGINACIÓN */}
                <div className={`p-4 border-t flex justify-center items-center gap-6 ${isDarkMode ? 'bg-[#050918] border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                    <button onClick={() => setPaginaActual(prev => Math.max(prev - 1, 1))} disabled={paginaActual === 1 || !hayResultados}
                        className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all ${paginaActual === 1 || !hayResultados ? 'opacity-20 cursor-not-allowed' : 'text-slate-500 hover:text-[#00C1A3]'}`}>
                        <ChevronLeft size={16} /> Anterior
                    </button>
                    <span className={`font-black text-xs px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-white/5 text-white border-white/5' : 'bg-white text-slate-600 border-slate-200'}`}>
                        Página {paginaActual} de {totalPaginas}
                    </span>
                    <button onClick={() => setPaginaActual(prev => Math.min(prev + 1, totalPaginas))} disabled={paginaActual === totalPaginas || !hayResultados}
                        className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all ${paginaActual === totalPaginas || !hayResultados ? 'opacity-20 cursor-not-allowed' : 'text-slate-500 hover:text-[#00C1A3]'}`}>
                        Siguiente <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            {/* --- MODAL AGREGAR PRODUCTO (DARK MODE) --- */}
            {showModalNuevo && (
                <div className="fixed inset-0 bg-[#030617]/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
                    <div className="bg-[#0A0F1D] border border-white/10 rounded-[2.5rem] w-full max-w-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <h2 className="text-white text-2xl font-black tracking-tight tracking-tighter">Nuevo {getLabel()}</h2>
                                    <p className="text-[#00C1A3] text-[10px] font-black uppercase tracking-[0.2em]">Registro de Inventario</p>
                                </div>
                                <button onClick={() => setShowModalNuevo(false)} className="bg-white/5 text-slate-400 p-2 rounded-full hover:bg-red-500/20 hover:text-red-500 transition-all"><X size={20} /></button>
                            </div>

                            <div className="space-y-5">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase text-slate-500 ml-1">Nombre Completo</label>
                                    <input
                                        type="text" placeholder="Ej. Papas Sabritas Original"
                                        className="w-full bg-[#111827] border border-white/5 p-4 rounded-2xl text-white font-bold focus:border-[#00C1A3]/50 focus:ring-4 ring-[#00C1A3]/5 outline-none transition-all"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black uppercase text-slate-500 ml-1">Stock Inicial</label>
                                        <input type="number" placeholder="0" className="w-full bg-[#111827] border border-white/5 p-4 rounded-2xl text-white font-bold outline-none focus:border-[#00C1A3]/50" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black uppercase text-slate-500 ml-1">Unidad</label>
                                        <select className="w-full bg-[#111827] border border-white/5 p-4 rounded-2xl text-white font-bold outline-none focus:border-[#00C1A3]/50 appearance-none">
                                            <option value="PZ">Pieza (PZ)</option>
                                            <option value="KG">Kilogramo (KG)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1.5 relative">
                                    <label className="text-[10px] font-black uppercase text-slate-500 ml-1">Código de Barras</label>
                                    <div className="relative">
                                        <input
                                            type="text" placeholder="Escaneando..."
                                            className="w-full bg-[#111827] border border-white/5 p-4 rounded-2xl text-[#00C1A3] font-mono font-bold pr-24 outline-none focus:border-[#00C1A3]/50"
                                            readOnly
                                        />
                                        <button className="absolute right-2 top-2 bottom-2 px-4 bg-[#00C1A3] text-[#050335] rounded-xl text-[9px] font-black flex items-center gap-2 hover:scale-95 transition-all">
                                            <Scan size={14} /> SCAN
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-white">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black uppercase text-slate-500 ml-1">Categoría</label>
                                        <select className="w-full bg-[#111827] border border-white/5 p-4 rounded-2xl text-white font-bold text-xs outline-none focus:border-[#00C1A3]/50 appearance-none">
                                            <option value="">Elegir...</option>
                                            {categorias.map(c => <option key={c.id} value={c.nombre}>{c.nombre}</option>)}
                                        </select>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black uppercase text-slate-500 ml-1">Proveedor</label>
                                        <select className="w-full bg-[#111827] border border-white/5 p-4 rounded-2xl text-white font-bold text-xs outline-none focus:border-[#00C1A3]/50 appearance-none">
                                            <option value="">Elegir...</option>
                                            {proveedores.map(p => <option key={p.id} value={p.nombre}>{p.nombre}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-6">
                                    <button onClick={() => setShowModalNuevo(false)} className="flex-1 py-4 text-slate-500 font-black uppercase text-[10px] tracking-widest hover:text-white transition-colors">Cerrar</button>
                                    <button onClick={handleGuardar} className="flex-[2] bg-[#00C1A3] text-[#050335] py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg shadow-[#00C1A3]/10 hover:scale-[1.02] active:scale-95 transition-all">Confirmar Registro</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL ÉXITO */}
            {showModalExito && (
                <div className="fixed inset-0 bg-[#030617]/90 backdrop-blur-xl z-[60] flex items-center justify-center p-4">
                    <div className="bg-[#0A0F1D] border border-white/10 rounded-[3rem] p-10 w-full max-w-sm text-center shadow-2xl animate-in zoom-in duration-300">
                        <div className="text-[#00C1A3] flex justify-center mb-6">
                            <div className="bg-[#00C1A3]/10 p-5 rounded-full ring-8 ring-[#00C1A3]/5">
                                <CheckCircle2 size={60} strokeWidth={2.5} />
                            </div>
                        </div>
                        <h2 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase">¡Listo!</h2>
                        <p className="text-slate-400 mb-8 font-medium italic">El registro se ha guardado en la base de datos.</p>
                        <button onClick={() => setShowModalExito(false)} className="w-full bg-[#00C1A3] text-[#050335] py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#00C1A3]/20 hover:scale-105 transition-all">Entendido</button>
                    </div>
                </div>
            )}
        </div>
    );
};