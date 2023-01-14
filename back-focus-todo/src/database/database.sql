CREATE TABLE IF NOT EXISTS projects(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(200),
);

INSERT INTO projects(title, description) VALUES ('Programacion', 'Aprender a programar');