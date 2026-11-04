import Image from "next/image";
import { services, type Service } from "@/lib/services";
import { BOOKING_ANCHOR } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/button-link";
import { CalendarIcon } from "@/components/ui/icons";
import { CaseLink, ServiceCta } from "./service-cta";

/**
 * Một ô dịch vụ trong hàng accordion ngang (CSS: .svc-* trong app/globals.css).
 * Mặc định chỉ hiện tiêu đề đè lên ảnh; hover hoặc focus bàn phím → ô giãn ngang và hiện chi tiết.
 * Thiết bị không hover được (điện thoại, máy tính bảng): chi tiết luôn hiển thị.
 */
function ServicePanel({ service }: { service: Service }) {
  return (
    <li className="svc-panel relative isolate flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[4px] bg-ink text-white">
      <Image
        src={service.image.src}
        alt={service.image.alt}
        fill
        sizes="(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 100vw"
        className="svc-image -z-10 object-cover"
        style={{ objectPosition: service.image.position }}
      />
      {/* Lớp tối dưới cùng cho tiêu đề + lớp tối toàn ô khi hiện chi tiết (đảm bảo tương phản chữ trắng) */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
      <div aria-hidden="true" className="svc-shade absolute inset-0 -z-10 bg-ink/55" />

      <div className="p-6 lg:p-7">
        {service.featured ? <p className="mb-1.5 text-[15px] font-semibold">Thế mạnh của bác sĩ</p> : null}
        <h3 className="text-[24px] leading-[1.2] font-bold tracking-[-0.02em] text-balance lg:text-[26px]">
          {service.cardTitle}
        </h3>

        <div className="svc-detail">
          <div>
            {/* p-1/-m-1: chừa chỗ cho viền focus, tránh bị overflow cắt mất */}
            <div className="-m-1 p-1 pt-5">
              {service.cardTitle !== service.name ? (
                <p className="text-[16px] font-semibold">{service.name}</p>
              ) : null}
              <p className="text-[15px] font-semibold">{service.audience}</p>
              <p className="mt-3 text-[16px] leading-[1.6]">{service.description}</p>
              <div className="mt-4 flex flex-col gap-x-6 sm:flex-row sm:flex-wrap">
                <ServiceCta slug={service.slug} serviceName={service.name} tone="inverse">
                  {service.ctaLabel}
                </ServiceCta>
                {service.featured ? (
                  <CaseLink slug={service.slug} tone="inverse">
                    Xem ca thực tế
                  </CaseLink>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

/** Dịch vụ: tiêu đề căn giữa → hàng 4 ô ảnh accordion ngang → nút đặt lịch căn giữa. */
export function Services() {
  return (
    <section id="dich-vu" aria-labelledby="dich-vu-title" className="section-y bg-white">
      <div data-reveal className="container-site text-center">
        <h2
          id="dich-vu-title"
          className="text-[30px] leading-[1.15] font-bold tracking-[-0.025em] text-brand-600 md:text-[36px] lg:text-[44px]"
        >
          Dịch vụ chuyên sâu tại Nha Khoa Thái Học
        </h2>
        <p className="prose-body mx-auto mt-4 text-[17px] text-ink-soft">
          Giải pháp điều trị và phục hình răng hàm mặt trực tiếp bởi Bác sĩ Chuyên khoa I.
        </p>
      </div>

      <ul
        data-reveal
        className="svc-row mx-auto mt-10 grid max-w-[1440px] grid-cols-1 gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:mt-14"
      >
        {services.map((service) => (
          <ServicePanel key={service.slug} service={service} />
        ))}
      </ul>
    </section>
  );
}
