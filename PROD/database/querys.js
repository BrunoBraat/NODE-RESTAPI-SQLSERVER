"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  getAllProducts: 'SELECT * FROM Products',
  getProductById: 'SELECT * FROM Products WHERE Id = @Id',
  getCountProducts: 'SELECT COUNT(*) FROM Products',
  addNewProduct: 'INSERT INTO Products (name, description, quantity) VALUES(@name, @description, @quantity)',
  updateProductById: 'UPDATE Products SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @Id',
  deleteProductById: 'DELETE FROM Products WHERE Id = @Id'
};
exports.queries = queries;