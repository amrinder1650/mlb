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
    },
    post: function(data, callback) {
      const query = `insert into teams (team, wins, losses) values ('${data.team}', 0, 0);`;
      db.query(query, (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      })
    }
  }
}