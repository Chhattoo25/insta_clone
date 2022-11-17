

const mongoose = require('mongoose');

const FeedSchema = mongoose.Schema({
 title:String,
 image:String,
 description:String,
 tags:[String],
 userId:String,


})
const Feed = mongoose.model("feed",FeedSchema)

module.exports =Feed