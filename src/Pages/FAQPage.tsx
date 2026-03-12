import { FAQHero } from '../Sections/FAQ/FAQHero';
import { FAQHome } from '../Sections/FAQ/FAQHome';
import { RegisterCTA } from '../components/RegisterCTA';
import { PageTransition } from '../components/PageTransition';

const TechnologicalPage = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-12">
        <FAQHero/>
        <FAQHome />
        <RegisterCTA/>
      </div>
    </PageTransition>
  );
};
export default TechnologicalPage;