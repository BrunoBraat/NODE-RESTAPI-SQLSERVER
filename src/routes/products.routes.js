import { Router } from 'express';

import {
    getProducts,
    getCountProducts,
    getProductsById,
    postProducts,
    updateProductById,
    deleteProductsById
} from '../controllers/products.controller';

const router = Router()

router.get('/products', getProducts);

router.get('/products/count', getCountProducts);

router.get('/products/:id', getProductsById);

router.post('/products', postProducts);

router.put('/products/:id', updateProductById);

router.delete('/products/:id', deleteProductsById);

export default router 