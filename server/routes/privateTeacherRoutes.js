const express = require("express");
const router = express.Router();
const privateTeacherController = require("../controllers/privateTeacherController");

router
  .route("/")
  .get(privateTeacherController.getAllPrivateTeachers)
  .post(privateTeacherController.createPrivateTeacher);

router
  .route("/:id")
  .get(privateTeacherController.getPrivateTeacher)
  .patch(privateTeacherController.updatePrivateTeacher)
  .delete(privateTeacherController.deletePrivateTeacher);

module.exports = router;
