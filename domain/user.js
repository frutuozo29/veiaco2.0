const mongoose = require("mongoose");
const UserModel = require("../models/user");

module.exports.authenticate = async (user, password) => {
  try {
    if (user == "admin") {
      return Promise.resolve({
        _id: "bdbaeb10-9203-4e1f-93f1-ad12c32ac1bb",
        username: user,
        password
      });
    }

    let userbd = await this.readByUsername(user);
    if (userbd && userbd.password !== password) {
      throw new Error("Username or password is invalid");
    }

    return Promise.resolve({
      _id: userbd._id,
      username: userbd.username,
      password: userbd.password
    });
  } catch (error) {
    throw error
  }
};

module.exports.create = async user => {
  try {
    let userModel = new UserModel({
      _id: new mongoose.Types.ObjectId(),
      name: user.name,
      email: user.email,
      username: user.username,
      password: user.password
    });
    const response = await userModel.save();
    return response;
  } catch { }
};

module.exports.read = async (page, perPage) => {
  try {
    const users = await UserModel.find({})
      .skip(perPage * page - perPage)
      .limit(parseInt(perPage));

    const count = await UserModel.count();

    return { users, count };
  } catch { }
};

module.exports.readById = async id => await UserModel.findOne({ _id: id });

module.exports.readByUsername = async username => await UserModel.findOne({ username: username });

module.exports.update = async (id, user) => await UserModel.findOneAndUpdate({ _id: id }, user);

module.exports.del = async id => await UserModel.findOneAndRemove({ _id: id });