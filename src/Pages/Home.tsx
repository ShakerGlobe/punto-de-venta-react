import { HeroHome } from '../Sections/Home/HeroHome';
import { BusinessMarquee } from '../Sections/Home/BusinessMarquee';
import { InfrastructureHome } from '../Sections/Home/InfraestructureHome';
import { DashboardPreview } from '../Sections/Home/DashboardPreview';
import { RegisterCTA } from '../components/RegisterCTA';
import { PageTransition } from '../components/PageTransition';
import { WhyChoosePOS } from '../Sections/Home/WhyChoosePOS';
import { DeviceCompatibility } from '../Sections/Home/DeviceCompatibility';

const Home = ({ onOpenModal }: { onOpenModal: () => void }) => {
    return (
        <PageTransition>
            <main className="w-full">
                <HeroHome onOpenModal={onOpenModal} />
                <BusinessMarquee />
                <InfrastructureHome />
                <DashboardPreview />
                <WhyChoosePOS/>
                <DeviceCompatibility/>
                <RegisterCTA/>
            </main>
        </PageTransition>
    );
};

export default Home;