const express = require("express");

const router = express.Router();

const productsController = require("../controllers/products");

router.get("/products", productsController.getProduts);

module.exports = router;
