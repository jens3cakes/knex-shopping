DROP TABLE IF EXISTS users; 
CREATE TABLE users(
  id serial PRIMARY KEY NOT NULL,
  email varchar(255),
  password varchar(255),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

DROP TABLE IF EXISTS products;
CREATE TABLE products(
  id serial PRIMARY KEY NOT NULL,
  title varchar(255),
  description text,
  inventory int,
  price decimal(8,2),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

DROP TABLE IF EXISTS cart;
CREATE TABLE cart(
  id serial PRIMARY KEY NOT NULL,
  users_id int REFERENCES users(id),
  products_id int REFERENCES products(id),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);