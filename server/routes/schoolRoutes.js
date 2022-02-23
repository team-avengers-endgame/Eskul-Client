const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/schoolController");

router
  .route("/")
  .get(schoolController.getAllSchools)
  .post(schoolController.createSchool);

router
  .route("/:id")
  .get(schoolController.getSchool)
  .patch(schoolController.updateSchool)
  .delete(schoolController.deleteSchool);

module.exports = router;
