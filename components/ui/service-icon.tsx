import type { ServiceIconKey } from "@/lib/services";

/**
 * Icon dịch vụ kiểu Flat Design (#12): khối vuông xanh #059669, hình trắng đặc, không bóng/gradient.
 * Trang trí — đã có tên dịch vụ dạng chữ bên cạnh nên aria-hidden.
 */
const TOOTH =
  "M7.6 3.2c1.7 0 2.7.9 4.4.9s2.7-.9 4.4-.9c2.5 0 4.1 2.1 4.1 4.8 0 2.3-.9 3.7-1.5 5.4-.6 1.9-.8 7.4-3 7.4-1.9 0-1.8-4.9-4-4.9s-2.1 4.9-4 4.9c-2.2 0-2.4-5.5-3-7.4C4.4 11.7 3.5 10.3 3.5 8c0-2.7 1.6-4.8 4.1-4.8Z";

function Glyph({ icon, fg, bg }: { icon: ServiceIconKey; fg: string; bg: string }) {
  switch (icon) {
    case "implant":
      return (
        <>
          {/* mão răng + trụ ren */}
          <path d="M6.5 3.5h11a2 2 0 0 1 2 2c0 3-1.6 5-3.5 5.6H8C6.1 10.5 4.5 8.5 4.5 5.5a2 2 0 0 1 2-2Z" fill={fg} />
          <path d="M9 12.5h6l-.6 1.6h-4.8L9 12.5Zm.3 2.8h5.4l-.6 1.6H9.9l-.6-1.6Zm.8 2.8h3.8l-.6 1.6h-2.6l-.6-1.6Zm1 2.8h1.8l-.9 1.6-.9-1.6Z" fill={fg} />
        </>
      );
    case "braces":
      return (
        <>
          <path d={TOOTH} fill={fg} />
          <rect x="9" y="8.2" width="6" height="4.2" rx="0.6" fill={bg} />
          <path d="M2.5 10.3h19" stroke={bg} strokeWidth="1.4" />
        </>
      );
    case "crown":
      return (
        <>
          <path d={TOOTH} fill={fg} />
          <path d="M18.6 1.6l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6.6-1.7Z" fill={fg} />
          <path d="M8 6.6c1.3-.9 2.5-.5 3.2-.2" stroke={bg} strokeWidth="1.4" strokeLinecap="round" fill="none" />
        </>
      );
    case "wisdom":
      return (
        <>
          <path d={TOOTH} fill={fg} transform="translate(0 2.2) scale(1 0.9)" />
          <path d="M12 1.2v5.2M9.6 3.6 12 1.2l2.4 2.4" stroke={fg} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </>
      );
  }
}

/** tone="inverse": khối trắng, hình xanh — dùng trên nền xanh đặc. */
export function ServiceIcon({
  icon,
  size = 56,
  tone = "default",
}: {
  icon: ServiceIconKey;
  size?: number;
  tone?: "default" | "inverse";
}) {
  const inverse = tone === "inverse";
  const fg = inverse ? "#047857" : "#ffffff";
  const bg = inverse ? "#ffffff" : "#059669";
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-[4px] ${inverse ? "bg-white" : "bg-brand-600"}`}
      style={{ width: size, height: size }}
    >
      <svg width={size * 0.56} height={size * 0.56} viewBox="0 0 24 24" focusable="false">
        <Glyph icon={icon} fg={fg} bg={bg} />
      </svg>
    </span>
  );
}
