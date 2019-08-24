BEGIN;

DROP TABLE IF EXISTS cities; 

CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    city VARCHAR(30) NOT NULL,
);


INSERT INTO cities (name, city) VALUES ('fadi', 'gaza'), ('hozifa', 'Dubai')

COMMIT;