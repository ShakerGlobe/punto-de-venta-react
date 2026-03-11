import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './Pages/Home.tsx';
import { LoadingScreen } from './Sections/Home/LoadingScreen'; // Asegúrate de que la ruta sea esta
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Controlamos el tiempo de la pantalla de carga (3.5 segundos)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          /* Muestra el loader mientras isLoading sea true */
          <LoadingScreen key="loading" />
        ) : (
          /* Cuando termina, desvanece el loader y entra la Home */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Home />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;