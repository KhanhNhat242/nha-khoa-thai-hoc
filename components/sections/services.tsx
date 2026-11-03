import { services } from "@/lib/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceIcon } from "@/components/ui/service-icon";
import { ServiceCta } from "./service-cta";

/** Dịch vụ: lưới 2x2 kiểu bảng Swiss (đường kẻ 1px), icon Flat. */
export function Services() {
  return (
    <section id="dich-vu" aria-labelledby="dich-vu-title" className="section-y bg-white">
      <div className="container-site">
        <SectionHeading
          id="dich-vu-title"
          title="Dịch vụ chuyên sâu tại Nha Khoa Thái Học"
          description="Giải pháp điều trị và phục hình răng hàm mặt trực tiếp bởi Bác sĩ Chuyên khoa I."
        />

        {/* reveal cả lưới (không từng ô) để nền đường kẻ không lộ ra khi ô còn mờ */}
        <div data-reveal className="grid gap-px border border-line bg-line md:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="flex flex-col bg-white p-6 sm:p-8 lg:p-10">
              <div className="flex items-start justify-between gap-4">
                <ServiceIcon icon={service.icon} />
                {service.featured ? (
                  <span className="rounded-[2px] bg-surface px-2.5 py-1 text-[14px] font-semibold text-brand-800">
                    Dịch vụ trọng tâm
                  </span>
                ) : null}
              </div>
              <h3 className="mt-6 text-[22px] leading-snug font-bold tracking-[-0.01em] text-ink lg:text-[24px]">
                {service.name}
              </h3>
              <p className="mt-2 text-[15px] font-semibold text-brand-800">{service.audience}</p>
              <p className="mt-3 text-[17px] leading-[1.65] text-ink-soft">{service.description}</p>
              <div className="mt-auto pt-5">
                <ServiceCta slug={service.slug} serviceName={service.name} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
