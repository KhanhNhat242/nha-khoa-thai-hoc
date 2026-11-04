import { BOOKING_ANCHOR, siteConfig, telHref } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/button-link";
import { ProfileCard } from "@/components/ui/profile-card";
import { AwardIcon, CalendarIcon, DoctorIcon, PhoneIcon } from "@/components/ui/icons";

/**
 * Trust & Authority — bố cục "giới thiệu bác sĩ":
 * trái: thẻ hồ sơ bác sĩ (ProfileCard: ảnh + tên, học vị, nút đặt lịch);
 * phải: nhãn nhỏ → tiêu đề có tên bác sĩ tô xanh → đoạn giới thiệu → hàng 3 chỉ số → nút đặt lịch + gọi.
 * Mọi con số/chữ đều lấy từ phiếu (siteConfig) — không thêm số liệu ngoài phiếu.
 */
const licenseShort = siteConfig.license.numberCompact.split("-")[0]; // "135/NB"

const stats = [
  { value: "12+", label: "Năm kinh nghiệm" }, // phiếu: "hơn 12 năm" ·   giữ "kinh nghiệm" cùng dòng
  { value: "CK1", label: "Bác sĩ chuyên khoa Răng Hàm Mặt" },
  { value: licenseShort, label: `Giấy phép ${siteConfig.license.issuer.replace("Y tế", "Y tế")}` }, // giữ "Y tế" cùng dòng
];

export function Doctor() {
  return (
    <section id="bac-si" aria-labelledby="bac-si-title" className="section-y overflow-hidden bg-white">
      <div className="container-site grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Thẻ hồ sơ bác sĩ (React Bits – ProfileCard): nghiêng 3D, ánh holo + vệt loá theo chuột, ảnh trượt nhẹ */}
        <div data-reveal className="flex justify-center lg:col-span-6 lg:justify-start">
          <ProfileCard
            className="w-full max-w-[440px]"
            image={{
              src: "/images/site/bac-si-tu-van-phu-huynh.jpg",
              alt: "Bác sĩ phân tích phim và phác đồ trên màn hình lớn, tư vấn trực tiếp cho phụ huynh và bé",
              sizes: "(min-width: 1024px) 440px, 100vw",
              className: "object-cover object-[32%_center]",
            }}
            name={siteConfig.doctor.short}
            title="Bác sĩ chuyên khoa Răng Hàm Mặt"
            handle={siteConfig.shortName}
            status="Làm việc cả ngày lễ"
            contactText="Đặt lịch"
            contactHref={BOOKING_ANCHOR}
            contactIcon={<CalendarIcon size={18} />}
            holo={0.8}
            glare={0.5}
            tiltStrength={12}
            parallax={8}
            radius={16}
            enableTilt
            intro
            showUserInfo
            theme="dark"
            /* Khung thẻ xanh lá như nút "Đặt lịch" (brand-700) thay cho xám tối mặc định; nút trong thẻ xanh đậm hơn (brand-800) */
            statusColor="var(--color-white)"
            colors={{
              "--pc-frame": "var(--color-brand-700)",
              "--pc-tile": "var(--color-brand-800)",
              "--pc-tile-edge": "rgb(255 255 255 / 0.14)",
              "--pc-muted": "rgb(255 255 255 / 0.9)",
            }}
          />
        </div>

        {/* Nội dung */}
        <div data-reveal className="lg:col-span-6 lg:col-start-7">
          <p className="flex items-center gap-3 text-[15px] font-semibold tracking-[0.04em] text-brand-800 uppercase">
            <span aria-hidden="true" className="h-0.5 w-10 bg-brand-600" />
            Bác sĩ điều trị
          </p>
          <h2
            id="bac-si-title"
            className="mt-4 text-[30px] leading-[1.15] font-bold tracking-[-0.025em] text-ink md:text-[36px] lg:text-[44px]"
          >
            Trực tiếp thăm khám &amp; điều trị bởi <span className="text-brand-600">{siteConfig.doctor.short}</span>
          </h2>
          <p className="prose-body mt-5 text-[17px] text-ink-soft md:text-[18px]">
            Với {siteConfig.doctor.experience} chuyên sâu trong lĩnh vực Răng Hàm Mặt, {siteConfig.doctor.full}{" "}
            trực tiếp tư vấn, lên phác đồ và thực hiện điều trị cho từng khách hàng — chuyên sâu Implant, răng sứ và
            tiểu phẫu răng khôn mọc ngầm.
          </p>

          {/* Hàng chỉ số */}
          <dl className="mt-9 grid grid-cols-3 gap-4 border-y border-line py-6 sm:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1.5">
                <dt className="text-[14px] leading-snug text-ink-soft sm:text-[15px]">{s.label}</dt>
                <dd className="order-first text-[26px] leading-none font-bold tracking-[-0.02em] text-brand-600 sm:text-[36px]">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Hành động */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink href={BOOKING_ANCHOR} className="!rounded-full">
              <CalendarIcon size={20} />
              Đặt lịch với bác sĩ
            </ButtonLink>
            <a
              href={telHref(siteConfig.primaryPhone)}
              className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-line py-1.5 pr-6 pl-1.5 text-[17px] font-semibold text-ink transition-colors duration-150 hover:border-brand-700 hover:text-brand-800"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-white">
                <PhoneIcon size={18} />
              </span>
              {siteConfig.primaryPhone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
