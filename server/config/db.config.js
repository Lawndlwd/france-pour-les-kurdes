import mongoose from 'mongoose'


const connectDB = async () => {
	try {
		const connect = mongoose.connect(process.env.DB, {
			useCreateIndex: true,
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useFindAndModify: false,
		})

		console.log('db connected'.black.underline.bgGreen)
	} catch (error) {
		console.log('db not connected'.black.underline.bgRed)
		console.log(error)
		process.exit(1)
	}
}
export default connectDB