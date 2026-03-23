import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Package, Tag, Truck, Plus, Search,
    Barcode, Camera, AlertCircle, Edit,
    Trash2, X, Phone, User, Mail, ShieldAlert, CheckCircle2,
    Filter, MoreVertical, LayoutGrid, List
} from "lucide-react";

export const ViewCatalogo = ({ userRol = "Administrador" }) => {
    // --- ESTADOS ---
    const [activeTab, setActiveTab] = useState('productos');
    const [showModalProd, setShowModalProd] = useState(false);
    const [showModalProv, setShowModalProv] = useState(false);
    const [busqueda, setBusqueda] = useState("");
    const [alerta, setAlerta] = useState(null);
    const [scanning, setScanning] = useState(false);
    const [barcode, setBarcode] = useState("");

    // --- DATOS SIMULADOS ---
    const [categorias] = useState(["Bebidas", "Abarrotes", "Snacks", "Limpieza"]);
    const [productos, setProductos] = useState([
        { id: 1, nombre: "Coca Cola 600ml", codigo: "7501055300074", stock: 24, precio: 18.50, cat: "Bebidas" },
        { id: 2, nombre: "Papas Sabritas Sal 45g", codigo: "7501011115678", stock: 8, precio: 17.00, cat: "Snacks" },
        { id: 3, nombre: "Arroz Extra 1kg", codigo: "7501077722334", stock: 50, precio: 32.00, cat: "Abarrotes" },
        { id: 4, nombre: "Jabón Zote Blanco", codigo: "7501022299881", stock: 3, precio: 22.50, cat: "Limpieza" },
    ]);
    const [proveedores, setProveedores] = useState([
        { id: 1, nombre: "Coca-Cola México", contacto: "55-1234-5678", folio: "PROV-001" },
        { id: 2, nombre: "Sabritas S.A.", contacto: "ventas@sabritas.com", folio: "PROV-002" },
        { id: 3, nombre: "Lácteos Lala", contacto: "800-222-3344", folio: "PROV-003" }
    ]);

    const isAdmin = userRol === "Administrador";

    // --- LÓGICA DE FILTRADO ---
    const productosFiltrados = useMemo(() =>
        productos.filter(p =>
            p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            p.codigo.includes(busqueda)
        ), [busqueda, productos]);

    const proveedoresFiltrados = useMemo(() =>
        proveedores.filter(p =>
            p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            p.contacto.toLowerCase().includes(busqueda.toLowerCase())
        ), [busqueda, proveedores]);

    // --- ACCIONES ---
    const mostrarMensaje = (tipo, msg) => {
        setAlerta({ tipo, msg });
        setTimeout(() => setAlerta(null), 3000);
    };

    const simulateScan = () => {
        setScanning(true);
        setTimeout(() => {
            const mockCode = "750" + Math.floor(Math.random() * 1000000000);
            setBarcode(mockCode);
            setScanning(false);
            mostrarMensaje('success', "Código detectado: " + mockCode);
        }, 1200);
    };

    const eliminarItem = (id, nombre, setter, data) => {
        if (!isAdmin) return;
        setter(data.filter(item => item.id !== id));
        mostrarMensaje('error', `"${nombre}" eliminado del sistema.`);
    };

    return (
        <div className="p-4 md:p-8 h-screen overflow-y-auto bg-[#030221] text-slate-200 font-sans">

            {/* ALERTA */}
            <AnimatePresence>
                {alerta && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}
                        className={`fixed top-8 right-8 px-6 py-4 rounded-2xl z-[100] flex items-center gap-3 shadow-2xl border backdrop-blur-xl ${alerta.tipo === 'success' ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400' : 'bg-red-500/10 border-red-500/50 text-red-400'
                            }`}
                    >
                        {alerta.tipo === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                        <span className="font-medium">{alerta.msg}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* HEADER DE LA DEMO */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div>
                    <h1 className="text-3xl font-black text-white tracking-tight">Catálogo Maestro</h1>
                    <p className="text-slate-500 text-sm mt-1 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Sistema en línea • Gestión de Inventario v2.4
                    </p>
                </div>

                <div className="flex gap-3 bg-white/5 p-1.5 rounded-2xl border border-white/10">
                    {[
                        { id: 'productos', icon: <Package size={18} />, label: 'Productos' },
                        { id: 'proveedores', icon: <Truck size={18} />, label: 'Proveedores' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => { setActiveTab(tab.id); setBusqueda(""); }}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all ${activeTab === tab.id ? 'bg-[#00C1A3] text-[#050335] shadow-lg' : 'hover:bg-white/5 text-slate-400'
                                }`}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* BARRA DE ACCIONES */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                    <input
                        type="text"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        placeholder={`Buscar en ${activeTab}...`}
                        className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl text-white outline-none focus:border-[#00C1A3] focus:ring-1 focus:ring-[#00C1A3]/30 transition-all shadow-inner"
                    />
                </div>

                <button
                    onClick={() => activeTab === 'productos' ? setShowModalProd(true) : setShowModalProv(true)}
                    className="bg-white text-[#050335] px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-[#00C1A3] transition-colors shadow-xl active:scale-95"
                >
                    <Plus size={20} strokeWidth={3} /> {activeTab === 'productos' ? 'NUEVO PRODUCTO' : 'NUEVO PROVEEDOR'}
                </button>
            </div>

            {/* TABLA DINÁMICA */}
            <div className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-sm shadow-2xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/[0.02]">
                            {activeTab === 'productos' ? (
                                <>
                                    <th className="p-6 text-[10px] uppercase tracking-[0.2em] text-[#00C1A3] font-black">Información del Producto</th>
                                    <th className="p-6 text-[10px] uppercase tracking-[0.2em] text-[#00C1A3] font-black">Categoría</th>
                                    <th className="p-6 text-[10px] uppercase tracking-[0.2em] text-[#00C1A3] font-black">Stock</th>
                                    <th className="p-6 text-[10px] uppercase tracking-[0.2em] text-[#00C1A3] font-black">Precio Unitario</th>
                                </>
                            ) : (
                                <>
                                    <th className="p-6 text-[10px] uppercase tracking-[0.2em] text-[#00C1A3] font-black">Identificador</th>
                                    <th className="p-6 text-[10px] uppercase tracking-[0.2em] text-[#00C1A3] font-black">Razón Social</th>
                                    <th className="p-6 text-[10px] uppercase tracking-[0.2em] text-[#00C1A3] font-black">Contacto Directo</th>
                                </>
                            )}
                            <th className="p-6 text-right text-[10px] uppercase tracking-[0.2em] text-[#00C1A3] font-black">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <AnimatePresence mode="popLayout">
                            {(activeTab === 'productos' ? productosFiltrados : proveedoresFiltrados).map((item, idx) => (
                                <motion.tr
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="border-b border-white/5 hover:bg-white/[0.03] transition-colors group"
                                >
                                    {activeTab === 'productos' ? (
                                        <>
                                            <td className="p-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C1A3]/20 to-blue-500/20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                                                        <Package className="text-[#00C1A3]" size={20} />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-white leading-none mb-1">{item.nombre}</div>
                                                        <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                                                            <Barcode size={10} /> {item.codigo}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-6">
                                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider">
                                                    {item.cat}
                                                </span>
                                            </td>
                                            <td className="p-6">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${item.stock < 10 ? 'bg-red-500 animate-pulse' : 'bg-emerald-500'}`} />
                                                    <span className={`font-bold ${item.stock < 10 ? 'text-red-400' : 'text-slate-300'}`}>
                                                        {item.stock} <span className="text-[10px] opacity-50 font-normal">unidades</span>
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-6">
                                                <span className="text-lg font-black text-white">${item.precio.toFixed(2)}</span>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td className="p-6 font-mono text-xs text-[#00C1A3]">{item.folio}</td>
                                            <td className="p-6 font-bold text-white">{item.nombre}</td>
                                            <td className="p-6">
                                                <div className="flex flex-col gap-1">
                                                    <span className="flex items-center gap-2 text-xs text-slate-400">
                                                        {item.contacto.includes('@') ? <Mail size={12} /> : <Phone size={12} />}
                                                        {item.contacto}
                                                    </span>
                                                </div>
                                            </td>
                                        </>
                                    )}
                                    <td className="p-6 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2.5 hover:bg-white/10 rounded-xl text-slate-400 hover:text-white transition-colors">
                                                <Edit size={16} />
                                            </button>
                                            <button
                                                onClick={() => eliminarItem(item.id, item.nombre, activeTab === 'productos' ? setProductos : setProveedores, activeTab === 'productos' ? productos : proveedores)}
                                                className="p-2.5 hover:bg-red-500/20 rounded-xl text-red-500 transition-colors"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>

                {/* EMPTY STATE */}
                {(activeTab === 'productos' ? productosFiltrados : proveedoresFiltrados).length === 0 && (
                    <div className="p-20 flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-4 border border-dashed border-white/20">
                            <Search size={32} className="text-slate-600" />
                        </div>
                        <h3 className="text-xl font-bold text-white">No se encontraron resultados</h3>
                        <p className="text-slate-500 max-w-xs mt-2">Intenta ajustar los términos de búsqueda o agrega un nuevo elemento.</p>
                    </div>
                )}
            </div>

            {/* --- MODAL PRODUCTO (Versión Demo) --- */}
            <AnimatePresence>
                {showModalProd && (
                    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowModalProd(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-[#0a084d] border border-white/10 w-full max-w-xl rounded-[2.5rem] shadow-3xl overflow-hidden"
                        >
                            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#00C1A3]/20 flex items-center justify-center text-[#00C1A3]">
                                        <Plus size={20} />
                                    </div>
                                    <h2 className="text-xl font-black text-white">Alta de Producto</h2>
                                </div>
                                <button onClick={() => setShowModalProd(false)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-8 space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black text-slate-500 ml-1">Código de Barras</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={barcode}
                                            readOnly
                                            className="w-full bg-black/20 border border-white/10 p-4 rounded-2xl text-[#00C1A3] font-mono focus:border-[#00C1A3] transition-all outline-none"
                                            placeholder="Esperando escaneo..."
                                        />
                                        <button
                                            onClick={simulateScan}
                                            className={`absolute right-2 top-2 bottom-2 px-4 rounded-xl flex items-center gap-2 text-xs font-black transition-all ${scanning ? 'bg-amber-500 text-white animate-pulse' : 'bg-[#00C1A3] text-[#050335] hover:scale-95'
                                                }`}
                                        >
                                            {scanning ? <Camera size={14} className="animate-bounce" /> : <Barcode size={14} />}
                                            {scanning ? "DETECTANDO..." : "SCAN"}
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2 space-y-2">
                                        <label className="text-[10px] uppercase font-black text-slate-500 ml-1">Nombre Comercial</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-[#00C1A3]" placeholder="Ej. Agua Mineral 2L" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-black text-slate-500 ml-1">Categoría</label>
                                        <select className="w-full bg-[#110f60] border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-[#00C1A3] appearance-none">
                                            {categorias.map(c => <option key={c}>{c}</option>)}
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-black text-slate-500 ml-1">Precio Venta</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                                            <input type="number" className="w-full bg-white/5 border border-white/10 p-4 pl-8 rounded-2xl text-white outline-none focus:border-[#00C1A3]" placeholder="0.00" />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => { setShowModalProd(false); mostrarMensaje('success', 'Producto guardado exitosamente'); }}
                                    className="w-full bg-[#00C1A3] text-[#050335] py-5 rounded-2xl font-black shadow-lg hover:shadow-[#00C1A3]/20 transition-all hover:-translate-y-1"
                                >
                                    REGISTRAR EN INVENTARIO
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};