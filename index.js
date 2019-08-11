require('dotenv').config()
const database = require('./src/database')
const server = require('./src/server')

database
  .createConnectionMongoose()
  .then(() => {
    var port = process.env.PORT
    server.listen(port, () => {
      console.log(`[SERVER] - Server is running on port: ${port}`)
    })
  })
  .catch(err => {
    console.log(`[SERVER] - ${err}`)
  })
