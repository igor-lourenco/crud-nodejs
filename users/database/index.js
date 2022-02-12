const NeDB = require('nedb');

const db = new NeDB({
    filename: "users/database/users.db",
    autoload: true
})

module.exports = db