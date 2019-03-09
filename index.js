const config = require("./config.json");
const database = require("./database/database");
const server = require("./server/server");

database
  .createConnectionMongoose()
  .then(() => {
    var port = process.env.PORT || config.ENV.port;
    server.listen(port, () => {
      console.log("Server is running");
    });
  })
  .catch(err => {
    console.log(err);
  });
