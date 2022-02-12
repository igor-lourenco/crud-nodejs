const { retrieveAllUsersController } = require('./controllers')

function routerFactory(app) {
  app.route('/users').get(retrieveAllUsersController);
}

module.exports = routerFactory;