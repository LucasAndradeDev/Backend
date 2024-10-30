import { Router, type Request, type Response } from "express";
import { sendMailRoute } from "../controllers/mail";

const routes = Router();

// Rota para o envio de e-mail
routes.post("/mail", (req: Request, res: Response) => {
    console.log("Solicitação recebida na rota /mail:", req.body);
    sendMailRoute(req, res);
});


// Rota para a página inicial
routes.get("/", (req: Request, res: Response) => {
    res.send("Funcionando!");
});

export default routes;
