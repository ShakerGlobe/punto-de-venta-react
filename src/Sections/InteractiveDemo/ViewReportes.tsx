import React, { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, DollarSign, TrendingUp, PackageSearch, Users } from "lucide-react";

export const ViewReportes = () => {
    const [activeTab, setActiveTab] = useState('Ventas');

    const reportTypes = [
        { name: 'Ventas', icon: <DollarSign size={16} />, color: 'text-[#17c3a5]' },
        { name: 'Ganancias', icon: <TrendingUp size={16} />, color: 'text-[#3381DF]' },
        { name: 'Inventario', icon: <PackageSearch size={16} />, color: 'text-amber-400' },
        { name: 'Clientes', icon: <Users size={16} />, color: 'text-purple-400' },
    ];

    // Datos demo para la gráfica de barras
    const salesData = [
        { day: 'Lun', val: 4500 }, { day: 'Mar', val: 3200 }, { day: 'Mie', val: 5100 },
        { day: 'Jue', val: 6300 }, { day: 'Vie', val: 7800 }, { day: 'Sab', val: 9200 },
        { day: 'Dom', val: 3500 },
    ];

    const maxVal = Math.max(...salesData.map(d => d.val));

    return (
        <div className="p-8 space-y-8 h-full flex flex-col custom-scroll overflow-y-auto text-white">
            <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold font-outfit">Centro de Analítica</h2>
                <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-white/10 text-sm transition-colors">
                    <CalendarDays size={16} className="text-[#3381DF]" /> Seleccionar Fecha
                </button>
            </div>

            {/* Tabs de Tipo de Reporte */}
            <div className="flex border-b border-white/5 gap-1">
                {reportTypes.map(tab => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`flex items-center gap-2 px-5 py-3 rounded-t-xl transition-all ${activeTab === tab.name
                                ? 'bg-white/5 border-b-2 border-[#17c3a5] text-white'
                                : 'text-slate-400 hover:text-white'
                            }`}
                    >
                        <div className={tab.color}>{tab.icon}</div> {tab.name}
                    </button>
                ))}
            </div>

            {/* Área de Gráfica Animada */}
            <div className="bg-black/10 border border-white/5 p-8 rounded-2xl flex-1 min-h-[300px]">
                <h3 className="text-lg font-bold mb-8 text-slate-200">Resumen de {activeTab} (Última Semana)</h3>

                <div className="flex items-end justify-between gap-4 h-60 w-full mt-10">
                    {salesData.map((data, index) => {
                        const heightPercentage = (data.val / maxVal) * 100;
                        return (
                            <div key={data.day} className="flex-1 flex flex-col items-center gap-4 h-full justify-end group">
                                {/* Tooltip simple al hacer hover */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#17c3a5] text-[#020617] text-[10px] font-bold px-2 py-1 rounded mb-1">
                                    ${data.val}
                                </div>

                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${heightPercentage}%` }}
                                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                    className="w-full max-w-[45px] bg-gradient-to-t from-[#17c3a5] to-emerald-400 rounded-t-lg shadow-[0_0_20px_rgba(23,195,165,0.2)]"
                                />

                                <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                                    {data.day}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Resumen de Métricas Inferiores */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-slate-400 text-xs uppercase mb-1">Promedio Diario</p>
                    <p className="text-xl font-bold font-outfit">$5,657</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-slate-400 text-xs uppercase mb-1">Crecimiento</p>
                    <p className="text-xl font-bold text-[#17c3a5]">+14.2%</p>
                </div>
            </div>
        </div>
    );
};