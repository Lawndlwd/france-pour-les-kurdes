import express from 'express'
import {
    authUser,
    createUser,
    getUser,
    updateUser,
    getAllUsersProfiles
} from '../controllers/user.controller.js'
import { protect } from '../middlewares/auth.middleware.js'


const router = express.Router()

router.post('/login', authUser)
router.post('/signup', createUser)
router.get('/user',protect, getUser)
router.get('/profiles', getAllUsersProfiles)
router.put('/profile',protect, updateUser)

export default router
