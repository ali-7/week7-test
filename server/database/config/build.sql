BEGIN;

DROP TABLE IF EXISTS city;

CREATE TABLE city (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL
);

INSERT INTO city (name, city) VALUES ('ali','gaza'), ('sam','america');

COMMIT;
