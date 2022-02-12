const db = require('./database')

function findAll() {
  return new Promise((resolve, reject) => {
    db.find({}).sort({ name: 1 }).exec((err, users) => {
      if (err) reject(err);
      else resolve(users);
    })
  })    
}

module.exports = {
    findAll
}
