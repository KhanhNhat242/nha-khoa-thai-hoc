import Image from "next/image";
import { BOOKING_ANCHOR, navItems, siteConfig, telHref } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/button-link";
import { PhoneIcon } from "@/components/ui/icons";
import { MobileMenu } from "./mobile-menu";
import { HeaderShell } from "./header-shell";

/** Header Swiss: nền đặc, không blur/bóng. Nền hoà vào Hero khi ở đầu trang, trắng + kẻ 1px khi cuộn qua (HeaderShell). */
export function SiteHeader() {
  return (
    <HeaderShell>
      <div className="container-site flex h-full items-center justify-between gap-6">
        <a href="#" className="flex shrink-0 items-center gap-3" aria-label={`${siteConfig.shortName} – về đầu trang`}>
          {/* Logo giữ nguyên tỉ lệ, không cắt xén */}
          <Image src={siteConfig.logo} alt="" width={52} height={52} className="h-[52px] w-[52px] object-contain" />
          <span className="text-[17px] leading-tight font-bold tracking-[-0.01em] text-ink">{siteConfig.shortName}</span>
        </a>

        <nav aria-label="Điều hướng chính" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-[16px] font-medium text-ink underline-offset-[6px] decoration-2 decoration-brand-600 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-3 xl:flex">
            <PhoneIcon size={20} className="text-brand-700" />
            <span className="text-[15px] font-semibold text-ink">
              {siteConfig.hotlines.map((h, i) => (
                <span key={h.raw}>
                  {i > 0 ? <span className="px-1.5 text-line">|</span> : null}
                  <a href={telHref(h)} className="hover:text-brand-800 hover:underline">
                    {h.display}
                  </a>
                </span>
              ))}
            </span>
          </div>
          <span className="hidden md:block">
            <ButtonLink href={BOOKING_ANCHOR} className="!min-h-12">
              Đặt lịch tư vấn
            </ButtonLink>
          </span>
          <MobileMenu />
        </div>
      </div>
    </HeaderShell>
  );
}
