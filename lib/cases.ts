/**
 * Ca điều trị trước/sau (REQUIREMENTS §6 USP 5, §14) — ảnh thật khách đã đăng, lấy từ Drive.
 * Chú thích chỉ mô tả ca, không ghi tên bệnh nhân.
 * [CẦN HỎI] xác nhận bệnh nhân đồng ý đăng lên website (REQUIREMENTS §12.7).
 */
import { services } from "./services";

export type CaseItem = { src: string; alt: string; caption: string };

export type CaseGroup = { slug: string; label: string; items: CaseItem[] };

const bySlug = (slug: string) => services.find((s) => s.slug === slug)!;

export const caseGroups: CaseGroup[] = [
  {
    slug: bySlug("cay-ghep-implant").slug,
    label: bySlug("cay-ghep-implant").shortName,
    items: [
      {
        src: "/images/site/ca-implant-r36-37-46.jpg",
        alt: "Phim X-quang trước và sau khi cấy Implant răng 36, 37, 46",
        caption: "Cấy Implant răng 36, 37, 46 — phim trước / sau",
      },
      {
        src: "/images/site/ca-implant-6-tru-ham-duoi.jpg",
        alt: "Phim X-quang trước và sau khi cấy 6 trụ Implant hàm dưới",
        caption: "Cấy 6 trụ Implant hàm dưới — phim trước / sau",
      },
      {
        src: "/images/site/ca-implant-phuc-hoi-rang-mat.jpg",
        alt: "Phim X-quang trước và sau khi cấy Implant phục hồi răng mất",
        caption: "Cấy Implant phục hồi răng mất — phim trước / sau",
      },
    ],
  },
  {
    slug: bySlug("rang-su-tham-my").slug,
    label: bySlug("rang-su-tham-my").shortName,
    items: [
      {
        src: "/images/site/ca-rang-su-toan-ham-tren.jpg",
        alt: "Ảnh khách hàng trước và sau khi làm răng sứ thẩm mỹ toàn hàm trên",
        caption: "Răng sứ thẩm mỹ toàn hàm trên — ban đầu / hiện tại",
      },
      {
        src: "/images/site/ca-rang-su-hoan-thien.jpg",
        alt: "Khách hàng sau khi hoàn thiện răng sứ thẩm mỹ tại phòng khám",
        caption: "Khách hàng sau khi hoàn thiện răng sứ",
      },
    ],
  },
  {
    slug: bySlug("tieu-phau-rang-khon").slug,
    label: bySlug("tieu-phau-rang-khon").shortName,
    items: [
      {
        src: "/images/site/ca-rang-khon-48-moc-ngang.jpg",
        alt: "Phim X-quang trước và sau khi nhổ răng khôn 48 mọc ngang",
        caption: "Nhổ răng khôn 48 mọc ngang 90° — phim trước / sau",
      },
      {
        src: "/images/site/ca-rang-khon-38-48-ngam.jpg",
        alt: "Phim X-quang trước và sau khi nhổ răng khôn 38 và 48 ngầm trong xương",
        caption: "Nhổ răng khôn 38, 48 ngầm trong xương — phim trước / sau",
      },
    ],
  },
  {
    slug: bySlug("nieng-rang-chinh-nha").slug,
    label: bySlug("nieng-rang-chinh-nha").shortName,
    items: [
      {
        src: "/images/site/ca-nieng-rang-lech-lac.jpg",
        alt: "Ảnh trước và sau niềng răng: từ răng lệch lạc đến răng đều, tròn cung",
        caption: "Răng lệch lạc → đều phẳng, tròn cung",
      },
      {
        src: "/images/site/ca-nieng-cam-nguoc.jpg",
        alt: "Ảnh trước và hiện tại khi điều trị xương hạng III, cắn ngược vùng răng cửa",
        caption: "Xương hạng III, cắn ngược vùng răng cửa",
      },
      {
        src: "/images/site/ca-nieng-anh-nghieng.jpg",
        alt: "Ảnh nghiêng trước và sau niềng răng",
        caption: "Ảnh nghiêng trước / sau niềng răng",
      },
    ],
  },
];
