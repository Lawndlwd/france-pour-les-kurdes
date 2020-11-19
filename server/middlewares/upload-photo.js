import aws from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'
import hash from 'object-hash'


const s3 = new aws.S3()

const upload = multer({
	storage: multerS3({
		s3: s3,
		bucket: 'france-kurd',
		acl: 'public-read',
		metadata: (req, file, cb) => {
			cb(null, { fieldName: `${file.fieldname}` })
		},
		key: (req, file, cb) => {
			cb(
				null,
				`france-kurd-${hash(
					file.fieldname
				)}${Date.now().toString()}.jpg`
			)
		},
	}),
})

export default upload
