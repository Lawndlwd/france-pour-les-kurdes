import asyncHandler from 'express-async-handler'
import User from '../models/user.model.js'
import generateToken from '../utils/generateToken.js'
import jwt from 'jsonwebtoken'

/**
 * @desc auth user & get token
 * @method POST
 * @route api/user/login
 * @access Public
 */
export const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const user = await User.findOne({ email })

	if (user && (await user.matchPassword(password))) {
		res.json({
			user: {
				_id: user._id,
				email: user.email,
				name: user.name,
				isAdmin: user.isAdmin,
			},
			token: generateToken(user._id),
		})
	} else {
		res.status(401)
		throw new Error('invalid email or password')
	}
})

/**
 * @desc Sign user up  & get token
 * @method POST
 * @route api/user/signup
 * @access Public
 */
export const createUser = asyncHandler(async (req, res) => {
	const { email, password, name } = req.body
	const userExist = await User.findOne({ email })
	if (userExist) {
		res.status(400)
		throw new Error('user already exit')
	}
	const user = await User.create({ email, password, name })

	if (user) {
		res.status(201).json({
			user: {
				_id: user._id,
				email: user.email,
				name: user.name,
				isAdmin: user.isAdmin,
			},
		})
	} else {
		res.status(401)
		throw new Error('invalid email or password')
	}
})

export const getUser = asyncHandler(async (req, res) => {
	let id
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			console.log(req.headers.authorization)
			let token = req.headers.authorization.split(' ')[1]
			const decoded = jwt.verify(token, process.env.JWT_SECRET)
			id = decoded.id
			console.log(id)
		} catch (error) {
			res.status(401)
			throw new Error('invalid token')
		}
		const user = await User.findById(id)
		res.json(user)
	}
})
