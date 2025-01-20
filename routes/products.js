const router = require("express").Router();
const connection = require("../database/configDB");

//  création de la route pour récupérer toutes les données de la table products
// url : http://localhost:5000
router.get("/", (req, res) => {
  const sql = "SELECT * FROM products";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

router.post("/addToCart", (req, res) => {
  // console.log(req.body);
  const { id, title, price } = req.body;
  const insertSql =
    "INSERT INTO cart (title, price, idProduct) VALUES (?, ?, ?)";
  connection.query(insertSql, [title, price, id], (err, result) => {
    if (err) throw err;
    res.status(200).json({ message: "OK" });
  });
});

router.get("/getCart", (req, res) => {
  connection.query("SELECT * FROM cart", (err, result) => {
    res.status(200).json(result);
  });
});

router.delete("/deleteArticle/:idProduct", (req, res) => {
  console.log(req.params);
  const { idProduct } = req.params;
  const deleteSql = "DELETE FROM cart WHERE idProduct = ?";
  connection.query(deleteSql, [idProduct], (err, result) => {
    if (err) throw err;
    res.status(200).json({ message: "Article supprimé" });
  });
});

module.exports = router;
