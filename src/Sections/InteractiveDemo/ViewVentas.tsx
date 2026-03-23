import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search, ShoppingCart, Trash2, Plus, Minus,
    CreditCard, X, User, Scan, Sun, Moon, UserPlus, Barcode
} from "lucide-react";

export const ViewVentas = ({ isDarkMode, toggleTheme }) => {
    // --- ESTADOS ---
    const [productos] = useState([
        { id: 1, nombre: "Papas Chips", precio: 25.00, unidad: "PZ", stock: 10, codigo: "750101" }, // Cambiado a 10
        { id: 2, nombre: "Jamón", precio: 120.00, unidad: "KG", stock: 0.5, codigo: "750102" },    // Cambiado a 0.5
        { id: 3, nombre: "Coca Cola 600ml", precio: 18.00, unidad: "PZ", stock: 20, codigo: "750103" },
        { id: 4, nombre: "Leche Entera 1L", precio: 28.50, unidad: "PZ", stock: 15, codigo: "750104" },
        { id: 5, nombre: "Aguacate Hass", precio: 85.00, unidad: "KG", stock: 3.2, codigo: "750105" },
        { id: 6, nombre: "Detergente en Polvo 1kg", precio: 45.00, unidad: "PZ", stock: 8, codigo: "750106" },
    ]);

    const [carrito, setCarrito] = useState([]);
    const [cliente, setCliente] = useState("Cliente General");
    const [modalBusqueda, setModalBusqueda] = useState(false);
    const [terminoBusqueda, setTerminoBusqueda] = useState("");
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [cantidadInput, setCantidadInput] = useState(1);
    const [barcodeBuffer, setBarcodeBuffer] = useState("");
    const [isScanning, setIsScanning] = useState(false);
    const [errorStock, setErrorStock] = useState(false); // Controla si se ve el error
    const [mensajeStock, setMensajeStock] = useState(""); // El texto que dirá "Solo hay X disponible"
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showPagoModal, setShowPagoModal] = useState(false);
    const [montoRecibido, setMontoRecibido] = useState("");
    const [statusModal, setStatusModal] = useState({ open: false, title: "", message: "" });

    const totalVenta = useMemo(() =>
        carrito.reduce((acc, item) => acc + item.subtotal, 0),
        [carrito]);

    // --- FUNCIÓN DE SIMULACIÓN ---
    const simulateScan = () => {
        setIsScanning(true);
        setTimeout(() => {
            // Elegimos un código que SÍ exista en tu lista de productos para que funcione
            const codigosExistentes = ["750101", "750102", "750103"];
            const randomCode = codigosExistentes[Math.floor(Math.random() * codigosExistentes.length)];

            // Buscamos el producto y lo seleccionamos (igual que hace tu lector físico)
            const prod = productos.find(p => p.codigo === randomCode);
            if (prod) {
                setProductoSeleccionado(prod);
                setCantidadInput(prod.unidad === "KG" ? 500 : 1);
                setTerminoBusqueda(randomCode); // Para que se vea en el input
            }
            setIsScanning(false);
        }, 1000);
    };

    // --- LÓGICA DE ESCANEO (LECTOR FÍSICO) ---
    useEffect(() => {
        let timeout;
        const handleKeyDown = (e) => {
            if (e.target.tagName === "INPUT" && e.target.type === "number") return;
            if (e.key === "Enter") {
                if (barcodeBuffer.length > 0) {
                    const prod = productos.find(p => p.codigo === barcodeBuffer);
                    if (prod) {
                        setProductoSeleccionado(prod);
                        setCantidadInput(prod.unidad === "KG" ? 500 : 1);
                        setModalBusqueda(true);
                    }
                    setBarcodeBuffer("");
                }
            } else if (e.key.length === 1) {
                setBarcodeBuffer(prev => prev + e.key);
            }
            clearTimeout(timeout);
            timeout = setTimeout(() => setBarcodeBuffer(""), 150);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [barcodeBuffer, productos]);
    // --- FUNCIÓN PARA AÑADIR PRODUCTOS AL CARRITO ---
    const agregarAlCarrito = () => {
        const cantidadNumerica = productoSeleccionado.unidad === "KG"
            ? cantidadInput / 1000
            : cantidadInput;

        if (cantidadNumerica > productoSeleccionado.stock) {
            setMensajeStock(`Solo hay ${productoSeleccionado.stock} disponible.`);
            setShowErrorModal(true); // Activamos el modal tipo imagen
            return;
        }

        const nuevoItem = {
            ...productoSeleccionado,
            cantidadTicket: cantidadNumerica,
            subtotal: productoSeleccionado.precio * cantidadNumerica
        };

        setCarrito([...carrito, nuevoItem]);
        setModalBusqueda(false);
        setProductoSeleccionado(null);
        setTerminoBusqueda("");
    };

    // --- LÓGICA DE FINALIZAR VENTA (MODERNA) ---
    const procesarPago = () => {
        const cambio = Number(montoRecibido) - totalVenta;

        // 1. Activamos el modal visual de éxito con el cambio
        setStatusModal({
            open: true,
            title: "¡Venta Exitosa!",
            message: `Cambio: $${cambio.toFixed(2)}`
        });

        // 2. Limpiamos los datos del carrito y cliente
        setCarrito([]);
        setCliente("Cliente General");
        setMontoRecibido("");

        // 3. Cerramos el modal de cobro para volver al inicio
        setShowPagoModal(false);
    };

    const actualizarCantidad = (index, delta) => {
        const nuevoCarrito = [...carrito];
        const item = nuevoCarrito[index];
        const paso = item.unidad === "KG" ? 0.1 : 1; // 100g o 1 pieza
        let nuevaCantidad = item.cantidadTicket + (delta * paso);

        if (nuevaCantidad <= 0) return; // Evita que baje de cero

        item.cantidadTicket = nuevaCantidad;
        item.subtotal = item.precio * nuevaCantidad;
        setCarrito(nuevoCarrito);
    };

    const theme = {
        // Cambié el bg-[#0f172a] por uno ligeramente más sólido para que los modales resalten
        card: isDarkMode ? "bg-[#0f172a] border-white/5 shadow-2xl" : "bg-white border-slate-200 shadow-sm",
        text: isDarkMode ? "text-slate-200" : "text-slate-800",
        input: isDarkMode ? "bg-[#1e293b] text-white" : "bg-slate-100 text-slate-900",
        border: isDarkMode ? "border-white/10" : "border-slate-200",
        // Un toque de transparencia al renglón de la tabla
        tableRow: isDarkMode ? "bg-white/[0.02] hover:bg-[#00C1A3]/5" : "bg-slate-50",
    };

    return (
        <div className={`space-y-6 transition-colors duration-500 ${theme.text} p-4`}>

            {/* HEADER ESTILO PÍLDORA */}
            <header className="flex justify-between items-center mb-8">
                <h1 className={`text-2xl font-black tracking-tight ${isDarkMode ? 'text-[#00C1A3]' : 'text-[#008f78]'}`}>
                    Ventas
                </h1>

                <div className="flex items-center gap-3">
                    {/* Botón de Tema Estilo Cuadrado Redondeado */}
                    <button
                        onClick={toggleTheme}
                        className={`p-3 rounded-2xl border transition-all ${isDarkMode
                            ? 'bg-[#0f172a] border-white/10 hover:bg-white/5'
                            : 'bg-white border-slate-200 shadow-sm hover:bg-slate-50'
                            }`}
                    >
                        {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-400" />}
                    </button>

                    {/* Contenedor Perfil Estilo Píldora */}
                    <div className={`flex items-center gap-4 px-6 py-2 rounded-full border transition-all ${isDarkMode
                        ? 'bg-[#0f172a] border-white/10'
                        : 'bg-white border-slate-200 shadow-sm'
                        }`}>
                        <p className={`text-sm font-bold whitespace-nowrap ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                            Hola Nedimi Admin
                        </p>

                        {/* Avatar Circular */}
                        <div className="w-9 h-9 rounded-full bg-[#00C1A3] flex items-center justify-center text-[#050335] shadow-lg shadow-[#00C1A3]/20">
                            <User size={18} strokeWidth={2.5} />
                        </div>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {/* SECCIÓN CLIENTE Y BOTÓN BUSCAR MEJORADO */}
                    <section className={`${theme.card} p-7 rounded-[2rem] border relative overflow-hidden`}>
                        <div className="flex flex-col md:flex-row gap-5 items-end">
                            <div className="flex-1 w-full space-y-2">
                                <label className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em] ml-1">Cliente</label>
                                <div className="relative">
                                    <UserPlus className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30 text-[#00C1A3]" size={18} />
                                    <input
                                        className={`w-full ${theme.input} border-none p-4 pl-12 rounded-2xl text-sm font-bold outline-none focus:ring-2 ring-[#00C1A3]/30 transition-all`}
                                        value={cliente}
                                        onChange={(e) => setCliente(e.target.value)}
                                        placeholder="Nombre del cliente..."
                                    />
                                </div>
                            </div>

                            <button
                                onClick={() => setModalBusqueda(true)}
                                className="w-full md:w-auto bg-[#00C1A3] hover:bg-[#00dcb9] text-[#050335] px-8 py-4 rounded-2xl font-black text-xs tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#00C1A3]/20 active:scale-95 group"
                            >
                                <ShoppingCart size={18} className="group-hover:rotate-12 transition-transform" />
                                BUSCAR PRODUCTO
                            </button>
                        </div>
                    </section>

                    {/* TABLA DE CARRITO */}
                    <section className={`${theme.card} p-7 rounded-[2rem] border`}>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2 opacity-80">
                                <Barcode size={18} className="text-[#00C1A3]" />
                                <h2 className="font-black text-sm uppercase tracking-widest">Carrito de compras</h2>
                            </div>
                            <span className="text-[10px] font-black bg-[#00C1A3]/10 text-[#00C1A3] px-3 py-1 rounded-full border border-[#00C1A3]/20">
                                {carrito.length} ITEMS
                            </span>
                        </div>

                        <div className="space-y-3">
                            <div className="grid grid-cols-5 px-5 text-[9px] font-black opacity-30 uppercase tracking-[0.2em]">
                                <div className="col-span-1">Descripción</div>
                                <div className="text-center">Unitario</div>
                                <div className="text-center">Cantidad</div>
                                <div className="text-center">Total</div>
                                <div className="text-right"></div>
                            </div>

                            {carrito.map((item, i) => (
                                <motion.div
                                    initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                                    key={i}
                                    className={`${theme.tableRow} grid grid-cols-5 items-center p-4 rounded-2xl border border-white/5 transition-all hover:bg-[#00C1A3]/5 group`}
                                >
                                    <div className="font-bold text-[#00C1A3] truncate">{item.nombre}</div>
                                    <div className="text-center font-bold text-sm opacity-60">${item.precio.toFixed(2)}</div>
                                    <div className="flex justify-center items-center">
                                        <div className="flex items-center bg-black/30 rounded-xl p-1 px-2 gap-3 border border-white/5">
                                            {/* Botón Menos - Llama a la función con -1 */}
                                            <button
                                                onClick={() => actualizarCantidad(i, -1)}
                                                className="text-white/40 hover:text-red-400 transition-colors"
                                            >
                                                <Minus size={14} />
                                            </button>

                                            <span className="min-w-[50px] text-center text-[11px] font-black text-[#00C1A3]">
                                                {item.unidad === "KG"
                                                    ? `${(item.cantidadTicket * 1000).toFixed(0)}g`
                                                    : `${item.cantidadTicket} PZ`
                                                }
                                            </span>

                                            {/* Botón Más - Llama a la función con 1 */}
                                            <button
                                                onClick={() => actualizarCantidad(i, 1)}
                                                className="text-white/40 hover:text-[#00C1A3] transition-colors"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-center font-black text-sm">${item.subtotal.toFixed(2)}</div>
                                    <div className="flex justify-end">
                                        <button
                                            onClick={() => setCarrito(carrito.filter((_, idx) => idx !== i))}
                                            className="opacity-0 group-hover:opacity-100 bg-red-500/10 text-red-500 p-2 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}

                            {carrito.length === 0 && (
                                <div className="py-24 text-center border-2 border-dashed border-white/5 rounded-[2rem] opacity-20 font-black uppercase tracking-[0.3em] text-xs">
                                    Escanee o busque un producto
                                </div>
                            )}
                        </div>
                    </section>
                </div>

                {/* PANEL DE COBRO */}
                <div className="lg:col-span-1">
                    <div className={`${theme.card} p-8 rounded-[2.5rem] border sticky top-6 shadow-2xl`}>
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="font-black text-xs uppercase tracking-[0.2em] opacity-50">Ticket de Venta</h3>
                            <div className="h-2 w-2 rounded-full bg-[#00C1A3] animate-pulse"></div>
                        </div>

                        <div className="space-y-1 mb-10">
                            <p className="text-[10px] font-black opacity-40 uppercase tracking-widest">Total Neto</p>
                            <div className="flex items-start">
                                <span className="text-2xl font-black text-[#00C1A3] mt-2">$</span>
                                <div className="text-7xl font-black text-[#00C1A3] tracking-tighter transition-all">
                                    {totalVenta.toFixed(2)}
                                </div>
                            </div>
                        </div>
                        <button
                            disabled={carrito.length === 0}
                            onClick={() => {
                                setMontoRecibido(""); // Limpiar para nueva venta
                                setShowPagoModal(true);
                            }}
                            className="w-full bg-[#00C1A3] hover:bg-[#00E2C1] disabled:opacity-20 text-[#050335] py-6 rounded-3xl font-black text-sm flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#00C1A3]/20 active:scale-95"
                        >
                            <CreditCard size={22} /> PROCESAR PAGO
                        </button>
                    </div>
                </div>
            </div>

            {/* MODAL DE BÚSQUEDA + SCANNER INTEGRADO (COMO EN ALTA) */}
            <AnimatePresence>
                {modalBusqueda && (
                    <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                            className={`${isDarkMode ? 'bg-[#0f172a]' : 'bg-white'} border border-white/10 w-full max-w-lg rounded-[2.5rem] p-8 relative shadow-2xl`}>

                            <button onClick={() => { setModalBusqueda(false); setProductoSeleccionado(null); }} className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors"><X size={24} /></button>

                            <div className="flex items-center gap-3 text-[#00C1A3] font-black text-xl mb-8 italic">
                                <Scan className="animate-pulse" />
                                <span>BÚSQUEDA DE PRODUCTO</span>
                            </div>

                            {!productoSeleccionado ? (
                                <div className="space-y-6">
                                    {/* BARRA DE BÚSQUEDA CON BOTÓN SCAN INTEGRADO (ESTILO IMAGEN REFERENCIA) */}
                                    <div className="relative flex items-center">
                                        <Search className="absolute left-4 opacity-30" size={18} />
                                        <input
                                            autoFocus
                                            placeholder="Nombre o código..."
                                            className={`w-full ${theme.input} border border-white/5 p-5 pl-12 pr-28 rounded-2xl outline-none focus:ring-2 ring-[#00C1A3] font-bold`}
                                            value={terminoBusqueda}
                                            onChange={(e) => setTerminoBusqueda(e.target.value)}
                                        />
                                        <button
                                            onClick={simulateScan}
                                            disabled={isScanning}
                                            className={`absolute right-3 px-4 py-2 rounded-xl font-black text-[10px] flex items-center gap-2 transition-all ${isScanning
                                                ? 'bg-amber-500 text-white animate-pulse'
                                                : 'bg-[#00C1A3] text-[#050335] hover:scale-95'
                                                }`}
                                        >
                                            {isScanning ? (
                                                <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            ) : (
                                                <Scan size={14} />
                                            )}
                                            {isScanning ? "LEYENDO..." : "SCAN"}
                                        </button>
                                    </div>

                                    <div className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                                        {productos.filter(p => p.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())).map(p => (
                                            <button key={p.id} onClick={() => { setProductoSeleccionado(p); setCantidadInput(p.unidad === "KG" ? 500 : 1); }}
                                                className="w-full text-left p-4 rounded-2xl flex justify-between items-center font-bold bg-white/5 hover:bg-[#00C1A3] hover:text-[#050335] transition-all group">
                                                <div>
                                                    <p className="text-sm">{p.nombre}</p>
                                                    <p className="text-[10px] opacity-40 font-black uppercase">{p.codigo}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-[#00C1A3] group-hover:text-[#050335]">${p.precio.toFixed(2)}</p>
                                                    <p className="text-[9px] opacity-40 uppercase">{p.unidad}</p>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-6 animate-in fade-in zoom-in duration-300">
                                    <div className="p-7 bg-[#00C1A3]/10 rounded-[2rem] border border-[#00C1A3]/20 text-center">
                                        <p className="text-[#00C1A3] font-black text-3xl tracking-tighter mb-1 uppercase">
                                            {productoSeleccionado.nombre}
                                        </p>
                                        <p className="opacity-40 font-black uppercase text-[10px] tracking-widest">
                                            Precio Unitario: ${productoSeleccionado.precio.toFixed(2)} / {productoSeleccionado.unidad}
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em] ml-2">
                                            {productoSeleccionado.unidad === "KG" ? "Gramos a vender" : "Cantidad de piezas"}
                                        </label>
                                        <input
                                            type="number"
                                            autoFocus
                                            className="w-full bg-black/40 border border-white/10 p-7 rounded-[1.5rem] font-black text-5xl text-center outline-none focus:border-[#00C1A3] text-[#00C1A3] transition-all"
                                            value={cantidadInput}
                                            onChange={(e) => setCantidadInput(Number(e.target.value))}
                                        />
                                    </div>

                                    {/* MENSAJE DE ERROR DE STOCK - Movido aquí para que sea visible */}
                                    <AnimatePresence>
                                        {errorStock && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="bg-red-500/20 border border-red-500/50 text-red-500 p-3 rounded-xl text-center text-xs font-bold"
                                            >
                                                {mensajeStock}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <button
                                        onClick={agregarAlCarrito}
                                        className="w-full bg-[#00C1A3] text-[#050335] py-5 rounded-[1.5rem] font-black text-sm tracking-widest shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
                                    >
                                        AÑADIR AL TICKET
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* MODAL DE ERROR DE STOCK (EXTERNO) */}
            <AnimatePresence>
                {showErrorModal && (
                    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#0f172a] border border-white/10 w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl text-center"
                        >
                            <h2 className="text-[#00C1A3] font-black text-2xl mb-6 uppercase">
                                Stock insuficiente
                            </h2>

                            <div className="bg-white rounded-2xl p-6 mb-8 border-2 border-dashed border-blue-500 flex items-center justify-center">
                                <p className="text-[#050335] font-black text-xl">
                                    {mensajeStock}
                                </p>
                            </div>

                            <button
                                onClick={() => setShowErrorModal(false)}
                                className="w-full bg-[#00C1A3] hover:bg-[#00dcb9] text-[#050335] py-4 rounded-2xl font-black text-lg transition-all shadow-lg active:scale-95"
                            >
                                Aceptar
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* --- MODAL DE PAGO (NUEVO) --- */}
            <AnimatePresence>
                {showPagoModal && (
                    <div className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-[#0f172a] border border-white/10 w-full max-w-md rounded-[3rem] p-10 shadow-2xl"
                        >
                            <h2 className="text-[#00C1A3] font-black text-2xl mb-8 text-center uppercase italic">Finalizar Venta</h2>

                            <div className="space-y-6">
                                <div className="text-center">
                                    <p className="text-[10px] font-black opacity-40 uppercase tracking-widest mb-2">Total a Cobrar</p>
                                    <p className="text-6xl font-black text-white">${totalVenta.toFixed(2)}</p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black opacity-40 uppercase ml-2">Efectivo Recibido</label>
                                    <input
                                        type="number"
                                        autoFocus
                                        className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl font-black text-4xl text-center outline-none focus:ring-2 ring-[#00C1A3] text-[#00C1A3]"
                                        placeholder="0.00"
                                        value={montoRecibido}
                                        onChange={(e) => setMontoRecibido(e.target.value)}
                                    />
                                </div>

                                {Number(montoRecibido) >= totalVenta && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#00C1A3]/10 border border-[#00C1A3]/20 p-6 rounded-2xl text-center">
                                        <p className="text-[10px] font-black text-[#00C1A3] uppercase mb-1">Cambio para el cliente</p>
                                        <p className="text-4xl font-black text-[#00C1A3]">${(Number(montoRecibido) - totalVenta).toFixed(2)}</p>
                                    </motion.div>
                                )}

                                <div className="flex gap-4">
                                    <button onClick={() => setShowPagoModal(false)} className="flex-1 bg-white/5 hover:bg-white/10 py-5 rounded-2xl font-black text-xs uppercase transition-all">Cancelar</button>
                                    <button
                                        disabled={Number(montoRecibido) < totalVenta}
                                        onClick={procesarPago}
                                        className="flex-[2] bg-[#00C1A3] disabled:opacity-30 text-[#050335] py-5 rounded-2xl font-black text-xs uppercase shadow-lg shadow-[#00C1A3]/20 transition-all"
                                    >
                                        Confirmar Venta
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* --- AGREGA ESTO AL FINAL, ANTES DEL ÚLTIMO </div> --- */}
            <AnimatePresence>
                {statusModal.open && (
                    <div className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-[#0f172a] border border-white/10 w-full max-w-sm rounded-[2.5rem] p-8 text-center shadow-2xl"
                        >
                            <h2 className="text-[#00C1A3] font-black text-2xl mb-6 uppercase tracking-tighter">
                                {statusModal.title}
                            </h2>

                            {/* Cuadro blanco del cambio estilo "ticket" */}
                            <div className="bg-white rounded-3xl p-8 mb-8 border-2 border-dashed border-[#00C1A3] flex flex-col items-center justify-center">
                                <p className="text-[#050335] font-black text-4xl">
                                    {statusModal.message.split(': ')[1]}
                                </p>
                                <p className="text-[#050335]/40 font-bold text-[10px] uppercase mt-2">Su cambio</p>
                            </div>

                            <button
                                onClick={() => setStatusModal({ ...statusModal, open: false })}
                                className="w-full bg-[#00C1A3] text-[#050335] py-4 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-lg shadow-[#00C1A3]/20"
                            >
                                ACEPTAR
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div> // <--- AQUI cerramos el div principal al final de TODO
    );
};

export default ViewVentas;

