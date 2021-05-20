// {
//     "name": "Mongo Fly Shop",
//     "image": "images/mongo-logo.png",
//     "featured": false,
//     "description": "Need a new fishing pole, a tacklebox, or flies of all kinds? Stop by Mongo Fly Shop."
// }

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    name: String,
    image: String,
    featured: Boolean,
    description: String,
})

const Partner = mongoose.model('Partner', partnerSchema)

module.exports = Partner