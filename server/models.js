var db = require('../db/index.js');

module.exports = {
  teams: {
    get: function(callback) {
      var query = `select * from teams`;
      db.query(query, (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results.rows);
        }
      })
    }
  }
}