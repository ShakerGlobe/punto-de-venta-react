import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export const BusinessMarquee = () => {
    const businessTypes = ["Abarrotes", "Farmacias", "Ferreterías", "Papelerías", "Boutiques", "Mini Supers", "Refaccionarias", "Cafeterías"];

    return (
        <div className="relative py-20 overflow-hidden bg-white/[0.01] border-y border-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617] z-10" />
            <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] md:animate-[marquee_50s_linear_infinite]">
                {[...businessTypes, ...businessTypes].map((type, i) => (
                    <motion.span key={i} whileHover={{ color: "#00C1A3", scale: 1.1 }} className="mx-12 text-4xl md:text-6xl font-black italic uppercase text-slate-700/40 flex items-center gap-6">
                        {type} <Zap size={30} className="text-[#00C1A3]/20" />
                    </motion.span>
                ))}
            </div>
            <style dangerouslySetInnerHTML={{ __html: `@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }` }} />
        </div>
    );
};