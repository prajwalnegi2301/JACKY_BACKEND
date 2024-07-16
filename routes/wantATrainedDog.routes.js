import express from 'express';
import { isAuthenticated,  } from '../middlewares/auth.js';
import { deleteTrainedDog, getAllTrainedDog, trainedDogPost } from '../controllers/wantATrainedDog.controllers.js';


const router = express.Router();

router.post('/postDetails',isAuthenticated,trainedDogPost);

router.delete('/deleteDetails',isAuthenticated,deleteTrainedDog);

router.get('/getAllDogs',getAllTrainedDog);

export default router;