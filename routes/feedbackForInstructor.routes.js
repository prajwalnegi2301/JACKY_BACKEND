import express from 'express';
import { isUserAuthenticated } from '../middlewares/auth.js';
import { getAllFeedBacks, getAllFeedbackOfParticularInstructor, postFeedback } from '../controllers/feedbackForInstructor.controllers.js';


const router = express.Router();

router.post('/postFeedback',isUserAuthenticated,postFeedback);

router.get('/getFeedback',getAllFeedbackOfParticularInstructor);

router.get('/getAllFeedbacks',getAllFeedBacks);



export default router;