import Image from "next/image";
import { BOOKING_ANCHOR, siteConfig, telHref } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/button-link";
import { CalendarIcon, PhoneIcon, ShieldCheckIcon } from "@/components/ui/icons";

const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as React.CSSProperties;

/**
 * Hero-Centric (#20): ảnh bác sĩ làm trung tâm, lưới 12 cột (7/5).
 * Desktop: Hero + dải chỉ số (112px) vừa đúng 1 màn hình.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative bg-white lg:flex lg:min-h-[calc(100svh-80px-112px)] lg:items-center"
    >
      {/* Mảng xám nhạt phẳng phía sau ảnh */}
      <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[34%] bg-surface lg:block" />

      <div className="container-site relative grid grid-cols-1 gap-10 py-10 md:py-14 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-12">
        <div className="lg:col-span-7 lg:pr-6">
          <p
            className="hero-rise inline-flex items-center gap-2.5 border-l-4 border-brand-600 bg-surface py-2 pr-4 pl-3 text-[15px] font-medium text-ink"
            style={rise(0)}
          >
            <ShieldCheckIcon size={19} className="shrink-0 text-brand-700" />
            {siteConfig.license.issuer} cấp phép hoạt động: {siteConfig.license.number}
          </p>

          <h1
            id="hero-title"
            className="hero-rise mt-7 text-[34px] leading-[1.1] font-bold tracking-[-0.035em] text-ink sm:text-[48px] lg:text-[56px] xl:text-[64px]"
            style={rise(80)}
          >
            <span className="block">Trung tâm trồng răng</span>
            <span className="block text-brand-600">Implant &amp; Niềng răng</span>
          </h1>

          <p className="hero-rise mt-6 text-[19px] font-semibold text-balance text-ink md:text-[22px]" style={rise(160)}>
            {siteConfig.shortName} – {siteConfig.doctor.short}
          </p>

          <p className="hero-rise prose-body mt-3 text-[17px] text-ink-soft md:text-[18px]" style={rise(220)}>
            {siteConfig.slogan}
          </p>

          <div className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row" style={rise(300)}>
            <ButtonLink href={BOOKING_ANCHOR} className="sm:min-w-[220px]">
              <CalendarIcon size={20} />
              Đặt lịch tư vấn
            </ButtonLink>
            <ButtonLink href={telHref(siteConfig.primaryPhone)} variant="outline">
              <PhoneIcon size={19} />
              Gọi ngay: {siteConfig.primaryPhone.display}
            </ButtonLink>
          </div>
        </div>

        {/* Ảnh bác sĩ — trung tâm của Hero */}
        <figure className="hero-rise relative lg:col-span-5" style={rise(160)}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[4px] bg-surface sm:aspect-[5/5] lg:aspect-auto lg:h-[min(620px,calc(100svh-80px-112px-96px))] lg:min-h-[440px]">
            <Image
              src="/images/site/hero-bac-si.jpg"
              alt={`${siteConfig.doctor.short} trực tiếp thăm khám cho khách hàng`}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 460px, 100vw"
              className="object-cover object-[62%_30%]"
            />
          </div>
          <figcaption className="absolute right-0 bottom-0 left-0 bg-brand-700 px-5 py-4 text-white lg:right-auto lg:-left-8 lg:max-w-[340px]">
            <span className="block text-[18px] font-bold">{siteConfig.doctor.short}</span>
            <span className="mt-0.5 block text-[15px]">Bác sĩ chuyên khoa I · {siteConfig.doctor.experience}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
