"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("../data");
const router = express_1.default.Router();
router.get("/categories", (req, res) => {
    res.send(data_1.categories);
});
router.get("/categories/:id", (req, res) => {
    const id = req.params.id;
    const categories_id = data_1.categories.find((cat) => {
        parseInt(id) === cat.id;
        if (categories_id) {
            res.send(categories_id);
        }
        return res.status(404).send("id doesnt exist!");
    });
});
exports.default = router;
