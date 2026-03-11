import { useState } from 'react';
// IMPORTANTE: Asegúrate de que los archivos dentro de ../Sections/Home/ se llamen exactamente así
import { Navbar } from '../Sections/Home/Navbar';
import { HeroHome } from '../Sections/Home/HeroHome';
import { BenefitsHome } from '../Sections/Home/BenefitsHome'; // Esta será tu Sección 1 (Comparación)
import { DeviceShowcaseHome } from '../Sections/Home/DeviceShowcaseHome'; // Esta será tu Sección 2 (Cámara/Celular)
import { ReportsHome } from '../Sections/Home/ReportsHome'; // Esta será tu Sección 4 (Nueva)
import { FAQHome } from '../Sections/Home/FAQHome';
import { FooterHome } from '../Sections/Home/FooterHome';
import { DemoModal } from '../Sections/Home/DemoModal';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Función reutilizable para abrir el modal
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        /* El fondo bg-[#020617] asegura que no haya espacios en blanco entre secciones */
        <main className="relative z-10 w-full min-h-screen bg-[#020617] text-white selection:bg-[#00C1A3]/30">

            {/* 1. NAVBAR: Recibe la función para el botón de "Demo" o "Login" */}
            <Navbar onOpenModal={openModal} />

            <div className="flex flex-col">
                {/* 2. HERO: El botón principal de "Comenzar" también abre el modal */}
                <HeroHome onOpenModal={openModal} />

                {/* 3. SECCIÓN 1: COMPARACIÓN (Problema vs Solución) */}
                <BenefitsHome />

                {/* 4. SECCIÓN 2: TECNOLOGÍA (Showcase del celular/escáner) */}
                <DeviceShowcaseHome />

                {/* 5. SECCIÓN 4: DASHBOARD (Reportes e Inteligencia) */}
                {/* Nota: Debes crear este componente ReportsHome.tsx */}
                <ReportsHome />

                {/* 6. EXTRAS: FAQ y Cierre */}
                <FAQHome />
                <FooterHome />
            </div>

            {/* 7. MODAL: El corazón de la conversión */}
            <DemoModal
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </main>
    );
};

export default Home;