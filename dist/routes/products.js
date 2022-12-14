"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("../data");
const router = express_1.default.Router();
router.get("/products", (req, res) => {
    res.send(data_1.products);
});
router.post("/products/product", (req, res) => {
    res.send();
});
exports.default = router;
