# Building Friendships, Sharing Cultures: bản deploy

Trang tĩnh (HTML/CSS/JS + ảnh). Không cần build, không cần server riêng. `index.html` nằm ở thư mục gốc.

## Cách deploy

**Netlify (nhanh nhất, miễn phí)**
1. Vào https://app.netlify.com/drop
2. Kéo thả cả thư mục `building-friendships` vào trang.
3. Netlify cấp một link dạng `xxx.netlify.app`. Có thể đổi tên miền trong Site settings.

**Vercel**
- Vào vercel.com, chọn New Project, rồi upload thư mục này (hoặc đẩy lên GitHub rồi import).
- Framework chọn "Other". Không cần lệnh build.

**GitHub Pages**
- Tạo repo, đẩy toàn bộ file lên nhánh `main`.
- Vào Settings > Pages, chọn Source là `main` / root.

**Hosting có cPanel / FTP của trường hoặc công ty**
- Upload toàn bộ file vào thư mục `public_html` (hoặc một thư mục con, ví dụ `public_html/giao-luu`).

## Sau khi có tên miền

Sửa dòng sau trong `index.html` thành đường dẫn đầy đủ để ảnh xem trước hiện đúng khi chia sẻ link qua Zalo/Facebook:

```html
<meta property="og:image" content="https://TEN-MIEN-CUA-BAN/images/og-image.jpg">
```

## Cấu trúc

```
index.html        Nội dung (VI + EN)
css/style.css     Màu, font, bố cục (cuối file: zoom .8 trên máy tính)
js/main.js        Nút VI/EN, hiệu ứng số trên KV
images/           Ảnh KV và các ảnh chi tiết; og-image.jpg dùng khi chia sẻ link
favicon.svg       Biểu tượng tab trình duyệt
```

## Lưu ý

- Trang cần internet để tải font Google (Montserrat, Open Sans, Kaushan Script).
- Muốn sửa nội dung: mỗi đoạn chữ có cặp `lang="vi"` và `lang="en"`, nhớ sửa cả hai.
