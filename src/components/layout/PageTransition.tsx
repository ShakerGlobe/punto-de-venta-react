import { motion } from "framer-motion";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export const PageTransition = ({ children }: Props) => {
    return (
        <motion.div
            // Estado inicial: Ligeramente más abajo (solo 15px) y transparente
            initial={{ opacity: 0, y: 15 }}

            // Estado final: Posición original y totalmente visible
            animate={{ opacity: 1, y: 0 }}

            // Estado al salir: Se desvanece suavemente sin saltos bruscos
            exit={{ opacity: 0, y: -10 }}

            // Transición: Curva de aceleración Premium (estilo iOS/MacOS)
            transition={{
                duration: 0.35, // Rápido, el tendero no tiene tiempo que perder
                ease: [0.22, 1, 0.36, 1] // Esta curva frena suavemente al final (Apple Easing)
            }}
        >
            {children}
        </motion.div>
    );
};