import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Suspense } from "react";
import { AntdProvider } from "@/components/providers/antd-provider";
import { siteConfig } from "@/lib/site-config";

/** Swiss Modernism 2.0: Inter (hỗ trợ tiếng Việt) */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = `${siteConfig.shortName} – ${siteConfig.heroTitle} | Kim Sơn, Ninh Bình`;
const description = `${siteConfig.fullName}. ${siteConfig.doctor.short} trực tiếp điều trị: cấy ghép Implant, niềng răng chỉnh nha, răng sứ thẩm mỹ, tiểu phẫu răng khôn mọc ngầm. Đặt lịch tư vấn ngay.`;

export const metadata: Metadata = {
  title,
  description,
  applicationName: siteConfig.shortName,
  icons: { icon: siteConfig.logo },
  openGraph: {
    title,
    description,
    siteName: siteConfig.fullName,
    locale: "vi_VN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <AntdRegistry>
            <AntdProvider>{children}</AntdProvider>
          </AntdRegistry>
        </Suspense>
      </body>
    </html>
  );
}
