"use client";
import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    document
      .querySelectorAll(".mc,.ev-row,.rv,.loc-card,.how-step,.comm-card,.press-card,.ig-grid a")
      .forEach((el) => {
        (el as HTMLElement).style.opacity = "0";
        (el as HTMLElement).style.transform = "translateY(14px)";
        (el as HTMLElement).style.transition = "opacity .5s ease,transform .5s ease";
        io.observe(el);
      });

    document.querySelectorAll(".community-grid,.press-grid,.ig-grid,.reviews-grid").forEach((grid) => {
      Array.from(grid.children).forEach((item, i) => {
        (item as HTMLElement).style.transitionDelay = `${i * 0.06}s`;
      });
    });

    return () => io.disconnect();
  }, []);

  return null;
}
