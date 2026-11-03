"use server";

/**
 * Server Action DUY NHẤT xử lý gửi form đặt lịch (AGENTS.md R5).
 * Nơi nhận dữ liệu đang [CẦN HỎI] (REQUIREMENTS §8, §12.5) — khi có, chỉ cần thay phần `deliver`.
 * Không log dữ liệu cá nhân của khách.
 */
import { normalizePhone, validateBooking, type BookingInput, type BookingResult } from "./booking";

async function deliver(booking: BookingInput): Promise<void> {
  // TODO [CẦN HỎI]: gửi về email / Google Sheet / Zalo OA theo xác nhận của sale.
  // Bản demo: chỉ xác thực, chưa lưu ở đâu.
  void booking;
}

export async function submitBooking(raw: BookingInput): Promise<BookingResult> {
  const input: BookingInput = {
    name: String(raw?.name ?? "").trim(),
    phone: normalizePhone(String(raw?.phone ?? "")),
    service: raw?.service ? String(raw.service) : undefined,
  };

  const errors = validateBooking(input);
  if (Object.keys(errors).length > 0) return { status: "invalid", errors };

  try {
    await deliver(input);
    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Chưa gửi được yêu cầu. Vui lòng thử lại hoặc gọi hotline để được hỗ trợ.",
    };
  }
}
