import { RegisterHero } from "../Sections/register/RegisterHome";
import { PageTransition } from "../components/PageTransition";
import { SEO } from "../components/SEO"; // 1. Importar

const RegisterPage = () => {
  return (
    <PageTransition>
      {/* 2. Inyectar metadatos específicos */}
      <SEO
        title="Crear Cuenta"
        description="Únete a NEDIMI POS y comienza a gestionar tu negocio de manera inteligente. El registro es rápido y sencillo."
      />

      <div className="pt-24 pb-12">
        <RegisterHero />
      </div>
    </PageTransition>
  );
};

export default RegisterPage;