import algoliasearch from 'algoliasearch'
import User from '../models/user.model.js'


const client = algoliasearch(process.env.ALGOLIA_ID, process.env.ALGOLIA_SECRET)
const index = client.initIndex('cards')


export const save = async () => { 
    index.saveObjects(await User.find({})).then(({ objectIDs }) => {
	console.log(objectIDs)
})
}
