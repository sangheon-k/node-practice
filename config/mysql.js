const mysql = require("mysql2");

const db_info = {
  host : "localhost",
  port: "3306",
  user: "root",
  password: "1234",
  database: "my_db"
}

module.exports = {
  init: function () {
    return mysql.createConnection(db_info)
  },
  connect: function (conn) {
    conn.connect(function (err) {
      if(err) console.error("Mysql connection error: " + err);
      else console.log("mysql is connected successfully");
    })
  }
}