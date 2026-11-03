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
  audience: string;
  description: string;
  featured: boolean;
  icon: ServiceIconKey;
};

export const services: Service[] = [
  {
    slug: "cay-ghep-implant",
    name: "Cấy ghép Implant",
    shortName: "Implant",
    audience: "Khách hàng 45–70 tuổi",
    description:
      "Giải pháp phục hồi răng mất vững chắc cho người trung niên và cao tuổi, giúp khôi phục chức năng ăn nhai bình thường và ổn định lâu dài.",
    featured: true,
    icon: "implant",
  },
  {
    slug: "nieng-rang-chinh-nha",
    name: "Niềng răng chỉnh nha",
    shortName: "Niềng răng",
    audience: "Trẻ em & thanh thiếu niên 8–15 tuổi",
    description:
      "Nắn chỉnh răng lệch lạc, sai khớp cắn cho trẻ từ 8–15 tuổi, đồng hành cùng phụ huynh định hình hàm răng đều đẹp và nụ cười tự tin cho con.",
    featured: true,
    icon: "braces",
  },
  {
    slug: "rang-su-tham-my",
    name: "Răng sứ thẩm mỹ",
    shortName: "Răng sứ",
    audience: "Khách hàng 25–50 tuổi · làm mới & làm lại",
    description:
      "Thiết kế dáng răng tinh tế, tự nhiên cho khách hàng muốn làm mới hoặc làm lại răng sứ hỏng, xỉn màu, chú trọng thẩm mỹ và khớp cắn chuẩn.",
    featured: false,
    icon: "crown",
  },
  {
    slug: "tieu-phau-rang-khon",
    name: "Tiểu phẫu nhổ răng khôn, kể cả răng mọc ngầm trong xương",
    shortName: "Răng khôn",
    audience: "Khách hàng 18–30 tuổi",
    description:
      "Bác sĩ chuyên khoa trực tiếp thăm khám phim chụp và xử lý an toàn, nhẹ nhàng các ca răng khôn mọc lệch, mọc ngầm phức tạp trong xương.",
    featured: false,
    icon: "wisdom",
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
