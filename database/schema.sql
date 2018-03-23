CREATE DATABASE fit_fries;

\c fit_fries

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  username VARCHAR(255),
  password VARCHAR(255),
  workouts INTEGER REFERENCES
        workouts(id)
);

CREATE TABLE workouts (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  content VARCHAR(255),
  user_ID INTEGER REFERENCES
      users(id)
);

-- CREATE TABLE groups (
--   id BIGSERIAL PRIMARY KEY,
--   post VARCHAR(255),
--   content VARCHAR(225),
--
-- )
