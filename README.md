📄 MBC Lab Website
✨ Website resmi MBC Laboratory dengan form kontak terintegrasi email, dibangun dengan Node.js + Express (backend) dan HTML/CSS/JS (frontend).
Frontend di-host di Vercel, backend di-host di Render.

🚀 Fitur
Landing page modern & responsif.

Form kontak dengan validasi.

Mengirim pesan ke email penerima melalui SMTP Gmail.

Frontend & backend terpisah (decoupled architecture).

🛠️ Teknologi
Frontend:

HTML5, CSS3, JavaScript

Hosted on Vercel

Backend:

Node.js + Express

Nodemailer untuk pengiriman email

Hosted on Render

🌟 Cara Menjalankan Lokal
📋 Prasyarat
Node.js & npm terinstal

Akun Gmail dengan App Password

🔧 Langkah-langkah
Clone repo ini:

bash
Copy
Edit
git clone https://github.com/username/repo.git
cd repo
Install dependency:

bash
Copy
Edit
npm install
Buat file .env:

ini
Copy
Edit
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=app_password
EMAIL_TO=youremail@gmail.com
Jalankan server backend:

bash
Copy
Edit
npm start
Buka http://localhost:3000 di browser.

🌐 Deployment
Frontend
✅ Hosted at: https://your-vercel-url.vercel.app

Backend
✅ Hosted at: https://mbc-lab-website.onrender.com

Ubah action pada form di frontend menjadi:

html
Copy
Edit
<form method="POST" action="https://mbc-lab-website.onrender.com/contact">
📧 Environment Variables
Key	Deskripsi
EMAIL_USER	Akun Gmail untuk mengirim email
EMAIL_PASS	App Password Gmail
EMAIL_TO	Email penerima pesan

👨‍💻 Author
Rakhandhiya Fasya Albana
📫 rakhandhiya.7@gmail.com

📝 Lisensi
Proyek ini bebas digunakan untuk tujuan edukasi & non-komersial.
Feel free to fork & improve!
