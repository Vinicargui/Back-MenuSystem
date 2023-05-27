const Router = require("express").Router();

const usuarioControle = require("../controle/usuarioControle");

Router.post("/usuario", usuarioControle.create);
Router.get("/usuarios", usuarioControle.index);

module.exports = Router;
