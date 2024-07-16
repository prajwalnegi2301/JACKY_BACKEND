import express from 'express';
import {isAuthenticated, isDoctorAuthenticated, } from '../middlewares/auth.js'
import { deleteDoctor, getDoctors, getParticularDoctor, logOutDoctor, loginDoctor, registerDoctor, updateDoctorDetails, updateDoctorPassword } from '../controllers/doctor.controllers.js';

const router = express.Router();


router.post('/registerDoctor',isAuthenticated,registerDoctor)
router.post('/loginDoctor',loginDoctor);
router.get('/logoutDoctor',isDoctorAuthenticated,logOutDoctor);

router.delete('/deleteDoctor',isAuthenticated,deleteDoctor);

router.get('/getDoctorProfile',getParticularDoctor);
router.get('/getDoctors',isAuthenticated,getDoctors);

router.put('/updateDoctorDetails',isDoctorAuthenticated,updateDoctorDetails);
router.put('/updateDoctorPassword',isDoctorAuthenticated,updateDoctorPassword);




export default router;