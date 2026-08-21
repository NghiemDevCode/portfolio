# PRD — Hệ thống Quản lý Kho, Nhân viên & Báo cáo

**Phiên bản:** 1.0
**Ngày tạo:** 22/08/2026
**Loại tài liệu:** Product Requirements Document (Dự án 2/2 — dùng chung backend/database với Dự án 1: Đặt món & Thanh toán)

---

## 1. Tổng quan

### 1.1 Bối cảnh
Module quản lý kho nguyên liệu và nhân viên phục vụ hoạt động nấu ăn theo đơn đặt. Kho nhập nguyên liệu sát theo nhu cầu sử dụng (không tồn trữ nhiều), nguyên liệu được xuất tự động dựa trên công thức món khi đơn hàng (từ Dự án 1) được xác nhận.

### 1.2 Mục tiêu sản phẩm
- Tự động hóa việc trừ kho theo công thức món khi đơn hàng được xác nhận, giảm sai sót ghi chép thủ công.
- Cung cấp khả năng đối chiếu tồn kho thực tế (kiểm kho) để phát hiện thất thoát.
- Quản lý thông tin nhân viên và phân quyền truy cập hệ thống.
- Cung cấp báo cáo doanh thu, chi phí, lãi gộp và tồn kho hỗ trợ ra quyết định kinh doanh.

### 1.3 Đối tượng sử dụng
| Vai trò | Mô tả |
|---|---|
| ADMIN | Toàn quyền, xem báo cáo, quản lý nhân viên, duyệt kiểm kho |
| WAREHOUSE_STAFF | Nhập kho, quản lý nhà cung cấp, thực hiện kiểm kho |
| KITCHEN_STAFF | Xem tồn kho liên quan món cần chuẩn bị (chỉ xem) |

### 1.4 Ngoài phạm vi (Out of scope) — phiên bản 1.0
- Cảnh báo tồn kho thấp (không cần vì nhập vừa đủ dùng, không tồn kho dư)
- Chấm công / tính lương nhân viên (chỉ quản lý thông tin cơ bản)
- Quy đổi đa đơn vị tính cho nguyên liệu (bổ sung sau nếu cần)
- So sánh giá nhiều nhà cung cấp

---

## 2. User Flow chính

### 2.1 Nhập kho
```
Nhà cung cấp giao nguyên liệu
        ↓
Nhân viên kho tạo phiếu nhập (stock_receipts + stock_receipt_items)
        ↓
Ghi nhận hạn sử dụng (nếu có) cho từng nguyên liệu
        ↓
Hệ thống tự tạo stock_transactions (type = IN)
```

### 2.2 Xuất kho tự động theo đơn hàng
```
Đơn hàng (Dự án 1) chuyển trạng thái "confirmed"
        ↓
Hệ thống tra recipe_ingredients theo từng món trong đơn
        ↓
Tính tổng nguyên liệu cần dùng (BOM explosion)
        ↓
Kiểm tra đủ tồn kho không (transaction, pessimistic lock)
        ↓
Trừ kho + tạo stock_transactions (type = OUT, ref_type = order)
```

### 2.3 Kiểm kho
```
Nhân viên kho tạo phiếu kiểm kho (stock_takes, status = draft)
        ↓
Đếm thực tế từng nguyên liệu → nhập actual_quantity
        ↓
Hệ thống tự tính difference = actual - system
        ↓
Hoàn tất phiếu (status = completed)
        ↓
Hệ thống tự tạo stock_transactions (type = ADJUSTMENT) để đồng bộ tồn kho
```

---

## 3. Yêu cầu chức năng (Functional Requirements)

### 3.1 Quản lý nguyên liệu
- FR-1.1: CRUD nguyên liệu (tên, đơn vị tính)
- FR-1.2: Xem tồn kho hiện tại theo từng nguyên liệu (tính từ tổng `stock_transactions`)

### 3.2 Quản lý công thức món (Recipe)
- FR-2.1: Gán danh sách nguyên liệu + định lượng cho từng món ăn (liên kết `dishes` bên Dự án 1)
- FR-2.2: Sửa công thức khi định lượng thay đổi

### 3.3 Quản lý nhà cung cấp
- FR-3.1: CRUD nhà cung cấp (tên, SĐT, thông tin liên hệ)

### 3.4 Nhập kho
- FR-4.1: Tạo phiếu nhập kho gắn nhà cung cấp, ngày nhận
- FR-4.2: Nhập chi tiết từng nguyên liệu: số lượng, đơn giá, hạn sử dụng (nếu có)
- FR-4.3: Tự động cộng tồn kho khi phiếu nhập được lưu

### 3.5 Xuất kho tự động theo đơn hàng
- FR-5.1: Khi đơn hàng (Dự án 1) chuyển sang `confirmed`, hệ thống tự tính và trừ nguyên liệu theo công thức
- FR-5.2: Nếu không đủ tồn kho, chặn xác nhận đơn và báo lỗi rõ nguyên liệu nào thiếu
- FR-5.3: Đảm bảo tính đúng đắn khi nhiều đơn xử lý đồng thời (pessimistic locking)

### 3.6 Kiểm kho
- FR-6.1: Tạo phiếu kiểm kho, ghi nhận số lượng hệ thống tại thời điểm kiểm
- FR-6.2: Nhập số lượng thực tế đếm được cho từng nguyên liệu
- FR-6.3: Tự động tính chênh lệch (difference)
- FR-6.4: Khi hoàn tất phiếu, tự động tạo giao dịch điều chỉnh (ADJUSTMENT) để đồng bộ tồn kho hệ thống khớp thực tế

### 3.7 Quản lý nhân viên
- FR-7.1: CRUD nhân viên (họ tên, SĐT, chức vụ, ngày vào làm, trạng thái làm việc)
- FR-7.2: Liên kết nhân viên với tài khoản đăng nhập (`users`)

### 3.8 Phân quyền
- FR-8.1: Đăng nhập JWT, phân quyền theo vai trò (ADMIN/WAREHOUSE_STAFF/KITCHEN_STAFF, dùng chung hệ thống auth với SALES_STAFF của Dự án 1)
- FR-8.2: Giới hạn hành động theo vai trò bằng guard (`@Roles()`)

### 3.9 Thông báo real-time (Socket.io)
- FR-9.1: Thông báo cho kho/bếp khi có đơn hàng mới cần chuẩn bị
- FR-9.2: (Optional) Danh sách nguyên liệu sắp hết hạn hiển thị khi mở trang (không bắt buộc real-time)

### 3.10 Audit log
- FR-10.1: Ghi log các thao tác quan trọng: nhập kho, kiểm kho, sửa công thức, thay đổi nhân viên (người thực hiện, thời gian, hành động)

### 3.11 Báo cáo
- FR-11.1: Báo cáo doanh thu theo ngày/tháng (liên kết dữ liệu `orders`, `payments` từ Dự án 1)
- FR-11.2: Báo cáo chi phí nguyên liệu theo tháng (dựa trên `stock_receipt_items`)
- FR-11.3: **Báo cáo lãi gộp** — tính giá vốn từng đơn hàng dựa trên `recipe_ingredients` × giá nhập nguyên liệu gần nhất, so với doanh thu đơn đó
- FR-11.4: Báo cáo tồn kho hiện tại theo nguyên liệu
- FR-11.5: Báo cáo món ăn bán chạy nhất
- FR-11.6: Xuất báo cáo ra Excel/PDF

---

## 4. Yêu cầu phi chức năng (Non-functional Requirements)

| Mã | Yêu cầu |
|---|---|
| NFR-1 | Trừ kho theo đơn hàng phải nằm trong DB transaction, dùng pessimistic lock để tránh race condition khi nhiều đơn xử lý cùng lúc |
| NFR-2 | Toàn bộ thao tác kho (nhập/xuất/điều chỉnh) phải lưu vào `stock_transactions` dạng sổ cái (ledger), không update trực tiếp số dư để đảm bảo có thể truy vết |
| NFR-3 | Audit log ghi đầy đủ người thực hiện cho các thao tác nhạy cảm (nhập kho, kiểm kho, sửa công thức) |
| NFR-4 | Báo cáo lãi gộp phải phản ánh đúng giá nguyên liệu tại thời điểm nhập gần nhất, không dùng giá trung bình gây sai lệch |
| NFR-5 | Hệ thống deploy thật, kết nối cùng database với Dự án 1 |

---

## 5. Data Model (tóm tắt)

```
ingredients (id, name, unit)
recipe_ingredients (dish_id, ingredient_id, quantity_per_unit)
suppliers (id, name, phone, contact_info)
stock_receipts (id, supplier_id, received_date, created_by, note)
stock_receipt_items (receipt_id, ingredient_id, quantity, unit_price, expiry_date)
stock_transactions (id, ingredient_id, type[IN/OUT/ADJUSTMENT], quantity,
                     ref_type[receipt/order/stock_take], ref_id, created_at, created_by)
stock_takes (id, taken_date, created_by, note, status[draft/completed])
stock_take_items (stock_take_id, ingredient_id, system_quantity, actual_quantity, difference)
employees (id, user_id, full_name, phone, position, start_date, status)
users (id, name, phone, role, password_hash)
audit_logs (id, user_id, action, timestamp, detail)
```

**Bảng dùng chung với Dự án 1:** `dishes`, `orders`, `order_items`, `payments`, `customers`, `users`

---

## 6. Tiêu chí hoàn thành (Acceptance Criteria) — ví dụ cho tính năng chính

**Xuất kho tự động:**
- [ ] Đơn hàng chỉ chuyển được sang `confirmed` khi đủ tồn kho cho toàn bộ nguyên liệu cần dùng
- [ ] Nếu thiếu, hệ thống trả về danh sách nguyên liệu thiếu cụ thể, không xác nhận đơn
- [ ] Hai đơn xử lý đồng thời tranh chấp cùng nguyên liệu không gây sai lệch tồn kho (test bằng concurrent request)

**Kiểm kho:**
- [ ] Phiếu kiểm kho ở trạng thái `draft` không ảnh hưởng tồn kho hệ thống
- [ ] Khi chuyển `completed`, chênh lệch được tự động ghi nhận qua `stock_transactions` loại `ADJUSTMENT`

**Báo cáo lãi gộp:**
- [ ] Giá vốn mỗi đơn tính đúng theo công thức món × giá nhập nguyên liệu gần nhất tại thời điểm đơn được xác nhận

---

## 7. Roadmap triển khai đề xuất

| Giai đoạn | Nội dung |
|---|---|
| Tuần 1 | Nguyên liệu, công thức món, nhà cung cấp |
| Tuần 2 | Nhập kho, tự động cộng tồn kho |
| Tuần 3 | Xuất kho tự động theo đơn hàng (liên kết Dự án 1), xử lý race condition |
| Tuần 4 | Kiểm kho, audit log |
| Tuần 5 | Quản lý nhân viên, phân quyền |
| Tuần 6 | Socket.io thông báo, báo cáo (doanh thu/chi phí/lãi gộp), xuất Excel/PDF, deploy thật |

---

## 8. Câu hỏi mở / cần quyết định trước khi code

- [ ] Có giữ lại phần cảnh báo nguyên liệu sắp hết hạn không, hay bỏ luôn vì mô hình nhập vừa đủ dùng?
- [ ] Đơn vị tính nguyên liệu: giữ đơn giản 1 nguyên liệu = 1 đơn vị cố định (bổ sung quy đổi sau nếu cần)
- [ ] Thư viện export Excel: `exceljs`