BEGIN;

DROP TABLE IF EXISTS cities cascade;

CREATE TABLE cities (
    id  SERIAL  PRIMARY KEY ,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL
);

INSERT INTO cities (name, city) VALUES 
('Abeer', 'gaza'),
('lina', 'rafah');

COMMIT;    