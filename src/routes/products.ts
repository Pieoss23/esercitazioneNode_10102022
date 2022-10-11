import express from "express";
import { products, categories } from "../data";
const router = express.Router();

router.get("/products", (req, res) => {
  res.send(products);
});

router.post("/products/product", (req, res) => {
  req.body = {
    id: 9,
    name: "Prosecco",
    img: "",
    category_id: 3,
  };

  if (categories.find((cat) => cat.id === req.body.category_id)) {
    products.push(req.body);
    res.send(req.body);
  }
  return res.status(400).send("category inexistent");
});

export default router;
