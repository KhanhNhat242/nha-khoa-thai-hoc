import Image from "next/image";
import { BOOKING_ANCHOR, siteConfig, telHref } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/button-link";
import { CalendarIcon, PhoneIcon } from "@/components/ui/icons";
import { ShinyText } from "@/components/ui/shiny-text";
import { shinyHero } from "@/lib/theme";

const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as React.CSSProperties;

/**
 * Hai lớp ảnh (nền + người) và mặt nạ nét viền (.hero-outline trong globals.css) phải dùng cùng cách cắt/căn
 * để khớp tuyệt đối. Đổi vị trí ở đây thì đổi cả mask-position trong globals.css.
 */
const IMAGE_FIT = "object-cover object-[53%_50%]";
const IMAGE_SIZES = "100vw";

/**
 * Chữ "Thái Học" cỡ lớn — dùng chung cho lớp chữ đặc (sau người) và lớp nét viền (trên người) để trùng khít.
 * Đặt ngang tầm đầu các bác sĩ để người đè lên chữ; luôn nằm dưới header (80px).
 */
const WORDMARK =
  "hero-rise pointer-events-none absolute inset-x-0 top-[calc(80px+3%)] text-center text-[19vw] leading-[1.05] font-bold tracking-[-0.055em] whitespace-nowrap select-none lg:top-[20%] lg:text-[min(19vw,300px)]";

/**
 * Hero dạng banner (REQUIREMENTS §14):
 * ảnh nền → chữ thương hiệu cỡ lớn → lớp người đã tách nền (đè lên chữ) → nét viền chữ trên người → nội dung.
 * Hero chạy lên dưới header (-mt-20): header trong suốt khi còn trong Hero (HeaderShell).
 * Desktop: cao đúng 1 màn hình; tiêu đề trái-dưới, tên + nút phải-dưới.
 * Mobile: ảnh ở trên, nội dung bên dưới trên nền trắng để chữ luôn dễ đọc.
 */
export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative -mt-20 bg-white lg:h-[min(100svh,900px)] lg:min-h-[640px]">
      {/* Khối ảnh (cao thêm 80px phía trên vì nằm dưới header) */}
      <div
        data-hero-media
        className="relative h-[calc(75vw+80px)] overflow-hidden bg-surface sm:h-[calc(56.25vw+80px)] lg:absolute lg:inset-0 lg:h-auto"
      >
        <Image
          src="/images/site/hero-banner-2.jpg"
          alt="Ê-kíp bác sĩ Nha Khoa Thái Học thực hiện ca cấy ghép Implant trong phòng tiểu phẫu"
          fill
          loading="eager"
          fetchPriority="high"
          sizes={IMAGE_SIZES}
          className={IMAGE_FIT}
        />

        {/* Chữ thương hiệu cỡ lớn — trang trí, nằm sau lớp người */}
        <p aria-hidden="true" className={`${WORDMARK} text-brand-700/35`}>
          Thái Học
        </p>

        {/* Lớp người đã tách nền (cùng kích thước & vị trí với ảnh nền) */}
        <Image
          src="/images/site/hero-banner-2-nguoi.webp"
          alt=""
          fill
          loading="eager"
          sizes={IMAGE_SIZES}
          className={`${IMAGE_FIT} pointer-events-none`}
        />

        {/* Nét viền chữ đè lên người: chỉ hiện trong vùng hình người nhờ mặt nạ (.hero-outline trong globals.css) */}
        <div aria-hidden="true" className="hero-outline pointer-events-none absolute inset-0">
          <p className={`${WORDMARK} hero-outline-text`}>Thái Học</p>
        </div>

        {/* Lớp tối phía dưới để chữ trắng đạt tương phản (chỉ desktop, nơi chữ đè lên ảnh) */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 hidden h-[62%] bg-gradient-to-t from-ink/85 via-ink/45 to-transparent lg:block"
        />
      </div>

      {/* Nội dung */}
      <div className="container-site relative py-8 md:py-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:grid lg:grid-cols-12 lg:items-end lg:gap-8 lg:py-12">
        <div className="lg:col-span-7">
          <h1
            id="hero-title"
            className="hero-rise text-[34px] leading-[1.08] font-bold tracking-[-0.035em] text-ink sm:text-[46px] lg:text-[52px] lg:text-white xl:text-[60px]"
            style={rise(80)}
          >
            {/* Vệt sáng chạy ngang chữ (React Bits – ShinyText) — chỉ desktop, nơi chữ nằm trên lớp ảnh tối.
                Mobile chữ nằm trên nền trắng → tắt hiệu ứng, giữ màu ink/xanh để đủ tương phản. */}
            <ShinyText
              color={shinyHero.color}
              shineColor={shinyHero.shineColor}
              speed={2}
              shineWidth={40}
              softness={0.8}
              trigger="loop"
              className="max-lg:![background-image:none] max-lg:![-webkit-text-fill-color:currentColor]"
            >
              <span className="block max-lg:[-webkit-text-fill-color:currentColor]">Trung tâm trồng răng</span>
              <span className="block text-brand-600 max-lg:[-webkit-text-fill-color:currentColor] lg:text-white">
                Implant &amp; Niềng răng
              </span>
            </ShinyText>
          </h1>
        </div>

        <div className="mt-6 lg:col-span-5 lg:col-start-8 lg:mt-0">
          <p className="hero-rise text-[19px] font-bold text-balance text-ink lg:text-white" style={rise(160)}>
            {siteConfig.shortName} – {siteConfig.doctor.short}
          </p>
          <div className="hero-rise mt-6 flex flex-col gap-3 sm:flex-row [&>a]:whitespace-nowrap" style={rise(300)}>
            <ButtonLink href={BOOKING_ANCHOR}>
              <CalendarIcon size={20} />
              Đặt lịch tư vấn
            </ButtonLink>
            <ButtonLink href={telHref(siteConfig.primaryPhone)} variant="outline" className="lg:border-white lg:bg-transparent lg:text-white lg:hover:bg-white/10">
              <PhoneIcon size={19} />
              Gọi {siteConfig.primaryPhone.display}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
