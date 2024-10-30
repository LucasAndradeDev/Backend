import express from "express";
import type { Application } from "express";
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
        this.app.use(cors({
            origin: "*", // Permitir todas as origens (para desenvolvimento)
            allowedHeaders: ["Content-Type", "Authorization"],
            credentials: true,
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
        }));
        this.app.use(express.json());
        this.app.options('*', cors()); // Responde a todas as requisições OPTIONS
    }

    private routes(): void {
        this.app.use(routes);
    }
}

// Exporta a instância do servidor
export default new Server();
