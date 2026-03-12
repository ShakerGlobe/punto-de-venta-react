import { BenefitsHero } from '../Sections/benefits/BenefitsHero';
import { BenefitsHome } from '../Sections/benefits/BenefitsHome';
import { RegisterCTA } from '../components/RegisterCTA';


const BenefitsPage = () => {
  return (
    <div className="pt-24 pb-12">
      <BenefitsHero/>
      <BenefitsHome />
      <RegisterCTA/>
    </div>
  );
};
export default BenefitsPage;