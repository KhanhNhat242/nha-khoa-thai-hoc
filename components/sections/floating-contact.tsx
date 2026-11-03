import { BOOKING_ANCHOR, siteConfig, telHref } from "@/lib/site-config";
import { CalendarIcon, ChatIcon, PhoneIcon } from "@/components/ui/icons";

/**
 * Liên hệ nhanh — Flat: khối phẳng, không bóng, không nhấp nháy.
 * Mobile: thanh cố định đáy màn hình (Gọi · Zalo · Đặt lịch), không che nội dung.
 * Desktop: 2 nút vuông nổi góc phải.
 */
export function FloatingContact() {
  return (
    <>
      <nav
        aria-label="Liên hệ nhanh"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <a
          href={telHref(siteConfig.primaryPhone)}
          className="flex min-h-16 flex-col items-center justify-center gap-1 bg-brand-700 text-[14px] font-semibold text-white"
        >
          <PhoneIcon size={21} />
          Gọi ngay
        </a>
        <a
          href={siteConfig.zalo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-16 flex-col items-center justify-center gap-1 text-[14px] font-semibold text-brand-800"
        >
          <ChatIcon size={21} />
          Chat Zalo
        </a>
        <a
          href={BOOKING_ANCHOR}
          className="flex min-h-16 flex-col items-center justify-center gap-1 border-l border-line text-[14px] font-semibold text-brand-800"
        >
          <CalendarIcon size={21} />
          Đặt lịch
        </a>
      </nav>

      <div className="fixed right-6 bottom-6 z-40 hidden flex-col items-end gap-2 md:flex">
        <a
          href={siteConfig.zalo.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat Zalo ${siteConfig.zalo.display}`}
          className="grid h-14 w-14 place-items-center rounded-[4px] border-2 border-brand-700 bg-white text-[15px] font-bold text-brand-800 hover:bg-surface"
        >
          Zalo
        </a>
        <a
          href={telHref(siteConfig.primaryPhone)}
          aria-label={`Gọi ${siteConfig.primaryPhone.display}`}
          className="grid h-14 w-14 place-items-center rounded-[4px] bg-brand-700 text-white hover:bg-brand-800"
        >
          <PhoneIcon size={24} />
        </a>
      </div>
    </>
  );
}
