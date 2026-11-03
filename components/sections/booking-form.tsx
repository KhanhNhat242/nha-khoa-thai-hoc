"use client";

import { useEffect, useState, useTransition } from "react";
import { Alert, Button, Form, Input, Select } from "antd";
import type { FormProps } from "antd";
import { serviceOptions, SELECT_SERVICE_EVENT } from "@/lib/services";
import { BOOKING_LIMITS, validateName, validatePhone, type BookingField, type BookingInput } from "@/lib/booking";
import { submitBooking } from "@/lib/booking-action";
import { siteConfig, telHref } from "@/lib/site-config";
import { CheckIcon } from "@/components/ui/icons";

/** Biến hàm validate dùng chung thành rule antd */
const rule =
  (fn: (v: string | undefined) => string | undefined) =>
  () => ({
    validator: (_: unknown, value: string | undefined) => {
      const error = fn(value);
      return error ? Promise.reject(new Error(error)) : Promise.resolve();
    },
  });

const requiredMark: FormProps["requiredMark"] = (label, { required }) => (
  <>
    {label}
    {required ? (
      <span aria-hidden="true" className="ml-1 text-brand-800">
        *
      </span>
    ) : null}
  </>
);

/** Form ngắn 3 trường (Conversion-Optimized). */
export function BookingForm() {
  const [form] = Form.useForm<BookingInput>();
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Nhận dịch vụ được chọn từ "Nhận tư vấn dịch vụ này →"
  useEffect(() => {
    const onSelect = (e: Event) => {
      setStatus("idle");
      form.setFieldValue("service", (e as CustomEvent<string>).detail);
    };
    window.addEventListener(SELECT_SERVICE_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_SERVICE_EVENT, onSelect);
  }, [form]);

  const onFinish = (values: BookingInput) => {
    setStatus("idle");
    startTransition(async () => {
      const result = await submitBooking({
        name: values.name,
        phone: values.phone,
        service: values.service || undefined,
      });

      if (result.status === "success") {
        form.resetFields();
        setStatus("success");
      } else if (result.status === "invalid") {
        form.setFields(
          (Object.entries(result.errors) as [BookingField, string][]).map(([name, error]) => ({ name, errors: [error] })),
        );
      } else {
        setErrorMessage(result.message);
        setStatus("error");
      }
    });
  };

  if (status === "success") {
    return (
      <div role="status" className="border-l-4 border-brand-600 bg-surface p-6">
        <p className="flex items-center gap-3 text-[20px] font-bold text-ink">
          <span className="grid h-9 w-9 place-items-center rounded-[4px] bg-brand-700 text-white">
            <CheckIcon size={20} strokeWidth={2.2} />
          </span>
          Đã gửi yêu cầu đặt lịch
        </p>
        <p className="mt-3 text-[17px] text-ink-soft">
          Phòng khám sẽ gọi lại để xác nhận lịch hẹn. Cần hỗ trợ ngay, vui lòng gọi{" "}
          <a href={telHref(siteConfig.primaryPhone)} className="font-semibold text-brand-800 underline underline-offset-4">
            {siteConfig.primaryPhone.display}
          </a>
          .
        </p>
        <Button size="large" className="mt-5" onClick={() => setStatus("idle")}>
          Gửi yêu cầu khác
        </Button>
      </div>
    );
  }

  return (
    <Form<BookingInput>
      form={form}
      layout="vertical"
      requiredMark={requiredMark}
      onFinish={onFinish}
      disabled={pending}
      size="large"
      scrollToFirstError={{ behavior: "smooth", block: "center" }}
    >
      <Form.Item<BookingInput> label="Họ và tên" name="name" required rules={[rule(validateName)]}>
        <Input placeholder="Ví dụ: Nguyễn Văn An" maxLength={BOOKING_LIMITS.name} autoComplete="name" />
      </Form.Item>

      <Form.Item<BookingInput> label="Số điện thoại" name="phone" required rules={[rule(validatePhone)]}>
        <Input placeholder="Ví dụ: 0379 233 566" inputMode="tel" autoComplete="tel" maxLength={14} />
      </Form.Item>

      <Form.Item<BookingInput> label="Dịch vụ quan tâm" name="service">
        <Select
          placeholder="Chọn dịch vụ (không bắt buộc)"
          options={serviceOptions}
          allowClear
          optionRender={(option) => <span className="whitespace-normal">{option.label}</span>}
        />
      </Form.Item>

      {status === "error" ? <Alert type="error" showIcon className="!mb-5" title={errorMessage} /> : null}

      <Button type="primary" htmlType="submit" block loading={pending} className="!h-14 !text-[17px] !font-bold">
        {pending ? "Đang gửi…" : "Gửi yêu cầu đặt lịch tư vấn"}
      </Button>

      <p className="mt-3 text-[15px] text-ink-soft">Thông tin chỉ dùng để phòng khám liên hệ tư vấn cho bạn.</p>
    </Form>
  );
}
