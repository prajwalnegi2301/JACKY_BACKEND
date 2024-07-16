import express from 'express';
import { isUserAuthenticated } from '../middlewares/auth.js';
import { getAllFeedBacks, getAllFeedbackOfParticularProduct, postFeedbackForProduct } from '../controllers/feedbackForProduct. controllers.js';


const router = express.Router();


router.post('/feedback/product/createProduct',isUserAuthenticated,postFeedbackForProduct);
router.get('/feedback/product/particularProduct/:id',getAllFeedbackOfParticularProduct);
router.get('/feedback/product/getAllFeedbacks',getAllFeedBacks);


export default router;