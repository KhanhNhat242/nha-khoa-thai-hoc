import Image from "next/image";
import { BOOKING_ANCHOR, navItems, siteConfig, telHref } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/button-link";

/** Footer Swiss: nền trắng, kẻ 1px, 3 cột thông tin. */
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-site grid grid-cols-1 gap-10 py-14 md:grid-cols-12 md:gap-8 lg:py-16">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Image src={siteConfig.logo} alt="" width={52} height={52} className="h-[52px] w-[52px] object-contain" />
            <span className="text-[19px] font-bold tracking-[-0.01em] text-ink">{siteConfig.shortName}</span>
          </div>
          <p className="mt-5 text-[16px] text-ink">{siteConfig.fullName}</p>
          <p className="mt-1 max-w-[44ch] text-[15px] text-ink-soft">
            {siteConfig.license.issuer} cấp phép hoạt động: {siteConfig.license.number}.
          </p>
          <p className="mt-1 text-[15px] font-semibold text-brand-800">{siteConfig.values}</p>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-[14px] font-semibold tracking-[0.06em] text-ink-soft uppercase">Liên hệ</h2>
          <ul className="mt-4 space-y-2 text-[16px] text-ink">
            <li>{siteConfig.address}</li>
            {siteConfig.hotlines.map((h) => (
              <li key={h.raw}>
                <a href={telHref(h)} className="font-semibold hover:text-brand-800 hover:underline">
                  Hotline {h.display}
                </a>
              </li>
            ))}
            <li>
              <a href={siteConfig.zalo.url} target="_blank" rel="noopener noreferrer" className="hover:text-brand-800 hover:underline">
                Zalo {siteConfig.zalo.display}
              </a>
            </li>
            <li>
              <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-800 hover:underline">
                Facebook {siteConfig.shortName}
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-[14px] font-semibold tracking-[0.06em] text-ink-soft uppercase">Khám phá</h2>
          <ul className="mt-4 space-y-2 text-[16px]">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-ink hover:text-brand-800 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href={BOOKING_ANCHOR} className="mt-6">
            Đặt lịch tư vấn
          </ButtonLink>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="container-site py-5 pb-24 text-[14px] text-ink-soft md:pb-5">© {siteConfig.fullName}.</p>
      </div>
    </footer>
  );
}
