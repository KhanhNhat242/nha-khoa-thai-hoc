import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "inverse";

/** Flat: khối màu phẳng, bo 4px, không đổ bóng. Cao 52px (vùng bấm ≥ 44px). */
const base =
  "inline-flex items-center justify-center gap-2.5 rounded-[4px] font-semibold transition-colors duration-150 min-h-[52px] px-6 text-[17px] leading-tight";

const variants: Record<Variant, string> = {
  primary: "bg-brand-700 text-white hover:bg-brand-800",
  outline: "border-2 border-brand-700 text-brand-800 bg-white hover:bg-surface",
  inverse: "bg-white text-brand-800 hover:bg-surface",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
  external?: boolean;
};

/** Link dạng nút. Link ngoài tự thêm target/rel (AGENTS.md R5). */
export function ButtonLink({ variant = "primary", className = "", external, children, ...rest }: Props) {
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...externalProps} {...rest}>
      {children}
    </a>
  );
}
