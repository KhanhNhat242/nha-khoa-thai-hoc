"use client";

import type { ReactNode } from "react";
import { BOOKING_ANCHOR } from "@/lib/site-config";
import { SELECT_CASE_EVENT, SELECT_SERVICE_EVENT } from "@/lib/services";
import { ArrowRightIcon } from "@/components/ui/icons";

type Tone = "default" | "inverse";

const linkTone: Record<Tone, string> = {
  default: "text-brand-800 decoration-brand-600/40 hover:decoration-brand-600",
  inverse: "text-white decoration-white/50 hover:decoration-white",
};

const linkBase =
  "group/cta inline-flex min-h-11 items-center gap-2 text-[17px] font-semibold underline decoration-2 underline-offset-[6px]";

/** "Nhận tư vấn dịch vụ này →": cuộn tới form và chọn sẵn dịch vụ. */
export function ServiceCta({
  slug,
  serviceName,
  tone = "default",
  children = "Nhận tư vấn dịch vụ này",
}: {
  slug: string;
  serviceName: string;
  tone?: Tone;
  children?: ReactNode;
}) {
  return (
    <a
      href={BOOKING_ANCHOR}
      onClick={() => window.dispatchEvent(new CustomEvent(SELECT_SERVICE_EVENT, { detail: slug }))}
      className={`${linkBase} ${linkTone[tone]}`}
      aria-label={`Nhận tư vấn dịch vụ ${serviceName}`}
    >
      {children}
      <ArrowRightIcon size={18} className="transition-transform duration-150 group-hover/cta:translate-x-1" />
    </a>
  );
}

/** Cuộn tới section ca thực tế và mở đúng tab của dịch vụ. */
export function CaseLink({ slug, children, tone = "default" }: { slug: string; children: ReactNode; tone?: Tone }) {
  return (
    <a
      href="#ca-thuc-te"
      onClick={() => window.dispatchEvent(new CustomEvent(SELECT_CASE_EVENT, { detail: slug }))}
      className={`${linkBase} ${linkTone[tone]}`}
    >
      {children}
      <ArrowRightIcon size={18} className="transition-transform duration-150 group-hover/cta:translate-x-1" />
    </a>
  );
}
