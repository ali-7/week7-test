BEGIN;
DROP TABLE IF EXISTS cities cascade;
CREATE TABLE cities (
    city_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(20) NOT NULL,
    city VARCHAR(20) NOT NULL
);
INSERT INTO cities(name,city) VALUES ('Alaa','Gaza'),('Saja','Khanyounis') ;
COMMIT;
