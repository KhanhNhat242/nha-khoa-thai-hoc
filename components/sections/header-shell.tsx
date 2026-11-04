"use client";

import { useEffect, useState, type ReactNode } from "react";

const HEADER_HEIGHT = 80;

/**
 * Khung header đổi nền theo vị trí cuộn:
 * - Khi khối ảnh Hero ([data-hero-media]) còn nằm ngay dưới header → nền trong suốt, không kẻ dưới (ảnh Hero hiện xuyên qua).
 * - Khi đã cuộn qua khối ảnh → nền trắng + đường kẻ 1px như các section khác.
 * Mặc định (SSR, trang ở đầu) là trạng thái hoà vào Hero để không bị nháy màu khi tải.
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const media = document.querySelector<HTMLElement>("[data-hero-media]");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!media) {
        setOverHero(false);
        return;
      }
      const rect = media.getBoundingClientRect();
      // Ảnh còn phủ dải ngay dưới header (chừa 8px để chuyển trước khi mép ảnh chạm header)
      setOverHero(rect.top <= HEADER_HEIGHT && rect.bottom > HEADER_HEIGHT + 8);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    onScroll(); // lần đầu (vd. tải trang giữa chừng qua link #ca-thuc-te) — chạy ở frame kế tiếp
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      data-over-hero={overHero || undefined}
      /* Menu mobile đang mở (#mobile-menu có trong DOM) → header luôn trắng, không hoà vào Hero */
      className={`sticky top-0 z-50 h-20 border-b transition-colors duration-300 has-[#mobile-menu]:border-line has-[#mobile-menu]:bg-white ${
        overHero ? "border-transparent bg-transparent" : "border-line bg-white"
      }`}
    >
      {children}
    </header>
  );
}
