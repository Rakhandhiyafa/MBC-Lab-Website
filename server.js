const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).send("Semua bidang harus diisi.");
  }

  if (!validateEmail(email)) {
    return res.status(400).send("Email tidak valid.");
  }

  if (name.length > 100 || subject.length > 150 || message.length > 1000) {
    return res.status(400).send("Panjang input melebihi batas.");
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `Contact Form: ${subject}`,
      text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.send("✅ Terima kasih, pesanmu sudah dikirim!");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Terjadi kesalahan saat mengirim pesan.");
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
