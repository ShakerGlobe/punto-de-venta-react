import { HeroHome } from '../Sections/Home/HeroHome';
import { BusinessMarquee } from '../Sections/Home/BusinessMarquee';
import { InfrastructureHome } from '../Sections/Home/InfraestructureHome';
import { DashboardPreview } from '../Sections/Home/DashboardPreview';
import { RegisterCTA } from '../components/RegisterCTA';
import { PageTransition } from '../components/PageTransition';

const Home = ({ onOpenModal }: { onOpenModal: () => void }) => {
    return (
        <PageTransition>
            <main className="w-full">
                <HeroHome onOpenModal={onOpenModal} />
                <BusinessMarquee />
                <InfrastructureHome />
                <DashboardPreview />
                <RegisterCTA/>
            </main>
        </PageTransition>
    );
};

export default Home;