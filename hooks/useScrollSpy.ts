import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], options?: IntersectionObserverInit) {
    
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, {
      rootMargin: '-25% 0px -70% 0px', 
      threshold: 0, 
      ...options
    });

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids, options]);

  return activeId;
}
