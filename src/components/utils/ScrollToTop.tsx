import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });

    document.body.tabIndex = -1;
    document.body.focus();

  }, [pathname]);

  return null;
};