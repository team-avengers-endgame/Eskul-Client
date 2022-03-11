const User = require("../models/userModel");
const handlerFactory = require("./handlerFactory");

const createUser = handlerFactory.createOne(User);
const updateUser = handlerFactory.updateOne(User);
const deleteUser = handlerFactory.deleteOne(User);
const getAllUsers = handlerFactory.getAll(User);

const getMe = async (req, res) => {
  console.log(req.params.email);
  const result = await User.findOne({ email: req.params.email });
  res.json(result);
};

const makeAdmin = async (req, res) => {
  const user = req.body;
  const filter = { email: user.email };
  const updateDoc = { $set: { role: "admin" } };
  const result = await User.updateOne(filter, updateDoc);
  res.json(result);
};

const checkIsAdmin = async (req, res) => {
  const email = req.params.email;
  console.log(email);
  const user = await User.findOne({ email: email });
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
  const result = await User.updateOne(filter, updateDoc, options);
  res.json(result);
};

module.exports = {
  checkIsAdmin,
  createUser,
  updateOrInsertUser,
  makeAdmin,
  getMe,
  deleteUser,
  updateUser,
  getAllUsers,
};
