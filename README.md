# Moving Shopping

Web application สำหรับซื้อภาพยนตร์

## Installation

Install project with npm

```bash
  git clone https://github.com/PongpolR/movie-shopping.git
  cd movie-shopping
  npm install (หรือ npm install --force)
```

Run project

```bash
  npm run dev
```

## Features

- สามารถค้นหาชื่อของภาพยนตร์ได้
- ภาพยนตร์แต่ละเรื่องมีราคากำกับ
- เพิ่มสินค้าใส่ตะกร้าได้
- ลดราคา 10% เมื่อซื้อสินค้ามากกว่า 3 ชิ้น และลดราคา 20% เมื่อซื้อสินค้ามากกว่า 5 ชิ้น
- เมื่อ refresh page หรือเปิดปิดเว็บไซต์ใหม่ ข้อมูลที่ค้างไว้ก่อนหน้าไม่หาย
- Clear ตะกร้าสินค้าได้
- เมื่อกดปุ่ม Purchase จะมี QR code ให้โอนเงินภายในเวลาที่กำหนด (จะเคลียร์ตะกร้าสินค้าหากหมดเวลาชำระเงิน)

## Deploy

Deploy project ด้วย Netlify

- https://tata-pongpol-shopping-app.netlify.app/
