import { motion } from "framer-motion";
import { ArrowRight, Camera, Scale, FileSpreadsheet } from "lucide-react";

interface HeroProps {
    onOpenModal: () => void;
}

export const HeroHome = ({ onOpenModal }: HeroProps) => {
    const mascotImage = "/images/NEDIMI POS-04.png";

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-20 px-6 bg-[#020617] text-white">

            {/* Luces Ambientales */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#00C1A3]/10 blur-[80px] md:blur-[150px] rounded-full" />
                <div className="absolute bottom-[5%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[80px] md:blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10 w-full">

                {/* LADO IZQUIERDO: BRANDING Y ACCIÓN */}
                {/* Ajuste móvil: order-2 para que el texto quede abajo de la mascota en celulares */}
                <div className="flex flex-col gap-6 md:gap-10 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-2xl w-fit backdrop-blur-md"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-[#00C1A3] animate-pulse" />
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                            Professional Cloud Solution
                        </span>
                    </motion.div>

                    <div className="space-y-2 md:space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex flex-col"
                        >
                            <span className="text-[#00C1A3] font-black text-lg md:text-2xl tracking-[0.3em] md:tracking-[0.5em] uppercase lg:ml-2 mb-[-5px] md:mb-[-10px]">Sistema</span>
                            {/* Ajuste de Texto: text-[3.8rem] en móvil para que no se rompa */}
                            <h1 className="text-[3.8rem] sm:text-[6rem] md:text-[9rem] lg:text-[10.5rem] font-[1000] tracking-tighter leading-[0.85] md:leading-[0.8] uppercase italic select-none">
                                Nedimi<span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00C1A3] to-[#007a67] drop-shadow-[0_0_20px_rgba(0,193,163,0.3)]">POS</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-base md:text-2xl text-slate-400 max-w-xl leading-snug font-light lg:border-l-2 lg:border-[#00C1A3]/30 lg:pl-6"
                        >
                            La herramienta definitiva para el <span className="text-white font-bold">comerciante moderno</span>. Gestión inteligente, rápida y 100% segura.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-4 w-full justify-center lg:justify-start"
                    >
                        <button
                            onClick={onOpenModal}
                            className="group relative w-full sm:w-auto flex items-center justify-center gap-4 px-8 md:px-12 py-4 md:py-7 bg-[#00C1A3] text-[#020617] font-black rounded-2xl md:rounded-[2rem] transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,193,163,0.3)] overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative z-10 flex items-center gap-2 text-base md:text-xl">
                                COMENZAR GRATIS <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </span>
                        </button>
                    </motion.div>
                </div>

                {/* LADO DERECHO: MASCOTA */}
                {/* Ajuste móvil: order-1 y altura reducida para que no ocupe toda la pantalla */}
                <div className="relative flex justify-center items-center h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] order-1 lg:order-2">

                    {/* AURA FONDO */}
                    <div className="absolute w-[60%] h-[60%] bg-[#00C1A3]/20 blur-[50px] md:blur-[100px] rounded-full" />

                    {/* IMAGEN MASCOTA */}
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "backOut" }}
                        src={mascotImage}
                        alt="Nedimi Mascota"
                        className="relative z-10 w-full max-w-[220px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                    />

                    {/* TARJETAS FLOTANTES */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-4 right-2 md:top-10 md:right-0 z-20 p-2 md:p-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-3xl flex items-center gap-2 md:gap-4 shadow-2xl scale-75 md:scale-100"
                    >
                        <div className="p-2 md:p-3 bg-[#00C1A3]/20 rounded-lg md:rounded-2xl text-[#00C1A3]">
                            <Camera size={18} />
                        </div>
                        <div className="hidden xs:block">
                            <p className="text-[7px] md:text-[8px] text-slate-400 font-black uppercase tracking-widest">Tecnología</p>
                            <p className="text-[10px] md:text-sm font-bold">Escáner Cámara</p>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute bottom-4 left-2 md:bottom-20 md:-left-4 z-20 p-2 md:p-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-3xl flex items-center gap-2 md:gap-4 shadow-2xl scale-75 md:scale-100"
                    >
                        <div className="p-2 md:p-3 bg-blue-500/20 rounded-lg md:rounded-2xl text-blue-400">
                            <Scale size={18} />
                        </div>
                        <div className="hidden xs:block">
                            <p className="text-[7px] md:text-[8px] text-slate-400 font-black uppercase tracking-widest">Versatilidad</p>
                            <p className="text-[10px] md:text-sm font-bold">Venta por Gramaje</p>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-1/2 -right-6 md:-right-10 z-20 p-2 md:p-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-3xl flex items-center gap-2 md:gap-4 shadow-2xl scale-75 md:scale-100"
                    >
                        <div className="p-2 md:p-3 bg-emerald-500/20 rounded-lg md:rounded-2xl text-emerald-400">
                            <FileSpreadsheet size={18} />
                        </div>
                        <div className="hidden xs:block">
                            <p className="text-[7px] md:text-[8px] text-slate-400 font-black uppercase tracking-widest">Control</p>
                            <p className="text-[10px] md:text-sm font-bold">Reportes Excel</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};