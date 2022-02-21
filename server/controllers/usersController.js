const UserModel = require("../models/userModel");
const { createOne, updateOne } = require("./handlerFactory");

const createUser = createOne(UserModel);
const makeAdmin = updateOne(UserModel);

const checkIsAdmin = async (req, res) => {
  const email = req.params.email;
  const user = await UserModel.findOne({ email: email });
  let isAdmin = false;

  if (user?.role === "admin") {
    isAdmin = true;
  }
  res.json({ admin: isAdmin });
};

const updateOrInsertUser = async (req, res) => {
  const user = req.body;
  const filter = { email: user.email };
  const options = { upsert: true };
  const updateDoc = { $set: user };
  const result = await UserModel.updateOne(filter, updateDoc, options);
  res.json(result);
};

module.exports = { checkIsAdmin, createUser, updateOrInsertUser, makeAdmin };
