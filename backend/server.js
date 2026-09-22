const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

const produtos = [
    {
        id: 1,
        nome: "Mouse Gamer",
        categoria: "Acessórios Gamer",
        preco: 67,
        imagem: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600"
    },
    {
        id: 2,
        nome: "Teclado Gamer",
        categoria: "Acessórios Gamer",
        preco: 677,
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600"
    },
    {
        id: 3,
        nome: "Monitor Gamer",
        categoria: "Eletrônicos",
        preco: 6767,
        imagem: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600"
    }
];

app.get("/api/produtos", (req, res) => {
    res.json(produtos);
});

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});