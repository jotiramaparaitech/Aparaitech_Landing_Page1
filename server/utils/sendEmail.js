import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // ✅ ADD THIS

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendAutoReply = async ({ name, email, message }) => {
  await transporter.sendMail({
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to: email,
    subject: "Thanks for contacting us!",
    html: `
      <h3>Hello ${name},</h3>
      <p>Thank you for contacting <strong>${process.env.FROM_NAME} Pvt Ltd</strong>.</p>
      <p>We’ve received your message and our team will reach out soon.</p>
      <p>Regards,<br/>${process.env.FROM_NAME} Pvt Ltd</p>
    `,
  });
};

export default sendAutoReply;
