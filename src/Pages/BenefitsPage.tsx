import { BenefitsHero } from '../Sections/benefits/BenefitsHero';
import { BenefitsHome } from '../Sections/benefits/BenefitsHome';


const BenefitsPage = () => {
  return (
    <div className="pt-24 pb-12">
      <BenefitsHero/>
      <BenefitsHome />
    </div>
  );
};
export default BenefitsPage;