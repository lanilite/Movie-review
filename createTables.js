const mysql = require('mysql2/promise');

(async () => {
  // Подключение к MySQL серверу
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password12345', 
  });


  await connection.query('CREATE DATABASE IF NOT EXISTS moviereviewdb');
  await connection.query('USE moviereviewdb');

  // Создание таблицы пользователей
  await connection.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50) NOT NULL UNIQUE,
      email VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Создание таблицы фильмов
  await connection.query(`
    CREATE TABLE IF NOT EXISTS movies (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      genre VARCHAR(100),
      release_year INT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Создание таблицы отзывов
  await connection.query(`
    CREATE TABLE IF NOT EXISTS reviews (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT,
      movie_id INT,
      rating INT CHECK (rating >= 1 AND rating <= 10),
      comment TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (movie_id) REFERENCES movies(id)
    )
  `);

  console.log('Database and tables created successfully.');
  await connection.end();
})();
