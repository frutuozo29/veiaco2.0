const mongoose = require('mongoose')
const CategoryModel = require('../../models/category')

module.exports.create = async ({ name, subCategories }) => CategoryModel.create({
  name,
  subCategories
})

module.exports.update = async (input) => CategoryModel.findByIdAndUpdate({ _id: input._id }, input)

module.exports.findAll = async () => CategoryModel.find({})
