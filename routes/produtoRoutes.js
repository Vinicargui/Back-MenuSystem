const Router = require("express").Router();
const Produto = require("../models/produto");

Router.post("/", async (req, res) => {
  const { titulo, categoria, imagem, valor, descricao } = req.body;

  if (!titulo) {
    res.status(422).json({ message: "existe campo não preenchido" });
  }

  const produto = {
    titulo,
    categoria,
    imagem,
    valor,
    descricao,
  };

  try {
    const novoProduto = new Produto(produto)
    await novoProduto.save()
    res.status(201).json({ message: "Cadastrado com Sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = Router;
