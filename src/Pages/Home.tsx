import { useState, useEffect } from 'react';
import { Navbar } from '../Sections/Home/Navbar';
import { HeroHome } from '../Sections/Home/HeroHome';
import { BenefitsHome } from '../Sections/Home/BenefitsHome';
import { DeviceShowcaseHome } from '../Sections/Home/DeviceShowcaseHome';
import { ReportsHome } from '../Sections/Home/ReportsHome';
import { FAQHome } from '../Sections/Home/FAQHome';
// Importación eliminada para evitar el error de Vite
// import { FinalCTA } from "../Sections/Home/FinalCTA"; 
import { FooterHome } from '../Sections/Home/FooterHome';
import { DemoModal } from '../Sections/Home/DemoModal';

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
            <Navbar onOpenModal={openModal} />

            <div className="flex flex-col">
                <HeroHome onOpenModal={openModal} />
                <BenefitsHome />
                <DeviceShowcaseHome />
                <ReportsHome />
                <FAQHome />
                <FooterHome />
            </div>

            <DemoModal
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </main>
    );
};

export default Home;