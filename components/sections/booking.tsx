import type { ReactNode } from "react";
import { siteConfig, telHref } from "@/lib/site-config";
import { ChatIcon, MapPinIcon, NavigationIcon, PhoneIcon } from "@/components/ui/icons";
import { BookingForm } from "./booking-form";

/** Nút liên hệ trực tiếp — khối phẳng, cao 64px, nhãn rõ hành động. */
function ContactButton({
  href,
  icon,
  label,
  value,
  external,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex min-h-16 items-center gap-4 rounded-[4px] border border-line bg-white px-4 transition-colors duration-150 hover:border-brand-700"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[4px] bg-brand-700 text-white">{icon}</span>
      <span className="flex-1 leading-tight">
        <span className="block text-[14px] text-ink-soft">{label}</span>
        <span className="block text-[19px] font-bold text-ink">{value}</span>
      </span>
    </a>
  );
}

/** Conversion-Optimized (#21): form 3 trường + gọi 2 hotline + Zalo, cạnh nhau. */
export function Booking() {
  return (
    <section id="lien-he" aria-labelledby="lien-he-title" className="section-y bg-surface">
      <div className="container-site">
        <div data-reveal className="grid grid-cols-1 gap-10 border-t border-line pt-8 lg:grid-cols-12 lg:gap-8 lg:pt-10">
          {/* Trái: gọi trực tiếp */}
          <div className="lg:col-span-5">
            <h2
              id="lien-he-title"
              className="text-[30px] leading-[1.15] font-bold tracking-[-0.025em] text-brand-600 md:text-[36px] lg:text-[44px]"
            >
              Đặt lịch tư vấn cùng {siteConfig.doctor.short}
            </h2>
            <p className="mt-4 text-[17px] text-ink-soft md:text-[18px]">
              Làm việc cả ngày lễ – Phòng khám sẽ liên hệ xác nhận lịch hẹn sớm nhất.
            </p>

            <h3 className="mt-8 text-[15px] font-semibold text-ink">Gọi trực tiếp</h3>
            <div className="mt-3 grid gap-3">
              {siteConfig.hotlines.map((h) => (
                <ContactButton key={h.raw} href={telHref(h)} icon={<PhoneIcon size={19} />} label="Hotline" value={h.display} />
              ))}
              <ContactButton
                href={siteConfig.zalo.url}
                external
                icon={<ChatIcon size={19} />}
                label="Chat Zalo"
                value={siteConfig.zalo.display}
              />
            </div>
          </div>

          {/* Phải: form ngắn + bản đồ */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div id="dat-lich" className="rounded-[4px] border border-line bg-white p-6 sm:p-8 lg:p-10">
              <h3 className="text-[22px] font-bold tracking-[-0.01em] text-ink">Để lại thông tin, phòng khám gọi lại tư vấn</h3>
              <p className="mt-1.5 mb-7 text-[15px] text-ink-soft">
                Chỉ cần họ tên và số điện thoại. Mục có dấu <span className="font-semibold text-brand-800">*</span> là bắt buộc.
              </p>
              <BookingForm />
            </div>
          </div>

          {/* Bản đồ: dải ngang toàn lưới */}
          <div className="overflow-hidden rounded-[4px] border border-line bg-white lg:col-span-12">
            <iframe
              src={siteConfig.mapsEmbedUrl}
              title={`Bản đồ đường đến ${siteConfig.shortName}`}
              className="block h-[260px] w-full border-0 lg:h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
