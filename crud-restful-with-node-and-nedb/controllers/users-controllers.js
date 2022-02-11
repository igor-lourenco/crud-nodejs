const service = require("../services/users-service");
const controller = {};

controller.findAll = (req, res) => {
  const users = service.findAll();
  return res.status(200).json(users);
};

module.exports = controller;
