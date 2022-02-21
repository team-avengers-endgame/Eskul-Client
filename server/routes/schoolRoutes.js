const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/schoolController");
const authController = require("../controllers/authController");

// Protect all routes after this middleware
// router.use(authController.protect);

router.route("/").get(schoolController.getAllSchools).post(
  // authController.restrictTo("user, admin"),
  schoolController.createSchool
);

router
  .route("/:id")
  .get(schoolController.getSchool)
  .patch(
    // authController.restrictTo("user, admin"),
    schoolController.updateSchool
  )
  .delete(
    // authController.restrictTo("user, admin"),
    schoolController.deleteSchool
  );

module.exports = router;
