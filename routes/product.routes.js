import express from 'express';
import { isAuthenticated, isUserAuthenticated } from '../middlewares/auth.js';
import { postProduct,getProducts } from '../controllers/product.controllers.js';

const router = express.Router();

router.post('/postProduct',isAuthenticated,postProduct);
router.get('/getProducts',isUserAuthenticated,getProducts);


export default router;