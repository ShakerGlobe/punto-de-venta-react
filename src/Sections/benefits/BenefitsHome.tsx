import { motion } from 'framer-motion';
import {
    Users,
    Zap,
    ShieldCheck,
    Scan,
    PieChart,
    PackageSearch,
    Notebook,
    XCircle,
    Smartphone,
    CheckCircle2
} from 'lucide-react';
import React from 'react';

export const BenefitsHome = () => {
    const benefits = [
        {
            title: "Cobra rapidísimo",
            desc: "Usa tu celular para leer los códigos. No más filas largas ni clientes esperando.",
            icon: <Scan />,
            badge: "Ventas"
        },
        {
            title: "Tus Ganancias",
            desc: "Nedimi te dice cuánto dinero ganaste hoy realmente, sin que tengas que sumar nada.",
            icon: <PieChart />,
            badge: "Tu Dinero"
        },
        {
            title: "Inventario en orden",
            desc: "Te avisamos cuando te queden pocas cosas. Así nunca le dices 'no hay' al cliente.",
            icon: <PackageSearch />,
            badge: "Mercancía"
        },
        {
            title: "Tus Ayudantes",
            desc: "Cuida lo que pasa en tu caja aunque no estés en la tienda. Todo bajo control.",
            icon: <Users />,
            badge: "Equipo"
        }
    ];

    return (
        <section id="benefits" className="py-20 md:py-32 bg-white relative flex flex-col items-center">
            
            {/* --- DESTELLOS VERDES NEDIMI --- */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#00C1A3]/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-emerald-400/10 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
                
                {/* --- CABECERA --- */}
                <div className="text-center mb-20">
                    <span className="text-[#00C1A3] font-black uppercase tracking-[0.2em] text-[10px] bg-emerald-50 px-6 py-2 rounded-full border border-emerald-100 shadow-sm">
                        Hecho para que tú ganes más
                    </span>
                    <h2 className="mt-8 text-4xl md:text-7xl font-[1000] text-slate-900 tracking-tighter italic uppercase leading-[0.9]">
                        TU TIENDA EN ORDEN, <br />
                        <span className="text-[#00C1A3] underline decoration-emerald-100 decoration-8 underline-offset-4">SIN COMPLICACIONES</span>
                    </h2>
                    <p className="mt-8 text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        Es como tener una libreta inteligente que hace todo el trabajo pesado por ti. 
                        Tú solo enfócate en vender.
                    </p>
                </div>

                {/* --- COMPARATIVA SIMPLE --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
                    {/* Lado de la Libreta */}
                    <div className="p-8 md:p-12 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col">
                        <div className="flex items-center gap-3 mb-8">
                            <XCircle className="text-slate-300 w-6 h-6" />
                            <h3 className="text-lg font-black uppercase text-slate-400 italic">Con la libreta...</h3>
                        </div>
                        <ul className="space-y-4">
                            {["Cuentas que no cuadran", "No sabes qué falta surtir", "Horas haciendo sumas"].map((t, i) => (
                                <li key={i} className="flex gap-3 items-center text-slate-400 text-sm font-bold uppercase italic">
                                    <Notebook size={16} /> {t}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Lado Nedimi (Ahora en Verde) */}
                    <div className="p-8 md:p-12 rounded-[2rem] bg-[#00C1A3] shadow-xl shadow-[#00C1A3]/30 flex flex-col text-white">
                        <div className="flex items-center gap-3 mb-8">
                            <CheckCircle2 className="text-emerald-100 w-6 h-6" />
                            <h3 className="text-lg font-black uppercase italic">Con Nedimi POS</h3>
                        </div>
                        <ul className="space-y-4">
                            {["Todo se suma solito", "Avisos de mercancía baja", "Ventas rápidas en tu cel"].map((t, i) => (
                                <li key={i} className="flex gap-3 items-center text-white text-sm font-bold uppercase italic">
                                    <Zap size={16} className="text-emerald-100 fill-emerald-100/20" /> {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* --- GRID DE BENEFICIOS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {benefits.map((item, i) => (
                        <div 
                            key={i}
                            className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm flex flex-col items-center text-center hover:border-[#00C1A3]/30 hover:shadow-md transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#00C1A3] mb-6 group-hover:bg-[#00C1A3] group-hover:text-white transition-colors">
                                {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                            </div>
                            <h3 className="text-xl font-black text-slate-900 uppercase italic mb-3">{item.title}</h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">{item.desc}</p>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#00C1A3] bg-emerald-50 px-4 py-1 rounded-full">
                                {item.badge}
                            </span>
                        </div>
                    ))}
                </div>

                {/* --- CIERRE CON NÚMEROS --- */}
                <div className="pt-20 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { label: "Tus cuentas", val: "Sin errores", icon: <Zap /> },
                        { label: "Tus datos", val: "Seguros", icon: <ShieldCheck /> },
                        { label: "Control", val: "En tu mano", icon: <Smartphone /> }
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-[#00C1A3] text-white flex items-center justify-center mb-4 shadow-lg shadow-[#00C1A3]/30">
                                {React.cloneElement(stat.icon as React.ReactElement, { size: 20 })}
                            </div>
                            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">{stat.label}</p>
                            <p className="text-3xl md:text-4xl font-[1000] text-slate-900 uppercase italic tracking-tighter">{stat.val}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};