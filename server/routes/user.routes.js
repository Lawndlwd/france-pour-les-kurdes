import express from 'express'
import {
    authUser,
    createUser
} from '../controllers/user.controller.js'

const router = express.Router()

router.post('/login', authUser)
router.post('/signup', createUser)

export default router
