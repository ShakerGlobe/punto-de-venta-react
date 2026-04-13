import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// --- PÁGINAS ---
import Home from './Pages/Home';
import BenefitsPage from './Pages/BenefitsPage';
import FAQPage from './Pages/FAQPage';
import TechnologicalPage from './Pages/TechnologicalPage';
import RegisterPage from './Pages/RegisterPage';
import DemoPage from './Pages/DemoPage';
import PlanesPage from './Pages/PlanesPage';
import Contratar from "./Pages/Contratar";

// --- COMPONENTES GLOBALES ---
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { DemoModal } from './components/DemoModal';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppButton } from './components/WhatsAppButton';
import PrivacyNotice from './components/PrivacyNotice';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#020617] text-white">
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
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="min-h-screen flex flex-col relative w-full"
          >
            <Navbar onOpenModal={openModal} />
            <main className="flex-grow w-full relative z-10">
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home onOpenModal={openModal} />} />
                  <Route path="/beneficios" element={<BenefitsPage />} />
                  <Route path="/tecnologia" element={<TechnologicalPage />} />
                  <Route path="/preguntas" element={<FAQPage />} />
                  <Route path="/privacidad" element={<PrivacyNotice />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/contratar" element={<Contratar />} />
                  <Route path="/Planes" element={<PlanesPage />} />

                  {/* RUTA DE LA DEMO AGREGADA */}
                  <Route path="/demo" element={<DemoPage />} />

                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer onOpenModal={openModal} />
            <WhatsAppButton />
            <DemoModal isOpen={isModalOpen} onClose={closeModal} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;