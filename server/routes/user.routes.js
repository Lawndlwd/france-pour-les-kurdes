import express from 'express'
import {
	authUser,
	createUser,
	getUser,
	updateUser,
	getAllUsersProfiles,
} from '../controllers/user.controller.js'
import { protect } from '../middlewares/auth.middleware.js'

import upload from '../middlewares/upload-photo.js'



const router = express.Router()


router.post('/login', authUser)
router.post('/signup', createUser)
router.get('/user', getUser)
router.get('/profiles', getAllUsersProfiles)
router.put('/profile', protect, upload.single('avatar'), updateUser)

export default router
