\c cafe_db

-- can I use fake data for fake users please?????? HELP

-- drop any existing table
DROP TABLE IF EXISTS users
DROP TABLE IF EXISTS cafes

-- create tables here
CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  username VARCHAR(255),
  password VARCHAR(255)
  );

  --place_id INTEGER REFERENCES cafes(id)

CREATE TABLE cafes(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  animal VARCHAR(255),
  location VARCHAR(255)
  );

CREATE TABLE favorites(
  user_id INTEGER REFERENCES users(id),
  id INTEGER REFERENCES cafes(id),
  id SERIAL PRIMARY KEY
  );

-- CREATE TABLE animals(
--   id PRIMARY KEY,
--   name VARCHAR(255)
--   );

-- create cafes

INSERT INTO cafes
  (name, animal, location)
VALUES
('Cafe Dylan Dog', 'dog', 'London'),
('Dog in Town', 'dog', 'Bangkok'),
('KitTea Cat Cafe', 'cat', 'San Francisco'),
('Cafe Chat L’Heureux', 'cat', 'Montreal'),
('Meow Parlour', 'cat', 'New York'),
('Koneko', 'cat', 'New York'),
('The Brooklyn Cat Cafe', 'cat', 'New York'),
('Ms. Bunny Cafe', 'bunny', 'Tokyo'),
('Usagi Café Ohisama', 'bunny', 'Shimokitazawa'),
('Cafe Mignon', 'bunny', 'Kichijoji'),
('Harry Hedgehog Cafe', 'hedgehog', 'Tokyo'),
('Toms Mr. Hedgie', 'hedgehog', 'Kyoto'),
('Hari Du Ange', 'hedgehog', 'Osaka'),
('Purringtons Cat Lounge', 'cat', 'Portland'),
('Yokohama Subtropical Teahouse', 'reptile', 'Yokohama'),
('Reptile Cafe and Bar Arrive', 'reptile', 'Kobe'),
('Reptile Cafe Again', 'reptile', 'Osaka'),
('Dog Cafe', 'dog', 'Los Angeles'),
('Inu Cafe', 'dog', 'Hua Hin'),
('Bau House', 'dog', 'Seoul'),
('Barkin Blends Dog Cafe', 'dog', 'Quezon City');


INSERT INTO cafes
  (name, animal, location)
VALUES
('KitTea Cat Cafe', 'cat', 'San Francisco'),
('Cafe Chat L’Heureux', 'cat', 'Montreal'),
('Meow Parlour', 'cat', 'New York'),
('Koneko', 'cat', 'New York'),
('The Brooklyn Cat Cafe', 'cat', 'New York'),
('Ms. Bunny Cafe', 'bunny', 'Tokyo'),
('Usagi Café Ohisama', 'bunny', 'Shimokitazawa'),
('Cafe Mignon', 'bunny', 'Kichijoji'),
('Harry Hedgehog Cafe', 'hedgehog', 'Tokyo'),
('Toms Mr. Hedgie', 'hedgehog', 'Kyoto'),
('Hari Du Ange', 'hedgehog', 'Osaka'),
('Purringtons Cat Lounge', 'cat', 'Portland'),
('Yokohama Subtropical Teahouse', 'reptile', 'Yokohama'),
('Reptile Cafe and Bar Arrive', 'reptile', 'Kobe'),
('Reptile Cafe Again', 'reptile', 'Osaka'),
('Dog Cafe', 'dog', 'Los Angeles'),
('Inu Cafe', 'dog', 'Hua Hin'),
('Bau House', 'dog', 'Seoul'),
('Barkin Blends Dog Cafe', 'dog', 'Quezon City');



