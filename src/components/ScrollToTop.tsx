import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Forzamos el scroll al elemento raíz y al body por si acaso
    const canScroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    };

    // Usamos requestAnimationFrame para asegurar que el DOM ya cambió de ruta
    requestAnimationFrame(() => {
        canScroll();
    });
    
  }, [pathname]);

  return null;
};