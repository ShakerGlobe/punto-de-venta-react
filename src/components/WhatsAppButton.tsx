import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppButton = () => {
    // Formato correcto: sin "+", sin espacios, solo números
    const phoneNumber = "5215564604183";
    const message = "¡Hola! Vi la página de NedimiPOS y me gustaría recibir más información.";

    // Genera el enlace oficial
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[999] flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all"
            title="Chatea con nosotros"
        >
            {/* Efecto de pulso llamativo */}
            <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-[#25D366] rounded-full z-[-1]"
            />

            <FaWhatsapp size={32} />
        </motion.a>
    );
};