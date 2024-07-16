import express from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import { deleteDogCharacteristics, dogCharacteristicsGet, dogCharacteristicsPost, getAllDogCharacteristics, updateDogCharacteristics } from '../controllers/dogCharacteristics.controllers.js';


const router = express.Router();

router.post('/post',isAuthenticated,dogCharacteristicsPost);

router.get('/infoAboutBreed/:breed',dogCharacteristicsGet);

router.get('/getAllBreeds',getAllDogCharacteristics);




router.put('/update/:breed',isAuthenticated,updateDogCharacteristics);

router.delete('/deletePost/:breed',isAuthenticated,deleteDogCharacteristics);



export default router;