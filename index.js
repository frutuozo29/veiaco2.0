require('dotenv').config()
const database = require('./src/database')
const server = require('./src/server')

database
  .createConnectionMongoose()
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log(`[SERVER - HEROKU] - Server is running on port: ${process.env.PORT}`)
    })
  })
  .catch(err => {
    console.log(`[SERVER] - ${err}`)
  })
