const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = process.env.PORT || 3031;

// MySQL connection pool
/*
const connection = mysql.createPool({
  host: 'bitsxlamarato-bitsxlamarato.a.aivencloud.com',
  user: 'avnadmin',
  password: 'AVNS_rDXztx4v3QSHKXauK0f',
  database: 'defaultdb',
  port: 20361,
  ssl: {
    ca: 'ca.pem', // Replace with the path to your CA certificate
  },
});
*/


const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'db',
  port: 3306,
});

// Creating a GET route that returns data from the 'users' table.
app.get('/users', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM User', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
