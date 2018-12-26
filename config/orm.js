var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection

var orm = {
  selectAll: function(tableInput,callback) {
    var queryString = "SELECT * FROM ?? ";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  insertOne: function(table,colOne,colTwo,valueOne,valueTwo,callback) {
    var queryString = "INSERT INTO ?? (??, ??) VALUES (??,??)";
    console.log(queryString);
    connection.query(queryString, [table,colOne,colTwo,valueOne,valueTwo], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  updateOne: function(table,colOne,valueOne,colTwo,valeTwo,callback) {
    var queryString =
      "UPDATE ?? SET ?? = ?? WHERE ?? = ??";

    connection.query(
      queryString,[table,colOne,valueOne,colTwo,valeTwo],
      function(err, result) {
        if (err) throw err;
        callback(result);
      }
    );
  }
};

module.exports = orm;