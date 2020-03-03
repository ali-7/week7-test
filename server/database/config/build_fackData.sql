BEGIN;

DROP TABLE IF EXISTS cities;

CREATE TABLE cities(
id serial PRIMARY KEY,
name VARCHAR(255),
city VARCHAR(255)
);

Insert INTO cities (name,city) VALUES 
('gaza','palestine'),
('rafah','palestine'),
('jabalia','palestine'),
('khan yonis','palestine'),
('jerusalem','palestine'),
('bet lahem','palestine'),
('bet hanon','palestine');


COMMIT;