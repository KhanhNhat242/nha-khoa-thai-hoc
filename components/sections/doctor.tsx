import Image from "next/image";
import { BOOKING_ANCHOR, siteConfig } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/button-link";
import { CalendarIcon } from "@/components/ui/icons";

/** Trust & Authority: hồ sơ bác sĩ dạng bảng Swiss (nhãn trái — nội dung phải, kẻ 1px). */
const credentials = [
  { term: "Học vị", detail: "Bác sĩ chuyên khoa I (BS.CK1)" },
  { term: "Kinh nghiệm", detail: "Hơn 12 năm trong lĩnh vực Răng Hàm Mặt" },
  { term: "Chuyên sâu", detail: "Implant · Răng sứ · Tiểu phẫu răng khôn mọc ngầm" },
  { term: "Giấy phép", detail: `${siteConfig.license.number} — ${siteConfig.license.issuer}` },
  { term: "Tiêu chí", detail: siteConfig.values },
];

export function Doctor() {
  return (
    <section id="bac-si" aria-labelledby="bac-si-title" className="section-y bg-surface">
      <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        <figure data-reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-white">
            <Image
              src="/images/site/bac-si-tu-van-phu-huynh.jpg"
              alt="Bác sĩ phân tích phim và phác đồ trên màn hình lớn, tư vấn trực tiếp cho phụ huynh và bé"
              fill
              sizes="(min-width: 1024px) 460px, 100vw"
              className="object-cover object-[32%_center]"
            />
          </div>
          <figcaption className="mt-3 text-[15px] text-ink-soft">
            Bác sĩ trực tiếp phân tích phim và tư vấn phác đồ cho từng khách hàng.
          </figcaption>
        </figure>

        <div data-reveal className="lg:col-span-6 lg:col-start-7 lg:self-center">
          <h2
            id="bac-si-title"
            className="text-[30px] leading-[1.15] font-bold tracking-[-0.025em] text-brand-600 md:text-[36px] lg:text-[44px]"
          >
            Trực tiếp thăm khám &amp; điều trị bởi {siteConfig.doctor.short}
          </h2>
          <p className="prose-body mt-5 text-[17px] text-ink-soft md:text-[18px]">
            Với {siteConfig.doctor.experience} chuyên sâu trong lĩnh vực Răng Hàm Mặt, {siteConfig.doctor.full}{" "}
            trực tiếp tư vấn, lên phác đồ và thực hiện điều trị cho từng khách hàng.
          </p>

          <dl className="mt-8 border-t border-line">
            {credentials.map((c) => (
              <div key={c.term} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[140px_1fr] sm:gap-6">
                <dt className="text-[15px] font-medium text-ink-soft">{c.term}</dt>
                <dd className="text-[17px] font-semibold text-ink">{c.detail}</dd>
              </div>
            ))}
          </dl>

          <ButtonLink href={BOOKING_ANCHOR} className="mt-9">
            <CalendarIcon size={20} />
            Đặt lịch với bác sĩ
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
