DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  product_sales DECIMAL(10,2) DEFAULT 0,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products.stock_quantity;

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("The Matrix", "Movies", 9.99, 150);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Vacuum", "Electronics", 49.95, 22);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Television", "Electronics", 799.99, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Laptop", "Electronics", 499.99, 35);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("The Notebook", "Books", 9.99, 89);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Microwave", "Electronics", 49.95, 32);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Nike Shoes", "Fashion", 30.00, 96);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Blu-Ray PLayer", "Electronics", 29.99, 18);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Chair", "Furniture", 99.99, 17);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Vacuum", "Electronics", 49.95, 22);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Coffee Table", "Furniture", 89.99, 26);


