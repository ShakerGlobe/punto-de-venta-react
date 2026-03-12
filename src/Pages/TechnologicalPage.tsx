import { DeviceShowcaseHome } from '../Sections/technological/DeviceShowcaseHome';
import { ReportsHome } from '../Sections/technological/ReportsHome';
import { TechnologyHero } from '../Sections/technological/TechnologyHero';

const TechnologicalPage = () => {
  return (
    <div className="pt-24 pb-12">
      <TechnologyHero/>
      <DeviceShowcaseHome />
      <ReportsHome />
    </div>
  );
};
export default TechnologicalPage;