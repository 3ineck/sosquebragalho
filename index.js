//Importação das bibliotecas express para conexão do servidor
//e body-parser para definir a pasta padrão como a public
import express from "express";
import bodyParser from "body-parser";

//Definição da constante app como a função express para utilização posterior
const app = express();

//Definição da pasta inicial padrão
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Após esse momento é definido as routes de acesso ao site

//Quando o usuário entra na página inicial
app.get("/", function (req, res) {
  res.render("home.ejs");
});

//Quando o usuário acessa a página /fale-conosco
app.get("/fale-conosco", function (req, res) {
  res.render("fale-conosco.ejs");
});

//Quando o usuário acesso a página /sobre-nos
app.get("/sobre-nos", function (req, res) {
  res.render("sobre.ejs");
});

//Definição da porta do servidor
//Código padrão para que se haja um arquivo .env com uma porta específica, funciona com essa porta
//se não, define a porta padrão 3000.
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

//Retorno da conexão
app.listen(port, function () {
  console.log("Servidor conectado.");
});
