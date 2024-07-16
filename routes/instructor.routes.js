import express from 'express';
import { deleteInstructor, getInstructors, getParticularInstructor, logOutInstructor, loginInstructor, registerInstructor, updateInstructorDetails, updateInstructorPassword } from '../controllers/instructor.controllers.js';
import {isAuthenticated, isInstructorAuthenticated, isUserAuthenticated} from '../middlewares/auth.js'

const router = express.Router();


router.post('/registerInstructor',isAuthenticated,registerInstructor)
router.post('/loginInstructor',loginInstructor);
router.get('/logOutInstructor',isInstructorAuthenticated,logOutInstructor);

router.delete('/deleteInstructor',isInstructorAuthenticated,deleteInstructor);

router.get('/getInstructorProfile',getParticularInstructor);
router.get('/getInstructors',getInstructors);

router.put('/updateInstructorDetails',isInstructorAuthenticated,updateInstructorDetails);
router.put('/updateInstructorPassword',isInstructorAuthenticated,updateInstructorPassword);


export default router;