import { useEffect, useRef, useState } from "react";

/**
 * Wraps children and fades/slides them in the first time they scroll
 * into view. `delay` accepts 0-4 and maps to the stagger classes in
 * index.css.
 */
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `delay-${delay}` : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${delayClass} ${inView ? "in-view" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
