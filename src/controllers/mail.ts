import type { Request, Response } from "express";
import send from "../services/nodemailer";

export const sendMailRoute = (req: Request, res: Response) => {
    const { name, email, phone, message } = req.body;

    //Depurando a rota
    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("Telefone:", phone);
    console.log("Mensagem:", message);

    // Validação dos campos obrigatórios
    if (!name  || !phone || !message) {
        return res.status(400).json({ message: "Todos os campos devem ser preenchidos" });
    }

    // Envia o e-mail usando a função send configurada
    send(email, name, phone, message) // Passando o e-mail do usuário, nome, assunto e conteúdo
        .then(() => {
            return res.status(200).json({ message: "E-mail enviado com sucesso!" });
        })
        .catch((error) => {
            console.error("Erro ao enviar e-mail:", error);
            return res.status(500).json({ message: "Erro ao enviar o e-mail", error: error.message });
        });
};
