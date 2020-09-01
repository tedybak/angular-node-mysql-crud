CREATE DATABASE nggamesdb;
use nggamesdb;

CREATE TABLE games
(
    id INT(11) NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR
    (180),
     description VARCHAR
    (255),
     image VARCHAR
    (200),
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );

     describe games;