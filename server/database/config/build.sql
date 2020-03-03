BEGIN;

  DROP TABLE IF EXISTS cities cascade;

CREATE TABLE cities
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(250) NOT NULL,
  city VARCHAR(250) NOT NULL
);

INSERT INTO cities
  (name, city)
VALUES
('Hassan', 'New york');

COMMIT;