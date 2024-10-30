import express from "express";
import type { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import routes from "./Routes/router";

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        // Configure CORS usando o middleware express, adicionando também o cabeçalho manualmente
        this.app.use(cors());
        
        // Adiciona cabeçalhos CORS para todas as respostas
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.header("Access-Control-Allow-Origin", "*"); // Altere "*" para uma origem específica se necessário
            res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
            res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
            next();
        });

        this.app.use(express.json());

        // Garante que a preflight request tenha os cabeçalhos corretos
        this.app.options('*', (req: Request, res: Response) => {
            res.header("Access-Control-Allow-Origin", "*"); // Altere "*" se necessário
            res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
            res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
            res.sendStatus(200);
        });
    }

    private routes(): void {
        this.app.use(routes);
    }
}

// Exporta a instância do servidor
export default new Server();
