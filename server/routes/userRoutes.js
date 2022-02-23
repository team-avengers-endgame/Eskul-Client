const express = require("express");
const router = express.Router();
const {
  createUser,
  checkIsAdmin,
  updateOrInsertUser,
  makeAdmin,
} = require("../controllers/usersController");
const authController = require("../controllers/authController");

// router.post("/signup", authController.signup);
// router.post("/login", authController.login);
// router.get("/logout", authController.logout);

router.route("/").post(createUser).patch(updateOrInsertUser);
router.route("/:email").get(checkIsAdmin);
router.route("/admin").patch(makeAdmin);

module.exports = router;
