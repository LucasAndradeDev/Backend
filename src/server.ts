import express from "express";
import cors from "cors";
import routes from "./Routes/router";
import "dotenv/config";

const app = express();

// Middleware CORS
app.use(cors({
    origin: "*", // Permitir todas as origens (para desenvolvimento)
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));

// Middleware para JSON
app.use(express.json());

// Rotas
app.use(routes);

// Função para iniciar o servidor
const startServer = () => {
    const port = process.env.PORT || 3333;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

// Exporta a instância do servidor e a função para iniciar
export { app, startServer };
