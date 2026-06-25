# GIT
### git init	
Khởi tạo một kho lưu trữ (Repository)

### git add . 
 Đưa tất cả các tệp tin đã thay đổi vào khu vực chờ (Staging Area).

### git commit -m "Final portfolio version"
 Xác nhận việc lưu trữ các thay đổi vào lịch sử của Git,  -m (thường) = Message	

Ví dụ:
git commit -m "feat: add project showcase section"
git commit -m "feat: implement dark mode"
git commit -m "fix: resolve navbar mobile issue"
git commit -m "docs: update README"
git commit -m "refactor: simplify theme context"
git commit -m "style: improve button spacing"

Ý nghĩa:
feat:     thêm tính năng
fix:      sửa lỗi
docs:     tài liệu
refactor: cải tổ code
style:    css/ui/format
test:     test
chore:    việc linh tinh (config, package...)

### git branch -M main	
Di chuyển đến nhánh chính là main , -M (hoa) = Move

### git remote add origin <repository-url>
Thiết lập kết nối giữa kho lưu trữ ở máy bạn (Local) và kho lưu trữ trên GitHub (Remote)

### git push -u origin main 
Đẩy toàn bộ code đã commit từ máy bạn lên GitHub với đường dẫn main

### git clone <repository-url>
Clone dự án về máy
