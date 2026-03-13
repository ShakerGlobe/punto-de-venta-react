import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export const PageTransition = ({ children }: Props) => {
    return (
        <motion.div
            // Estado inicial: escalado hacia abajo (más pequeño), invisible y movido hacia abajo
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            // Estado final: tamaño normal, visible, en su posición original, con efecto de entrada
            animate={{ opacity: 1, scale: 1, y: 0 }}
            // Estado al salir (si usas AnimatePresence en App.tsx): escalado hacia arriba (más grande), invisible, movido hacia arriba
            exit={{ opacity: 0, scale: 1.1, y: -50 }}
            // Transición tipo "spring" (rebote) para un efecto dinámico y llamativo
            transition={{ 
                type: "spring",
                stiffness: 100, // Controla la "dureza" del muelle (menos valor = más lento y suave)
                damping: 15,    // Controla cuánto rebota (menos valor = más rebote)
                duration: 0.8   // Duración total aproximada de la animación
            }}
        >
            {children}
        </motion.div>
    );
};