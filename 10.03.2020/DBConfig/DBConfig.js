//this is for db connection 

var mysql = require('mysql');

var connection = mysql.createConnection({																		//connect to the MySQL database;
    host: "localhost",
    user: "root",
    password: "root",
    database: "test_schema"
  });
  connection.connect(function(err) {																				//connect to MySQL database
      if (err) throw err;
      console.log('Connected to database!!')
  });
//connection object of mysql
  module.exports = connection;