require("dotenv").config();
const { MAIL, MAIL_PW } = process.env;
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: MAIL,
    pass: MAIL_PW,
  },
});

function sendMail(code, email) {
  const mailOptions = {
    from: MAIL,
    to: email,
    subject: "Inicio de sesion",
    html: `<span> ${code} </span>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Error al enviar el correo:", error);
      return { message: "Error al enviar el correo:" + error };
    } else {
      console.log("Correo electrónico enviado:", info.response);
      return { message: "Mail enviado!" };
    }
  });
}

module.exports = {
  sendMail,
};
