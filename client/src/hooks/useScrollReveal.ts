import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    // Observe the element itself and all children with reveal class
    observer.observe(el);
    el.querySelectorAll(".reveal, .reveal-stagger").forEach((child) => {
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
