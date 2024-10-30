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
            origin: 'http://localhost:3000', // Permite apenas esta origem
            methods: ['GET', 'POST'], // Métodos permitidos
            allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
        }));
        this.app.use(express.json());
    }
    

    private routes(): void {
        this.app.use(routes);
    }
}

// Exporta a instância do servidor
export default new Server();
