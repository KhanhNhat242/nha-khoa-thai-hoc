import { caseGroups } from "@/lib/cases";
import { BOOKING_ANCHOR, siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { ArrowRightIcon, FacebookIcon } from "@/components/ui/icons";
import { CaseTabs } from "./case-tabs";

/** Social Proof-Focused (#24): ca trước/sau thật, chia theo 4 dịch vụ (USP 5). */
export function Cases() {
  return (
    <section id="ca-thuc-te" aria-labelledby="ca-thuc-te-title" className="section-y bg-surface">
      <div className="container-site">
        <SectionHeading
          id="ca-thuc-te-title"
          title="Ca điều trị thực tế tại phòng khám"
          description={
            <>
              Hình ảnh trước – sau do <span className="whitespace-nowrap">{siteConfig.shortName}</span> thực&nbsp;hiện và
              thường xuyên cập nhật. Chọn dịch vụ để xem ca tương ứng.
            </>
          }
        />

        <div data-reveal>
          <CaseTabs groups={caseGroups} />
        </div>
      </div>
    </section>
  );
}
