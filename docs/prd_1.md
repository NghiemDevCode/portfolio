# PRD — Hệ thống Quản lý Đặt Món & Thanh Toán

**Phiên bản:** 1.0
**Ngày tạo:** 22/08/2026
**Loại tài liệu:** Product Requirements Document (Dự án 1/2 — hệ thống dùng chung backend/database với Dự án 2: Quản lý kho & nhân viên)

---

## 1. Tổng quan

### 1.1 Bối cảnh
Shop kinh doanh món ăn nấu theo đơn đặt (gà nướng, nem, giò chả...), phục vụ khách đặt cho các dịp như cưới hỏi, sinh nhật, tiệc và nhu cầu khác. Khách đặt món theo yêu cầu (không theo gói tiệc/bàn), số lượng tùy đơn.

### 1.2 Mục tiêu sản phẩm
- Số hóa quy trình nhận đơn, xác nhận, giao hàng và thu tiền — thay thế việc ghi chép thủ công.
- Đảm bảo tính nhất quán dữ liệu giữa đặt cọc, thanh toán và công nợ.
- Cung cấp dữ liệu đầu vào chính xác cho module quản lý kho (Dự án 2) thông qua danh sách món/số lượng đã xác nhận.

### 1.3 Đối tượng sử dụng
| Vai trò | Mô tả |
|---|---|
| Nhân viên bán hàng (SALES_STAFF) | Nhận điện thoại, tạo đơn hộ khách, thu tiền, in bill |
| Nhân viên bếp (KITCHEN_STAFF) | Xem đơn theo ngày, xác nhận/từ chối đơn |
| Quản trị viên (ADMIN) | Toàn quyền, xử lý công nợ, xem báo cáo, sửa/hủy đơn |

### 1.4 Ngoài phạm vi (Out of scope) — phiên bản 1.0
- Khách hàng tự đặt đơn qua app/web (chỉ nhân viên nhập đơn hộ)
- Tích hợp cổng thanh toán online (VNPay/Momo...) — hiện chỉ tiền mặt/chuyển khoản thủ công/ghi nợ
- Quản lý kho nguyên liệu (thuộc Dự án 2, dùng chung DB)

---

## 2. User Flow chính

```
Khách gọi điện đặt món
        ↓
Nhân viên tạo đơn (chọn khách, món, số lượng, ngày giao ≥ hôm nay + 1)
        ↓
[Tùy chọn] Nhận cọc → in biên nhận cọc
        ↓
Bếp xem đơn theo ngày → Xác nhận / Từ chối (gọi lại thương lượng)
        ↓
Đơn ở trạng thái "preparing" → "ready"
        ↓
Giao hàng (tận nơi có phụ phí km / khách tự lấy)
        ↓
Thu tiền: đủ (cash/transfer) | ghi nợ (trả sau)
        ↓
In bill tổng → Đơn hoàn tất
```

---

## 3. Yêu cầu chức năng (Functional Requirements)

### 3.1 Quản lý khách hàng
- FR-1.1: Tạo/sửa/xem khách hàng (tên, SĐT, địa chỉ)
- FR-1.2: Tìm kiếm khách theo SĐT/tên khi tạo đơn mới
- FR-1.3: Xem lịch sử đơn hàng và công nợ theo từng khách

### 3.2 Quản lý món ăn
- FR-2.1: CRUD món ăn (tên, giá, đơn vị, mô tả, hình ảnh)
- FR-2.2: Bật/tắt trạng thái còn bán (`is_available`)
- FR-2.3: (Optional) Cấu hình số ngày đặt trước tối thiểu riêng theo món (`min_days_advance`)

### 3.3 Quản lý đơn hàng
- FR-3.1: Tạo đơn: chọn khách, danh sách món + số lượng, ngày giao, hình thức nhận (giao/tự lấy)
- FR-3.2: Validate ngày giao ≥ ngày đặt + 1 ngày (bắt buộc ở backend)
- FR-3.3: Lưu đơn giá tại thời điểm đặt (không phụ thuộc giá hiện tại của món)
- FR-3.4: Sửa đơn (chỉ khi status = `pending`/`confirmed`), lưu lịch sử thay đổi
- FR-3.5: Hủy đơn kèm lý do, đánh dấu có hoàn cọc hay không
- FR-3.6: Bếp xác nhận/từ chối đơn, ghi nhận người xác nhận + thời gian
- FR-3.7: Cập nhật trạng thái đơn theo luồng: `pending → confirmed → preparing → ready → delivering → completed` (hoặc `cancelled`/`rejected`)
- FR-3.8: Tìm kiếm/lọc đơn theo trạng thái, khoảng ngày giao, SĐT khách, phân trang

### 3.4 Giao hàng
- FR-4.1: Chọn hình thức: khách tự lấy / giao tận nơi
- FR-4.2: Nếu giao tận nơi: nhập số km, hệ thống tự tính phí theo bảng cấu hình (`delivery_fee_rules`)
- FR-4.3: Ghi nhận người giao, thời gian giao

### 3.5 Thanh toán & công nợ
- FR-5.1: Nhận đặt cọc, in biên nhận cọc
- FR-5.2: Thanh toán cuối khi giao hàng (đủ tiền), in bill tổng
- FR-5.3: Ghi nợ khi khách chưa trả đủ (tạo bản ghi công nợ, không chặn hoàn tất đơn)
- FR-5.4: Thu nợ sau, cập nhật trạng thái công nợ (`unpaid/partial/paid`)
- FR-5.5: Xem danh sách khách còn nợ, tổng nợ

### 3.6 In ấn
- FR-6.1: In biên nhận cọc (mã đơn, khách, món tạm tính, số tiền cọc, còn lại)
- FR-6.2: In bill tổng (chi tiết món, đơn giá, phí ship, tổng tiền, phương thức thanh toán, trạng thái nợ)

### 3.7 Người dùng & phân quyền
- FR-7.1: Đăng nhập bằng JWT
- FR-7.2: Phân quyền theo vai trò (ADMIN/SALES_STAFF/KITCHEN_STAFF), giới hạn hành động theo `@Roles()` guard

---

## 4. Yêu cầu phi chức năng (Non-functional Requirements)

| Mã | Yêu cầu |
|---|---|
| NFR-1 | Validate dữ liệu ở backend, không tin tưởng hoàn toàn frontend |
| NFR-2 | Toàn bộ thao tác tạo/sửa đơn phải nằm trong DB transaction để đảm bảo tính nhất quán |
| NFR-3 | Kiến trúc dữ liệu để dành khả năng mở rộng kênh đặt hàng (field `created_by_type`) dù chưa triển khai |
| NFR-4 | Hệ thống chạy được trên môi trường thực tế (deploy thật), không chỉ chạy local |
| NFR-5 | Log lại người thao tác (`created_by`, `confirmed_by`, `cancelled_by`...) cho mục đích truy vết |

---

## 5. Data Model (tóm tắt)

```
customers (id, name, phone, address)
dishes (id, name, unit_price, unit, is_available, min_days_advance)
orders (id, customer_id, order_date, delivery_date, delivery_type,
        delivery_address, delivery_distance_km, delivery_fee,
        status, confirmed_by, confirmed_at,
        cancel_reason, cancelled_by, cancelled_at, note)
order_items (order_id, dish_id, quantity, unit_price)
order_change_logs (id, order_id, changed_by, changed_at, old_data, new_data, reason)
payments (id, order_id, type[deposit/full/debt_payment], amount, method, paid_at, created_by)
customer_debts (id, customer_id, order_id, amount, status, due_date, note)
delivery_fee_rules (id, min_km, max_km, fee)
users (id, name, phone, role, password_hash)
```

---

## 6. Tiêu chí hoàn thành (Acceptance Criteria) — ví dụ cho tính năng chính

**Tạo đơn hàng:**
- [ ] Không tạo được đơn nếu ngày giao < ngày đặt + 1 ngày (báo lỗi rõ ràng)
- [ ] Đơn giá lưu vào `order_items` là giá tại thời điểm tạo đơn, không đổi theo giá món sau này
- [ ] Đơn mới có trạng thái mặc định `pending`

**Xác nhận đơn (bếp):**
- [ ] Chỉ tài khoản role `KITCHEN_STAFF` hoặc `ADMIN` mới xác nhận/từ chối được đơn
- [ ] Từ chối đơn bắt buộc nhập lý do

**Thanh toán:**
- [ ] Không thể thanh toán 2 lần cho cùng 1 khoản (idempotency)
- [ ] Ghi nợ tạo đúng bản ghi trong `customer_debts`, không chặn hoàn tất đơn

---

## 7. Roadmap triển khai đề xuất

| Giai đoạn | Nội dung |
|---|---|
| Tuần 1–2 | Auth, khách hàng, món ăn, tạo đơn cơ bản |
| Tuần 3 | Xác nhận đơn, sửa/hủy đơn, lịch sử thay đổi |
| Tuần 4 | Thanh toán, đặt cọc, công nợ |
| Tuần 5 | Giao hàng + phí ship, in bill (PDF) |
| Tuần 6 | Phân quyền hoàn chỉnh, tìm kiếm/lọc, deploy thật |

---

## 8. Câu hỏi mở / cần quyết định trước khi code

- [ ] Chính sách hoàn cọc khi hủy đơn: theo rule cố định hay để nhân viên quyết từng trường hợp?
- [ ] Có cần `min_order_quantity` theo món không?
- [ ] Thư viện in PDF: `pdfkit` hay `puppeteer`?
- [ ] Lưu trữ ảnh món ăn: Cloudinary hay lưu local/server?