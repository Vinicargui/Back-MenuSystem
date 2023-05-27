const express = require("express");
const app = express();
const mongoose = require("mongoose");
const produtoRouter = require("./routes/produtoRoutes");
const getProdutoRouter = require("./routes/getProdutosRoutes");
const deleteProdutoRoutes = require("./routes/deleteProdutoRoutes");
const updateProduto = require("./routes/updateProduto");
const getImageRoutes = require("./routes/getImageRoutes");
const router = require("./routes/route");
const cors = require("cors");

app.use(express.static("uploads"));
//CONF PARA LER JSON
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());

//CRIANDO ROTA
app.use("/produto", produtoRouter);
app.use("/", deleteProdutoRoutes);
app.use("/", getProdutoRouter);
app.use("/", updateProduto);
app.use("/image", getImageRoutes);

app.use(router);

const DB_USER = "vinicargui";
const DB_PASSWORD = encodeURIComponent("nycJoXhJFbtBNWez");

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@menusystemcluster.dfxrsjq.mongodb.net/?retryWrites=true&w=majority`
  )

  .then(() => {
    console.log("Conectamos com Sucessoooo!");
  });
// .catch((err) => console.log(err));

//PORTA DISPONIVEL
app.listen(3001);

// CONEXAO
// mongodb+srv://vinicargui:<password>@menusystemcluster.dfxrsjq.mongodb.net/?retryWrites=true&w=majority
