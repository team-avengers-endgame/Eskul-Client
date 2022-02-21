const School = require("../models/SchoolModel");
const handlerFactory = require("./handlerFactory");

exports.getAllSchools = handlerFactory.getAll(School);
exports.getSchool = handlerFactory.getOne(School);
exports.createSchool = handlerFactory.createOne(School);
exports.updateSchool = handlerFactory.updateOne(School);
exports.deleteSchool = handlerFactory.deleteOne(School);
