import express from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import { deletePuppy, getAllPuppies, getParticularPuppies, puppyPost } from '../controllers/puppyAdopt.controllers.js';


const router = express.Router();

router.post('/postDetails',isAuthenticated,puppyPost);
router.get('/getAllDetails',getAllPuppies);

router.delete('/deleteDetails/:id',isAuthenticated,deletePuppy);
router.get('/getParticularPuppy',getParticularPuppies);



export default router;