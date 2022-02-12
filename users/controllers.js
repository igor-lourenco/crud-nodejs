const usersRepository = require('./repository')

async function retrieveAllUsersController(req, res) {
  const users = await usersRepository.findAll();
  res.status(200).json({
      status: 'ok', 
      data: users
 });
}

module.exports = {
    retrieveAllUsersController
}