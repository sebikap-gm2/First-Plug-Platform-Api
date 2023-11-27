import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const { MAIL, MAIL_PW } = process.env;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: MAIL,
    pass: MAIL_PW,
  },
});

export function sendMail(code: string, email: string) {
  const mailOptions: nodemailer.SendMailOptions = {
    from: MAIL,
    to: email,
    subject: "Login",
    html: `<span> ${code} </span>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return { message: "Error sending email:" + error };
    } else {
      console.log("Email send:", info.response);
      return { message: "Mail sent!" };
    }
  });
}
