const mysql = require('mysql2/promise');

(async () => {
  const connection = await mysql.createConnection({
    host: '127.0.0.0',
    user: 'root',
    password: 'password12345'
  });

  await connection.query('CREATE DATABASE IF NOT EXISTS moviereviedb');
  await connection.query('USE moviereviewdb');

  await connection.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50) NOT NULL UNIQUE,
      email VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP
    )
  `);

  console.log('User table created successfully.');
  await connection.end();
})();
