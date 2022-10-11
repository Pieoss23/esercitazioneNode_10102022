import express from "express";
import { categories } from "../data";
const router = express.Router();

router.get("/categories", (req, res) => {
  res.send(categories);
});

router.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  const categories_id = categories.find((cat) => {
    parseInt(id) === cat.id;
    if (categories_id) {
      res.send(categories_id);
    }
    return res.status(404).send("id doesnt exist!");
  });
});

router.post("/categories/category", (req, res) => {
  req.body = {
    id: 7,
    name: "Another Cat",
  };
  categories.push(req.body);
  return res.send(req.body);
});

export default router;
