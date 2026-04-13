import { HeroHome } from '../Sections/Home/HeroHome';
import { BusinessMarquee } from '../Sections/Home/BusinessMarquee';
import { InfrastructureHome } from '../Sections/Home/InfraestructureHome';
import { DashboardPreview } from '../Sections/Home/DashboardPreview';
import { RegisterCTA } from '../components/RegisterCTA';
import { PageTransition } from '../components/PageTransition';
import { WhyChoosePOS } from '../Sections/Home/WhyChoosePOS';
import { DeviceCompatibility } from '../Sections/Home/DeviceCompatibility';
import { SEO } from '../components/SEO'; // Importado OK
import { BusinessSurvivalMeter } from '../Sections/Home/BusinessSurvivalMeter';

const Home = ({ onOpenModal }: { onOpenModal: () => void }) => {
    return (
        <PageTransition>
            {/* 1. AGREGAR EL COMPONENTE AQUÍ */}
            <SEO
                title="Punto de Venta Inteligente"
                description="Moderniza tu negocio con NEDIMI POS. Control de inventarios, ventas en tiempo real y reportes avanzados en una sola plataforma."
            />

            <main className="w-full">
                <HeroHome onOpenModal={onOpenModal} />

                <BusinessSurvivalMeter />

                <BusinessMarquee />

                <WhyChoosePOS />

                <DeviceCompatibility />

                <DashboardPreview />

                <InfrastructureHome />

                <RegisterCTA />
            </main>
        </PageTransition>
    );
};

export default Home;