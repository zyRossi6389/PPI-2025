import express from "express";

const porta = 3000;
const localhost = "0.0.0.0"; //define que o aplicativo estará disponível em todas as interfaces de redes desse computador

const app = express();

app.get("/dinheiro", (req, resp) => {
    resp.send("R$100,00")
})


//MIDDLEWARE
//prepara o serivdor para disponibilizar recursos 
//erro: http://localhost:3000/publico/indix.html
//certo: http://localhost:3000/index.html
app.use(express.static("./publico"));

app.listen(porta, localhost, () => {
    console.log(`Servidor rodando em http://${localhost}:${porta}`);
    // string literals 'Victor' + 'Rossi' | `${}` -> para ler as strings
    
})