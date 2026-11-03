"use client";

import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import type { ReactNode } from "react";
import { colors } from "@/lib/theme";

/** antd theo Flat/Swiss: bo góc 4px, không đổ bóng, viền ô nhập đủ tương phản. */
export function AntdProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      locale={viVN}
      theme={{
        token: {
          colorPrimary: colors.brand700,
          colorPrimaryHover: colors.brand800,
          colorLink: colors.brand800,
          colorText: colors.ink,
          colorTextSecondary: colors.inkSoft,
          colorTextPlaceholder: "#6B7280",
          colorBorder: colors.field,
          colorError: colors.error,
          fontFamily: "var(--font-sans)",
          fontSize: 17,
          borderRadius: 4,
          borderRadiusLG: 4,
          controlHeight: 48,
          controlHeightLG: 52,
          boxShadow: "none",
          boxShadowSecondary: "0 0 0 1px #D4D4D4",
          controlOutline: "rgba(6, 95, 70, 0.25)",
        },
        components: {
          Form: { itemMarginBottom: 24, labelFontSize: 16, verticalLabelPadding: "0 0 8px" },
          Button: { fontWeight: 700, primaryShadow: "none", defaultShadow: "none" },
          Select: { optionHeight: 44, optionPadding: "11px 12px" },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
