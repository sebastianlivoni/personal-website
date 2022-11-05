import "dotenv/config"
import nodemailer from "nodemailer"

async function sendMail(name, sender, message) {
  let transporter = nodemailer.createTransport({
    pool: true,
    host: "smtp.mail.me.com",
    port: 587,
    secure: false, // use TLS
    auth: {
      user: process.env.ICLOUD_MAIL_USERNAME,
      pass: process.env.ICLOUD_MAIL_PASSWORD,
    },
  })

  await transporter.sendMail({
    from: "seb@livoni.me",
    replyTo: sender,
    to: "seb@livoni.me",
    subject: `A new request from ${name}`,
    text: message,
  })
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      let { name, email, message } = req.body

      await sendMail(name, email, message)

      res.status(200).json({
        message:
          "Hi. Thanks for contacting me. I have now received your message and I will reply to you shortly.",
      })
    } catch (e) {
      console.error(e)
      res.status(500).json({
        message:
          "Unexpected error. I did not receive your request. This error have been noted. Please try later.",
      })
    }
  } else {
    res.status(405).json({ error: "Method not allowed" })
  }
}
