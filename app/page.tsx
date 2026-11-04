import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Services } from "@/components/sections/services";
import { Doctor } from "@/components/sections/doctor";
import { Cases } from "@/components/sections/cases";
import { Booking } from "@/components/sections/booking";
import { SiteFooter } from "@/components/sections/site-footer";
import { FloatingContact } from "@/components/sections/floating-contact";
import { RevealObserver } from "@/components/ui/reveal-observer";

/** Landing page một trang — thứ tự section theo REQUIREMENTS §11 (Trust & Authority). */
export default function Home() {
  return (
    <>
      {/* Accessible & Ethical: bỏ qua menu, tới thẳng nội dung */}
      <a
        href="#noi-dung"
        className="sr-only z-[60] rounded-[4px] bg-brand-700 px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Bỏ qua đến nội dung chính
      </a>
      <SiteHeader />
      <main id="noi-dung" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        {/* <TrustStrip /> */}
        <Services />
        <Cases />
        <Doctor />
        <Booking />
      </main>
      <SiteFooter />
      <FloatingContact />
      <RevealObserver />
    </>
  );
}
