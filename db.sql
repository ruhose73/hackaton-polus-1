CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email CHARACTER varying(100) NOT NULL,
    password CHARACTER varying(100) NOT NULL,
    phone CHARACTER varying(30) NOT NULL,
    first_name CHARACTER varying(30),
    middle_name CHARACTER varying(30),
    last_name CHARACTER varying(30),
    role INTEGER,
    type INTEGER,
    status INTEGER
);

CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    number CHARACTER varying(100) NOT NULL,
    name CHARACTER varying(100) NOT NULL,
    type INTEGER NOT NULL,
    status INTEGER NOT NULL
);


CREATE TABLE requests (
    id SERIAL PRIMARY KEY,
    firstAddress CHARACTER varying(100) NOT NULL,
    secondAddress CHARACTER varying(100) NOT NULL,
    text CHARACTER varying(100) NOT NULL,
    userid INTEGER NOT NULL,
    carid INTEGER NOT NULL,
    status INTEGER NOT NULL
);
