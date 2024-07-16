import express from 'express';
import { isUserAuthenticated } from '../middlewares/auth.js';
import { blogPost, deleteBlog, getAllBlogs, getMyBlogs, updateBlog } from '../controllers/dogBlog.controllers.js';

const router = express.Router();

router.post('/createBlog',isUserAuthenticated,blogPost);

router.delete('/deleteBlog/:id',isUserAuthenticated,deleteBlog);

router.get('/getAllBlogs',getAllBlogs);
router.get('/getUserBlog',isUserAuthenticated,getMyBlogs);

router.put('/updateBlog/:id',isUserAuthenticated,updateBlog);


export default router;