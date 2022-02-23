const Teacher = require("../models/TeacherModel");
const handlerFactory = require("./handlerFactory");

exports.getAllTeachers = handlerFactory.getAll(Teacher);
exports.getTeacher = handlerFactory.getOne(Teacher);
exports.createTeacher = handlerFactory.createOne(Teacher);
exports.updateTeacher = handlerFactory.updateOne(Teacher);
exports.deleteTeacher = handlerFactory.deleteOne(Teacher);
