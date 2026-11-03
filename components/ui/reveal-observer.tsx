"use client";

import { useEffect } from "react";

/**
 * Gắn class `is-revealed` cho mọi phần tử [data-reveal] khi cuộn tới (CSS trong app/globals.css).
 * Mount một lần trong trang. Hiện một lần, không ẩn lại để trải nghiệm cuộn nhẹ nhàng.
 */
export function RevealObserver() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-revealed"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
