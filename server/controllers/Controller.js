//include the model (aka DB connection)
var db = require('../models/dbconnection'); 

var mysql = require('mysql');

//create class
var Controller = {
//function to query all items
getRow: function (req, res) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "nopass",
    database: "trip_planner"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM test_table", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
    },
};
module.exports = Controller;