import { useState } from 'react';
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
        /* Quitamos bg-transparent y dejamos que el fondo del body mande */
        <main className="relative z-10 w-full min-h-screen">
            <Navbar onOpenModal={() => setIsModalOpen(true)} />
            <HeroHome onOpenModal={() => setIsModalOpen(true)} />
            <BenefitsHome />
            <DeviceShowcaseHome />
            <FAQHome />
            <FooterHome />

            <DemoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
};