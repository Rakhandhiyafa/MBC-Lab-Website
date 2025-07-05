# 📄 MBC Lab Website

✨ Website resmi MBC Laboratory dengan form kontak terintegrasi email, dibangun dengan Node.js + Express (backend) dan HTML/CSS/JS (frontend).
Frontend di-host di Vercel, backend di-host di Render.

---

## 🚀 Fitur

* Landing page modern & responsif.
* Form kontak dengan validasi.
* Mengirim pesan ke email penerima melalui SMTP Gmail.
* Frontend & backend terpisah (decoupled architecture).

---

## 🛠️ Teknologi

* **Frontend:**

  * HTML5, CSS3, JavaScript
  * Hosted on [Vercel](https://vercel.com)
* **Backend:**

  * Node.js + Express
  * Nodemailer untuk pengiriman email
  * Hosted on [Render](https://render.com)

---

## 🌟 Cara Menjalankan Lokal

### 📋 Prasyarat

* Node.js & npm terinstal
* Akun Gmail dengan **App Password**

### 🔧 Langkah-langkah

1. Clone repo ini:

   ```bash
   git clone https://github.com/username/repo.git
   cd repo
   ```
2. Install dependency:

   ```bash
   npm install
   ```
3. Buat file `.env`:

   ```
   EMAIL_USER=youremail@gmail.com
   EMAIL_PASS=app_password
   EMAIL_TO=youremail@gmail.com
   ```
4. Jalankan server backend:

   ```bash
   npm start
   ```
5. Buka `http://localhost:3000` di browser.

---

## 🌐 Deployment

### Frontend

✅ Hosted at: [https://mbc-lab-rakhan.vercel.app/](https://mbc-lab-rakhan.vercel.app/)

### Backend

✅ Hosted at: [https://mbc-lab-website.onrender.com](https://mbc-lab-website.onrender.com)

Ubah `action` pada form di frontend menjadi:

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

## 👨‍💻 Author

[Rakhandhiya Fasya Albana](https://www.linkedin.com/in/rakhandhiya/)
📫 [rakhandhiya.7@gmail.com](mailto:rakhandhiya.7@gmail.com)

---

## 📝 Lisensi

Proyek ini bebas digunakan untuk tujuan edukasi & non-komersial.
Feel free to fork & improve!

---
🚀
