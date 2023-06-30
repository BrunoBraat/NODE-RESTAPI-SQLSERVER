export const queries = {
    getAllProducts:
        'SELECT * FROM Products',
    getProductById:
        'SELECT * FROM Products WHERE Id = @Id',
    getCountProducts:
        'SELECT COUNT(*) FROM Products',
    addNewProduct:
        'INSERT INTO Products (name, description, quantity) VALUES(@name, @description, @quantity)',
    updateProductById:
        'UPDATE Products SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @Id',
    deleteProductById:
        'DELETE FROM Products WHERE Id = @Id'
}

