import { useState, useEffect } from "react";
// Usage
// Hook
export default function useOnScreen(ref: any, rootMargin = "0px") {
  // State and setter for storing whether element is visible

  const [isIntersecting, setIntersecting] = useState(false);

  const [beenOnScreen, setBeenOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
        entry.isIntersecting && setBeenOnScreen(true);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref?.current && observer.unobserve(ref.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return [isIntersecting, beenOnScreen];
}
