import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// --- LIBRERÍAS DE TRACKING ---
import ReactPixel from 'react-facebook-pixel';

// --- PÁGINAS ---
import Home from './Pages/Home';
import BenefitsPage from './pages/BenefitsPage';
import FAQPage from './pages/FAQPage';
import TechnologicalPage from './pages/TechnologicalPage';
import RegisterPage from './pages/RegisterPage';
import DemoPage from './pages/DemoPage';
import PlanesPage from './pages/PlanesPage';
import Contratar from "./pages/Contratar";

// --- COMPONENTES ARQUITECTURA NUEVA ---
// Layout
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// UI
import { LoadingScreen } from './components/ui/LoadingScreen';
import { DemoModal } from './components/ui/DemoModal';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import PrivacyNotice from './components/ui/PrivacyNotice'; // Asumiendo que va aquí

// Utils
import { ScrollToTop } from './components/utils/ScrollToTop';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // --- 1. Pantalla de Carga ---
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  // --- 2. Inicializar Facebook Pixel de Forma Segura ---
  useEffect(() => {
    try {
      ReactPixel.init('3255045287990104', undefined, {
        autoConfig: true,
        debug: false, // Cambiar a true solo en desarrollo si necesitas ver los eventos
      });
    } catch (error) {
      console.warn("Facebook Pixel fue bloqueado por el navegador o un AdBlocker.", error);
    }
  }, []);

  // --- 3. Rastrear vistas de página ---
  useEffect(() => {
    try {
      ReactPixel.pageView();
    } catch (error) {
      // Silenciamos el error si el pixel está bloqueado
    }
  }, [location.pathname]);

  // --- Funciones del Modal ---
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    // Contenedor principal sin forzar fondos oscuros, heredando de index.css
    <div className="min-h-screen flex flex-col w-full relative bg-slate-50 text-slate-900">
      <ScrollToTop />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Curva de aceleración Apple-Style (Rápida y suave)
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col flex-grow relative w-full"
          >
            {/* NAVBAR GLOBAL */}
            <Navbar onOpenModal={openModal} />

            {/* CONTENEDOR DE RUTAS (MAIN) */}
            <main className="flex-grow w-full relative z-10 flex flex-col">
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home onOpenModal={openModal} />} />
                  <Route path="/beneficios" element={<BenefitsPage />} />
                  <Route path="/tecnologia" element={<TechnologicalPage />} />
                  <Route path="/preguntas" element={<FAQPage />} />
                  <Route path="/privacidad" element={<PrivacyNotice />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/contratar" element={<Contratar />} />
                  <Route path="/planes" element={<PlanesPage />} />
                  <Route path="/demo" element={<DemoPage />} />

                  {/* Redirección Catch-All */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </AnimatePresence>
            </main>

            {/* FOOTER Y WIDGETS GLOBALES */}
            {/* Se quitó 'onOpenModal' del Footer porque ya lo eliminamos de su estructura interna */}
            <Footer />
            <WhatsAppButton />
            <DemoModal isOpen={isModalOpen} onClose={closeModal} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;