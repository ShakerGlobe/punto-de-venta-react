import { HeroHome } from '../Sections/Home/HeroHome';
import { BusinessMarquee } from '../Sections/Home/BusinessMarquee';
import { InfrastructureHome } from '../Sections/Home/InfraestructureHome';
import { DashboardPreview } from '../Sections/Home/DashboardPreview';

const Home = ({ onOpenModal }: { onOpenModal: () => void }) => {
    return (
        <main className="w-full">
            <HeroHome onOpenModal={onOpenModal} />
            <BusinessMarquee />
            <InfrastructureHome />
            <DashboardPreview />
        </main>
    );
};

export default Home;