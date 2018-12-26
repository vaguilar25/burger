var orm = require("../config/orm");

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(callback) {
    orm.selectAll("burger", function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(table, vals, callback) {
    orm.insertOne("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, callback) {
    orm.update("burger", objColVals, condition, function(res) {
      callback(res);
    });
  },
  delete: function(condition, callback) {
    orm.delete("burger", condition, function(res) {
      callback(res);
    });
  }
};

// Export the database functions for the controller 
module.exports = burger;
