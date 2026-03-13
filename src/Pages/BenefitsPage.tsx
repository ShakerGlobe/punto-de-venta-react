import { BenefitsHero } from '../Sections/benefits/BenefitsHero';
import { BenefitsHome } from '../Sections/benefits/BenefitsHome';
import { RegisterCTA } from '../components/RegisterCTA';
import { PageTransition } from '../components/PageTransition';


const BenefitsPage = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-12">
        <BenefitsHero/>
        <BenefitsHome />
        <RegisterCTA/>
      </div>
    </PageTransition>
  );
};
export default BenefitsPage;