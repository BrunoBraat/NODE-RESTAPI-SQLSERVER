"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _products = require("../controllers/products.controller");
var router = (0, _express.Router)();
router.get('/products', _products.getProducts);
router.get('/products/count', _products.getCountProducts);
router.get('/products/:id', _products.getProductsById);
router.post('/products', _products.postProducts);
router.put('/products/:id', _products.updateProductById);
router["delete"]('/products/:id', _products.deleteProductsById);
var _default = router;
exports["default"] = _default;