import mongoose from 'mongoose'


const homeSchema = mongoose.Schema({
	header_main_text: String,
    header_sub_text: String,
    
	header_img: String,
	main_info_imgs: [String],
    
    main_text_1: String,
	sub_text_1: String,
	main_text_2: String,
	sub_text_2: String,
})



const Home = mongoose.model('Home', homeSchema)

export default Home