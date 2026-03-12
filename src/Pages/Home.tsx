import { HeroHome } from '../Sections/Home/HeroHome';
import { BusinessMarquee } from '../Sections/Home/BusinessMarquee';
import { InfrastructureHome } from '../Sections/Home/InfraestructureHome';
import { DashboardPreview } from '../Sections/Home/DashboardPreview';
import { RegisterCTA } from '../components/RegisterCTA';

const Home = ({ onOpenModal }: { onOpenModal: () => void }) => {
    return (
        <main className="w-full">
            <HeroHome onOpenModal={onOpenModal} />
            <BusinessMarquee />
            <InfrastructureHome />
            <DashboardPreview />
            <RegisterCTA/>
        </main>
    );
};

export default Home;