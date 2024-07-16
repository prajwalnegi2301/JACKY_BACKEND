import express from 'express';
import { isUserAuthenticated } from '../middlewares/auth.js';
import { createStrayDogLookAfter, getAllStrayDogLookAfter } from '../controllers/strayDookLookAfter.controllers.js';

const router = express.Router();

router.post('/createPost',isUserAuthenticated,createStrayDogLookAfter);

router.get('/getAllPosts',getAllStrayDogLookAfter);

export default router;