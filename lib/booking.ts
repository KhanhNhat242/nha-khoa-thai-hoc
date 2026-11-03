/**
 * Ràng buộc form đặt lịch — 3 trường (REQUIREMENTS §8, Conversion-Optimized).
 * Dùng chung cho client (antd rules) và server (Server Action).
 */
import { serviceOptions } from "./services";

export const BOOKING_LIMITS = { name: 100 } as const;

/** SĐT di động Việt Nam: 10 số, bắt đầu bằng 0 (đầu số 03, 05, 07, 08, 09) */
export const VN_MOBILE_REGEX = /^0(3|5|7|8|9)\d{8}$/;

export const normalizePhone = (value: string) => value.replace(/[\s.\-()]/g, "");

export type BookingInput = {
  name: string;
  phone: string;
  service?: string;
};

export type BookingField = keyof BookingInput;
export type BookingErrors = Partial<Record<BookingField, string>>;

export type BookingResult =
  | { status: "success" }
  | { status: "invalid"; errors: BookingErrors }
  | { status: "error"; message: string };

export function validateName(value: string | undefined): string | undefined {
  const name = (value ?? "").trim();
  if (!name) return "Vui lòng nhập họ và tên.";
  if (name.length > BOOKING_LIMITS.name) return `Họ và tên tối đa ${BOOKING_LIMITS.name} ký tự.`;
}

export function validatePhone(value: string | undefined): string | undefined {
  const phone = normalizePhone(value ?? "");
  if (!phone) return "Vui lòng nhập số điện thoại.";
  if (!VN_MOBILE_REGEX.test(phone)) return "Số điện thoại cần đủ 10 số, bắt đầu bằng 0.";
}

export function validateService(value: string | undefined): string | undefined {
  if (value && !serviceOptions.some((o) => o.value === value)) return "Dịch vụ không hợp lệ.";
}

export function validateBooking(input: BookingInput): BookingErrors {
  const errors: BookingErrors = {
    name: validateName(input.name),
    phone: validatePhone(input.phone),
    service: validateService(input.service),
  };
  return Object.fromEntries(Object.entries(errors).filter(([, v]) => v)) as BookingErrors;
}
