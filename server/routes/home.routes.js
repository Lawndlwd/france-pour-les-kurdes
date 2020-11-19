import express from 'express'
import {
	getHomePage,
	updateHomePage,
	createHomePage,
} from '../controllers/home.controller.js'
import upload from '../middlewares/upload-photo.js'



const router = express.Router()


const uploadMiddlewere = upload.fields([
	{ name: 'header_img', maxCount: 1 },
	{ name: 'main_info_imgs', maxCount:3 },
])
router.get('/', getHomePage)
router.post('/', uploadMiddlewere, createHomePage)
router.put('/:id', uploadMiddlewere, updateHomePage)

export default router