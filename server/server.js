import colors from 'colors' 
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import connectDB from './config/db.config.js'


import homeRoute from './routes/home.routes.js'



const port = process.env.PORT || 8000

dotenv.config()
connectDB()
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/api/home', homeRoute)




app.listen(port, (err) => {
	if (err) {
		console.log(err)
	} else {
		console.log(
			`server is up running in ${process.env.NODE_ENV} mode on port ${port}`
				.black.bgGreen.underline
		)
	}
})