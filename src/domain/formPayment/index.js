const mongoose = require('mongoose')
const FormPaymentModel = require('../../models/formPayment')

module.exports.create = async (input) => FormPaymentModel.create({
  _id: new mongoose.Types.ObjectId(),
  name: input.name,
  typePayment: input.typePayment
})

module.exports.findAll = async () => FormPaymentModel.find({})
