import { getConnection, sql, queries } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllProducts);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getCountProducts = async (req, res) => {
  const pool = await getConnection();
  const result = await pool
    .request()
    .query(queries.getCountProducts);

  res.json(result.recordset[0]['']);
};

export const getProductsById = async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", id)
    .query(queries.getProductById);

  res.send(result.recordset[0]);
};

export const postProducts = async (req, res) => {
  const { name, description } = req.body;
  let { quantity } = req.body;

  if (name == null || description == null) {
    return res.status(400).json({ msg: "Bad request. Please fill all required fields" });
  }

  if (quantity == null) quantity = 0;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .input("quantity", sql.Int, quantity)
      .query(queries.addNewProduct);

    res.json({ name, description, quantity });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateProductById = async (req, res) => { 

  const { name, description, quantity } = req.body
  const { id } = req.params

  if (name == null || description == null , quantity == null) {
    return res.status(400).json({ msg: "Bad request. Please fill all required fields" });
  }
  
  const pool = await getConnection()
  await pool.request()
    .input('name', sql.VarChar, name)
    .input('description', sql.Text, description)
    .input('quantity', sql.Int, quantity)
    .input('id', sql.Int, id)
    .query(queries.updateProductById)
  
  res.json({name, description, quantity})

} 

export const deleteProductsById = async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", id)
    .query(queries.deleteProductById);

  res.sendStatus(204) 
};