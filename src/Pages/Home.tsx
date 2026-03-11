import { useState } from 'react';
// IMPORTANTE: Revisa que estas rutas existan exactamente así en tus carpetas
import { Navbar } from '../Sections/Home/Navbar';
import { HeroHome } from '../Sections/Home/HeroHome';
import { BenefitsHome } from '../Sections/Home/BenefitsHome';
import { DeviceShowcaseHome } from '../Sections/Home/DeviceShowcaseHome';
import { FAQHome } from '../Sections/Home/FAQHome';
import { FooterHome } from '../Sections/Home/FooterHome';
import { DemoModal } from '../Sections/Home/DemoModal';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        /* Forzamos el color de fondo aquí mismo para descartar fallos de CSS */
        <main className="relative z-10 w-full min-h-screen bg-[#020617] text-white">
            <Navbar onOpenModal={() => setIsModalOpen(true)} />

            <div className="flex flex-col">
                <HeroHome onOpenModal={() => setIsModalOpen(true)} />
                <BenefitsHome />
                <DeviceShowcaseHome />
                <FAQHome />
                <FooterHome />
            </div>

            <DemoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
};

export default Home; // Asegúrate de tener el export default