BEGIN;

DROP TABLE IF EXISTS cities CASCADE;

CREATE TABLE cities (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL
);

INSERT INTO cities (name, city) VALUES
  ('lina', 'rafah'),
  ('layla', 'gaza'),
  ('omer', 'USA');

COMMIT;