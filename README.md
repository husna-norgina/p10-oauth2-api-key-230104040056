# 🌐 Praktikum 10 — API Security & Authorization (Express.js)

Praktikum ini membahas **penerapan keamanan dan otorisasi pada RESTful API** menggunakan **Node.js dan Express.js**. API menerapkan **API Key**, **Authentication (Login)**, **Token Validation**, serta **Role-Based Access Control (RBAC)** untuk membedakan hak akses **User Biasa** dan **Admin**.

**Topik:** API Security, Authentication & Authorization (Express.js)

---

## 🧑‍🎓 Informasi Mahasiswa

| Informasi          | Data                                                               |
|--------------------|--------------------------------------------------------------------|
| Mata Kuliah        | Web Service Engineering                                            |
| Dosen Pengampu     | Muhayat, M.IT                                                      |
| Praktikum / Proyek | P10 – API Security & Authorization                                 |
| Nama Mahasiswa     | Husna Norgina                                                      |
| NIM                | 230104040056                                                       |
| Kelas              | TI23B                                                              |
| Repo GitHub        | https://github.com/husna-norgina/p10-oauth2-api-key-230104040056   |
| Tanggal Praktikum  | 08-12-2025                                                         |  

---

## 🎯 Tujuan Praktikum

1. Menerapkan **API Key** sebagai lapisan keamanan awal.
2. Mengimplementasikan **Authentication (Login)**.
3. Menggunakan **Token-based Authorization**.
4. Menerapkan **Role-Based Access Control (RBAC)**.
5. Menguji request valid dan tidak valid.
6. Menggunakan **HTTP Status Code** sesuai standar REST.

---

## 🛠 Tools & Environment

* Node.js
* Express.js
* JSON Web Token (JWT)
* Visual Studio Code
* Postman
* Git & GitHub

---

## 🧱 Arsitektur Sistem

**Alur Sistem:**

* Client (Postman)
* API Server (Express.js)
* API Key Middleware
* Authentication & Authorization Middleware
* Controller User & Admin
* Response JSON ke client

Arsitektur menggunakan pola **Client–Server** dengan keamanan berlapis.

---

## 🔁 Pengujian & Implementasi API

---

### 🔵 1. GET — Server API

| Method | Endpoint | Keterangan       |
| ------ | -------- | ---------------- |
| GET    | `/api`   | Informasi server |

**Hasil:**

![GET Server API](evidence/1.%20GET%20Server%20API.png)

Server menampilkan informasi dasar API.
Server merespons status `200 OK`.

---

### 🔴 2. GET — API Key Tidak Dikirim

**Hasil:**

![API Key Hilang](evidence/2.%20GET%20Key%20Hilang.png)

Request ditolak karena API Key hilang atau tidak dikirim.
Server merespons status `401 Unauthorized`.

---

### 🔴 3. GET — API Key Tidak Valid

**Hasil:**

![API Key Palsu](evidence/3.%20GET%20Key%20Palsu.png)

API Key tidak valid.
Server merespons status `403 Forbidden`.

---

### 🔵 4. GET — API Key Valid

**Hasil:**

![API Key Valid](evidence/4.%20GET%20Key%20Valid.png)

API Key valid dan request diterima.
Server merespons status `200 OK`.

---

### 🔴 5. POST — Login Admin Gagal

**Hasil:**

![Login Admin Gagal](evidence/5.%20POST%20Gagal%20Login%20Admin.png)

Login gagal karena password salah.
Server merespons status `401 Unauthorized`.

---

### 🔵 6. POST — Login Admin Berhasil

**Hasil:**

![Login Admin Sukses](evidence/6.%20POST%20Sukses%20Login%20Admin.png)

Admin berhasil login dan menerima token.
Server merespons status `200 OK`.

---

### 🔴 7. POST — Login User Gagal

**Hasil:**

![Login User Gagal](evidence/7.%20POST%20Gagal%20Login%20User%20Biasa.png)

Login user gagal karena password salah.
Server merespons status `401 Unauthorized`.

---

### 🔵 8. POST — Login User Berhasil

**Hasil:**

![Login User Sukses](evidence/8.%20POST%20Sukses%20Login%20User%20Biasa.png)

User berhasil login dan mendapatkan token.
Server merespons status `200 OK`.

---

### 🔴 9. POST — Token Tidak Dikirim

**Hasil:**

![Token Hilang](evidence/9.%20POST%20Token%20Hilang.png)

Request ditolak karena token tidak dikirim.
Server merespons status `401 Unauthorized`.

---

### 🔴 10. POST — Token Tidak Valid

**Hasil:**

![Token Palsu](evidence/10.%20POST%20Token%20Palsu.png)

Token tidak valid.
Server merespons status `403 Forbidden`.

---

### 🔵 11. POST — Token Valid

**Hasil:**

![Token Valid](evidence/11.%20POST%20Token%20Valid.png)

Token valid dan request berhasil.
Server merespons status `200 OK`.

---

### 🔵 12. POST — Tambah User Biasa

**Hasil:**

![Create User](evidence/12.%20POST%20Create%20User%20Biasa.png)

User biasa berhasil dibuat oleh admin.
Server merespons status `201 Created`.

---

### 🔵 13. POST — Tambah Admin

**Hasil:**

![Create Admin](evidence/13.%20POST%20Create%20Admin.png)

Admin baru berhasil dibuat.
Server merespons status `201 Created`.

---

### 🔵 14. PUT — Update User Biasa

**Hasil:**

![Update User](evidence/14.%20PUT%20Update%20User%20Biasa.png)

Data user berhasil diperbarui.
Server merespons status `200 OK`.

---

### 🔵 15. PUT — Update Admin

**Hasil:**

![Update Admin](evidence/15.%20PUT%20Update%20Admin.png)

Data admin berhasil diperbarui.
Server merespons status `200 OK`.

---

### 🔵 16. DELETE — Hapus User Biasa

**Hasil:**

![Delete User](evidence/16.%20DELETE%20User%20Biasa.png)

User biasa berhasil dihapus.
Server merespons status `200 OK`.

---

### 🔵 17. DELETE — Hapus Admin

**Hasil:**

![Delete Admin](evidence/17.%20DELETE%20Admin.png)

Admin berhasil dihapus.
Server merespons status `200 OK`.

---

## 📄 Laporan Praktikum 10

[230104040056_Husna Norgina_P10.pdf](evidence/230104040056_Husna%20Norgina_P10.pdf)

---

> Semua screenshot hasil uji endpoint dan laporan praktikum disimpan pada folder:  
> 📂 `./evidence/`

---

## 📊 Analisis Praktikum

* API Key membatasi akses awal API.
* Authentication memverifikasi identitas user dan admin.
* Authorization berbasis token berjalan dengan baik.
* RBAC membedakan hak akses sesuai role.
* Status code HTTP digunakan konsisten.

---

## ✅ Kesimpulan

Berdasarkan praktikum yang dilakukan, penerapan API Security & Authorization pada RESTful API menggunakan Express.js berhasil diimplementasikan dengan baik. Mekanisme keamanan berupa API Key, authentication berbasis login, validasi token, serta Role-Based Access Control (RBAC) mampu membatasi dan mengatur hak akses antara user biasa dan admin secara tepat. Seluruh proses pengujian menunjukkan bahwa request valid dapat diproses dengan baik, sedangkan request tidak valid berhasil ditolak dengan status code HTTP yang sesuai, sehingga sistem API berjalan aman, terkontrol, dan sesuai prinsip RESTful API.

---

## 📌 Catatan

* Data bersifat simulasi (in-memory).
* Pengujian dilakukan menggunakan Postman.
* API dikembangkan untuk keperluan pembelajaran.

---

📝 *Disusun oleh Husna Norgina (230104040056) — Praktikum 10 Web Service Engineering*

