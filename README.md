# 🌟 MBC Lab Website 🌐

[![Build](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)](https://github.com/username/repo/actions)
[![Deployment](https://img.shields.io/badge/deployed-Vercel%20%26%20Render-blue?style=flat-square)](https://mbc-lab-website.onrender.com)
[![License](https://img.shields.io/badge/license-MIT-lightgrey?style=flat-square)](LICENSE)

✨ Website resmi **MBC Laboratory** dengan form kontak terintegrasi email.
Frontend & backend terpisah, di-deploy pada platform modern (Vercel + Render).

---

## 🚀 Fitur 🚀

✅ Landing page modern & responsif
✅ Form kontak dengan validasi input
✅ Email dikirim ke penerima via SMTP Gmail (menggunakan App Password)
✅ Arsitektur frontend–backend terpisah (decoupled)
✅ Mudah di-deploy di platform gratis

---

## 📊 Arsitektur 📊

```
                🌐 User Browser 🌐
                      |
                      v
          [ Frontend: Vercel Static Site ]
        (HTML / CSS / JS, di-host di Vercel)
                      |
                      v
         POST /contact → Backend API Endpoint
                      |
            [ Backend: Node.js @ Render ]
       (Express + Nodemailer, di-host di Render)
                      |
                      v
              📧 SMTP Gmail Server 📧
                      |
                      v
                🎯 Email Penerima 🎯
```

---

## 🔄 Alur Kerja Form Kontak 🔄

1️⃣ User membuka frontend di Vercel
2️⃣ User mengisi form kontak & submit
3️⃣ Browser mengirim POST request ke backend di Render (`/contact`)
4️⃣ Backend validasi input & kirim email via SMTP Gmail
5️⃣ Gmail mengirim email ke inbox penerima
6️⃣ Backend merespons browser: sukses atau gagal

---

## 🛠️ Teknologi 🛠️

| Bagian       | Teknologi                              |
| ------------ | -------------------------------------- |
| **Frontend** | HTML5, CSS3, JavaScript                |
|              | Hosted on [Vercel](https://vercel.com) |
| **Backend**  | Node.js, Express, Nodemailer           |
|              | Hosted on [Render](https://render.com) |

---

## 🌐 Deployment 🌐

| Layanan      | URL                                                                             |
| ------------ | ------------------------------------------------------------------------------- |
| **Frontend** | 🔗 [https://your-vercel-url.vercel.app)](https://mbc-lab-rakhan.vercel.app/)    |
| **Backend**  | 🔗 [https://mbc-lab-website.onrender.com](https://mbc-lab-website.onrender.com) |

---

## 📋 Cara Menjalankan Lokal 📋

### 📄 Requirement 📄

* Node.js & npm terinstal
* Akun Gmail dengan **App Password**

### 🔧 Langkah-langkah 🔧 Steps 🔧

```bash
git clone https://github.com/username/repo.git
cd repo
npm install
```

Buat file `.env`:

```env
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=app_password
EMAIL_TO=youremail@gmail.com
```

Jalankan server backend:

```bash
npm start
```

Buka: [http://localhost:3000](http://localhost:3000)

---

## 🔗 Integrasi Frontend–Backend 🔗

Pastikan form di frontend (`index4.html`) diarahkan ke backend:

```html
<form method="POST" action="https://mbc-lab-website.onrender.com/contact">
```

---

## 📧 Environment Variables

| Key          | Deskripsi                       |
| ------------ | ------------------------------- |
| `EMAIL_USER` | Akun Gmail untuk mengirim email |
| `EMAIL_PASS` | App Password Gmail              |
| `EMAIL_TO`   | Email penerima pesan            |

---

## 👨‍💻 Author 👨‍💻
Rakhandhiya Fasya Albana
101012330220
Cybersecurity Division
[LinkedIn](https://www.linkedin.com/in/rakhandhiya/)
📫 [Email](mailto:rakhandhiya.7@gmail.com)

---

## 📝 Lisensi 📝

[MIT](LICENSE) — this repository is for education & non-commercial purposes.
!Let Me Know!
---
