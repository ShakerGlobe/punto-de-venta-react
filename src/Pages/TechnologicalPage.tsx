import { DeviceShowcaseHome } from '../Sections/technological/DeviceShowcaseHome';
import { ReportsHome } from '../Sections/technological/ReportsHome';
import { TechnologyHero } from '../Sections/technological/TechnologyHero';
import { RegisterCTA } from '../components/RegisterCTA';
import { PageTransition } from '../components/PageTransition';

const TechnologicalPage = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-12">
        <TechnologyHero/>
        <DeviceShowcaseHome />
        <ReportsHome />
        <RegisterCTA/>
      </div>
    </PageTransition>
  );
};
export default TechnologicalPage;