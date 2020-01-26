const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaSubCategories = new Schema({
  _id: mongoose.Types.ObjectId,
  description: {
    type: String,
    required: true
  },
  typeValue: {
    type: String,
    required: true
  }
})

const schema = new Schema({
  _id: mongoose.Types.ObjectId,
  description: {
    type: String,
    required: true
  },
  subCategories: [schemaSubCategories]
})

module.exports = mongoose.model('Category', schema)
