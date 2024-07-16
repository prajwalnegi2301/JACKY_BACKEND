import express from 'express';

import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import cloudinary from "cloudinary";
import { errorMiddleware } from './utils/errorMiddleware.js';
import database from './database/dbConnection.js';


import adminRouter from './routes/admin.routes.js';
import appointmentWithDoctorRouter from './routes/appointmentWithDoctor.routes.js';
import dogAtCenterRouter from './routes/dogAtCenter.routes.js';
import dogBlogRouter from './routes/dogBlog.routes.js';
import dogCharacteristicsRouter from './routes/dogCharacteristics.routes.js';
import dogMateRouter from './routes/dogMateService.routes.js';
import feedbackForInstructorRouter from './routes/feedbackForInstructor.routes.js';
import feedbackForProductRouter from './routes/feedbackForProduct.routes.js';
import instructionAboutDogRouter from './routes/instructionAboutDogs.routes.js';
import instructorRouter from './routes/instructor.routes.js';
import instructorAppointmentAtHomeRouter from './routes/intructorAppointmentAtHome.routes.js';
import partnerWithUsRouter from './routes/partnerWithUs.routes.js';
import productComplaintRouter from './routes/productComplaint.routes.js';
import puppyAdoptRouter from './routes/puppyAdopt.routes.js';
import userRouter from './routes/user.routes.js';
import strayDogRouter from './routes/strayDogLookAfter.routes.js';
import wantATrainedDogRouter from './routes/wantATrainedDog.routes.js';
import connectWithUsRouter from './routes/connectWithUs.routes.js'
import productRouter from './routes/product.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

dotenv.config();
app.use(cors({
    origin: [process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
    methods: ["GET","POST","PUT","DELETE"],
    credentials:true
}));

app.use(cookieParser());

app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );

app.use('/api/v1/user',userRouter);
app.use('/api/v1/admin',adminRouter);
app.use('/api/v1/instructor',instructorRouter);
app.use('/api/v1/appointmentWithDoctor',appointmentWithDoctorRouter);
app.use('/api/v1/dogAtCenter',dogAtCenterRouter);
app.use('/api/v1/dogBlog',dogBlogRouter);
app.use('/api/v1/dogCharacteristics',dogCharacteristicsRouter);
app.use('/api/v1/dogMate',dogMateRouter);
app.use('/api/v1/feedbackForProduct',feedbackForProductRouter);
app.use('/api/v1/instructionAboutDog',instructionAboutDogRouter);
app.use('/api/v1/feedbackForInstructor',feedbackForInstructorRouter);
app.use('/api/v1/instructorAppointmentAtHome',instructorAppointmentAtHomeRouter);
app.use('/api/v1/partnerWithUs',partnerWithUsRouter);
app.use('/api/v1/productComplaint',productComplaintRouter);
app.use('/api/v1/puppyAdopt',puppyAdoptRouter);
app.use('/api/v1/strayDog',strayDogRouter);
app.use('/api/v1/wantATrainedDog',wantATrainedDogRouter);
app.use('/api/v1/connect',connectWithUsRouter);
app.use('/api/v1/product',productRouter);

database();

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log("server is running");
})