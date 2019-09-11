const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  email: String,
  username: String,
  password: String
})

module.exports = mongoose.model('User', schema)
