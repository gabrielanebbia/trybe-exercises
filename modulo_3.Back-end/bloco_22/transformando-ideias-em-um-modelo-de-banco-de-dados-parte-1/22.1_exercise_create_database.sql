DROP DATABASE IF EXISTS zoo;

CREATE DATABASE zoo;

USE zoo;

CREATE TABLE animals(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(25) NOT NULL,
	species VARCHAR(20) NOT NULL,
    gender VARCHAR(15) NOT NULL,
    age INT NOT NULL,
    localization VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE manager(
	manager_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE employees(
	employees_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY (manager_id) REFERENCES manager (manager_id)
) ENGINE=InnoDB;

CREATE TABLE animal_employee(
	animal_id INT NOT NULL,
	employees_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY(animal_id, employee_id),
    FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
    FOREIGN KEY (employee_id) REFERENCES employee (employee_id)
) ENGINE=InnoDB;
