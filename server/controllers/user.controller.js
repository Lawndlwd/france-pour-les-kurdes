import asyncHandler from 'express-async-handler'
import User from '../models/user.model.js'
import generateToken from '../utils/generateToken.js'
import jwt from 'jsonwebtoken'
import algoliasearch from 'algoliasearch'

const client = algoliasearch(
	(process.env.ALGOLIA_APP_ID = '3LWUG0HA7L'),
	(process.env.ALGOLIA_API_KEY = '5aac3de8abf8410bd84f1288ebe62d6c'),
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
		const {
			_id,
			email,
			name,
			isAdmin,
			isPublished,
			work,
			city,
			facebookLink,
			description,
		} = user
		res.json({
			user: {
				_id,
				email,
				name,
				isAdmin,
				isPublished,
				work,
				city,
				facebookLink,
				description,
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
	const { email, name, password } = req.body
	const userExist = await User.findOne({ email })
	if (userExist) {
		res.status(400)
		throw new Error('user already exit')
	}
	const user = await User.create({ email, password, name })

	if (user) {
		const {
			_id,
			email,
			name,
			isAdmin,
			isPublished,
			work,
			city,
			facebookLink,
			description,
			originCity,
		} = user
		res.status(201).json({
			user: {
				_id,
				email,
				name,
				isAdmin,
				isPublished,
				work,
				city,
				facebookLink,
				description,
				originCity,
			},
		})
	} else {
		res.status(401)
		throw new Error('invalid email or password')
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
		const {
			_id,
			email,
			name,
			isAdmin,
			isPublished,
			work,
			city,
			facebookLink,
			description,
			originCity,
		} = await User.findById(id)
		res.json({
			_id,
			email,
			name,
			isAdmin,
			isPublished,
			work,
			city,
			facebookLink,
			description,
			originCity,
		})
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
		const users = await User.find({'isPublished': true},{'password': false})
		// const algolia = await index.saveObjects(users, {
		// 	custom_objectID: '_id',
		// })
		// console.log(algolia)
		res.json(users)
	} catch (error) {
		console.log(error)
	}
})

/**
 * @desc update User info
 * @method PUT
 * @route api/user/:id
 * @access privete
 */
export const updateUser = asyncHandler(async (req, res) => {
	const id = await _getIdFromToken(req, res)
	const user = await User.findById(id)
	const {
		email,
		name,
		isAdmin,
		isPublished,
		work,
		city,
		facebookLink,
		description,
		originCity,
	} = req.body
	console.log(req.body)
	const data = {
		email,
		name,
		isAdmin,
		isPublished,
		work,
		city,
		facebookLink,
		description,
		originCity,
	}

	if (user) {
		try {
			const {
				_id,
				email,
				name,
				isAdmin,
				isPublished,
				work,
				city,
				facebookLink,
				description,
				originCity,
			} = await User.findByIdAndUpdate(id, data, { new: true })
			res.json({
				user: {
					_id,
					email,
					name,
					isAdmin,
					isPublished,
					work,
					city,
					facebookLink,
					description,
					originCity,
				},
				status: 200,
				message: 'Successfuly updated',
			})
		} catch (error) {
			console.log(error)
			res.status(500).json({
				success: false,
				message: error.message,
			})
		}
	} else {
		res.status(401)
		throw new Error('invalid email or password')
	}
})
