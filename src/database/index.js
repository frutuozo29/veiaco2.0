const mongoose = require('mongoose')
const config = require('../../config.json')

var db

module.exports.createConnectionMongoose = () => {
  return new Promise((resolve, reject) => {
    if (db) {
      return db
    }
    mongoose.Promise = global.Promise
    const stringConnectionDb =
      process.env.NODE_ENV === 'production'
        ? process.env.DATABASE
        : `mongodb://${config.database.host}:${config.database.port}/${
          config.database.name
        }`
    mongoose
      .connect(stringConnectionDb, { useNewUrlParser: true })
      .then(() => {
        console.log('[DATABASE] - Mongo is connected')
        resolve(db)
      })
      .catch(err => {
        console.log('[DATABASE] - Error on Mongo connection')
        reject(err)
      })
  })
}

module.exports.sum = (a, b) => a + b