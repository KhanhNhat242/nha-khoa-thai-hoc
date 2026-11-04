/**
 * Nguồn duy nhất cho thông tin doanh nghiệp (AGENTS.md R2).
 * Mọi giá trị lấy từ docs/REQUIREMENTS.md §2, §7 — không hard-code ở component.
 */

export type Hotline = {
  /** Dạng gọi được: dùng cho tel: */
  raw: string;
  /** Dạng hiển thị theo đúng cách khách viết */
  display: string;
};

const hotlines: Hotline[] = [
  { raw: "0982133474", display: "0982.133.474" },
  { raw: "0379233566", display: "0379.233.566" },
];

export const siteConfig = {
  shortName: "Nha Khoa Thái Học",
  fullName: "Nha Khoa Thái Học - Kim Sơn (Răng Hàm Mặt)",
  doctor: {
    short: "BS.CK1 Vũ Thái Học",
    full: "Bác sĩ chuyên khoa I Vũ Thái Học",
    experience: "hơn 12 năm kinh nghiệm",
  },
  heroTitle: "Trung tâm trồng răng Implant & Niềng răng",
  slogan: "Nha khoa đạt chuẩn – Làm việc bằng Chuyên môn + Đạo đức + Trách nhiệm.",
  values: "Chuyên môn – Đạo đức – Trách nhiệm",
  license: {
    number: "135/NB - GPHĐ",
    numberCompact: "135/NB-GPHĐ",
    issuer: "Sở Y tế Ninh Bình",
  },
  address: "Phố Quang Thiện - Kim Sơn - Ninh Bình",
  hotlines,
  /** Số gọi chính — ô "SĐT / Zalo" trên phiếu. [CẦN HỎI] REQUIREMENTS §12.4 */
  primaryPhone: hotlines[1],
  zalo: { raw: "0379233566", display: "0379.233.566", url: "https://zalo.me/0379233566" },
  facebookUrl: "https://www.facebook.com/bs.ThaiHoc",
  mapsUrl: "https://maps.app.goo.gl/AYDzmHxSDANRsrZU7",
  /**
   * Link rút gọn maps.app.goo.gl không nhúng được vào iframe → dùng truy vấn theo tên + địa chỉ.
   * [CẦN HỎI] Lấy link nhúng chính xác (Google Maps → Chia sẻ → Nhúng bản đồ) khi có.
   */
  mapsEmbedUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Nha Khoa Thái Học, Phố Quang Thiện, Kim Sơn, Ninh Bình") +
    "&output=embed",
  logo: "/images/logo-nha-khoa-thai-hoc.png",
} as const;

export const hotlinesText = siteConfig.hotlines.map((h) => h.display).join(" - ");
export const telHref = (phone: Hotline | { raw: string }) => `tel:${phone.raw}`;

export const navItems = [
  { href: "#dich-vu", label: "Dịch vụ" },
  { href: "#ca-thuc-te", label: "Ca thực tế" },
  { href: "#bac-si", label: "Bác sĩ" },
  { href: "#lien-he", label: "Liên hệ" },
] as const;

export const BOOKING_ANCHOR = "#dat-lich";
