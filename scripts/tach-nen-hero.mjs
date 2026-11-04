/**
 * Tạo các lớp ảnh cho Hero từ public/images/hero-banner2.png (ảnh chụp phòng mổ, nền tường nhiều chi tiết):
 *   - public/images/site/hero-banner-2.jpg        ảnh nền đã tối ưu (rộng 2400px)
 *   - public/images/site/hero-banner-2-nguoi.webp lớp người (nền trong suốt) → đè lên chữ "Thái Học"
 *   - public/images/site/hero-banner-2-mat-na.png mặt nạ hình người (alpha) → cho lớp nét viền chữ
 * Chạy lại mỗi khi đổi ảnh banner:  node scripts/tach-nen-hero.mjs
 *
 * Cách tách người:
 *   1. "Tường" = điểm ảnh xám nhạt, ít bão hoà. Phần còn lại là ứng viên tiền cảnh.
 *   2. Giữ các vùng liên thông có nhiều điểm màu áo mổ/mũ xanh (bác sĩ, bệnh nhân, bàn dụng cụ).
 *   3. Lấp lỗ kín bên trong người.
 *   4. Khẩu trang trắng của bác sĩ nữ trùng màu tường → thêm đa giác vẽ tay (toạ độ ở độ rộng 2400px).
 *      ĐA GIÁC NÀY CHỈ ĐÚNG VỚI hero-banner2.png — đổi ảnh thì phải đo và vẽ lại.
 */
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const s = createRequire(path.join(root, "package.json"))("sharp");

const SRC = path.join(root, "public/images/hero-banner2.png");
const OUT_BASE = path.join(root, "public/images/site/hero-banner-2.jpg");
const OUT_CUT = path.join(root, "public/images/site/hero-banner-2-nguoi.webp");
const OUT_MASK = path.join(root, "public/images/site/hero-banner-2-mat-na.png");
const W = 2400;

/** Mũ trùm sáng màu của bác sĩ bên phải (x, y ở độ rộng 2400px) */
const CAP_RIGHT_POLYGON = [
  [1419, 433], [1421, 412], [1430, 399], [1443, 386], [1458, 376], [1475, 371], [1495, 370],
  [1513, 374], [1526, 381], [1532, 390], [1529, 399], [1523, 403], [1510, 404], [1500, 409],
  [1490, 414], [1475, 420], [1463, 426], [1453, 433], [1446, 440], [1441, 448], [1433, 450], [1425, 445],
];

/** Mũ trùm phản sáng của bác sĩ ở giữa (x, y ở độ rộng 2400px) */
const CAP_MIDDLE_POLYGON = [
  [1254, 520], [1257, 503], [1267, 487], [1280, 473], [1297, 466], [1317, 463], [1337, 467],
  [1353, 477], [1362, 490], [1363, 507], [1360, 523], [1340, 528], [1313, 527], [1287, 527], [1267, 527], [1257, 525],
];

/** Khẩu trang trắng của bác sĩ nữ (x, y ở độ rộng 2400px) */
const MASK_POLYGON = [
  [997, 394], [1007, 390], [1020, 392], [1028, 402], [1035, 412], [1043, 420], [1053, 425],
  [1060, 433], [1064, 445], [1063, 455], [1058, 465], [1045, 478], [1030, 483], [1015, 481],
  [1002, 474], [992, 462], [991, 450], [992, 435], [996, 412],
];

const { data, info } = await s(SRC).removeAlpha().resize(W).raw().toBuffer({ resolveWithObject: true });
const H = info.height;
const N = W * H;
const lum = (i) => 0.299 * data[i * 3] + 0.587 * data[i * 3 + 1] + 0.114 * data[i * 3 + 2];
const sat = (i) =>
  Math.max(data[i * 3], data[i * 3 + 1], data[i * 3 + 2]) - Math.min(data[i * 3], data[i * 3 + 1], data[i * 3 + 2]);
const isWall = (i) => sat(i) < 26 && lum(i) > 150 && lum(i) < 226;
const isScrubBlue = (i) => {
  const r = data[i * 3], g = data[i * 3 + 1], b = data[i * 3 + 2];
  return b > r + 45 && b >= g - 5 && sat(i) > 45;
};
const neighbours = (i) => {
  const x = i % W, y = (i / W) | 0;
  return [x > 0 ? i - 1 : -1, x < W - 1 ? i + 1 : -1, y > 0 ? i - W : -1, y < H - 1 ? i + W : -1];
};

// 1–2. vùng liên thông của tiền cảnh có ≥ 3000 điểm xanh áo mổ
const fg = new Uint8Array(N);
for (let i = 0; i < N; i++) fg[i] = isWall(i) ? 0 : 1;
const person = new Uint8Array(N);
const visited = new Uint8Array(N);
for (let s0 = 0; s0 < N; s0++) {
  if (!fg[s0] || visited[s0]) continue;
  const stack = [s0], list = [];
  visited[s0] = 1;
  let blue = 0;
  while (stack.length) {
    const i = stack.pop();
    list.push(i);
    if (isScrubBlue(i)) blue++;
    for (const j of neighbours(i)) if (j >= 0 && fg[j] && !visited[j]) { visited[j] = 1; stack.push(j); }
  }
  if (blue > 3000) for (const i of list) person[i] = 1;
}

// 4. đa giác vẽ tay cho các vùng trùng màu tường (khẩu trang trắng, mũ sáng màu)
const inPolygon = (poly, x, y) => {
  let inside = false;
  for (let a = 0, b = poly.length - 1; a < poly.length; b = a++) {
    const [xa, ya] = poly[a], [xb, yb] = poly[b];
    if (ya > y !== yb > y && x < ((xb - xa) * (y - ya)) / (yb - ya) + xa) inside = !inside;
  }
  return inside;
};
for (const poly of [MASK_POLYGON, CAP_RIGHT_POLYGON, CAP_MIDDLE_POLYGON]) {
  const xs = poly.map((p) => p[0]), ys = poly.map((p) => p[1]);
  for (let y = Math.min(...ys); y <= Math.max(...ys); y++)
    for (let x = Math.min(...xs); x <= Math.max(...xs); x++) if (inPolygon(poly, x, y)) person[y * W + x] = 1;
}

// 3. lấp lỗ kín (không chạm mép ảnh, < 40.000 điểm)
const seen = new Uint8Array(N);
for (let s0 = 0; s0 < N; s0++) {
  if (person[s0] || seen[s0]) continue;
  const stack = [s0], list = [];
  seen[s0] = 1;
  let touchesEdge = false;
  while (stack.length) {
    const i = stack.pop();
    list.push(i);
    const x = i % W, y = (i / W) | 0;
    if (x === 0 || y === 0 || x === W - 1 || y === H - 1) touchesEdge = true;
    for (const j of neighbours(i)) if (j >= 0 && !person[j] && !seen[j]) { seen[j] = 1; stack.push(j); }
  }
  if (!touchesEdge && list.length < 40000) for (const i of list) person[i] = 1;
}

// làm mềm mép 1px
const alpha = new Uint8Array(N);
for (let y = 0; y < H; y++)
  for (let x = 0; x < W; x++) {
    let on = 0, total = 0;
    for (let dy = -1; dy <= 1; dy++)
      for (let dx = -1; dx <= 1; dx++) {
        const xx = x + dx, yy = y + dy;
        if (xx >= 0 && yy >= 0 && xx < W && yy < H) { total++; on += person[yy * W + xx]; }
      }
    alpha[y * W + x] = Math.round((255 * on) / total);
  }

const rgba = Buffer.alloc(N * 4);
const ga = Buffer.alloc(N * 2);
for (let i = 0; i < N; i++) {
  rgba[i * 4] = data[i * 3]; rgba[i * 4 + 1] = data[i * 3 + 1]; rgba[i * 4 + 2] = data[i * 3 + 2]; rgba[i * 4 + 3] = alpha[i];
  ga[i * 2] = 255; ga[i * 2 + 1] = alpha[i];
}

await s(data, { raw: { width: W, height: H, channels: 3 } }).jpeg({ quality: 82, mozjpeg: true }).toFile(OUT_BASE);
await s(rgba, { raw: { width: W, height: H, channels: 4 } }).webp({ quality: 86, alphaQuality: 100, effort: 6 }).toFile(OUT_CUT);
await s(ga, { raw: { width: W, height: H, channels: 2 } }).png({ compressionLevel: 9 }).toFile(OUT_MASK);

let n = 0;
for (let i = 0; i < N; i++) n += person[i];
console.log(`${W}x${H} — người ${((n / N) * 100).toFixed(1)}%`);
