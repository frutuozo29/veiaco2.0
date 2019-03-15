const controller = require("../controllers/user");

function routes(server) {
  server.get("/user", controller.read);
  server.get("/user/:id", controller.readById);
  server.post("/user", controller.create);
  server.put("/user/:id", controller.update);
  server.del("/user/:id", controller.del);
}

module.exports = routes;
