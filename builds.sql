BEGIN;

DROP TABLE IF EXISTS users cascade;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  age INTEGER NOT NULL,
  type VARCHAR(100) NOT NULL
);

INSERT INTO users (firstName, lastName, age, type) VALUES ('Matt', 'Glover', 25, 'worker');
INSERT INTO users (firstName, lastName, age, type) VALUES ('Sam', 'Galson', 30, 'professor');
INSERT INTO users (firstName, lastName, age, type) VALUES ('Matt', 'Sharp', 24, 'hipster');
INSERT INTO users (firstName, lastName, age, type) VALUES ('Rich', 'Warren', 22, 'boss');
INSERT INTO users (firstName, lastName, age, type) VALUES ('Cleo', 'Pearson', 24, 'badass developer');
INSERT INTO users (firstName, lastName, age, type) VALUES ('John', 'Whiles', 24, 'enigma');
INSERT INTO users (firstName, lastName, age, type) VALUES ('Joan', 'of Arc', 604, 'martyr');


COMMIT;
