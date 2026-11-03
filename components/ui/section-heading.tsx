import type { ReactNode } from "react";

type Props = {
  id?: string;
  title: ReactNode;
  description?: ReactNode;
};

/**
 * Tiêu đề section kiểu Swiss: đường kẻ 1px phía trên, lưới 12 cột bất đối xứng —
 * H2 (xanh #059669, ≥ 30px) bên trái, mô tả bên phải căn đáy.
 */
export function SectionHeading({ id, title, description }: Props) {
  return (
    <div
      data-reveal
      className="mb-10 grid grid-cols-1 gap-5 border-t border-line pt-8 lg:mb-14 lg:grid-cols-12 lg:gap-8 lg:pt-10"
    >
      <h2
        id={id}
        className="text-[30px] leading-[1.15] font-bold tracking-[-0.025em] text-brand-600 md:text-[36px] lg:col-span-6 lg:text-[44px]"
      >
        {title}
      </h2>
      {description ? (
        <p className="prose-body text-[17px] text-ink-soft lg:col-span-5 lg:col-start-8 lg:self-end">
          {description}
        </p>
      ) : null}
    </div>
  );
}
