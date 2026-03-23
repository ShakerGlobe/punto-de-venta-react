import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search, ShoppingCart, Trash2, Plus, Minus,
    CreditCard, X, User, Scan, Sun, Moon, UserPlus, Barcode, Sparkles, ChevronRight
} from "lucide-react";

// --- COMPONENTE TUTORIAL (DISEÑO INICIO) ---
const TutorialCard = ({ step, onNext, totalSteps, currentIdx, position = "bottom", align = "center" }) => {
    const alignmentClasses = {
        center: "left-1/2 -translate-x-1/2",
        right: "right-0",
        left: "left-0"
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute z-[200] w-[280px] sm:w-[320px] bg-white rounded-[2.5rem] p-6 shadow-[0_20px_60px_rgba(0,193,163,0.5)] border-2 border-[#00C1A3] pointer-events-auto ${alignmentClasses[align]} ${position === "bottom" ? "top-full mt-4" : "bottom-full mb-4"
                }`}
        >
            <div className="flex gap-1 mb-4">
                {[...Array(totalSteps)].map((_, i) => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i <= currentIdx ? "w-6 bg-[#00C1A3]" : "w-2 bg-slate-200"}`} />
                ))}
            </div>
            <h4 className="text-[#050335] text-lg font-black flex items-center gap-2 mb-2 italic tracking-tight">
                <Sparkles size={18} className="text-[#00C1A3]" /> {step.title}
            </h4>
            <p className="text-slate-600 text-[13px] leading-relaxed mb-6 font-medium">{step.description}</p>
            <button onClick={onNext} className="w-full bg-[#050335] text-white py-3.5 rounded-2xl font-black text-[10px] flex items-center justify-center gap-2 hover:bg-[#00C1A3] hover:text-[#050335] transition-all uppercase tracking-widest">
                {currentIdx === totalSteps - 1 ? "Finalizar" : "Siguiente"}
                <ChevronRight size={14} />
            </button>
            <div className={`absolute ${align === 'center' ? 'left-1/2 -translate-x-1/2' : align === 'right' ? 'right-8' : 'left-8'} w-4 h-4 bg-white rotate-45 border-[#00C1A3] ${position === "bottom" ? "-top-2 border-l border-t" : "-bottom-2 border-r border-b"
                }`} />
        </motion.div>
    );
};

export const ViewVentas = ({ isDarkMode, toggleTheme }) => {
    // --- ESTADOS ORIGINALES ---
    const [productos] = useState([
        { id: 1, nombre: "Papas Chips", precio: 25.0, unidad: "PZ", stock: 10, codigo: "750101" },
        { id: 2, nombre: "Jamón", precio: 120.0, unidad: "KG", stock: 0.5, codigo: "750102" },
        { id: 3, nombre: "Coca Cola 600ml", precio: 18.0, unidad: "PZ", stock: 20, codigo: "750103" },
        { id: 4, nombre: "Leche Entera 1L", precio: 28.5, unidad: "PZ", stock: 15, codigo: "750104" },
        { id: 5, nombre: "Aguacate Hass", precio: 85.0, unidad: "KG", stock: 3.2, codigo: "750105" },
        { id: 6, nombre: "Detergente en Polvo 1kg", precio: 45.0, unidad: "PZ", stock: 8, codigo: "750106" },
    ]);
    const [carrito, setCarrito] = useState([]);
    const [cliente, setCliente] = useState("Cliente General");
    const [modalBusqueda, setModalBusqueda] = useState(false);
    const [terminoBusqueda, setTerminoBusqueda] = useState("");
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [cantidadInput, setCantidadInput] = useState(1);
    const [barcodeBuffer, setBarcodeBuffer] = useState("");
    const [isScanning, setIsScanning] = useState(false);
    const [mensajeStock, setMensajeStock] = useState("");
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showPagoModal, setShowPagoModal] = useState(false);
    const [montoRecibido, setMontoRecibido] = useState("");
    const [statusModal, setStatusModal] = useState({ open: false, title: "", message: "" });

    // --- ESTADOS TUTORIAL ---
    const [currentStep, setCurrentStep] = useState(0);
    const [isTutorialActive, setIsTutorialActive] = useState(true);

    const tutorialSteps = [
        { title: "El Cliente", description: "Identifica a quién le vendes. Nedimi permite gestionar clientes frecuentes fácilmente." },
        { title: "Cargar Productos", description: "Abre el catálogo para seleccionar los artículos de la venta." },
        { title: "Buscador", description: "Escribe el nombre o usa el icono de SCAN para simular el lector láser." },
        { title: "Definir Cantidad", description: "Ajusta las piezas o gramos. El sistema validará tu stock en tiempo real." },
        { title: "Gestión de Carrito", description: "Aquí puedes modificar cantidades directamente o eliminar productos." },
        { title: "Cierre y Cobro", description: "Ingresa el efectivo recibido y el sistema calculará el cambio exacto." },
        { title: "¡Venta Exitosa!", description: "Aquí verás el resumen del cambio. ¡Has completado el proceso de venta!" }
    ];

    const nextStep = () => {
        // 🔥 BLOQUEAR SOLO EN PASO DE PAGO
        if (isTutorialActive && currentStep === 5) {
            return; // No avanza si no ha dado clic en "Procesar pago"
        }

        if (currentStep === 1) setModalBusqueda(true);

        if (currentStep < tutorialSteps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsTutorialActive(false);
        }
    };

    // --- LÓGICA MANTENIDA CON FIXES ---
    const totalVenta = useMemo(() => carrito.reduce((acc, item) => acc + item.subtotal, 0), [carrito]);

    const simulateScan = () => {
        setIsScanning(true);
        setTimeout(() => {
            setProductoSeleccionado(productos[2]); setCantidadInput(1); setIsScanning(false);
            if (isTutorialActive && currentStep === 2) nextStep();
        }, 800);
    };

    const agregarAlCarrito = () => {
        const cant = productoSeleccionado.unidad === "KG" ? cantidadInput / 1000 : cantidadInput;
        setCarrito([...carrito, { ...productoSeleccionado, cantidadTicket: cant, subtotal: productoSeleccionado.precio * cant }]);
        setModalBusqueda(false); setProductoSeleccionado(null);
        if (isTutorialActive && currentStep === 3) nextStep();
    };

    // FIX 1: REGRESAR TUTORIAL SI ELIMINAN PRODUCTO
    const eliminarDelCarrito = (index) => {
        const nuevoCarrito = carrito.filter((_, idx) => idx !== index);
        setCarrito(nuevoCarrito);
        if (isTutorialActive && nuevoCarrito.length === 0 && currentStep >= 4) {
            setCurrentStep(1); // Regresa al paso de "Buscar Producto"
        }
    };

    const procesarPago = () => {
        const cambio = Number(montoRecibido) - totalVenta;
        setStatusModal({ open: true, title: "¡Venta Exitosa!", message: `Cambio: $${cambio.toFixed(2)}` });
        if (isTutorialActive && currentStep === 5) nextStep();
        setCarrito([]); setCliente("Cliente General"); setMontoRecibido(""); setShowPagoModal(false);
    };

    const actualizarCantidad = (index, delta) => {
        const nuevoCarrito = [...carrito];
        const item = nuevoCarrito[index];
        const paso = item.unidad === "KG" ? 0.1 : 1;
        let nuevaCantidad = item.cantidadTicket + (delta * paso);
        if (nuevaCantidad <= 0) return;
        item.cantidadTicket = nuevaCantidad; item.subtotal = item.precio * nuevaCantidad;
        setCarrito(nuevoCarrito);
    };

    const theme = {
        card: isDarkMode ? "bg-[#0f172a] border-white/5 shadow-2xl" : "bg-white border-slate-200 shadow-sm",
        text: isDarkMode ? "text-slate-200" : "text-slate-800",
        input: isDarkMode ? "bg-[#1e293b] text-white" : "bg-slate-100 text-slate-900",
        tableRow: isDarkMode ? "bg-white/[0.02] hover:bg-[#00C1A3]/5" : "bg-slate-50",
    };

    return (
        <div className={`space-y-6 transition-colors duration-500 ${theme.text} p-4 relative min-h-screen`}>

            {/* OVERLAY: Z-80 */}
            <AnimatePresence>
                {isTutorialActive && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#050335]/70 backdrop-blur-[2px] z-[80] pointer-events-none" />
                )}
            </AnimatePresence>

            <header className="flex justify-between items-center mb-8 relative z-[70]">
                <h1 className={`text-2xl font-black tracking-tight ${isDarkMode ? 'text-[#00C1A3]' : 'text-[#008f78]'}`}>Ventas</h1>
                <div className="flex items-center gap-3">
                    <button onClick={toggleTheme} className={`p-3 rounded-2xl border transition-all ${isDarkMode ? 'bg-[#0f172a] border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
                        {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-400" />}
                    </button>
                    <div className={`flex items-center gap-4 px-6 py-2 rounded-full border transition-all ${isDarkMode ? 'bg-[#0f172a] border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
                        <p className={`text-sm font-bold whitespace-nowrap ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Hola Nedimi Admin</p>
                        <div className="w-9 h-9 rounded-full bg-[#00C1A3] flex items-center justify-center text-[#050335] shadow-lg shadow-[#00C1A3]/20"><User size={18} strokeWidth={2.5} /></div>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                <div className="lg:col-span-2 space-y-8">

                    <section className={`${theme.card} p-7 rounded-[2rem] border relative ${isTutorialActive && currentStep === 0 ? 'z-[110] ring-4 ring-[#00C1A3] bg-white scale-[1.01]' : ''}`}>
                        <div className="flex flex-col md:flex-row gap-5 items-end">
                            <div className="flex-1 w-full space-y-2">
                                <label className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em] ml-1">Cliente</label>
                                <div className="relative">
                                    <UserPlus className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30 text-[#00C1A3]" size={18} />
                                    <input className={`w-full ${theme.input} border-none p-4 pl-12 rounded-2xl text-sm font-bold outline-none focus:ring-2 ring-[#00C1A3]/30 transition-all`} value={cliente} onChange={(e) => setCliente(e.target.value)} />
                                </div>
                            </div>
                            <div className={`relative ${isTutorialActive && currentStep === 1 ? 'z-[111]' : ''}`}>
                                <button onClick={() => setModalBusqueda(true)} className={`w-full md:w-auto bg-[#00C1A3] text-[#050335] px-8 py-4 rounded-2xl font-black text-xs tracking-widest flex items-center justify-center gap-3 transition-all ${isTutorialActive && currentStep === 1 ? 'ring-4 ring-white scale-105 shadow-2xl' : ''}`}>
                                    <ShoppingCart size={18} /> BUSCAR PRODUCTO
                                </button>
                                {isTutorialActive && currentStep === 1 && <TutorialCard step={tutorialSteps[1]} onNext={nextStep} totalSteps={tutorialSteps.length} currentIdx={currentStep} align="right" />}
                            </div>
                        </div>
                        {isTutorialActive && currentStep === 0 && <TutorialCard step={tutorialSteps[0]} onNext={nextStep} totalSteps={tutorialSteps.length} currentIdx={currentStep} align="left" />}
                    </section>

                    <section
                        className={`${theme.card} p-7 rounded-[2rem] border relative ${isTutorialActive && currentStep === 4
                            ? `z-[110] ring-4 ring-[#00C1A3] scale-[1.01] ${isDarkMode ? 'bg-[#0f172a]' : 'bg-white'
                            }`
                            : ''
                            }`}>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2 opacity-80"><Barcode size={18} className="text-[#00C1A3]" /><h2 className="font-black text-sm uppercase tracking-widest">Carrito de compras</h2></div>
                            <span className="text-[10px] font-black bg-[#00C1A3]/10 text-[#00C1A3] px-3 py-1 rounded-full border border-[#00C1A3]/20">{carrito.length} ITEMS</span>
                        </div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-5 px-5 text-[9px] font-black opacity-30 uppercase tracking-[0.2em]"><div className="col-span-1">Descripción</div><div className="text-center">Unitario</div><div className="text-center">Cantidad</div><div className="text-center">Total</div><div className="text-right"></div></div>
                            {carrito.map((item, i) => (
                                <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} key={i} className={`${theme.tableRow} grid grid-cols-5 items-center p-4 rounded-2xl border border-white/5 transition-all group`}>
                                    <div className="font-bold text-[#00C1A3] truncate">{item.nombre}</div>
                                    <div className="text-center font-bold text-sm opacity-60">${item.precio.toFixed(2)}</div>
                                    <div className="flex justify-center items-center">
                                        <div className="flex items-center bg-black/30 rounded-xl p-1 px-2 gap-3 border border-white/5">
                                            <button onClick={() => actualizarCantidad(i, -1)} className="text-white/40 hover:text-red-400"><Minus size={14} /></button>
                                            <span className="min-w-[50px] text-center text-[11px] font-black text-[#00C1A3]">{item.unidad === "KG" ? `${(item.cantidadTicket * 1000).toFixed(0)}g` : `${item.cantidadTicket} PZ`}</span>
                                            <button onClick={() => actualizarCantidad(i, 1)} className="text-white/40 hover:text-[#00C1A3]"><Plus size={14} /></button>
                                        </div>
                                    </div>
                                    <div className="text-center font-black text-sm">${item.subtotal.toFixed(2)}</div>
                                    <div className="flex justify-end"><button onClick={() => eliminarDelCarrito(i)} className="opacity-0 group-hover:opacity-100 text-red-500 p-2 rounded-xl transition-all"><Trash2 size={16} /></button></div>
                                </motion.div>
                            ))}
                            {carrito.length === 0 && <div className="py-24 text-center border-2 border-dashed border-white/5 rounded-[2rem] opacity-20 font-black uppercase tracking-[0.3em] text-xs">Escanee o busque un producto</div>}
                        </div>
                        {isTutorialActive && currentStep === 4 && <TutorialCard step={tutorialSteps[4]} onNext={nextStep} totalSteps={tutorialSteps.length} currentIdx={currentStep} align="center" />}
                    </section>
                </div>

                {/* PASO 6: PANEL DE COBRO (PERSISTENCIA DE BRILLO FIX) */}
                <div className="lg:col-span-1">
                    <div className={`${theme.card} p-8 rounded-[2.5rem] border sticky top-6 shadow-2xl relative ${isTutorialActive && currentStep === 5 ? 'z-[110] ring-4 ring-[#00C1A3] bg-white scale-[1.02]' : ''
                        }`}>
                        <div className="space-y-1 mb-10 text-center">
                            <p className="text-[10px] font-black opacity-40 uppercase tracking-widest">Total Neto</p>
                            <div className="text-7xl font-black text-[#00C1A3] tracking-tighter transition-all">${totalVenta.toFixed(2)}</div>
                        </div>
                        <button disabled={carrito.length === 0 && !isTutorialActive} onClick={() => {
                            setShowPagoModal(true);

                            if (isTutorialActive && currentStep === 5) {
                                setCurrentStep(6); // 🔥 ahora sí avanza al último paso
                            }
                        }} className="w-full bg-[#00C1A3] hover:bg-[#00E2C1] text-[#050335] py-6 rounded-3xl font-black text-sm flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-[#00C1A3]/20"><CreditCard size={22} /> PROCESAR PAGO</button>
                        {isTutorialActive && currentStep === 5 && <TutorialCard step={tutorialSteps[5]} onNext={nextStep} totalSteps={tutorialSteps.length} currentIdx={currentStep} position="bottom" />}
                    </div>
                </div>
            </div>

            {/* MODALES OPERATIVOS (Z-150+) */}
            <AnimatePresence>
                {modalBusqueda && (
                    <div className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
                        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className={`${isDarkMode ? 'bg-[#0f172a]' : 'bg-white'} border border-white/10 w-full max-w-lg rounded-[2.5rem] p-8 relative shadow-2xl`}>
                            <button onClick={() => { setModalBusqueda(false); setProductoSeleccionado(null); }} className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors"><X size={24} /></button>
                            {!productoSeleccionado ? (
                                <div className={`space-y-6 relative ${isTutorialActive && currentStep === 2 ? 'z-[160]' : ''}`}>
                                    <div className="flex items-center gap-3 text-[#00C1A3] font-black text-xl mb-8 italic"><Scan className="animate-pulse" /><span>BÚSQUEDA DE PRODUCTO</span></div>
                                    <div className="relative flex items-center">
                                        <Search className="absolute left-4 opacity-30" size={18} /><input autoFocus placeholder="Nombre o código..." className={`w-full ${theme.input} border border-white/5 p-5 pl-12 pr-28 rounded-2xl outline-none focus:ring-2 ring-[#00C1A3] font-bold`} value={terminoBusqueda} onChange={(e) => setTerminoBusqueda(e.target.value)} />
                                        <button onClick={simulateScan} className="absolute right-3 px-4 py-2 rounded-xl bg-[#00C1A3] text-[#050335] font-black text-[10px] flex items-center gap-1"><Scan size={14} />SCAN</button>
                                    </div>
                                    <div className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                                        {productos.map(p => (
                                            <button key={p.id} onClick={() => { setProductoSeleccionado(p); if (isTutorialActive) nextStep(); }} className="w-full text-left p-4 rounded-2xl flex justify-between items-center font-bold bg-white/5 hover:bg-[#00C1A3] hover:text-[#050335] transition-all group"><div><p className="text-sm">{p.nombre}</p></div><div className="text-right"><p className="text-[#00C1A3] group-hover:text-[#050335]">${p.precio.toFixed(2)}</p></div></button>
                                        ))}
                                    </div>
                                    {isTutorialActive && currentStep === 2 && <TutorialCard step={tutorialSteps[2]} onNext={nextStep} totalSteps={tutorialSteps.length} currentIdx={currentStep} position="bottom" />}
                                </div>
                            ) : (
                                <div className={`space-y-6 relative ${isTutorialActive && currentStep === 3 ? 'z-[160]' : ''}`}>
                                    <div className="p-7 bg-[#00C1A3]/10 rounded-[2rem] border border-[#00C1A3]/20 text-center"><p className="text-[#00C1A3] font-black text-3xl mb-1 uppercase">{productoSeleccionado.nombre}</p></div>
                                    <input type="number" autoFocus className="w-full bg-black/40 border border-white/10 p-7 rounded-[2rem] font-black text-6xl text-center outline-none focus:border-[#00C1A3] text-[#00C1A3]" value={cantidadInput} onChange={(e) => setCantidadInput(Number(e.target.value))} />
                                    <button onClick={agregarAlCarrito} className="w-full bg-[#00C1A3] text-[#050335] py-5 rounded-[2rem] font-black text-lg shadow-xl active:scale-95 transition-all">AÑADIR AL TICKET</button>
                                    {isTutorialActive && currentStep === 3 && <TutorialCard step={tutorialSteps[3]} onNext={nextStep} totalSteps={tutorialSteps.length} currentIdx={currentStep} position="top" />}
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* STATUS MODAL (FINAL DE LA GUÍA) */}
            <AnimatePresence>
                {statusModal.open && (
                    <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 backdrop-blur-md">
                        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className={`bg-[#0f172a] border-2 border-[#00C1A3] w-full max-w-sm rounded-[2.5rem] p-8 text-center shadow-2xl relative ${isTutorialActive ? 'z-[210]' : ''}`}>
                            <h2 className="text-[#00C1A3] font-black text-2xl mb-6 uppercase tracking-tighter italic">{statusModal.title}</h2>
                            <div className="bg-white rounded-3xl p-8 mb-8 border-2 border-dashed border-[#00C1A3]"><p className="text-[#050335] font-black text-4xl">{statusModal.message.split(': ')[1]}</p></div>
                            <button onClick={() => setStatusModal({ ...statusModal, open: false })} className="w-full bg-[#00C1A3] text-[#050335] py-4 rounded-2xl font-black text-lg">ACEPTAR</button>
                            {isTutorialActive && currentStep === 6 && <TutorialCard step={tutorialSteps[6]} onNext={nextStep} totalSteps={tutorialSteps.length} currentIdx={currentStep} position="top" />}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* MODAL PAGO ORIGINAL */}
            <AnimatePresence>
                {showPagoModal && (
                    <div className="fixed inset-0 z-[150] bg-black/90 flex items-center justify-center p-4">
                        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#0f172a] border border-white/10 w-full max-w-md rounded-[3rem] p-10 shadow-2xl text-center">
                            <h2 className="text-[#00C1A3] font-black text-2xl mb-8 uppercase italic tracking-tight">Finalizar Venta</h2>
                            <p className="text-6xl font-black text-white mb-6">${totalVenta.toFixed(2)}</p>
                            <input autoFocus type="number" className="w-full bg-white/5 p-6 rounded-2xl font-black text-4xl text-center text-[#00C1A3] outline-none" value={montoRecibido} onChange={(e) => setMontoRecibido(e.target.value)} placeholder="0.00" />
                            <div className="flex gap-4 mt-8">
                                <button onClick={() => setShowPagoModal(false)} className="flex-1 bg-white/5 py-5 rounded-2xl font-black text-xs uppercase">Cancelar</button>
                                <button disabled={Number(montoRecibido) < totalVenta} onClick={procesarPago} className="flex-[2] bg-[#00C1A3] text-[#050335] py-5 rounded-2xl font-black text-xs uppercase">Confirmar Venta</button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ViewVentas;