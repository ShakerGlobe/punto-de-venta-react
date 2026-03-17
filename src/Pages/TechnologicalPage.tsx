import { DeviceShowcaseHome } from '../Sections/technological/DeviceShowcaseHome';
import { ReportsHome } from '../Sections/technological/ReportsHome';
import { TechnologyHero } from '../Sections/technological/TechnologyHero';
import { RegisterCTA } from '../components/RegisterCTA';
import { PageTransition } from '../components/PageTransition';
// 1. Importas el componente SEO
import { SEO } from '../components/SEO';
import { TechStackHome } from '../Sections/technological/TechStackHome';

const TechnologicalPage = () => {
  return (
    <PageTransition>
      {/* 2. Inyectas los metadatos de tecnología */}
      <SEO
        title="Tecnología y Dispositivos"
        description="Explora la tecnología detrás de NEDIMI POS: reportes avanzados, compatibilidad con múltiples dispositivos y una infraestructura robusta para tu negocio."
      />

      <div className="pt-24 pb-12">
        <TechnologyHero />
        <DeviceShowcaseHome />
        <ReportsHome />
        <TechStackHome/>
        <RegisterCTA />
      </div>
    </PageTransition>
  );
};
export default TechnologicalPage;