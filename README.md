# 🔐 Praktikum #10 — Web Service Engineering

Menerapkan **Simulasi API Key dan OAuth 2.0** menggunakan Node.js dengan arsitektur modular yang mencakup pemisahan *routes*, *controllers*, *middleware*, *models*, dan *utils*. Project ini mensimulasikan validasi **API Key**, proses **token grant OAuth 2.0**, pembuatan **JWT**, verifikasi token, role-based access control, serta pengujian akses resource terproteksi.

**Topik:** Simulasi API Key & OAuth 2.0 (Authorization & Authentication)

---

## 🧑‍🎓 Informasi Mahasiswa

| Informasi         | Data                                   |
| ----------------- | -------------------------------------- |
| Mata Kuliah       | Web Service Engineering                |
| Dosen Pengampu    | Muhayat, M.IT                          |
| Praktikum         | P10 - Simulasi API Key & OAuth 2.0     |
| Nama Mahasiswa    | Husna Norgina                          |
| NIM               | 230104040056                           |
| Kelas             | TI23B                                  |
| Tanggal Praktikum | 08-12-2025                             |

---

## 🎯 Tujuan Praktikum

1. Memahami konsep dan perbedaan antara API Key dan OAuth 2.0.
2. Mengimplementasikan middleware untuk validasi otentikasi di Express.js.
3. Mengelola dan memvalidasi API Key sederhana di sisi server.
4. Mensimulasikan proses pemberian token (Token Grant) dan akses resource terproteksi menggunakan JWT.
5. Menggunakan MongoDB Atlas untuk menyimpan data pengguna, client aplikasi, dan API Key.

---

## 🛠 Tools & Environment

### **Tools Utama**

* Node.js LTS
* Express.js
* MongoDB Atlas
* Mongoose
* JSON Web Token (JWT)
* Dotenv
* Postman
* GitHub (repository)

---

## ⚙️ Struktur Project

```
p10-oauth2-api-key-230104040056/
├── evidence/
├── node_modules/
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── productController.js
│   ├── middleware/
│   │   ├── apiKeyMiddleware.js
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── ApiKey.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── productRoutes.js
│   └── utils/
│       └── generateToken.js
├── .env
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

---

## 🔑 Simulasi API Key & OAuth 2.0

### **API Key (Public Access)**

Digunakan untuk otentikasi sederhana pada endpoint publik:

* Memvalidasi key
* Menolak key kosong
* Menolak key palsu
* Menerima key valid

### **OAuth 2.0 Token Grant (JWT)**

Project mensimulasikan alur:

* Login → Validasi kredensial
* Server menghasilkan JWT (token akses)
* Client menggunakan token untuk mengakses endpoint private
* Middleware memverifikasi token
* Role admin dan user dipisahkan

---

## 🧩 Daftar Endpoint

### 🔵 1. STATUS SERVER

| Method | Endpoint | Skenario        |
| ------ | -------- | --------------- |
| GET    | `/`      | Server OK (200) |

---

### 🔑 2. PUBLIC ENDPOINT (API Key)

| Method | Endpoint                  | Skenario         |
| ------ | ------------------------- | ---------------- |
| GET    | `/api/v1/products/public` | Key hilang (401) |
| GET    | `/api/v1/products/public` | Key palsu (401)  |
| GET    | `/api/v1/products/public` | Key valid (200)  |

---

### 🔐 3. AUTH (Login → JWT)

| Method | Endpoint             | Skenario                      |
| ------ | -------------------- | ----------------------------- |
| POST   | `/api/v1/auth/token` | Gagal login admin (401)       |
| POST   | `/api/v1/auth/token` | Sukses login admin (200)      |
| POST   | `/api/v1/auth/token` | Gagal login user biasa (401)  |
| POST   | `/api/v1/auth/token` | Sukses login user biasa (200) |

---

### 🛡️ 4. PRIVATE (JWT + ROLE)

### **🔸 CREATE Product — POST**

| Method | Endpoint                   | Skenario                       |
| ------ | -------------------------- | ------------------------------ |
| POST   | `/api/v1/products/private` | Token hilang (403)             |
| POST   | `/api/v1/products/private` | Token palsu (403)              |
| POST   | `/api/v1/products/private` | Token valid (201 Created)      |
| POST   | `/api/v1/products/private` | Gagal create, user biasa (403) |
| POST   | `/api/v1/products/private` | Sukses create, admin (201)     |

---

### **🔸 UPDATE Product — PUT**

| Method | Endpoint                       | Skenario               |
| ------ | ------------------------------ | ---------------------- |
| PUT    | `/api/v1/products/private/:id` | Gagal User biasa (403) |
| PUT    | `/api/v1/products/private/:id` | Sukses Admin (200)     |

---

### **🔸 DELETE Product — DELETE**

| Method | Endpoint                       | Skenario               |
| ------ | ------------------------------ | ---------------------- |
| DELETE | `/api/v1/products/private/:id` | Gagal User biasa (403) |
| DELETE | `/api/v1/products/private/:id` | Admin (200)            |

> Semua hasil uji Postman disimpan di folder: `./evidence/`

---

## 📊 Analisis

* Validasi API Key berjalan dengan benar pada endpoint publik.
* Proses token grant menghasilkan JWT yang valid untuk admin dan user biasa.
* Middleware berhasil memverifikasi token serta menolak token hilang atau palsu.
* Role-based authorization bekerja sesuai aturan, hanya admin yang dapat melakukan CRUD.
* MongoDB Atlas menyimpan data user, client, API Key, dan produk secara terstruktur.
* Seluruh skenario pengujian Postman berjalan sesuai ekspektasi dan konsisten.

---

## ✅ Kesimpulan

Praktikum 10 berhasil membangun sistem autentikasi dan otorisasi yang aman menggunakan API Key dan JWT pada arsitektur Node.js yang terstruktur melalui pemisahan controllers, middleware, models, routes, dan utils. Validasi key, verifikasi token, dan role admin-user berjalan efektif. Semua skenario pengujian memenuhi standar keamanan, error handler memberikan respons konsisten, dan seeder mempermudah pengelolaan data awal. Sistem stabil, aman, mengikuti best practices, dan memenuhi seluruh tujuan praktikum.

---

## 📌 Checklist Praktikum

* ✅ Validasi API Key berjalan pada endpoint publik
* ✅ Proses login menghasilkan JWT yang valid
* ✅ Middleware verifikasi token berjalan pada endpoint private
* ✅ Role admin dan user biasa berfungsi dengan benar
* ✅ Akses CRUD hanya untuk admin
* ✅ Error handler konsisten dan rapi
* ✅ Seed data berhasil dijalankan
* ✅ Semua skenario Postman berhasil
* ✅ Evidence Postman lengkap
* ✅ README.md selesai
* ✅ Dokumentasi project tersusun rapi

---