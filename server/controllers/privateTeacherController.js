const PrivateTeacher = require("../models/privateTeacherModel");
const handlerFactory = require("./handlerFactory");

exports.getAllPrivateTeachers = handlerFactory.getAll(PrivateTeacher);
exports.getPrivateTeacher = handlerFactory.getOne(PrivateTeacher);
exports.createPrivateTeacher = handlerFactory.createOne(PrivateTeacher);
exports.updatePrivateTeacher = handlerFactory.updateOne(PrivateTeacher);
exports.deletePrivateTeacher = handlerFactory.deleteOne(PrivateTeacher);
