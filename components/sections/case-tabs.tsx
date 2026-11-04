"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { CaseGroup } from "@/lib/cases";
import { SELECT_CASE_EVENT } from "@/lib/services";
import { reflectiveCase } from "@/lib/theme";
import { ReflectiveCard } from "@/components/ui/reflective-card";

/**
 * Tab ca trước/sau theo dịch vụ — ARIA tabs pattern:
 * Tab/Shift+Tab vào/ra, ←/→/Home/End chuyển tab.
 */
export function CaseTabs({ groups }: { groups: CaseGroup[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Mở tab theo dịch vụ khi bấm "Xem ca … thực tế" ở section Dịch vụ
  useEffect(() => {
    const onSelect = (e: Event) => {
      const index = groups.findIndex((g) => g.slug === (e as CustomEvent<string>).detail);
      if (index >= 0) setActive(index);
    };
    window.addEventListener(SELECT_CASE_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_CASE_EVENT, onSelect);
  }, [groups]);

  const focusTab = (index: number) => {
    const next = (index + groups.length) % groups.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowRight") focusTab(active + 1);
    else if (e.key === "ArrowLeft") focusTab(active - 1);
    else if (e.key === "Home") focusTab(0);
    else if (e.key === "End") focusTab(groups.length - 1);
    else return;
    e.preventDefault();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Chọn dịch vụ để xem ca điều trị"
        className="grid grid-cols-2 gap-2 sm:flex sm:gap-8 sm:border-b sm:border-line"
      >
        {groups.map((g, i) => {
          const selected = i === active;
          return (
            <button
              key={g.slug}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`tab-${g.slug}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`panel-${g.slug}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={onKeyDown}
              /* Mobile: lưới 2x2 nút phẳng (tab chọn = nền xanh). ≥ sm: tab gạch chân kiểu Swiss. */
              className={`min-h-12 rounded-[4px] border text-[17px] font-semibold whitespace-nowrap transition-colors duration-150 sm:-mb-px sm:min-h-14 sm:shrink-0 sm:rounded-none sm:border-0 sm:border-b-[3px] sm:bg-transparent ${
                selected
                  ? "border-brand-700 bg-brand-700 text-white sm:border-brand-600 sm:text-ink"
                  : "border-line bg-white text-ink-soft hover:text-ink sm:border-transparent sm:bg-transparent"
              }`}
            >
              {g.label}
              <span className="ml-1.5 text-[14px] font-medium">({g.items.length})</span>
            </button>
          );
        })}
      </div>

      {groups.map((g, i) => (
        <div
          key={g.slug}
          id={`panel-${g.slug}`}
          role="tabpanel"
          aria-labelledby={`tab-${g.slug}`}
          hidden={i !== active}
          tabIndex={0}
          className="pt-8"
        >
          {/* Chỉ dựng thẻ của tab đang mở: mỗi thẻ là 1 ngữ cảnh WebGL, đổi tab thì thẻ chạy lại hiệu ứng xuất hiện */}
          {i === active ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {g.items.map((item) => (
                <li key={item.src} className="h-full">
                  {/* Thẻ kim loại phản chiếu (React Bits – ReflectiveCard): nghiêng 3D + vệt sáng theo chuột.
                      Nền bạc sáng (theme light) cho hợp tông trắng của trang; cao 100% ô lưới → các thẻ cùng hàng cao bằng nhau. */}
                  <ReflectiveCard
                    width="100%"
                    height="100%"
                    theme="light"
                    tint={reflectiveCase.tint}
                    metalness={1}
                    roughness={0.3}
                    blurStrength={6}
                    shine={1}
                    glare={0.5}
                  >
                    <figure>
                      <div className="relative aspect-[5/6] overflow-hidden rounded-[12px] bg-white">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                          className="object-contain"
                        />
                      </div>
                      <figcaption className="mt-4 px-1 pb-1">
                        <span className="block text-[17px] font-semibold text-balance">{item.caption}</span>
                        <span className="mt-0.5 block text-[15px] text-ink-soft">{item.kind}</span>
                      </figcaption>
                    </figure>
                  </ReflectiveCard>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}
