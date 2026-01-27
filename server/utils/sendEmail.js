import nodemailer from "nodemailer";

const sendAutoReply = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // ✅ FIX
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // ✅ optional but helpful (debug)
  await transporter.verify();

  await transporter.sendMail({
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to: email,
    subject: "Thanks for contacting us!",
    html: `
      <h3>Hello ${name},</h3>
      <p>Thank you for contacting <strong>${process.env.FROM_NAME} Software</strong>.</p>
      <p>We’ve received your message and our team will reach out soon.</p>
      <p>Regards,<br/>${process.env.FROM_NAME} Software.</p>
    `,
  });
};

export default sendAutoReply;
