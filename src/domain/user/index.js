const mongoose = require('mongoose')
const UserModel = require('../../models/user')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')

module.exports.signup = async (input) => {
  const user = await UserModel.create({
    _id: new mongoose.Types.ObjectId(),
    name: input.name,
    email: input.email,
    username: input.username,
    password: await bcrypt.hash(input.password, 10)
  })

  const token = jsonwebtoken.sign(
    { name: user.name, email: user.email, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  )

  return { token, user: { name: user.name, email: user.email, username: user.username } }
}

module.exports.login = async (username, password) => {
  const user = await UserModel.findOne({ username })

  if (!user) {
    throw new Error('No user with that username')
  }

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) {
    throw Error('Incorrect password')
  }

  const token = jsonwebtoken.sign(
    { name: user.name, email: user.email, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  )

  return { token, user: { name: user.name, email: user.email, username: user.username } }
}

module.exports.checkToken = async (token) => jsonwebtoken.verify(token, process.env.JWT_SECRET, (error, payload) => {
  if (error) throw new Error('Invalid token')

  return { token, user: { name: payload.name, email: payload.email, username: payload.username } }
})

module.exports.findAll = async () => UserModel.find({})
