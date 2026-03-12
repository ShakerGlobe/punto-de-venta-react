import { motion } from "framer-motion";
import { 
    Zap, ShoppingBag, Utensils, Scissors, Dumbbell, 
    Coffee, HardHat, Car, Smartphone, Store 
} from "lucide-react";

export const BusinessMarquee = () => {
    const businessTypes = [
        { name: "Tiendas", icon: <Store size={20} />, color: "text-cyan-400", border: "border-cyan-500/50", glow: "shadow-cyan-500/40" },
        { name: "Abarrotes", icon: <Zap size={20} />, color: "text-emerald-400", border: "border-emerald-500/50", glow: "shadow-emerald-500/40" },
        { name: "Moda", icon: <ShoppingBag size={20} />, color: "text-pink-500", border: "border-pink-500/50", glow: "shadow-pink-500/40" },
        { name: "Restaurantes", icon: <Utensils size={20} />, color: "text-orange-400", border: "border-orange-500/50", glow: "shadow-orange-500/40" },
        { name: "Barberías", icon: <Scissors size={20} />, color: "text-blue-400", border: "border-blue-500/50", glow: "shadow-blue-500/40" },
        { name: "Ferreterías", icon: <HardHat size={20} />, color: "text-yellow-400", border: "border-yellow-500/50", glow: "shadow-yellow-500/40" },
        { name: "Gimnasios", icon: <Dumbbell size={20} />, color: "text-red-500", border: "border-red-500/50", glow: "shadow-red-500/40" },
        { name: "Cafeterías", icon: <Coffee size={20} />, color: "text-amber-600", border: "border-amber-600/50", glow: "shadow-amber-600/40" },
        { name: "Refacciones", icon: <Car size={20} />, color: "text-indigo-400", border: "border-indigo-500/50", glow: "shadow-indigo-500/40" },
        { name: "Tech Shop", icon: <Smartphone size={20} />, color: "text-[#00C1A3]", border: "border-[#00C1A3]/50", glow: "shadow-[#00C1A3]/40" },
    ];

    return (
        <div className="relative py-10 overflow-hidden bg-[#020617] border-y border-[#00C1A3]/20">
            
            {/* FONDO ANIMADO */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                <motion.div 
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00C1A3]/20 to-transparent z-10"
                />
            </div>

            {/* GRADIENTES LATERALES */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#020617] via-[#020617]/80 to-transparent z-20 pointer-events-none" />

            {/* MARQUEE SIN GLITCH */}
            <div className="relative z-10 flex w-max animate-[marquee_25s_linear_infinite]">
                {/* Duplicamos la lista una sola vez para un loop perfecto de 50/50 */}
                {[...businessTypes, ...businessTypes].map((biz, i) => (
                    <div 
                        key={i} 
                        className="mx-4 md:mx-8 flex items-center gap-4"
                    >
                        <div className={`p-2.5 rounded-xl bg-white/5 border ${biz.border} ${biz.color} ${biz.glow} shadow-lg backdrop-blur-md`}>
                            {biz.icon}
                        </div>

                        <span className={`text-2xl md:text-4xl font-[1000] italic uppercase tracking-tighter ${biz.color} drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]`}>
                            {biz.name}
                        </span>

                        <div className="h-1 w-1 rounded-full bg-white/10 mx-2" />
                    </div>
                ))}
            </div>

            {/* KEYFRAMES CORREGIDOS: -50% es matemáticamente exacto para una lista doble */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            ` }} />

            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};