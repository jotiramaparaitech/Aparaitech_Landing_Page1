// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   host: process.env.SENDPULSE_SMTP_HOST,
//   port: Number(process.env.SENDPULSE_SMTP_PORT),
//   secure: false,
//   auth: {
//     user: process.env.SENDPULSE_SMTP_USER,
//     pass: process.env.SENDPULSE_SMTP_PASS,
//   },
// });

// const sendAutoReply = async ({ name, email, message }) => {
//   await transporter.sendMail({
//     from: `"${process.env.SENDPULSE_FROM_NAME}" <${process.env.SENDPULSE_FROM_EMAIL}>`,
//     to: email,
//     subject: "Thanks for contacting us!",
//     html: `
//       <h3>Hello ${name},</h3>
//       <p>Thank you for contacting us.</p>
//       <p>We have received your message and will get back to you shortly.</p>
//       <br/>
//       <p><strong>Your Message:</strong></p>
//       <p>${message}</p>
//       <br/>
//       <p>Regards,<br/>${process.env.SENDPULSE_FROM_NAME}</p>
//     `,
//   });
// };

// export default sendAutoReply;
