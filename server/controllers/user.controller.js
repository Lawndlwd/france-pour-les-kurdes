import asyncHandler from 'express-async-handler'
import User from '../models/user.model.js'
import generateToken from '../utils/generateToken.js'
import jwt from 'jsonwebtoken'
import algoliasearch from 'algoliasearch'

const client = algoliasearch(
	(process.env.ALGOLIA_APP_ID = '3LWUG0HA7L'),
	(process.env.ALGOLIA_API_KEY = '5aac3de8abf8410bd84f1288ebe62d6c')
)
const index = client.initIndex('cards')

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
			user,
			token: generateToken(user._id),
		})
	} else {
		res.status(401)
		throw new Error('Invalid email or password')
	}
})

/**
 * @desc Sign user up  & get token
 * @method POST
 * @route api/user/signup
 * @access Public
 */
export const createUser = asyncHandler(async (req, res) => {
	const { email, name, password } = req.body
	const userExist = await User.findOne({ email })
	if (userExist) {
		res.status(400)
		throw new Error('user already exit')
	}
	try {
		const user = await User.create(
			{ email, password, name }
			)
			
			if (user) {
			res.status(201).json({user})
		} else {
			res.status(401)
			throw new Error('invalid email or password')
		}
		
	} catch (error) {
		console.log(error)
	}
})

const _getIdFromToken = asyncHandler(async (req, res) => {
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			let token = req.headers.authorization.split(' ')[1]
			const decoded = jwt.verify(token, process.env.JWT_SECRET)
			return decoded.id
		} catch (error) {
			res.status(401)
			throw new Error('invalid token')
		}
	}
})

/**
 * @desc get User info
 * @method GET
 * @route api/user
 * @access privete
 */
export const getUser = asyncHandler(async (req, res) => {
	try {
		const id = await _getIdFromToken(req, res)
		const user = await User.findById(id, { password: false })
		res.json(user)
	} catch (error) {
		console.log(error)
	}
})

/**
 * @desc get User info
 * @method GET
 * @route api/user
 * @access privete
 */
export const getAllUsersProfiles = asyncHandler(async (req, res) => {
	try {
		const users = await User.find(
			{ isPublished: true },
			{ password: false }
		)

		res.json(users)
	} catch (error) {
		res.status(500)
		throw new Error('Try again after a while')
	}
})

/**
 * @desc update User info
 * @method PUT
 * @route api/user/:id
 * @access privete
 */
export const updateUser = asyncHandler(async (req, res) => {
	console.log(req.file)
	const id = await _getIdFromToken(req, res)
	try {
		const user = await User.findById(id)

		if (user) {
			user.email = req.body.email || user.email
			user.name = req.body.name || user.name
			user.isAdmin =
				typeof req.body.isAdmin !== 'undefined'
					? req.body.isAdmin
					: user.isAdmin
			user.isFull =
				typeof req.body.isFull !== 'undefined'
					? req.body.isFull
					: user.isFull

			user.isPublished =
				typeof req.body.isPublished !== 'undefined'
					? req.body.isPublished
					: user.isPublished
			console.log(req.body.isPublished)
			user.work = req.body.work || user.work
			user.city = req.body.city || user.city
			user.facebookLink = req.body.facebookLink || user.facebookLink
			user.description = req.body.description || user.description
			user.originCity = req.body.originCity || user.originCity
			if (req.file) {
				user.avatar = req.file.location
			} else {
				user.avatar = user.avatar
			}
			const updatedProfile = await user.save({
				new: true,
			})
			res.json({
				user: updatedProfile,
				status: 200,
				message: 'Successfuly updated',
			})
		} else {
			res.status(401)
			throw new Error('invalid email or password')
		}
	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false,
			message: error.message,
		})
	}
})
