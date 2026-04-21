import { RegisterHome } from "../Sections/register/RegisterHome";
import { PageTransition } from "../components/layout/PageTransition";
import { SEO } from "../components/utils/SEO"; // 1. Importar

const RegisterPage = () => {
  return (
    <PageTransition>
      {/* 2. Inyectar metadatos específicos */}
      <SEO
        title="Crear Cuenta"
        description="Únete a NEDIMI POS y comienza a gestionar tu negocio de manera inteligente. El registro es rápido y sencillo."
      />

      <div className="pt-24 pb-12">
        <RegisterHome />
      </div>
    </PageTransition>
  );
};

export default RegisterPage;