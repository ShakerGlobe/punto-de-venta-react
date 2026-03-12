import { DeviceShowcaseHome } from '../Sections/technological/DeviceShowcaseHome';
import { ReportsHome } from '../Sections/technological/ReportsHome';
import { TechnologyHero } from '../Sections/technological/TechnologyHero';
import { RegisterCTA } from '../components/RegisterCTA';

const TechnologicalPage = () => {
  return (
    <div className="pt-24 pb-12">
      <TechnologyHero/>
      <DeviceShowcaseHome />
      <ReportsHome />
      <RegisterCTA/>
    </div>
  );
};
export default TechnologicalPage;