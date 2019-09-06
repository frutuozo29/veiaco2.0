const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  typePayment: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('FormPaymento', schema)
