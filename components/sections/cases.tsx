import { caseGroups } from "@/lib/cases";
import { BOOKING_ANCHOR, siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { ArrowRightIcon, FacebookIcon } from "@/components/ui/icons";
import { CaseTabs } from "./case-tabs";

/** Social Proof-Focused (#24): ca trước/sau thật, chia theo 4 dịch vụ (USP 5). */
export function Cases() {
  return (
    <section id="ca-thuc-te" aria-labelledby="ca-thuc-te-title" className="section-y bg-white">
      <div className="container-site">
        <SectionHeading
          id="ca-thuc-te-title"
          title="Ca điều trị thực tế tại phòng khám"
          description="Hình ảnh trước – sau do Nha Khoa Thái Học thực hiện và thường xuyên cập nhật. Chọn dịch vụ để xem ca tương ứng."
        />

        <div data-reveal>
          <CaseTabs groups={caseGroups} />
        </div>

        {/* Accessible & Ethical: nói rõ kết quả phụ thuộc từng người */}
        <p className="mt-8 text-[15px] text-ink-soft">
          Kết quả điều trị phụ thuộc vào tình trạng răng của từng người.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={siteConfig.facebookUrl} external variant="outline" className="text-center">
            <FacebookIcon size={20} />
            Xem thêm ca mới nhất trên Facebook
            <ArrowRightIcon size={18} />
          </ButtonLink>
          <ButtonLink href={BOOKING_ANCHOR}>Đặt lịch tư vấn</ButtonLink>
        </div>
      </div>
    </section>
  );
}
