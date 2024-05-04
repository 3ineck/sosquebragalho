import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

/////////////////////app.get/////////////////////
app.get("/", function (req, res) {
  res.render("home.ejs");
});

app.get("/fale-conosco", function (req, res) {
  res.render("fale-conosco.ejs");
});

app.get("/sobre-nos", function (req, res) {
  res.render("sobre.ejs");
});

//Conexão com o servidor
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

//Retorno da conexão
app.listen(port, function () {
  console.log("Server has started successfully");
});
