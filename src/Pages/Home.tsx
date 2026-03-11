import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../Sections/Home/Navbar';
import { HeroHome } from '../Sections/Home/HeroHome';
import { BenefitsHome } from '../Sections/Home/BenefitsHome';
import { DeviceShowcaseHome } from '../Sections/Home/DeviceShowcaseHome';
import { ReportsHome } from '../Sections/Home/ReportsHome';
import { FAQHome } from '../Sections/Home/FAQHome';
import { FooterHome } from '../Sections/Home/FooterHome';
import { DemoModal } from '../Sections/Home/DemoModal';
import { WhatsAppButton } from '../Sections/Home/WhatsAppButton'; // Importamos el botón nuevo

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isModalOpen]);

    return (
        <main className="relative z-10 w-full min-h-screen bg-[#020617] text-white selection:bg-[#00C1A3]/30">
            {/* Navegación principal */}
            <Navbar onOpenModal={openModal} />

            <div className="flex flex-col">
                <HeroHome onOpenModal={openModal} />
                <BenefitsHome />
                <DeviceShowcaseHome />
                <ReportsHome />
                <FAQHome />
                <FooterHome onOpenModal={openModal} />
            </div>

            {/* Modal de demostración */}
            <DemoModal
                isOpen={isModalOpen}
                onClose={closeModal}
            />

            {/* Botón flotante de WhatsApp siempre visible en el Home */}
            <WhatsAppButton />
        </main>
    );
};

export default Home;