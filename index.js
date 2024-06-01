const express = require('express')
const app = express()
const port = 3000
const db = require("./config/mysql");
const conn = db.init();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  conn.query('SELECT * from Users', (error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})