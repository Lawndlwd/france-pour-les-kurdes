import express from 'express'
import {
    authUser,
    createUser,
    getUser
} from '../controllers/user.controller.js'

const router = express.Router()

router.post('/login', authUser)
router.post('/signup', createUser)
router.get('/user', getUser)

export default router
