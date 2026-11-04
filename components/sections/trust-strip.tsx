import type { ComponentType } from "react";
import { siteConfig } from "@/lib/site-config";
import { AwardIcon, ClockIcon, DoctorIcon, ShieldCheckIcon } from "@/components/ui/icons";

/** Dải chỉ số tin cậy — Flat Design (#12): khối xanh phẳng #047857, chữ trắng (5.48:1). USP 1, 3, 4. */
const items: { icon: ComponentType<{ size?: number; className?: string }>; value: string; label: string }[] = [
  { icon: DoctorIcon, value: "BS.CK1", label: "Trực tiếp điều trị" },
  { icon: AwardIcon, value: "12+ năm", label: "Kinh nghiệm Răng Hàm Mặt" },
  { icon: ShieldCheckIcon, value: "Sở Y tế cấp phép", label: `Giấy phép ${siteConfig.license.numberCompact}` },
  { icon: ClockIcon, value: "Làm cả ngày lễ", label: "Thuận tiện sắp xếp lịch hẹn" },
];

export function TrustStrip() {
  return (
    <section aria-label="Chỉ số tin cậy" className="bg-brand-700 text-white">
      {/* gap-px trên nền trắng mờ = đường kẻ 1px giữa các ô ở mọi bố cục */}
      <ul className="container-site grid grid-cols-1 gap-px bg-white/25 !px-0 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, value, label }) => (
          <li
            key={value}
            className="flex items-center gap-4 bg-brand-700 px-4 py-5 sm:px-6 lg:h-[112px] lg:py-0 lg:first:pl-12"
          >
            <Icon size={30} className="shrink-0" />
            <span className="leading-snug">
              <span className="block text-[20px] font-bold tracking-[-0.01em]">{value}</span>
              <span className="block text-[15px]">{label}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
