import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollToTarget = () => {
        const target = document.getElementById(
          decodeURIComponent(hash.slice(1)),
        );

        if (target) {
          target.scrollIntoView({
            behavior: "auto",
            block: "start",
          });

          return;
        }

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      };

      const frameId =
        window.requestAnimationFrame(
          scrollToTarget,
        );

      return () => {
        window.cancelAnimationFrame(frameId);
      };
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    return undefined;
  }, [pathname, hash]);

  return null;
}
