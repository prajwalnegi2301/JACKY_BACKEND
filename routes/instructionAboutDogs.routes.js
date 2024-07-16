import express from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import { deleteInstruction, getAllInstructions, postInstruction } from '../controllers/instructionsAboutDog.controllers.js';

const router  = express.Router();

router.post('/postInstruction',isAuthenticated,postInstruction);
router.get('/getAllInstructions',getAllInstructions);


router.delete('/deleteInstruction/:id',isAuthenticated,deleteInstruction);

export default router;