const Router = require("express").Router();
const { response } = require("express");
const Produto = require("../models/produto");

Router.patch("/:id", async (req, res) => {
  const { titulo, categoria, imagem, valor, descricao } = req.body;
  const idOriginal = req.params.id;

  const produto = {
    titulo,
    categoria,
    imagem,
    valor,
    descricao,
  };

  try {
    await Produto.updateOne({ _id: idOriginal }, produto);
    res.json({ mensagem: "Pruduto atualizado com sucesso!" });
  } catch (error) {
    res.status(400).json({ errado: error });
  }
});

// const produtoIndex = Produto.findIndex((produto) => produto._id == id);
// Produto[produtoIndex] = novoProduto;
// return response.json(novoProduto);

//   try {
//     const novoProduto = new Produto(produto);
//     await novoProduto.updateOne({ _id: req.params.id });
//     res.json({ mensagem: "Pruduto alterado com sucesso!" });
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = Router;
