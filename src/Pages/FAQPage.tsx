import { FAQHero } from '../Sections/FAQ/FAQHero';
import { FAQHome } from '../Sections/FAQ/FAQHome';
import { RegisterCTA } from '../components/RegisterCTA';

const TechnologicalPage = () => {
  return (
    <div className="pt-24 pb-12">
      <FAQHero/>
      <FAQHome />
      <RegisterCTA/>
    </div>
  );
};
export default TechnologicalPage;