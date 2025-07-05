# 🌐 MBC Lab Website 🌐

[![Deployment](https://img.shields.io/badge/deployed-Vercel%20%26%20Render-blue?style=flat-square)](https://mbc-lab-rakhan.vercel.app/)

* Developed by Me to complete Technical Test for MBC Research Asisstant Recruitment Cybersecurity Division.
* ✨ Website **MBC Laboratory** dengan form kontak terintegrasi email. ✨
* Frontend & backend terpisah, di-deploy pada platform modern berbeda (Vercel + Render).

---

## 🚀 Fitur 🚀
* ✅ Landing page modern & responsif (HTML, CSS, JS)
* ✅ Navigation bar yang adaptif.
* ✅ Hero section dengan Counter seperti Jumlah Asisten, Pengalaman (dalam Tahun).dll
* ✅ Visi dan misi Laboratorium MBC.
* ✅ Services & Division detail (Cybersecurity, Big Data Analytic, Game Tech, GIS)
* ✅ Laboratory Board untuk Provide Informasi terkini dari MBC Lab.
* ✅ Form kontak dengan validasi input.
* ✅ Developer Section untuk Provide informasi detail saya sebagai Developer Landing Page.
* ✅ Footer dengan overview dari MBC Lab, Quick Links, Services, dan Copyright.
* ✅ “scroll to top” button.
* ✅ Email dikirim ke penerima via SMTP Gmail (menggunakan App Password)
* ✅ Backend pengiriman form email (Node.js + Express + Nodemailer @ Render)
* ✅ Arsitektur frontend–backend terpisah (decoupled)
* ✅ Di-deploy di platform gratis (Vercel & Render)
* ✅ SSL (HTTPS) Sertifikasi keamanan HTTPS
* ✅ Custom Domain mbc-lab-rakhan dan title "MBC Laboratory - Research Assistant Recruitment Rakhandhiya Fasya Albana"
* ✅ Responsivitas, Mobile-friendly dan adaptif

---

## 📊 Arsitektur Front End -> Back End 📊

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

* 1️⃣ User membuka frontend di Vercel
* 2️⃣ User mengisi form kontak & submit
* 3️⃣ Browser mengirim POST request ke backend di Render (`/contact`)
* 4️⃣ Backend validasi input & kirim email via SMTP Gmail
* 5️⃣ Gmail mengirim email ke inbox penerima
* 6️⃣ Backend merespons browser: sukses atau gagal

---

## 🛠️ Tools & Languages 🛠️

| Bagian       | Tools & Languages                      |
| ------------ | -------------------------------------- |
| **Frontend** | HTML5, CSS3, JavaScript                |
|              | Hosted on [Vercel](https://vercel.com) |
| **Backend**  | Node.js, Express, Nodemailer           |
|              | Hosted on [Render](https://render.com) |

---

## 🌐 Deployment 🌐

| Layanan      | URL                                                                             |
| ------------ | ------------------------------------------------------------------------------- |
| **Frontend** | 🔗 [MBC Lab Rakhandhiya Fasya)](https://mbc-lab-rakhan.vercel.app/)             |
| **Backend**  | 🔗 [Web Service Backend in Render](https://mbc-lab-website.onrender.com)        |

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

## 👨‍💻 Developer 👨‍💻
* Rakhandhiya Fasya Albana (Full-stack)
* 101012330220
* Cybersecurity Division
* [LinkedIn](https://www.linkedin.com/in/rakhandhiya/)
* 📫 [Email](mailto:rakhandhiya.7@gmail.com)

---

## ⚠ Caution ⚠

*this repository is for education & non-commercial purposes.*
---
