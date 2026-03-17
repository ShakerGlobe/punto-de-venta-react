import { motion } from "framer-motion";
import {
    Zap, ShoppingBag, Utensils, Scissors, Dumbbell,
    Coffee, HardHat, Car, Smartphone, Store
} from "lucide-react";
import React from "react";

export const BusinessMarquee = () => {
    const businessTypes = [
        { name: "Tiendas", icon: <Store size={22} />, color: "text-cyan-400", border: "border-cyan-500/50", bg: "bg-cyan-500/10", glow: "shadow-[0_0_15px_rgba(34,211,238,0.3)]" },
        { name: "Abarrotes", icon: <Zap size={22} />, color: "text-emerald-400", border: "border-emerald-500/50", bg: "bg-emerald-500/10", glow: "shadow-[0_0_15px_rgba(52,211,153,0.3)]" },
        { name: "Moda", icon: <ShoppingBag size={22} />, color: "text-pink-500", border: "border-pink-500/50", bg: "bg-pink-500/10", glow: "shadow-[0_0_15px_rgba(244,114,182,0.3)]" },
        { name: "Restaurantes", icon: <Utensils size={22} />, color: "text-orange-400", border: "border-orange-500/50", bg: "bg-orange-500/10", glow: "shadow-[0_0_15px_rgba(251,146,60,0.3)]" },
        { name: "Barberías", icon: <Scissors size={22} />, color: "text-blue-400", border: "border-blue-500/50", bg: "bg-blue-500/10", glow: "shadow-[0_0_15px_rgba(96,165,250,0.3)]" },
        { name: "Ferreterías", icon: <HardHat size={22} />, color: "text-yellow-400", border: "border-yellow-500/50", bg: "bg-yellow-400/10", glow: "shadow-[0_0_15px_rgba(250,204,21,0.3)]" },
        { name: "Gimnasios", icon: <Dumbbell size={22} />, color: "text-red-500", border: "border-red-500/50", bg: "bg-red-500/10", glow: "shadow-[0_0_15px_rgba(239,68,68,0.3)]" },
        { name: "Cafeterías", icon: <Coffee size={22} />, color: "text-amber-500", border: "border-amber-500/50", bg: "bg-amber-500/10", glow: "shadow-[0_0_15px_rgba(245,158,11,0.3)]" },
        { name: "Refacciones", icon: <Car size={22} />, color: "text-indigo-400", border: "border-indigo-500/50", bg: "bg-indigo-500/10", glow: "shadow-[0_0_15px_rgba(129,140,248,0.3)]" },
        { name: "Tech Shop", icon: <Smartphone size={22} />, color: "text-[#00C1A3]", border: "border-[#00C1A3]/50", bg: "bg-[#00C1A3]/10", glow: "shadow-[0_0_15px_rgba(0,193,163,0.3)]" },
    ];

    return (
        <div className="relative py-8 md:py-12 overflow-hidden bg-[#020617] border-y border-[#00C1A3]/20 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">

            {/* FONDO ANIMADO SUTIL */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] [background-size:32px_32px] md:[background-size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                <motion.div
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00C1A3]/30 to-transparent z-10"
                />
            </div>

            {/* GRADIENTES LATERALES (Desvanecimiento) */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#020617] via-[#020617]/90 to-transparent z-20 pointer-events-none" />

            {/* CONTENEDOR MARQUEE INTERACTIVO */}
            {/* Se agrega 'hover:[animation-play-state:paused]' para mejor UX */}
            <div className="relative z-10 flex w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused] group cursor-default">

                {/* Iteramos 2 veces para el loop perfecto. La segunda iteración se oculta de lectores de pantalla (aria-hidden) */}
                {[...Array(2)].map((_, arrayIndex) => (
                    <React.Fragment key={arrayIndex}>
                        {businessTypes.map((biz, i) => (
                            <div
                                key={`${arrayIndex}-${i}`}
                                aria-hidden={arrayIndex === 1 ? "true" : "false"}
                                className="mx-4 md:mx-6 lg:mx-8 flex items-center gap-3 md:gap-4 transition-transform duration-300 hover:scale-105"
                            >
                                {/* Contenedor del ícono mejorado */}
                                <div className={`p-2.5 md:p-3 rounded-xl lg:rounded-2xl border ${biz.border} ${biz.bg} ${biz.glow} backdrop-blur-md flex items-center justify-center transition-colors`}>
                                    {React.cloneElement(biz.icon as React.ReactElement, {
                                        className: biz.color
                                    })}
                                </div>

                                {/* Texto responsivo */}
                                <span className={`text-xl md:text-3xl lg:text-4xl font-[1000] italic uppercase tracking-tighter ${biz.color} drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]`}>
                                    {biz.name}
                                </span>

                                {/* Separador visual */}
                                <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-white/20 mx-2 md:mx-4" />
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>

            {/* KEYFRAMES */}
            <style>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                
                /* Respeta la configuración de movimiento reducido del SO del usuario */
                @media (prefers-reduced-motion: reduce) {
                    .animate-\\[marquee_35s_linear_infinite\\] {
                        animation-play-state: paused !important;
                    }
                }
            `}</style>

            {/* TEXTURA DE RUIDO */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};