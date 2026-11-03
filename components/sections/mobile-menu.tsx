"use client";

import { useEffect, useState } from "react";
import { BOOKING_ANCHOR, navItems, siteConfig, telHref } from "@/lib/site-config";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/icons";

/** Menu cho màn hình < lg: nút gọi nhanh + nút mở menu. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="flex items-center gap-2 lg:hidden">
      <a
        href={telHref(siteConfig.primaryPhone)}
        className="grid h-12 w-12 place-items-center rounded-[4px] bg-brand-700 text-white md:hidden"
        aria-label={`Gọi ${siteConfig.primaryPhone.display}`}
      >
        <PhoneIcon size={21} />
      </a>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Đóng menu" : "Mở menu"}
        className="grid h-12 w-12 place-items-center rounded-[4px] border border-line text-ink"
      >
        {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
      </button>

      {open ? (
        <div id="mobile-menu" className="absolute inset-x-0 top-20 border-b border-line bg-white">
          <nav aria-label="Điều hướng di động" className="container-site py-2">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-14 items-center text-[18px] font-medium text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="grid gap-3 py-4">
              {siteConfig.hotlines.map((h) => (
                <a
                  key={h.raw}
                  href={telHref(h)}
                  className="flex min-h-12 items-center gap-3 text-[17px] font-semibold text-ink"
                >
                  <PhoneIcon size={19} className="text-brand-700" /> Gọi {h.display}
                </a>
              ))}
              <a
                href={BOOKING_ANCHOR}
                onClick={() => setOpen(false)}
                className="inline-flex min-h-[52px] items-center justify-center rounded-[4px] bg-brand-700 px-6 font-semibold text-white"
              >
                Đặt lịch tư vấn
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
