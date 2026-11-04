/**
 * Token màu cho antd (AGENTS.md R4, REQUIREMENTS §14). Phải khớp với @theme trong app/globals.css.
 */
export const colors = {
  brand600: "#059669",
  brand700: "#047857",
  brand800: "#065F46",
  ink: "#111827",
  inkSoft: "#374151",
  surface: "#F5F5F5",
  line: "#D4D4D4",
  field: "#6B7280",
  error: "#B42318",
} as const;

/** Màu phản chiếu (tint) của thẻ ReflectiveCard ở section Ca thực tế — người dùng chỉ định, chỉ dùng trắng. */
export const reflectiveCase = {
  tint: "#ffffff",
} as const;

/** Màu chữ + vệt sáng ShinyText ở tiêu đề Hero (desktop, trên ảnh tối) — người dùng chỉ định, xám trung tính + trắng. */
export const shinyHero = {
  color: "#b5b5b5",
  shineColor: "#ffffff",
} as const;
