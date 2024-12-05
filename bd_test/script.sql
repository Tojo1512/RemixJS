CREATE DATABASE test_db;

\c test_db;
CREATE TABLE test_models (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    age INTEGER NOT NULL,
    is_active BOOLEAN NOT NULL
);