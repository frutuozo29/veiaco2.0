const mongoose = require('mongoose')

var db

module.exports.createConnectionMongoose = () => {
  return new Promise((resolve, reject) => {
    if (db) {
      return db
    }
    mongoose.Promise = global.Promise

    mongoose
      .connect(process.env.DATABASE, { useNewUrlParser: true })
      .then(() => {
        console.log('[DATABASE MONGO] - Mongo is connected')
        resolve(db)
      })
      .catch(err => {
        console.log('[DATABASE] - Error on Mongo connection')
        reject(err)
      })
  })
}
