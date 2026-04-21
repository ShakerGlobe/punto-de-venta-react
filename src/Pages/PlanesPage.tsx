// 1. Importas el componente SEO 
import { PageTransition } from '../components/layout/PageTransition';
import { SEO } from '../components/utils/SEO';
import {PricingHome} from '../Sections/Home/PricingHome';

const PlanesPage = () => {
  return (
    <PageTransition>
      <SEO
        title="Planes NedimiPOS"
        description="Descubre la oferta que NedimiPOS tiene para tí. Adquiere el plan que mejor se ajuste a tus necesidades."
      />

      <div className="pt-24 pb-12">
        <PricingHome />

      </div>
    </PageTransition>
  );
};

export default PlanesPage;