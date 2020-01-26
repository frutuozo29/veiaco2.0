const mongoose = require('mongoose')
const CategoryModel = require('../../models/category')

module.exports.create = async (input) => CategoryModel.create({
  _id: new mongoose.Types.ObjectId(),
  description: input.description,
  subCategories: input.subCategories
})

module.exports.update = async (input) => CategoryModel.findByIdAndUpdate({ _id: input._id }, input)

module.exports.findAll = async () => CategoryModel.find({})
