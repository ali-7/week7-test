BEGIN;

DROP TABLE IF EXISTS cities CASCADE;

CREATE TABLE cities(
    id serial PRIMARY KEY,
    name varchar(100) NOT NULL,
    city varchar(100) NOT NULL
);

INSERT INTO cities(name, city) VALUES
('Palestine', 'Gaza'),
('Spain','Madrid'),
('Egypt', 'Cairo');

COMMIT;
