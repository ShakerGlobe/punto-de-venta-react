import React, { useState, useEffect } from "react";
import { 
    CalendarDays, FileSpreadsheet, BarChart2, Receipt, Package, 
    Scale, DollarSign, TrendingUp, CalendarRange, Calendar as CalendarIcon,
    PieChart, ShoppingBag, Star, Ticket, Sparkles, ChevronRight, X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- COMPONENTE TUTORIAL CARD (BLINDADO) ---
const TutorialCard = ({ step, onNext, onSkip, totalSteps, currentIdx, position = "bottom" }) => {
    // Seguro de vida para Vite: Si por alguna recarga rápida no hay paso, no renderiza
    if (!step) return null; 

    const align = step.align || "center";
    
    let alignmentClasses = "left-1/2 -translate-x-1/2";
    let triangleClasses = "left-1/2 -translate-x-1/2";

    if (align === "right") {
        alignmentClasses = "right-0"; 
        triangleClasses = "right-8";  
    } else if (align === "left") {
        alignmentClasses = "left-0";  
        triangleClasses = "left-8";
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: position === "bottom" ? 15 : -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: position === "bottom" ? 15 : -15, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`absolute z-[120] w-[320px] bg-white rounded-[2.5rem] p-6 shadow-[0_25px_60px_-15px_rgba(0,193,163,0.3)] border border-[#00C1A3]/30 pointer-events-auto ${alignmentClasses} ${
                position === "bottom" ? "mt-6 top-full" : "mb-6 bottom-full"
            }`}
        >
            <div className="flex gap-1 mb-4">
                {[...Array(totalSteps)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ width: i === currentIdx ? 24 : 6, backgroundColor: i === currentIdx ? "#00C1A3" : "#E2E8F0" }}
                        className="h-1 rounded-full"
                    />
                ))}
            </div>

            <div className="flex justify-between items-start mb-2">
                <h4 className="text-[#050335] text-lg font-black flex items-center gap-2 tracking-tight">
                    <Sparkles size={18} className="text-[#00C1A3]" />
                    {step.title}
                </h4>
                <button onClick={onSkip} className="text-slate-300 hover:text-red-500 transition-colors p-1">
                    <X size={18} />
                </button>
            </div>

            <p className="text-slate-600 text-[13px] leading-relaxed mb-6 font-medium">
                {step.description}
            </p>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onNext}
                className="w-full bg-[#050335] text-white py-3.5 rounded-2xl font-black text-[11px] flex items-center justify-center gap-2 hover:bg-[#00C1A3] hover:text-[#050335] transition-all group tracking-widest uppercase"
            >
                {currentIdx === totalSteps - 1 ? "Entendido" : "Siguiente"}
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <div className={`absolute w-4 h-4 bg-white rotate-45 border-[#00C1A3]/20 ${triangleClasses} ${
                position === "bottom" ? "-top-2 border-l border-t" : "-bottom-2 border-r border-b"
            }`} />
        </motion.div>
    );
};

export const ViewReportes = ({ activePage }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isTutorialActive, setIsTutorialActive] = useState(true);

    const isDia = activePage === 'reportes_dia';
    const isSemana = activePage === 'reportes_semanal';
    const isMes = activePage === 'reportes_mensual';
    const isGeneral = activePage === 'reportes_general';

    // --- LÓGICA DE TEXTOS ÚNICOS ---
    let steps = [];
    if (isDia) {
        steps = [
            { id: "filtros", title: "Auditoría Diaria", description: "Selecciona el día exacto que deseas consultar. El sistema procesará los movimientos de toda la jornada al instante.", align: "left" },
            { id: "resumen", title: "Corte de Caja", description: "Revisa tus ingresos totales y tu ganancia neta libre de costos, la herramienta perfecta para cuadrar tu caja al final del día.", align: "center" },
            { id: "desglose", title: "Detalle por Folio", description: "Inspecciona cada venta individual. Aquí ves exactamente a qué hora fue, qué artículos se llevaron y la utilidad de ese ticket en específico.", align: "center" },
            { id: "exportar", title: "Respaldo en Excel", description: "Descarga la lista de folios en Excel, formateada y lista para archivar o enviar a tu contador.", align: "right" }
        ];
    } else if (isSemana) {
        steps = [
            { id: "filtros", title: "Rango Automático", description: "Elige una fecha de inicio y el sistema calculará los 7 días automáticamente para rastrear todos tus folios de la semana.", align: "left" },
            { id: "resumen", title: "Rendimiento Semanal", description: "Analiza tu volumen de ventas y descubre el acumulado de ganancia neta. Perfecto para pagar nóminas o resurtir inventario.", align: "center" },
            { id: "desglose", title: "Auditoría de Folios", description: "Supervisa cada transacción de la semana. Un historial completo y transparente para aclarar cualquier anomalía de días anteriores.", align: "center" },
            { id: "exportar", title: "Exportación Contable", description: "Exporta el historial completo de los folios semanales a Excel con un solo clic.", align: "right" }
        ];
    } else if (isMes) {
        steps = [
            { id: "filtros", title: "Cierre Mensual", description: "Selecciona el mes y año. El sistema agrupará miles de folios y movimientos en fracción de segundos, sin bloqueos.", align: "left" },
            { id: "resumen", title: "Volumen Masivo", description: "Visualiza la magnitud real de piezas y kilos desplazados en el mes, junto con la utilidad neta mensual global.", align: "center" },
            { id: "desglose", title: "Sábana de Movimientos", description: "El registro total de los folios del mes. Rastrea y audita todas las ventas generadas en los últimos 30 días en un solo lugar.", align: "center" },
            { id: "exportar", title: "Reporte de Contador", description: "Descarga la sábana completa de folios mensuales en formato Excel para tu declaración mensual de impuestos.", align: "right" }
        ];
    } else if (isGeneral) {
        steps = [
            { id: "filtros", title: "Análisis Personalizado", description: "Define un rango de fechas libre (quincenal, bimestral, anual) para un análisis profundo del rendimiento general de tu empresa.", align: "left" },
            { id: "resumen", title: "Dashboard Ejecutivo", description: "Observa un resumen rápido con tus ingresos, ganancias, volumen de pedidos y el producto estrella del periodo.", align: "center" },
            { id: "top5", title: "Ranking de Ventas", description: "Conoce el 'Top 5' de productos que más dinero le dejan a tu negocio. Ideal para asegurar stock y planear promociones.", align: "center" },
            { id: "tickets", title: "Flujo en Tiempo Real", description: "Monitorea los folios y tickets más recientes al instante para mantener el pulso de la operación de tus cajas.", align: "center" },
            { id: "exportar", title: "Exportación Ejecutiva", description: "Descarga todo este resumen de métricas y el ranking de productos en un Excel limpio, profesional y listo para imprimir.", align: "right" }
        ];
    }

    const nextStep = () => {
        if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
        else setIsTutorialActive(false);
    };

    // --- ESTADOS PARA FECHAS Y DATOS ---
    const [fechaDia, setFechaDia] = useState(new Date().toISOString().split('T')[0]);
    const [fechaInicioSemana, setFechaInicioSemana] = useState(new Date().toISOString().split('T')[0]);
    const [fechaFinSemana, setFechaFinSemana] = useState('');
    const [mesSeleccionado, setMesSeleccionado] = useState(new Date().getMonth() + 1); 
    const [anioSeleccionado, setAnioSeleccionado] = useState(new Date().getFullYear());
    const [fechaInicioGeneral, setFechaInicioGeneral] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0]);
    const [fechaFinGeneral, setFechaFinGeneral] = useState(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).toISOString().split('T')[0]);

    const [reporteDiaData, setReporteDiaData] = useState(null);
    const [reporteSemanaData, setReporteSemanaData] = useState(null);
    const [reporteMesData, setReporteMesData] = useState(null);
    const [reporteGeneralData, setReporteGeneralData] = useState(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const mesesNombres = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    useEffect(() => {
        if (fechaInicioSemana) {
            const fInicio = new Date(fechaInicioSemana + "T00:00:00");
            fInicio.setDate(fInicio.getDate() + 6); 
            const y = fInicio.getFullYear();
            const m = String(fInicio.getMonth() + 1).padStart(2, '0');
            const d = String(fInicio.getDate()).padStart(2, '0');
            setFechaFinSemana(`${y}-${m}-${d}`);
        }
    }, [fechaInicioSemana]);

    const handleGenerar = (e) => {
        if(e) e.preventDefault();
        setIsGenerating(true);
        
        setTimeout(() => {
            if (isDia) {
                setReporteDiaData({
                    resumen: { totalVentas: 45, totalPiezas: 128, totalKilos: 15.450, totalGenerado: 8450.50, gananciaNeta: 2340.20 },
                    detalle: [
                        { folio: "00102", hora: "08:15", cliente: "Público General", detalles: "(2 PZA) Coca Cola 600ml | (1 PZA) Sabritas Sal 40g", piezas: 3, kilos: 0, total: 65.00, ganancia: 18.50 },
                        { folio: "00103", hora: "09:30", cliente: "Juan Pérez", detalles: "(1.5 KG) Jitomate Saladette | (0.5 KG) Cebolla Blanca", piezas: 0, kilos: 2.000, total: 74.50, ganancia: 25.00 },
                        { folio: "00104", hora: "11:45", cliente: "María López", detalles: "(1 PZA) Leche Entera 1L", piezas: 1, kilos: 0, total: 28.00, ganancia: 8.50 },
                    ]
                });
            } else if (isSemana) {
                setReporteSemanaData({
                    resumen: { totalVentas: 312, totalPiezas: 945, totalKilos: 110.250, totalGenerado: 58450.00, gananciaNeta: 16340.50 },
                    detalle: [
                        { folio: "00095", fecha: "20/03/26", hora: "07:30", cliente: "Taquería El Güero", detalles: "(15 KG) Tortilla de Maíz | (5 PZA) Refresco 3L", piezas: 5, kilos: 15.000, total: 650.00, ganancia: 180.00 },
                        { folio: "00096", fecha: "21/03/26", hora: "10:15", cliente: "Público General", detalles: "(3 PZA) Leche 1L | (2 PZA) Pan Blanco", piezas: 5, kilos: 0, total: 120.00, ganancia: 35.50 },
                    ]
                });
            } else if (isMes) {
                setReporteMesData({
                    resumen: { totalVentas: 1245, totalPiezas: 3840, totalKilos: 450.800, totalGenerado: 245890.00, gananciaNeta: 68450.75 },
                    detalle: [
                        { folio: "00010", fecha: "02/03/26", hora: "11:20", cliente: "Público General", detalles: "(10 PZA) Cerveza Lata | (2 PZA) Botanas", piezas: 12, kilos: 0, total: 320.00, ganancia: 85.00 },
                        { folio: "00145", fecha: "15/03/26", hora: "16:40", cliente: "Abarrotes Don Pepe", detalles: "(50 KG) Azúcar | (20 KG) Frijol", piezas: 0, kilos: 70.000, total: 2150.00, ganancia: 430.00 },
                    ]
                });
            } else if (isGeneral) {
                setReporteGeneralData({
                    metricas: { ventasTotales: 345890.50, gananciaNeta: 98450.25, pedidos: 1845, productoTop: { nombre: "Coca Cola 600ml", vendidos: 1240, unidad: "PZA" } },
                    topProductos: [
                        { nombre: "Coca Cola 600ml", categoria: "Bebidas", cantidad: 1240, unidad: "PZA", total: 22320.00 },
                        { nombre: "Tortilla de Maíz", categoria: "Abarrotes", cantidad: 850.500, unidad: "KG", total: 18711.00 },
                        { nombre: "Leche Entera 1L", categoria: "Lácteos", cantidad: 645, unidad: "PZA", total: 16125.00 },
                        { nombre: "Huevo Blanco", categoria: "Abarrotes", cantidad: 410.200, unidad: "KG", total: 15587.60 },
                        { nombre: "Pan Dulce Variado", categoria: "Panadería", cantidad: 980, unidad: "PZA", total: 14700.00 },
                    ],
                    ultimosTickets: [
                        { folio: "01845", fecha: "23/03/2026", hora: "13:45", total: 345.50 },
                        { folio: "01844", fecha: "23/03/2026", hora: "13:30", total: 85.00 },
                        { folio: "01843", fecha: "23/03/2026", hora: "13:15", total: 1240.00 },
                        { folio: "01842", fecha: "23/03/2026", hora: "12:50", total: 45.50 },
                        { folio: "01841", fecha: "23/03/2026", hora: "12:40", total: 210.00 },
                    ]
                });
            }
            setIsGenerating(false);
        }, 600);
    };

    const handleExportarExcel = () => {
        let nombreArchivo = "";
        if (isDia) nombreArchivo = `Reporte_Folios_${fechaDia}.xlsx`;
        if (isSemana) nombreArchivo = `Reporte_Semanal_Folios_${fechaInicioSemana}.xlsx`;
        if (isMes) nombreArchivo = `Ventas_Mensual_Folios_${anioSeleccionado}_${mesSeleccionado}.xlsx`;
        if (isGeneral) nombreArchivo = `reporte_general_${fechaInicioGeneral}_${fechaFinGeneral}.xlsx`;
        
        alert(`Simulando descarga de: ${nombreArchivo}`);
    };

    useEffect(() => {
        handleGenerar();
        setIsTutorialActive(true);
        setCurrentStep(0);
        // eslint-disable-next-line
    }, [activePage]);

    let currentData = null;
    let tituloReporte = "";
    let subtituloReporte = "";
    let iconoPrincipal = <Receipt className="text-white" size={28} />;

    if (isDia) {
        currentData = reporteDiaData;
        tituloReporte = "Reporte Diario de Ventas";
        subtituloReporte = "Consulta el desglose de ventas de un día específico.";
        iconoPrincipal = <Receipt className="text-[#17c3a5]" size={28} />;
    } else if (isSemana) {
        currentData = reporteSemanaData;
        tituloReporte = "Reporte Semanal de Ventas";
        subtituloReporte = "Consulta el historial filtrado por un rango de 7 días.";
        iconoPrincipal = <CalendarRange className="text-[#3381DF]" size={28} />;
    } else if (isMes) {
        currentData = reporteMesData;
        tituloReporte = "Reporte Mensual de Ventas";
        subtituloReporte = "Control y resumen financiero por mes y año.";
        iconoPrincipal = <CalendarIcon className="text-purple-400" size={28} />;
    } else if (isGeneral) {
        currentData = reporteGeneralData;
        tituloReporte = "Reporte General Analítico";
        subtituloReporte = "Resumen integral de métricas y rendimiento por empresa.";
        iconoPrincipal = <PieChart className="text-amber-400" size={28} />;
    }

    const isDataReady = currentData !== null;
    const isExportStep = isTutorialActive && steps.length > 0 && currentStep === steps.length - 1;

    return (
        <div className="relative p-8 space-y-8 h-full flex flex-col custom-scroll overflow-y-auto text-white">
            
            <AnimatePresence>
                {isTutorialActive && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#050335]/60 backdrop-blur-[3px] z-[100] pointer-events-auto"
                        onClick={() => setIsTutorialActive(false)}
                    />
                )}
            </AnimatePresence>

            <div className="relative z-10">
                <h2 className="text-2xl font-bold font-outfit flex items-center gap-3">
                    {iconoPrincipal}
                    {tituloReporte}
                </h2>
                <p className="text-slate-400 text-sm mt-1">{subtituloReporte}</p>
            </div>

            <form 
                onSubmit={handleGenerar} 
                className={`bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-wrap items-end gap-4 transition-all duration-500 
                ${isTutorialActive && (currentStep === 0 || isExportStep) ? 'relative z-[101]' : 'relative z-10'}
                ${isTutorialActive && currentStep === 0 ? 'ring-2 ring-[#00C1A3]/50 scale-[1.01] bg-[#00C1A3]/5 shadow-2xl' : ''}`}
            >
                {/* Inputs de Fechas */}
                {isDia && (
                    <div className="flex-1 min-w-[200px]">
                        <label className="text-xs text-slate-400 uppercase font-bold mb-2 block">Fecha a consultar</label>
                        <div className="relative">
                            <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                            <input type="date" required value={fechaDia} onChange={(e) => setFechaDia(e.target.value)} className="w-full bg-black/20 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-[#17c3a5] transition-colors" />
                        </div>
                    </div>
                )}
                
                {isSemana && (
                    <>
                        <div className="flex-1 min-w-[180px]">
                            <label className="text-xs text-slate-400 uppercase font-bold mb-2 block">Desde</label>
                            <div className="relative">
                                <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                                <input type="date" required value={fechaInicioSemana} onChange={(e) => setFechaInicioSemana(e.target.value)} className="w-full bg-black/20 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-[#3381DF] transition-colors" />
                            </div>
                        </div>
                        <div className="flex-1 min-w-[180px]">
                            <label className="text-xs text-slate-400 uppercase font-bold mb-2 block">Hasta (Automático)</label>
                            <div className="relative">
                                <CalendarRange className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={18} />
                                <input type="date" readOnly value={fechaFinSemana} className="w-full bg-black/10 border border-white/5 rounded-xl py-2.5 pl-10 pr-4 text-slate-400 cursor-not-allowed" />
                            </div>
                        </div>
                    </>
                )}

                {isMes && (
                    <>
                        <div className="flex-1 min-w-[180px]">
                            <label className="text-xs text-slate-400 uppercase font-bold mb-2 block">Mes</label>
                            <div className="relative">
                                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                                <select value={mesSeleccionado} onChange={(e) => setMesSeleccionado(parseInt(e.target.value))} className="w-full bg-black/20 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-purple-400 transition-colors appearance-none">
                                    {mesesNombres.map((nombre, index) => <option key={index + 1} value={index + 1} className="bg-[#020617] text-white">{nombre}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="w-[120px]">
                            <label className="text-xs text-slate-400 uppercase font-bold mb-2 block">Año</label>
                            <input type="number" required min="2000" max="2100" value={anioSeleccionado} onChange={(e) => setAnioSeleccionado(parseInt(e.target.value))} className="w-full bg-black/20 border border-white/10 rounded-xl py-2.5 px-4 text-white focus:outline-none focus:border-purple-400 transition-colors" />
                        </div>
                    </>
                )}

                {isGeneral && (
                    <>
                        <div className="flex-1 min-w-[180px]">
                            <label className="text-xs text-slate-400 uppercase font-bold mb-2 block">Desde</label>
                            <div className="relative">
                                <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                                <input type="date" required value={fechaInicioGeneral} onChange={(e) => setFechaInicioGeneral(e.target.value)} className="w-full bg-black/20 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-amber-400 transition-colors" />
                            </div>
                        </div>
                        <div className="flex-1 min-w-[180px]">
                            <label className="text-xs text-slate-400 uppercase font-bold mb-2 block">Hasta</label>
                            <div className="relative">
                                <CalendarRange className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                                <input type="date" required value={fechaFinGeneral} onChange={(e) => setFechaFinGeneral(e.target.value)} className="w-full bg-black/20 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-amber-400 transition-colors" />
                            </div>
                        </div>
                    </>
                )}

                <div className="flex gap-3 mt-4 w-full md:w-auto">
                    <button type="submit" disabled={isGenerating} className={`flex-1 md:flex-none flex items-center justify-center gap-2 text-black font-semibold px-5 py-2.5 rounded-xl transition-all disabled:opacity-50 
                            ${isDia ? 'bg-[#17c3a5] hover:bg-[#14a88e]' : ''} ${isSemana ? 'bg-[#3381DF] hover:bg-[#2868b5]' : ''}
                            ${isMes ? 'bg-purple-400 hover:bg-purple-500' : ''} ${isGeneral ? 'bg-amber-400 hover:bg-amber-500' : ''}
                        `}>
                        <BarChart2 size={18} /> {isGenerating ? 'Calculando...' : 'Generar'}
                    </button>
                    
                    <div className={`transition-all duration-500 ${isExportStep ? 'relative z-[102] scale-110 ring-2 ring-green-500/50 rounded-xl bg-green-500/10' : ''}`}>
                        <button type="button" onClick={handleExportarExcel} disabled={!isDataReady} className="flex items-center justify-center gap-2 bg-green-600/20 text-green-400 border border-green-500/30 hover:bg-green-600/30 font-semibold px-5 py-2.5 rounded-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                            <FileSpreadsheet size={18} /> Excel
                        </button>
                        {isExportStep && <TutorialCard step={steps[currentStep]} onNext={nextStep} onSkip={() => setIsTutorialActive(false)} totalSteps={steps.length} currentIdx={currentStep} position="bottom" />}
                    </div>
                </div>

                {isTutorialActive && currentStep === 0 && <TutorialCard step={steps[0]} onNext={nextStep} onSkip={() => setIsTutorialActive(false)} totalSteps={steps.length} currentIdx={currentStep} position="bottom" />}
            </form>

            {isDataReady && (
                <div className="space-y-8 animate-in fade-in duration-500">
                    <div className="flex items-center gap-2 relative z-10">
                        <span className={`w-2 h-2 rounded-full animate-pulse 
                            ${isDia ? 'bg-[#17c3a5]' : ''} ${isSemana ? 'bg-[#3381DF]' : ''}
                            ${isMes ? 'bg-purple-400' : ''} ${isGeneral ? 'bg-amber-400' : ''}
                        `}></span>
                        <p className="text-slate-300">
                            Resultados: <strong className="text-white">
                                {isDia && fechaDia} {isSemana && `${fechaInicioSemana} al ${fechaFinSemana}`}
                                {isMes && `${mesesNombres[mesSeleccionado - 1]} del ${anioSeleccionado}`} {isGeneral && `${fechaInicioGeneral} al ${fechaFinGeneral}`}
                            </strong>
                        </p>
                    </div>

                    {(isDia || isSemana || isMes) && (
                        <>
                            <div className={`grid grid-cols-2 md:grid-cols-5 gap-4 transition-all duration-500 ${isTutorialActive && currentStep === 1 ? 'relative z-[101] ring-2 ring-[#00C1A3]/50 scale-[1.01] bg-[#00C1A3]/5 p-2 rounded-[1.5rem] shadow-2xl' : 'relative z-10'}`}>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-slate-400 mb-1"><Receipt size={16} /> <span className="text-xs uppercase">Ventas</span></div>
                                    <p className="text-2xl font-bold">{currentData.resumen.totalVentas}</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-[#3381DF] mb-1"><DollarSign size={16} /> <span className="text-xs uppercase">Bruto</span></div>
                                    <p className="text-2xl font-bold text-[#3381DF]">${currentData.resumen.totalGenerado.toLocaleString('es-MX', {minimumFractionDigits: 2})}</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-[#17c3a5] mb-1"><TrendingUp size={16} /> <span className="text-xs uppercase">Ganancia</span></div>
                                    <p className="text-2xl font-bold text-[#17c3a5]">${currentData.resumen.gananciaNeta.toLocaleString('es-MX', {minimumFractionDigits: 2})}</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-slate-400 mb-1"><Package size={16} /> <span className="text-xs uppercase">Piezas</span></div>
                                    <p className="text-xl font-bold">{currentData.resumen.totalPiezas}</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-slate-400 mb-1"><Scale size={16} /> <span className="text-xs uppercase">Kilos</span></div>
                                    <p className="text-xl font-bold">{currentData.resumen.totalKilos.toFixed(3)}</p>
                                </div>

                                {isTutorialActive && currentStep === 1 && <TutorialCard step={steps[1]} onNext={nextStep} onSkip={() => setIsTutorialActive(false)} totalSteps={steps.length} currentIdx={currentStep} position="top" />}
                            </div>

                            <div className={`transition-all duration-500 relative ${isTutorialActive && currentStep === 2 ? 'z-[101] ring-2 ring-[#00C1A3]/50 scale-[1.01] shadow-2xl' : 'z-10'}`}>
                                <div className="bg-black/20 border border-white/5 rounded-2xl overflow-hidden">
                                    <div className="p-5 border-b border-white/5"><h3 className="text-lg font-bold text-slate-200">Desglose por Folio</h3></div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-white/5 text-slate-400 text-sm">
                                                    <th className="p-4 font-semibold">Folio</th>
                                                    {(isSemana || isMes) && <th className="p-4 font-semibold">Fecha</th>}
                                                    <th className="p-4 font-semibold">Hora</th>
                                                    <th className="p-4 font-semibold">Cliente</th>
                                                    <th className="p-4 font-semibold min-w-[250px]">Detalle</th>
                                                    <th className="p-4 font-semibold text-center">PZ</th>
                                                    <th className="p-4 font-semibold text-center">KG</th>
                                                    <th className="p-4 font-semibold text-right">Total</th>
                                                    <th className="p-4 font-semibold text-right text-[#17c3a5]">Ganancia</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm divide-y divide-white/5">
                                                {currentData.detalle.map((row, index) => (
                                                    <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                                                        <td className="p-4 font-bold text-white">#{row.folio}</td>
                                                        {(isSemana || isMes) && <td className="p-4 text-slate-300">{row.fecha}</td>}
                                                        <td className="p-4 text-slate-400">{row.hora}</td>
                                                        <td className="p-4">{row.cliente}</td>
                                                        <td className="p-4 text-slate-400 text-xs leading-relaxed">{row.detalles}</td>
                                                        <td className="p-4 text-center">{row.piezas > 0 ? row.piezas : '-'}</td>
                                                        <td className="p-4 text-center">{row.kilos > 0 ? row.kilos.toFixed(3) : '-'}</td>
                                                        <td className="p-4 text-right font-semibold">${row.total.toFixed(2)}</td>
                                                        <td className="p-4 text-right font-semibold text-[#17c3a5]">${row.ganancia.toFixed(2)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {isTutorialActive && currentStep === 2 && <TutorialCard step={steps[2]} onNext={nextStep} onSkip={() => setIsTutorialActive(false)} totalSteps={steps.length} currentIdx={currentStep} position="top" />}
                            </div>
                        </>
                    )}

                    {isGeneral && (
                        <div className="space-y-6">
                            <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 transition-all duration-500 ${isTutorialActive && currentStep === 1 ? 'relative z-[101] ring-2 ring-amber-400/50 scale-[1.01] bg-amber-400/5 p-2 rounded-[1.5rem] shadow-2xl' : 'relative z-10'}`}>
                                <div className="bg-[#17c3a5]/10 border border-[#17c3a5]/30 p-5 rounded-2xl flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#17c3a5]/20 flex items-center justify-center text-[#17c3a5]"><DollarSign size={24} /></div>
                                    <div><p className="text-slate-400 text-xs uppercase font-bold">Total Ventas</p><p className="text-2xl font-bold text-white">${currentData.metricas.ventasTotales.toLocaleString('es-MX', {minimumFractionDigits: 2})}</p></div>
                                </div>
                                <div className="bg-[#3381DF]/10 border border-[#3381DF]/30 p-5 rounded-2xl flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#3381DF]/20 flex items-center justify-center text-[#3381DF]"><TrendingUp size={24} /></div>
                                    <div><p className="text-slate-400 text-xs uppercase font-bold">Ganancia Neta</p><p className="text-2xl font-bold text-white">${currentData.metricas.gananciaNeta.toLocaleString('es-MX', {minimumFractionDigits: 2})}</p></div>
                                </div>
                                <div className="bg-amber-400/10 border border-amber-400/30 p-5 rounded-2xl flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400"><ShoppingBag size={24} /></div>
                                    <div><p className="text-slate-400 text-xs uppercase font-bold">Pedidos</p><p className="text-2xl font-bold text-white">{currentData.metricas.pedidos}</p></div>
                                </div>
                                <div className="bg-purple-400/10 border border-purple-400/30 p-5 rounded-2xl flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center text-purple-400"><Star size={24} /></div>
                                    <div><p className="text-slate-400 text-xs uppercase font-bold">Top</p><p className="text-sm font-bold text-white truncate max-w-[120px]">{currentData.metricas.productoTop.nombre}</p></div>
                                </div>

                                {isTutorialActive && currentStep === 1 && <TutorialCard step={steps[1]} onNext={nextStep} onSkip={() => setIsTutorialActive(false)} totalSteps={steps.length} currentIdx={currentStep} position="top" />}
                            </div>

                            {/* SOLUCIÓN: Eliminado el "relative z-10" de este grid padre para evitar atrapar los z-index de las tarjetas */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                
                                <div className={`transition-all duration-500 lg:col-span-2 relative ${isTutorialActive && currentStep === 2 ? 'z-[101] ring-2 ring-amber-400/50 scale-[1.01] shadow-2xl' : 'z-10'}`}>
                                    <div className="bg-black/20 border border-white/5 rounded-2xl overflow-hidden h-full">
                                        <div className="p-5 border-b border-white/5"><h3 className="text-lg font-bold text-slate-200">Top 5 Productos Más Vendidos</h3></div>
                                        <div className="overflow-x-auto p-4">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="text-slate-400 text-sm border-b border-white/10">
                                                        <th className="pb-3 font-semibold">Producto</th>
                                                        <th className="pb-3 font-semibold">Categoría</th>
                                                        <th className="pb-3 font-semibold">Cantidad</th>
                                                        <th className="pb-3 font-semibold text-right">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-sm">
                                                    {currentData.topProductos.map((prod, index) => (
                                                        <tr key={index} className="border-b border-white/5 last:border-0">
                                                            <td className="py-3 font-medium text-white">{prod.nombre}</td>
                                                            <td className="py-3"><span className="bg-white/10 px-2 py-1 rounded text-xs text-slate-300">{prod.categoria}</span></td>
                                                            <td className="py-3 text-slate-300">{prod.cantidad} <span className="text-[10px] uppercase">{prod.unidad}</span></td>
                                                            <td className="py-3 text-right font-bold text-[#17c3a5]">${prod.total.toLocaleString('es-MX', {minimumFractionDigits: 2})}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {isTutorialActive && currentStep === 2 && <TutorialCard step={steps[2]} onNext={nextStep} onSkip={() => setIsTutorialActive(false)} totalSteps={steps.length} currentIdx={currentStep} position="top" />}
                                </div>
                                
                                <div className={`transition-all duration-500 relative flex flex-col ${isTutorialActive && currentStep === 3 ? 'z-[101] ring-2 ring-amber-400/50 scale-[1.01] shadow-2xl' : 'z-10'}`}>
                                    <div className="bg-black/20 border border-white/5 rounded-2xl overflow-hidden flex flex-col h-full">
                                        <div className="p-5 border-b border-white/5"><h3 className="text-lg font-bold text-slate-200">Últimos Tickets</h3></div>
                                        <div className="p-4 flex-1 flex flex-col gap-3">
                                            {currentData.ultimosTickets.map((ticket, index) => (
                                                <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center"><Ticket size={16} /></div>
                                                        <div>
                                                            <p className="text-sm font-bold text-white">#Folio {ticket.folio}</p>
                                                            <p className="text-xs text-slate-400">{ticket.fecha} - {ticket.hora}</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-sm font-bold text-white">${ticket.total.toLocaleString('es-MX', {minimumFractionDigits: 2})}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {isTutorialActive && currentStep === 3 && <TutorialCard step={steps[3]} onNext={nextStep} onSkip={() => setIsTutorialActive(false)} totalSteps={steps.length} currentIdx={currentStep} position="top" />}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};