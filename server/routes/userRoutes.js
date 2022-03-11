const express = require("express");
const router = express.Router();
const {
  createUser,
  checkIsAdmin,
  updateOrInsertUser,
  makeAdmin,
  getMe,
  deleteUser,
  updateUser,
  getAllUsers,
} = require("../controllers/usersController");

router.route("/").get(getAllUsers).post(createUser).patch(updateOrInsertUser);
router.route("/:email").get(checkIsAdmin);
router.route("/admin").patch(makeAdmin);
router.route("/me/:email").get(getMe);
router.route("/:id").patch(updateUser).delete(deleteUser);

module.exports = router;
