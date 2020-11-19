import Home from '../models/home.model.js'
import asyncHandler from 'express-async-handler'




/**
 * @desc fetch our homepage detail
 * @method GET
 * @route api/home
 * @access Public
 */
export const getHomePage = asyncHandler(async (req, res) => {
	try {
		const home = await Home.find({})
		res.json({
			home,
			status: 200,
			message: '',
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false,
			message: error.message,
		})
	}
})


/**
 * @desc update homepage detail
 * @method PUT
 * @route api/home/:id
 * @access Privete
 */
export const updateHomePage = asyncHandler(async (req, res) => {
	// header_img: String,
	// main_info_imgs: [String],
	// define our id
	const id = req.params.id

	let main_info_imgs = null
	let header_img = null

	if (req.files['main_info_imgs']) {
		main_info_imgs = req.files['main_info_imgs'].map(
			(file) => file.location
		)
	}
	if (req.files['header_img']) {
		header_img = req.files['header_img'][0].location
	}
	const {
		header_main_text,
		header_sub_text,
		main_text_1,
		sub_text_1,
		main_text_2,
		sub_text_2,
	} = req.body

	let data = {
		header_main_text,
		header_sub_text,
		main_text_1,
		sub_text_1,
		main_text_2,
		sub_text_2,
	}
	if (main_info_imgs) {
		data = {
			...data,
			main_info_imgs,
		}
	}
	if (header_img) {
		data = {
			...data,
			header_img,
		}
	}
	try {
		const home = await Home.findByIdAndUpdate(id, data, { new: true })
		res.json({
			home,
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
})

/**
 * @desc create homepage detail
 * @method POST
 * @route api/home
 * @access Loucked 
 */
export const createHomePage = asyncHandler(async (req, res) => {
	let main_info_imgs = null
	let header_img = null

	if (req.files['main_info_imgs']) {
		main_info_imgs = req.files['main_info_imgs'].map(
			(file) => file.location
		)
	}
	if (req.files['header_img']) {
		header_img = req.files['header_img'][0].location
	}
	const {
		header_main_text,
		header_sub_text,
		main_text_1,
		sub_text_1,
		main_text_2,
		sub_text_2,
    } = req.body
    

    let data = {
		header_main_text,
		header_sub_text,
		main_text_1,
		sub_text_1,
		main_text_2,
		sub_text_2,
		main_info_imgs,
		header_img,
	}
	try {
		const home = await Home.create(data)
		res.json({
			home,
			status: 201,
			message: 'Successfuly created',
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false,
			message: error.message,
		})
	}
})
