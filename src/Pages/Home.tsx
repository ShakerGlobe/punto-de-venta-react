import { HeroHome } from '../Sections/Home/HeroHome';
import { motion } from 'framer-motion';

// Definimos la interfaz para recibir la función del modal desde App.tsx
interface HomeProps {
    onOpenModal: () => void;
}

const Home = ({ onOpenModal }: HomeProps) => {
    return (
        <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 w-full min-h-screen bg-[#020617] text-white selection:bg-[#00C1A3]/30"
        >
            {/* En una estructura de Website, el Home suele ser la carta de presentación.
                Aquí solo dejamos el Hero. Las demás secciones ahora viven en sus 
                propias páginas (BenefitsPage, FAQPage, etc.)
            */}
            <div className="flex flex-col">
                <HeroHome onOpenModal={onOpenModal} />
                
                {/* TIP: Si quieres que el Home no se vea tan vacío, podrías agregar 
                   aquí un pequeño "Resumen" o "Teaser" de los beneficios, 
                   pero las secciones completas ya tienen su propia ruta. 
                */}
            </div>

            {/* Nota: El Modal, el Navbar, el Footer y el WhatsAppButton 
               ya no van aquí. Se renderizan en App.tsx para que persistan 
               en todas las páginas.
            */}
        </motion.main>
    );
};

export default Home;