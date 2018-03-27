DROP DATABASE IF EXISTS fit_fries;
CREATE DATABASE fit_fries;

\c fit_fries


CREATE TABLE fritters (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255),
  username VARCHAR(255),
  password VARCHAR(255),
  -- workouts INTEGER REFERENCES
  --       workouts(id),
  gyms VARCHAR(255)
);

CREATE TABLE workouts (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  content VARCHAR(255)
  -- user_ID INTEGER REFERENCES
  --     fritters(id)
);
--
CREATE TABLE favorite_workouts (
  id BIGSERIAL PRIMARY KEY,
  fritter_id INTEGER REFERENCES fritters(id),
  workout_id INTEGER REFERENCES workouts(id)
);

-- CREATE TABLE groups (
--   id BIGSERIAL PRIMARY KEY,
--   post VARCHAR(255),
--   content VARCHAR(225),
--
-- )
