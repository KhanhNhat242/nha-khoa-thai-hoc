# Tài liệu yêu cầu — Website demo Nha Khoa Thái Học - Kim Sơn

> **Nguồn duy nhất:** `PHIẾU DEV 52 - Nha Khoa Thái Học - Kim Sơn (Răng Hàm Mặt)` (file `nha-khoa-thai-hoc.pdf`, 2 trang), sale ghi.
> Tài liệu này là **nguồn sự thật (source of truth)** của dự án. Mọi tính năng, nội dung, màu sắc phải truy được về một mục trong file này.
>
> Nhãn dùng trong tài liệu:
> - **[PHIẾU]** — chép từ phiếu, giữ đúng nghĩa và số liệu.
> - **[SUY LUẬN]** — dev suy ra từ phiếu để làm được việc; được điều chỉnh khi sale/khách phản hồi.
> - **[TRỐNG]** — phiếu để trống → không tự bịa nội dung.
> - **[CẦN HỎI]** — chưa rõ, phải hỏi sale trước khi chốt.

---

## 1. Thông tin phiếu & quy trình

| Trường | Giá trị |
|---|---|
| Phiếu | PHIẾU DEV 52 — STT **52** |
| Ngày giao hồ sơ | **30/10/2026** |
| Sale phụ trách | **Mỹ Tuyền** |
| Mã DN (file sale) | **DN0137** |
| Hạn giao demo | [TRỐNG] — phiếu nhắc **"SALE GHI HẠN"** → [CẦN HỎI] |
| Ưu tiên (GĐ chọn) | [TRỐNG] |
| Ngày gửi khách | [TRỐNG] |
| Phản hồi của khách | [TRỐNG] |
| Khách đồng ý xem demo? (bắt buộc) | [TRỐNG] — ô bắt buộc nhưng chưa điền → [CẦN HỎI] |
| Lưu ý / điều cần tránh | [TRỐNG] |

**Ô vàng dev phải điền trên phiếu khi xong:**
1. Dev phụ trách — chọn tên.
2. Trạng thái demo — chọn.
3. Link demo — dán link.
4. Trạng thái gửi sale — chọn **"Xong - chờ sale gửi"** → phiếu tự đóng.

> Phiếu ghi "Dev điền 3 ô vàng" nhưng thực tế có **4 ô vàng** → điền đủ cả 4.

---

## 2. Thông tin doanh nghiệp [PHIẾU]

| Trường | Giá trị |
|---|---|
| Tên doanh nghiệp | **Nha Khoa Thái Học - Kim Sơn (Răng Hàm Mặt)** |
| Ngành | Nha khoa / Y tế / Phòng khám |
| Tỉnh / TP | Ninh Bình (phiếu gõ "NInh Bình") |
| Người liên hệ | Thái Học |
| Bác sĩ (từ nội dung sẵn có) | **BS.CK1 Vũ Thái Học** — Bác sĩ chuyên khoa I |
| SĐT / Zalo (ô bắt buộc) | **0379233566** |
| Hotline (từ nội dung sẵn có) | **0982.133.474** – **0379.233.566** |
| Địa chỉ | **Phố Quang Thiện - Kim Sơn - Ninh Bình** |
| Giấy phép hoạt động | **135/NB - GPHĐ**, do **Sở Y tế Ninh Bình** cấp |
| Facebook Page | https://www.facebook.com/bs.ThaiHoc |
| Google Maps | https://maps.app.goo.gl/AYDzmHxSDANRsrZU7 |
| Website hiện tại | [TRỐNG] — khách chưa có website |
| Website tham khảo khách thích | [TRỐNG] |
| Ngôn ngữ | **Tiếng Việt** (chỉ một ngôn ngữ) |

Ghi chú:
- Link Google Maps trong PDF bị xuống dòng (`...RsrZU` + `7`) → link đúng là `https://maps.app.goo.gl/AYDzmHxSDANRsrZU7`. Kiểm tra lại link khi làm.
- **Hai số điện thoại** [SUY LUẬN]:
  - Zalo → `0379233566` (ô "SĐT / Zalo").
  - Nút gọi chính → `0379233566` (ô bắt buộc). Hiển thị **cả hai** hotline ở header/footer/liên hệ theo đúng thứ tự khách viết: `0982.133.474 - 0379.233.566`.
  - [CẦN HỎI] số nào là số gọi chính.
- Địa chỉ giữ **nguyên văn** khách viết. [CẦN HỎI] có cần đổi sang địa chỉ theo đơn vị hành chính mới không.

### Tên thương hiệu
- Tên ngắn (logo, header, title): **"Nha Khoa Thái Học"**.
- Tên đầy đủ (footer, metadata): **"Nha Khoa Thái Học - Kim Sơn (Răng Hàm Mặt)"**.
- Danh xưng bác sĩ: **"BS.CK1 Vũ Thái Học"** hoặc đầy đủ **"Bác sĩ chuyên khoa I Vũ Thái Học"**. Không tự đổi học vị (không ghi "Thạc sĩ", "Tiến sĩ", "Giáo sư"…).

---

## 3. Mục tiêu website [PHIẾU]

**Đặt lịch / nhận tư vấn.**

→ Mọi section phải dẫn tới **form đặt lịch tư vấn**, **gọi hotline** hoặc **chat Zalo**. Đây là thước đo duy nhất của website.

---

## 4. Sản phẩm / dịch vụ chính [PHIẾU]

Đúng **4** mục, giữ nguyên thứ tự và tên:

| # | Dịch vụ (nguyên văn) | Nhóm khách chính (mục 5) |
|---|---|---|
| 1 | **Cấy ghép Implant** | A — 45–70 tuổi mất răng |
| 2 | **Niềng răng chỉnh nha** | D — phụ huynh có con 8–15 tuổi |
| 3 | **Răng sứ thẩm mỹ** | B — 25–50 tuổi, nhất là nữ (làm mới hoặc **làm lại** răng sứ) |
| 4 | **Tiểu phẫu nhổ răng khôn, kể cả răng mọc ngầm trong xương** | C — 18–30 tuổi |

- Không thêm dịch vụ khác (tẩy trắng, trám răng, nha khoa trẻ em tổng quát…) thành mục riêng.
- Ưu tiên nổi bật [SUY LUẬN]: **Implant** và **Niềng răng** — vì khách tự giới thiệu là *"Trung tâm trồng răng Implant & niềng răng"* (mục 7).

---

## 5. Khách hàng mục tiêu [PHIẾU]

| Nhóm | Mô tả nguyên văn |
|---|---|
| A | Người trung niên và cao tuổi **45–70 tuổi** bị mất răng, cần cấy Implant để ăn nhai lại bình thường. |
| B | Người lớn **25–50 tuổi, nhất là nữ**, muốn làm răng sứ hoặc làm lại răng sứ. |
| C | Người trẻ **18–30 tuổi** cần nhổ răng khôn, kể cả răng mọc ngầm khó. |
| D | **Phụ huynh có con 8–15 tuổi** cần niềng răng cho con. |

Hệ quả thiết kế [SUY LUẬN]:
- Nhóm A (45–70 tuổi): chữ body ≥ 16px, tương phản cao, nút to, hotline dễ thấy và bấm gọi được ngay.
- Nhóm B (chủ yếu nữ): phần Răng sứ thẩm mỹ cần hình ảnh đẹp, tinh tế. Nhắc rõ có nhận **làm lại răng sứ**.
- Nhóm C: nhấn mạnh **tiểu phẫu** do bác sĩ chuyên sâu, xử lý được cả răng **mọc ngầm trong xương**, giúp khách bớt lo lắng.
- Nhóm D: giọng văn an tâm, nói chuyện với phụ huynh.

---

## 6. Điểm mạnh / khác biệt (USP) [PHIẾU]

1. **Bác sĩ chuyên khoa I, hơn 12 năm kinh nghiệm, trực tiếp điều trị.**
2. **Chuyên sâu về Implant, răng sứ và tiểu phẫu răng khôn mọc ngầm.**
3. **Phòng khám được Sở Y tế cấp phép**, hoạt động theo tiêu chí **"Chuyên môn – Đạo đức – Trách nhiệm"**.
4. **Làm việc cả ngày lễ**, thuận tiện cho khách.
5. **Thường xuyên đăng ca thực tế**, giúp khách tin tưởng hơn.

Quy tắc dùng số liệu:
- Viết đúng **"hơn 12 năm kinh nghiệm"** (hoặc "12+ năm"). Không làm tròn lên ("15 năm") và không thêm số liệu khác.
- "Làm việc cả ngày lễ" **không có nghĩa là** đã biết giờ mở cửa. Giờ mở cửa vẫn [TRỐNG].
- USP #5 [SUY LUẬN]: làm section **"Ca thực tế"**:
  - Chỉ dùng ảnh ca thực tế **có sẵn trong Drive của khách**.
  - Kèm nút "Xem thêm ca thực tế trên Facebook" → link Facebook Page.
  - Nếu Drive không có ảnh ca thì chỉ để nút dẫn sang Facebook, **không** dùng ảnh stock giả làm ca thực tế.
  - [CẦN HỎI] khách đã có sự đồng ý của bệnh nhân để đăng ảnh lên website chưa.

---

## 7. Nội dung sẵn có [PHIẾU — nguyên văn]

(Các emoji trong PDF bị lỗi font, bỏ qua. Không cần tái tạo emoji.)

```
TRUNG TÂM TRỒNG RĂNG IMPLANT & NIỀNG RĂNG NHA KHOA THÁI HỌC - BS.CK1 VŨ THÁI HỌC.
NHA KHOA ĐẠT CHUẨN - Làm việc bằng CHUYÊN MÔN + ĐẠO ĐỨC + TRÁCH NHIỆM.
SỞ Y TẾ NINH BÌNH CẤP PHÉP HOẠT ĐỘNG: 135/NB - GPHĐ
Phố Quang Thiện - Kim Sơn - Ninh Bình
Hotline: 0982.133.474 - 0379.233.566
```

Cách dùng [SUY LUẬN]:
- Dòng 1 → **Hero**:
  - Tiêu đề: "Trung tâm trồng răng Implant & Niềng răng".
  - Phụ đề: "Nha Khoa Thái Học – BS.CK1 Vũ Thái Học".
  - Được chuyển chữ HOA sang chữ thường cho dễ đọc, nhưng giữ nguyên từ ngữ.
- Dòng 2 → slogan / khối giá trị: **"Chuyên môn – Đạo đức – Trách nhiệm"**.
- Dòng 3 → huy hiệu tin cậy: "Được Sở Y tế Ninh Bình cấp phép hoạt động số 135/NB-GPHĐ". Đặt ở Hero hoặc phần Giới thiệu, và nhắc lại ở footer.
- Dòng 4–5 → khối liên hệ, footer.

**Không có trong phiếu (→ không bịa):**
- bảng giá, giờ mở cửa;
- ảnh bác sĩ (trừ khi có trong Drive), tên các bác sĩ/nhân viên khác;
- trường đào tạo, chứng chỉ quốc tế;
- số khách đã điều trị, đánh giá/testimonial;
- thương hiệu Implant/vật liệu sứ, thiết bị (CT Cone Beam…), bảo hành, khuyến mãi.

Nếu bố cục cần các khối này thì dùng placeholder ghi rõ `[Chờ khách cung cấp]`, hoặc bỏ khối đó.

---

## 8. Chức năng cần có [PHIẾU]

Nguyên văn: **"Trang, Giới thiệu dịch vụ, đặt lịch tư vấn"**.

| Chức năng | Ghi chú |
|---|---|
| "Trang" | Phiếu ghi cụt → [CẦN HỎI]. Mặc định hiểu là **Trang chủ** (landing page một trang). |
| Giới thiệu dịch vụ | 4 dịch vụ ở mục 4 |
| Đặt lịch tư vấn | Form đặt lịch — chức năng **quan trọng nhất** |

Bổ sung tối thiểu [SUY LUẬN]. Đây không phải tính năng mới, chỉ là các kênh liên hệ đã có sẵn trong phiếu:
- Nút **Gọi** (`tel:0379233566`, xem mục 2) và **Zalo** (`https://zalo.me/0379233566`). Hai nút luôn hiển thị (nổi/sticky), nhất là trên mobile.
- **Bản đồ / Chỉ đường**: link Google Maps (nút "Chỉ đường" hoặc nhúng bản đồ).
- Link **Facebook Page** (footer + section Ca thực tế).

**Ngoài phạm vi (không làm):** giỏ hàng, thanh toán, đăng nhập/tài khoản, blog, đa ngôn ngữ, bảng giá, trang quản trị, chatbot.

### Form đặt lịch tư vấn [SUY LUẬN — cập nhật 03/11/2026 theo hướng Conversion-Optimized]
Form ngắn, chỉ **3 trường**. Bên cạnh form có nút gọi trực tiếp **cả 2 hotline** và **Zalo**.

| Trường | Bắt buộc | Ràng buộc |
|---|---|---|
| Họ và tên | Có | không rỗng, tối đa 100 ký tự |
| Số điện thoại | Có | SĐT di động VN 10 số, bắt đầu bằng `0` |
| Dịch vụ quan tâm | Không | 1 trong 4 dịch vụ ở mục 4, hoặc "Chưa rõ, cần bác sĩ tư vấn" |

- Gửi thành công → hiện thông báo "Nha khoa sẽ gọi lại để xác nhận lịch", kèm hotline.
- **Nơi nhận dữ liệu**: [CẦN HỎI] (email / Google Sheet / Zalo OA…).
- Bản demo:
  - Validate đầy đủ.
  - Toàn bộ logic gửi đặt trong **một** Server Action / hàm, để sau này dễ thay nơi nhận.
  - Không giả vờ đã lưu dữ liệu ở đâu.

---

## 9. Thương hiệu & giao diện [PHIẾU]

- **Màu chủ đạo:** **Xanh lá, Trắng**.
- **Phong cách:** **Minimalism, chuyên nghiệp**.

Quy ước [SUY LUẬN]:
- **Trắng** là nền chủ đạo, dùng nhiều khoảng trắng. **Xanh lá** là màu thương hiệu duy nhất (nút chính, tiêu đề nhấn, icon, link).
- Màu chữ dùng xám đậm / gần đen trung tính.
- Được dùng 1–2 tông xanh lá nhạt làm nền section xen kẽ.
- **Không** thêm màu nhấn thứ ba: không vàng, không cam, không xanh dương, không gradient sặc sỡ.
- Minimalism:
  - Bố cục thoáng, lưới rõ ràng.
  - Ít hiệu ứng; animation nhẹ, chỉ dùng hệ thống `data-reveal` có sẵn.
  - Không dùng hoạ tiết rườm rà, không dùng glassmorphism nặng.
  - Mỗi section chỉ có một thông điệp chính.
- Mã màu cụ thể **lấy từ logo thật**. Khai báo một lần dưới dạng token trong `app/globals.css` (`@theme`) và token antd (`ConfigProvider`), không hard-code hex rải rác.
- Chữ trắng trên nền xanh lá phải đạt tương phản WCAG AA (≥ 4.5:1 với chữ thường).
- `public/images/temp-logo.png` (quả địa cầu xanh dương) **chỉ là placeholder** → phải thay bằng logo thật.
- `app/globals.css` còn sót style từ template cũ: viền màu be `#EFE8DC`, `.glass-panel` màu kem, `font-family: Arial`. Phải chỉnh cho đúng palette xanh lá – trắng.

### Tư liệu (Drive)
| Loại | Link |
|---|---|
| Logo | https://drive.google.com/drive/folders/1CEJhVlKAOoLxEOiWHMcOFRUc_Uo2wGaG?usp=drive_link |
| Ảnh / tư liệu | https://drive.google.com/drive/folders/1hqMUJQo3Sy5DjAoQ18DkjBn06e2Swi9-?usp=drive_link |

- Link trong PDF bị xuống dòng; nếu link không mở được thì copy lại từ phiếu gốc (chú ý ký tự `l`/`I` trong `1CEJhVlK`).
- Tải về thủ công, lưu vào `public/images/`:
  - Logo: `public/images/logo.*`.
  - Tên file không dấu, kebab-case.
- Ưu tiên ảnh thật của khách. Ảnh stock chỉ dùng cho hình minh hoạ chung (không dùng cho bác sĩ hay ca thực tế), phải hợp chủ đề nha khoa và có quyền sử dụng.

---

## 10. Lưu ý / điều cần tránh

- Phiếu: [TRỐNG].
- Bắt buộc theo ngành [SUY LUẬN — quảng cáo dịch vụ y tế]:
  - **Không** dùng từ ngữ tuyệt đối hoặc cam kết kết quả: "tốt nhất", "số 1", "duy nhất", "không đau 100%", "cam kết/đảm bảo thành công", "bảo hành trọn đời".
  - Không so sánh với phòng khám khác.
  - Được dùng các cụm khách tự viết ("Nha khoa đạt chuẩn", "Chuyên môn – Đạo đức – Trách nhiệm"), nhưng không phóng đại thêm.

---

## 11. Sitemap đề xuất [SUY LUẬN — cập nhật 03/11/2026]

Trang duy nhất `/` (landing page), các section theo thứ tự Trust & Authority:

1. **Header** — logo, menu neo (Dịch vụ · Bác sĩ · Ca thực tế · Liên hệ), hotline, nút "Đặt lịch tư vấn".
2. **Hero** (Hero-Centric) — ảnh bác sĩ làm trung tâm, tiêu đề theo mục 7, huy hiệu giấy phép, CTA "Đặt lịch tư vấn" + "Gọi ngay".
3. **Dải chỉ số tin cậy** (Flat) — BS.CK1 · 12+ năm · Sở Y tế cấp phép · Làm cả ngày lễ (USP 1, 3, 4).
4. **Dịch vụ** — 4 dịch vụ (mục 4) với icon flat, mỗi dịch vụ nói tới nhóm khách tương ứng (mục 5).
5. **Bác sĩ** — BS.CK1 Vũ Thái Học, hơn 12 năm, trực tiếp điều trị, chuyên sâu Implant / răng sứ / răng khôn mọc ngầm (USP 2), giấy phép, tiêu chí.
6. **Ca điều trị thực tế** (Social Proof) — ảnh trước/sau từ Drive, chia tab Implant · Răng sứ · Răng khôn · Niềng răng (USP 5).
7. **Đặt lịch** (Conversion-Optimized) — form 3 trường, kèm nút gọi 2 hotline và Zalo, địa chỉ và bản đồ.
8. **Footer** — tên đầy đủ, giấy phép, địa chỉ, hotline, Facebook.
9. **Nút nổi** — Gọi / Zalo.

Section "Vì sao chọn" riêng đã bỏ: 5 USP được phân bổ vào các section 3, 5, 6 để tránh lặp nội dung (Minimal & Direct).

Chỉ mở rộng thành nhiều trang (vd. `/dich-vu/[slug]`) khi sale xác nhận ở câu hỏi về "Trang".

---

## 12. Câu hỏi cần hỏi sale [CẦN HỎI]

1. Hạn giao demo? (phiếu nhắc "SALE GHI HẠN")
2. Khách đã đồng ý xem demo chưa? (ô bắt buộc nhưng trống)
3. "Trang" trong mục Chức năng nghĩa là gì: chỉ Trang chủ, hay cần nhiều trang?
4. Trong 2 hotline (0982.133.474 / 0379.233.566), số nào là số gọi chính? Zalo có đúng là 0379233566 không?
5. Form đặt lịch gửi dữ liệu về đâu?
6. Giờ mở cửa? Có ảnh chân dung bác sĩ không?
7. Ảnh ca thực tế: dùng ảnh nào, bệnh nhân đã đồng ý cho đăng chưa?
8. Địa chỉ có cần đổi sang đơn vị hành chính mới không?

---

## 13. Tiêu chí hoàn thành demo (Definition of Done)

- [ ] Nội dung:
  - [ ] Đủ đúng 4 dịch vụ, 5 USP.
  - [ ] Nội dung sẵn có, tên bác sĩ, số giấy phép, "hơn 12 năm" đúng nguyên văn.
  - [ ] Không có nội dung bịa.
- [ ] Ngôn ngữ & metadata:
  - [ ] Toàn bộ là tiếng Việt có dấu.
  - [ ] `<html lang="vi">`.
  - [ ] `metadata` (title/description/OG) đúng tên nha khoa.
  - [ ] Không còn chữ template ("Booking Homestay", "Home page...").
- [ ] Giao diện:
  - [ ] Logo thật.
  - [ ] Chỉ dùng xanh lá + trắng (+ xám trung tính).
  - [ ] Phong cách tối giản, chuyên nghiệp.
- [ ] Form đặt lịch validate đúng, có trạng thái đang gửi / thành công / lỗi.
- [ ] Liên hệ:
  - [ ] 2 hotline hiển thị đúng.
  - [ ] `tel:` và Zalo bấm được.
  - [ ] Link Facebook, Google Maps đúng.
- [ ] Responsive tốt từ 360px đến desktop, không bị tràn ngang.
- [ ] `npm run lint` và `npm run build` không lỗi.
- [ ] Đã deploy, có link demo → điền 4 ô vàng trên phiếu, chọn "Xong - chờ sale gửi".

---

## 14. Định hướng thiết kế đã chốt (cập nhật 03/11/2026, thay bản trước)

Nguồn: yêu cầu của người dùng ngày 03/11/2026. Bản này thay thế toàn bộ định hướng trước (bento, nền xanh nhạt #F2F9F8, brand #0D8A7B).

**Style chính**
- **Minimal & Direct** — tinh thần chung: ít phần tử, chữ lớn, một hành động chính.
- **Swiss Modernism 2.0** — lưới 12 cột, bước 8px, căn trái, bất đối xứng; không trang trí, không đổ bóng; bo góc 0–4px; font Inter.
- **Trust & Authority** — thứ tự nội dung: uy tín (bác sĩ, giấy phép) → bằng chứng (chỉ số, ca thực tế) → dịch vụ → CTA.
- **Accessible & Ethical** — nền tảng:
  - Chữ thường đạt tối thiểu 4.5:1, nhắm 7:1.
  - Chữ ≥ 16px, vùng bấm ≥ 44px, viền focus 3px.
  - Có skip link, HTML ngữ nghĩa, tôn trọng reduced-motion.

**Style bổ trợ theo phần**
- **Hero-Centric** (#20) — Hero dùng ảnh bác sĩ thay vì ảnh phòng khám.
- **Social Proof-Focused** (#24) — ca trước/sau chia theo 4 dịch vụ.
- **Conversion-Optimized** (#21) — form 3 trường + gọi 2 hotline + Zalo.
- **Flat Design** (#12) — icon dịch vụ và dải chỉ số tin cậy: khối màu phẳng, không bóng, không gradient.

**Màu** (`app/globals.css` `@theme` + `lib/theme.ts`):
| Token | Mã | Dùng cho | Tương phản |
|---|---|---|---|
| brand-600 | `#059669` | tiêu đề lớn (≥ 24px), mảng màu, icon | 3.77:1 trên trắng — chỉ cho chữ lớn/đồ hoạ |
| brand-700 | `#047857` | nền nút, dải chỉ số (chữ trắng) | trắng trên nền: 5.48:1 |
| brand-800 | `#065F46` | chữ xanh cỡ nhỏ, link, hover | 7.68:1 trên trắng |
| ink | `#111827` | chữ chính | 17.7:1 |
| ink-soft | `#374151` | chữ phụ | 10.3:1 (trắng) · 9.45:1 (#F5F5F5) |
| surface | `#F5F5F5` | nền phân tách khu vực | — |
| line | `#E5E5E5` | đường kẻ 1px | — |

**Khác biệt với demo T-Smile** (cùng Ninh Bình, cùng sale Mỹ Tuyền, cùng tông xanh lá):
- T-Smile: Soft UI, có nhấn vàng.
- Thái Học: tối giản thuần xanh – trắng, lấy hình ảnh bác sĩ làm trung tâm, không bo tròn mềm, không đổ bóng.
- Khi chỉnh một trong hai demo, không được làm chúng giống nhau.

**Ảnh** (từ `public/images/library`, đã tối ưu vào `public/images/site/`):
- **Hero:** ảnh bác sĩ trực tiếp chăm sóc khách. [CẦN HỎI] xác nhận người trong ảnh là BS.CK1 Vũ Thái Học; nên xin ảnh chân dung chính thức.
- **Ca trước/sau:** ảnh khách đã tự đăng. Chú thích chỉ mô tả ca điều trị, không ghi tên bệnh nhân. [CẦN HỎI] xác nhận bệnh nhân đồng ý đăng lên website (mục 12.7).

**Chỉnh chữ để đúng R2 (quảng cáo y tế)**: không ghi tên thương hiệu trụ Implant thành chữ.
Không dùng ảnh có chữ "Không đau". Ví dụ: ảnh banner "Trồng răng Implant – Không đau" bị loại.

**Bản đồ nhúng**: tạm truy vấn theo tên + địa chỉ, đã ghim đúng "Nha Khoa Thái Học". [CẦN HỎI] link nhúng chính thức.
