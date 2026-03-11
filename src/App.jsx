import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Páginas
import Home from './Pages/Home';
import BenefitsPage from './Pages/BenefitsPage';
import FAQPage from './Pages/FAQPage';
import TechnologicalPage from './Pages/TechnologicalPage';

// Componentes Globales (Verifica que los nombres coincidan con los 'exports' de cada archivo)
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer'; // Si en el archivo se llama FooterHome, cámbialo allí a Footer
import { LoadingScreen } from './components/LoadingScreen';
import { DemoModal } from './components/DemoModal';
import ScrollToTop from './components/ScrollToTop';
import { WhatsAppButton } from './components/WhatsAppButton';
import PrivacyNotice from './components/PrivacyNotice';

import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // 3.5 segundos de carga para Nedimi POS
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Funciones para controlar el modal desde cualquier parte
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          /* 'relative' añadido para solucionar el warning de Framer Motion */
          <motion.div 
            key="content" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="min-h-screen flex flex-col relative" // <-- ¡ESTA CLASE ES LA CLAVE!
          >
            <Router>
              {/* Reset de scroll automático al cambiar de ruta */}
              <ScrollToTop /> 
              
              {/* El Navbar ahora es global y recibe la función del modal */}
              <Navbar onOpenModal={openModal} />

              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home onOpenModal={openModal} />} />
                  <Route path="/beneficios" element={<BenefitsPage />} />
                  <Route path="/tecnologia" element={<TechnologicalPage />} />
                  <Route path="/preguntas" element={<FAQPage />} />
                  <Route path="/privacidad" element={<PrivacyNotice />} />
                  
                  {/* Comodín para rutas no encontradas */}
                  <Route path="*" element={<Home onOpenModal={openModal} />} />
                </Routes>
              </main>

              {/* Componentes Globales de interacción */}
              <Footer onOpenModal={openModal} />
              <WhatsAppButton />
              <DemoModal isOpen={isModalOpen} onClose={closeModal} />
            </Router>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;