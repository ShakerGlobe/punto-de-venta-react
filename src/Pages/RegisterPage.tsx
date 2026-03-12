import { RegisterHero } from "../Sections/register/RegisterHome";
import { PageTransition } from "../components/PageTransition";

const RegisterPage = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-12">
        <RegisterHero/>
      </div>
    </PageTransition>  
  );
};

export default RegisterPage;