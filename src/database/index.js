const mongoose = require('mongoose')

var db

module.exports.createConnectionMongoose = () => {
  return new Promise((resolve, reject) => {
    if (db) {
      return db
    }
    mongoose.Promise = global.Promise

    mongoose
      .connect(process.env.DATABASE, { useNewUrlParser: true, useFindAndModify: false })
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
