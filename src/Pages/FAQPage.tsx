import { FAQHero } from '../Sections/FAQ/FAQHero';
import { FAQHome } from '../Sections/FAQ/FAQHome';
import { RegisterCTA } from '../components/common/RegisterCTA';
import { PageTransition } from '../components/layout/PageTransition';
import { SEO } from '../components/utils/SEO'; // <--- Importado OK

const TechnologicalPage = () => {
  return (
    <PageTransition>
      {/* ¡AQUÍ ES DONDE DEBE IR! */}
      <SEO
        title="Preguntas Frecuentes"
        description="¿Tienes dudas sobre NEDIMI POS? Encuentra respuestas sobre facturación, inventarios y soporte técnico aquí."
      />

      <div className="pt-24 pb-12">
        <FAQHero />
        <FAQHome />
      </div>
    </PageTransition>
  );
};
export default TechnologicalPage;