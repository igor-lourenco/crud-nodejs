const models = require("../models/users-models");
const service = {}

service.findAll = () => {
  const users = models.findAll();
  return users;
}

module.exports = service;

