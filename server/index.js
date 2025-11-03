const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Route for handling contact form
app.post("/send-email", async (req, res) => {
  const { name, email, location, subject, message, phone } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail", // or use host/port if not Gmail
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // your app password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Form Submission: ${subject}`,
    text: ` 
Name: ${name}
Email: ${email}
Location: ${location}
Phone: ${phone}
Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
