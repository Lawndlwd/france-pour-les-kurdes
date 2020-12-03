import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		work: {
			type: String,
			default: null,
		},
		description: {
			type: String,
			default: null,
		},
		city: {
			type: String,
			default: null,
		},
		facebookLink: {
			type: String,
			default: null,
		},
		originCity: {
			type: String,
			default: null,
		},
		avatar: {
			type: String,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
		isPublished: {
			type: Boolean,
			required: true,
			default: false,
		},
		isFull: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
)

userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next()
	}
	const salt = await bcrypt.genSalt(8)
	this.password = await bcrypt.hash(this.password, salt)
})

let User = mongoose.model('User', userSchema)

export default User
