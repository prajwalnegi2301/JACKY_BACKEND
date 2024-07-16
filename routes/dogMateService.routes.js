import express from 'express';
import { isUserAuthenticated } from '../middlewares/auth.js';
import { deleteDogMateService, dogMatePost, getAllDogsForMating, getDogByBreed } from '../controllers/dogMateService.controllers.js';

const router = express.Router();


router.post('/post',isUserAuthenticated,dogMatePost);

router.delete('/delete/:id',isUserAuthenticated,deleteDogMateService);

router.get('/getAllDogs',isUserAuthenticated,getAllDogsForMating);


export default router;