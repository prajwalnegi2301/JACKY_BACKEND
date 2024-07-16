import express from 'express';
import { isAuthenticated, isInstructorAuthenticated, isUserAuthenticated } from '../middlewares/auth.js';
import { createInstructorAppointmentAtHome, deleteAppointment, getAllAppointmentsForHomeVisit, getInstructorAppointmentsForHomeVisit, updateAppointmentStatus } from '../controllers/instructorAppointmentAtHome.controllers.js';


const router = express.Router();


router.post('/postAppointment',isUserAuthenticated,createInstructorAppointmentAtHome);

router.get('/getAllAppointments',getAllAppointmentsForHomeVisit);

router.get('/particularInstructor/getAppointments/forInstructor/:instructorId',isInstructorAuthenticated,getInstructorAppointmentsForHomeVisit);


router.get('/homeVisit/getParticular/instructor/admin/:instructorId',isAuthenticated,getInstructorAppointmentsForHomeVisit);

router.put('/homeVisit/updateStatus/appointment/admin/:appointmentId',isAuthenticated,updateAppointmentStatus);

router.delete('/deleteAppointment/:appointmentId',isUserAuthenticated,deleteAppointment);

export default router;