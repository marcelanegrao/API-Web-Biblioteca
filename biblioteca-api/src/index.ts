import "reflect-metadata";
import express from 'express';
import { AppDataSource } from "./data-source";
import routes from "./routes/routes";

const app = express(); // 
app.use(express.json());

app.use("/api", routes);

AppDataSource.initialize().then(async () => {
    console.log("Banco de dados conectado! (SQLite file created or found)");
    
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000.");
        console.log("Acesse: http://localhost:3000");
    });

}).catch(error => console.log("Erro ao inicializar o BD:", error));