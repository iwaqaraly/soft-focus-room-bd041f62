import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router keeps the previous scroll position when the route changes,
// so each new page would otherwise open partway down.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
