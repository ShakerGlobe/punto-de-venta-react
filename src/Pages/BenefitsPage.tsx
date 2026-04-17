import { BenefitsHero } from '../Sections/benefits/BenefitsHero';
import { BenefitsHome } from '../Sections/benefits/BenefitsHome';
import { RegisterCTA } from '../components/RegisterCTA';
import { PageTransition } from '../components/PageTransition';
// 1. Importas el componente SEO 
import { SEO } from '../components/SEO';
import { ScannerFeature } from '../Sections/benefits/ScannerFeature';

const BenefitsPage = () => {
  return (
    <PageTransition>
      {/* 2. Inyectas el SEO con los datos específicos de esta página */}
      <SEO
        title="Beneficios de Usuario"
        description="Descubre cómo NEDIMI POS optimiza tus ventas, gestiona tus inventarios y mejora la eficiencia de tu negocio con herramientas de alto nivel."
      />

      <div className="pt-24 pb-12">
        <BenefitsHero />
        <ScannerFeature/>
        <BenefitsHome />
        <RegisterCTA/>
      </div>
    </PageTransition>
  );
};

export default BenefitsPage;