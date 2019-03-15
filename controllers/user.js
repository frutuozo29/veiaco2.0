const userDomain = require("../domain/user");

module.exports.create = async (req, res, next) => {
  try {
    const user = await userDomain.create(req.body);
    res.send({ user });
  } catch (err) {
    res.status(500);
    res.send({ message: err.message });
  }
  next();
};

module.exports.read = async (req, res, next) => {
  try {
    let page = req.query.page || 1;
    let perPage = req.query.perpage || 10;

    const users = await userDomain.read(page, perPage);
    res.send(users);
  } catch (err) {
    res.status(500);
    res.send({ message: err.message });
  }
  next();
};

module.exports.readById = async (req, res, next) => {
  try {
    const user = await userDomain.readById(req.params.id);
    res.send(user);
  } catch (err) {
    res.status(500);
    res.send({ message: err.message });
  }
  next();
};

module.exports.update = async (req, res, next) => {
  try {
    const user = await userDomain.update(req.params.id, req.body);
    res.send(user);
  } catch (err) {
    res.status(500);
    res.send({ message: err.message });
  }
  next();
};

module.exports.del = async (req, res, next) => {
  try {
    const user = await userDomain.del(req.params.id);
    res.send(user);
  } catch (err) {
    res.status(500);
    res.send({ message: err.message });
  }
  next();
};
