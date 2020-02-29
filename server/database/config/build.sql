BEGIN;

DROP  TABLE IF EXISTS cities;

CREATE TABLE cities (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL
);

INSERT INTO cities (name, city) VALUES 
('Ghada', 'Gaza'),
('Mohammed', 'London'),
('Ahmed', 'Cairo');

COMMIT;