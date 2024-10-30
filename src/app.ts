import server from "./server"; // Correto
import "dotenv/config";


function startServer() {
    const port = process.env.PORT || 3333;
    server.app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

startServer();
