/**
 * Đúng 4 dịch vụ theo phiếu (REQUIREMENTS §4). Dùng chung cho section Dịch vụ, tab ca thực tế và form.
 * Không thêm dịch vụ thứ 5.
 */

export type ServiceIconKey = "implant" | "braces" | "crown" | "wisdom";

export type Service = {
  slug: string;
  /** Tên nguyên văn từ phiếu */
  name: string;
  /** Tên ngắn cho tab */
  shortName: string;
  /** Tiêu đề đè trên ảnh ở section Dịch vụ (tên đầy đủ nguyên văn vẫn hiển thị trong phần chi tiết) */
  cardTitle: string;
  /** Ảnh minh hoạ — ảnh thật từ Drive của khách */
  image: { src: string; alt: string; position: string };
  audience: string;
  description: string;
  /** Làm nổi trong section Dịch vụ — chỉ răng khôn mọc ngầm (REQUIREMENTS §4) */
  featured: boolean;
  icon: ServiceIconKey;
  /** Nhãn nút tư vấn — nói rõ hành động, không lặp một câu chung cho mọi dịch vụ */
  ctaLabel: string;
};

export const services: Service[] = [
  {
    slug: "cay-ghep-implant",
    cardTitle: "Cấy ghép Implant",
    image: { src: "/images/site/dv-implant.jpg", alt: "Hộp trụ Implant thực tế sử dụng tại phòng khám", position: "50% 50%" },
    name: "Cấy ghép Implant",
    shortName: "Implant",
    audience: "Khách hàng 45–70 tuổi",
    description:
      "Giải pháp phục hồi răng mất vững chắc cho người trung niên và cao tuổi, giúp khôi phục chức năng ăn nhai bình thường và ổn định lâu dài.",
    featured: false,
    icon: "implant",
    ctaLabel: "Tư vấn cấy ghép Implant",
  },
  {
    slug: "nieng-rang-chinh-nha",
    cardTitle: "Niềng răng chỉnh nha",
    image: { src: "/images/site/dv-nieng-rang.jpg", alt: "Khách hàng cầm hộp khí cụ chỉnh nha tại phòng khám", position: "50% 40%" },
    name: "Niềng răng chỉnh nha",
    shortName: "Niềng răng",
    audience: "Trẻ em & thanh thiếu niên 8–15 tuổi",
    description:
      "Nắn chỉnh răng lệch lạc, sai khớp cắn cho trẻ từ 8–15 tuổi, đồng hành cùng phụ huynh định hình hàm răng đều đẹp và nụ cười tự tin cho con.",
    featured: false,
    icon: "braces",
    ctaLabel: "Tư vấn niềng răng cho con",
  },
  {
    slug: "rang-su-tham-my",
    cardTitle: "Răng sứ thẩm mỹ",
    image: { src: "/images/site/dv-rang-su.jpg", alt: "Bác sĩ tư vấn thiết kế nụ cười trên màn hình phân tích khuôn mặt", position: "62% 50%" },
    name: "Răng sứ thẩm mỹ",
    shortName: "Răng sứ",
    audience: "Khách hàng 25–50 tuổi · làm mới & làm lại",
    description:
      "Thiết kế dáng răng tinh tế, tự nhiên cho khách hàng muốn làm mới hoặc làm lại răng sứ hỏng, xỉn màu, chú trọng thẩm mỹ và khớp cắn chuẩn.",
    featured: false,
    icon: "crown",
    ctaLabel: "Tư vấn răng sứ",
  },
  {
    slug: "tieu-phau-rang-khon",
    cardTitle: "Tiểu phẫu răng khôn",
    image: { src: "/images/site/dv-rang-khon.jpg", alt: "Bác sĩ thực hiện tiểu phẫu răng khôn dưới đèn phẫu thuật", position: "40% 50%" },
    name: "Tiểu phẫu nhổ răng khôn, kể cả răng mọc ngầm trong xương",
    shortName: "Răng khôn",
    audience: "Khách hàng 18–30 tuổi",
    description:
      "Bác sĩ chuyên khoa trực tiếp thăm khám phim chụp và xử lý an toàn, nhẹ nhàng các ca răng khôn mọc lệch, mọc ngầm phức tạp trong xương.",
    featured: true,
    icon: "wisdom",
    ctaLabel: "Tư vấn nhổ răng khôn",
  },
];

/** Lựa chọn thêm trong form khi khách chưa rõ dịch vụ */
export const UNSURE_SERVICE = {
  slug: "chua-ro",
  name: "Chưa rõ, cần bác sĩ tư vấn",
} as const;

export const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.name })),
  { value: UNSURE_SERVICE.slug, label: UNSURE_SERVICE.name },
];

export const SELECT_SERVICE_EVENT = "booking:select-service";

/** Mở tab ca thực tế theo slug dịch vụ */
export const SELECT_CASE_EVENT = "cases:select-tab";
