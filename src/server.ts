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
            origin: [
                'http://localhost:3000', // Origem de desenvolvimento local
                'https://lucas-andrade-dev.vercel.app', // Origem de produção
            ],
            methods: ['GET', 'POST', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization'],
        }));
        
        this.app.use(express.json());

        // Habilita CORS para todas as rotas OPTIONS
        this.app.options('*', cors({
            origin: [
                'http://localhost:3000',
                'https://lucas-andrade-zpq6wxv0u-lucas-projects-2c06066a.vercel.app',
                'https://lucas-andrade-dev.vercel.app',
            ],
            methods: ['GET', 'POST', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization'],
        }));
    }

    private routes(): void {
        this.app.use(routes);
    }
}

// Exporta a instância do servidor
export default new Server();
