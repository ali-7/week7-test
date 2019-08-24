BEGIN;


DROP TABLE IF EXISTS cities;

CREATE TABLE cities (
  name varchar(100),
  city varchar(100)

);

INSERT INTO cities (name, city) VALUES('asem', 'Khan-yonis');

COMMIT;