// récupération des dépendances
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// récupération de la configuration de la BDD
require("./database/configDB");

//  on indique que nous allons utiliser express
app.use(express.json());

// on accepte les requêtes de toutes origines
app.use(
  cors({
    origin: "*",
  })
);

// on indique le chemin des routes
const routes = require("./routes/products");
app.use(routes);

// on indique que l'application va édouter sur le port 5000 et on retourne un message dans le terminal
app.listen(5000, () => {
  console.log("App listening on port 5000");
});
