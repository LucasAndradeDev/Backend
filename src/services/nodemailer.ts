import nodemailer from "nodemailer";
import "dotenv/config";

// Cria o transportador de e-mail
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST || "sandbox.smtp.mailtrap.io",
    port: Number(process.env.MAIL_PORT) || 2525,
    auth: {
        user: process.env.MAIL_USER || "76406f63d264b6",
        pass: process.env.MAIL_PASS || "9fa4b300618684"
    }
});

// Testando as variáveis de ambiente
console.log("MAIL_HOST:", process.env.MAIL_HOST);
console.log("MAIL_PORT:", process.env.MAIL_PORT);
console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_PASS:", process.env.MAIL_PASS);
console.log("MAIL_FROM:", process.env.MAIL_FROM);

const send = (email: string, name: string, phone: string, message: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        transporter.sendMail(
            {
                from: email, // E-mail do usuário
                to: "jardellucas078@gmail.com", // Seu e-mail
                subject: "Contato pelo site", // Assunto
                text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}` // Corpo do e-mail
            },
            (error, info) => {
                if (error) {
                    console.error("Erro ao enviar e-mail:", error);
                    return reject(error);
                }
                console.log("E-mail enviado:", info.response);
                resolve();
            }
        );
    });
};

export default send;
