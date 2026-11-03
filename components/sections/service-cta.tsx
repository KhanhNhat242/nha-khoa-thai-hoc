"use client";

import { BOOKING_ANCHOR } from "@/lib/site-config";
import { SELECT_SERVICE_EVENT } from "@/lib/services";
import { ArrowRightIcon } from "@/components/ui/icons";

/** "Nhận tư vấn dịch vụ này →": cuộn tới form và chọn sẵn dịch vụ. */
export function ServiceCta({ slug, serviceName }: { slug: string; serviceName: string }) {
  return (
    <a
      href={BOOKING_ANCHOR}
      onClick={() => window.dispatchEvent(new CustomEvent(SELECT_SERVICE_EVENT, { detail: slug }))}
      className="group/cta inline-flex min-h-11 items-center gap-2 text-[17px] font-semibold text-brand-800 underline decoration-2 decoration-brand-600/40 underline-offset-[6px] hover:decoration-brand-600"
      aria-label={`Nhận tư vấn dịch vụ ${serviceName}`}
    >
      Nhận tư vấn dịch vụ này
      <ArrowRightIcon size={18} className="transition-transform duration-150 group-hover/cta:translate-x-1" />
    </a>
  );
}
