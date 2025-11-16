
DROP DATABASE IF EXISTS `pos`;

CREATE DATABASE IF NOT EXISTS `pos`;

USE `pos`;

DROP TABLE `products`;
CREATE TABLE IF NOT EXISTS `products` (
    `id` BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `code_product` VARCHAR(20) NOT NULL UNIQUE,
    `name_product` VARCHAR(255) NOT NULL CHECK(`name_product` != ''), 
    `price_product` DECIMAL(10,2) UNSIGNED NOT NULL,
    `exists_product` INT UNSIGNED DEFAULT 0,
    `is_active` BOOLEAN DEFAULT TRUE,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO products (id, code_product, name_product, price_product, exists_product, is_active, created_at, updated_at)
VALUES (NULL, '001', '  Mueble de ejemplo   ', 2500, 1, 1, NOW(), NOW());

-- Insertar catálogo de muebles
INSERT INTO `products` (`code_product`, `name_product`, `price_product`, `exists_product`) VALUES
('100', 'Silla de madera', 450.00, 20),
('101', 'Mesa de comedor', 3200.00, 10),
('102', 'Sillón individual', 2400.00, 8),
('103', 'Sofá 3 plazas', 7800.00, 5),
('104', 'Escritorio clásico', 2100.00, 12),
('105', 'Cama matrimonial', 6500.00, 7),
('106', 'Cama individual', 4900.00, 10),
('107', 'Buró de madera', 950.00, 15),
('108', 'Cómoda 6 cajones', 3500.00, 6),
('109', 'Armario 2 puertas', 4800.00, 4),
('110', 'Armario 3 puertas', 6200.00, 3),
('111', 'Mesa de centro', 1300.00, 12),
('112', 'Mesa lateral', 850.00, 20),
('113', 'Repisa flotante', 450.00, 25),
('114', 'Librero grande', 2900.00, 8),
('115', 'Librero pequeño', 1200.00, 18),
('116', 'Tocador con espejo', 3800.00, 5),
('117', 'Silla de oficina', 1600.00, 10),
('118', 'Mesa de TV', 1800.00, 10),
('119', 'Centro de entretenimiento', 5200.00, 4),
('120', 'Mueble para baño', 2100.00, 6),
('121', 'Zapatera', 1400.00, 12),
('122', 'Cajonera', 950.00, 20),
('123', 'Mesa para computadora', 1700.00, 15),
('124', 'Banquito de madera', 350.00, 30),
('125', 'Cama king size', 8500.00, 3),
('126', 'Cabecera tapizada', 2600.00, 6),
('127', 'Ropero infantil', 3200.00, 8),
('128', 'Mueble bar', 4500.00, 2),
('129', 'Tocador pequeño', 1900.00, 12),
('130', 'Esquinero decorativo', 1100.00, 15),
('131', 'Cajonera alta', 1800.00, 10),
('132', 'Alacena de cocina', 5200.00, 4),
('133', 'Mueble para microondas', 1400.00, 10),
('134', 'Mesa plegable', 750.00, 25),
('135', 'Banco alto para barra', 950.00, 18),
('136', 'Isla de cocina', 6800.00, 2),
('137', 'Silla acolchonada', 1200.00, 20),
('138', 'Mesa de noche', 890.00, 25),
('139', 'Cabinet metálico', 2600.00, 5),
('140', 'Panel decorativo', 850.00, 15),
('141', 'Cama infantil', 4100.00, 6),
('142', 'Cama tipo futón', 3500.00, 8),
('143', 'Closet modular', 7200.00, 3),
('144', 'Estantería metálica', 1300.00, 15),
('145', 'Silla de bar', 680.00, 20),
('146', 'Mesa redonda chica', 1350.00, 10),
('147', 'Mesa redonda grande', 2400.00, 6),
('148', 'Sillón reclinable', 5900.00, 3),
('149', 'Centro de lavado (mueble)', 2100.00, 4),
('150', 'Organizador de pared', 650.00, 18),
('151', 'Mueble para lavamanos', 2700.00, 6),
('152', 'Cajonera infantil', 1150.00, 12),
('153', 'Escritorio gamer', 2800.00, 5),
('154', 'Mesa rústica', 4500.00, 3),
('155', 'Silla rústica', 650.00, 15),
('156', 'Mesa industrial', 3800.00, 4),
('157', 'Silla industrial', 900.00, 18),
('158', 'Buró minimalista', 1300.00, 10),
('159', 'Librero industrial', 3100.00, 5),
('160', 'Escritorio minimalista', 2400.00, 7),
('161', 'Tocador industrial', 4100.00, 3),
('162', 'Cajonera metálica', 1500.00, 10),
('163', 'Mesita plegable', 520.00, 22),
('164', 'Mesa alta de bar', 2100.00, 6),
('165', 'Silla tapizada premium', 2200.00, 5),
('166', 'Mesa de cristal', 3600.00, 3),
('167', 'Sofá cama', 6800.00, 4),
('168', 'Escritorio ejecutivo', 5200.00, 3),
('169', 'Cama nido', 4600.00, 5),
('170', 'Banco industrial', 850.00, 12),
('171', 'Mesa de trabajo', 2800.00, 6),
('172', 'Silla escolar', 480.00, 25),
('173', 'Librero infantil', 980.00, 12),
('174', 'Cama nórdica', 7200.00, 3),
('175', 'Cabecera de madera', 1900.00, 10),
('176', 'Baúl grande', 2400.00, 6),
('177', 'Baúl pequeño', 1300.00, 12),
('178', 'Estantería de madera', 2100.00, 10),
('179', 'Mesa multifuncional', 2900.00, 4),
('180', 'Silla plegable', 350.00, 30),
('181', 'Sofá modular', 9200.00, 2),
('182', 'Banco plegable', 260.00, 30),
('183', 'Mesa elevable', 1800.00, 8),
('184', 'Silla ergonómica', 2900.00, 7),
('185', 'Cabinet bajo', 1750.00, 10),
('186', 'Repisa metálica', 750.00, 20),
('187', 'Mueble organizador', 1300.00, 15),
('188', 'Mesa doble nivel', 2300.00, 6),
('189', 'Rack metálico', 1850.00, 10),
('190', 'Armario esquinero', 5100.00, 3),
('191', 'Cajonera premium', 3200.00, 5),
('192', 'Tocador moderno', 3500.00, 4),
('193', 'Zapatera doble', 1950.00, 8),
('194', 'Silla de estudio', 890.00, 20),
('195', 'Escritorio escolar', 1500.00, 12),
('196', 'Repisa vintage', 1400.00, 10),
('197', 'Mesa auxiliar', 750.00, 18),
('198', 'Cama doble', 6800.00, 3),
('199', 'Silla moderna', 1100.00, 16);


DELIMITER //

CREATE TRIGGER trg_products_trim_name_insert
BEFORE INSERT ON products
FOR EACH ROW
SET NEW.name_product = TRIM(NEW.name_product);

//
DELIMITER ;

DROP TABLE sales;
CREATE TABLE IF NOT EXISTS `sales` (
    `id` BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `is_active` BOOLEAN DEFAULT TRUE NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    `time` TIME NOT NULL,
    `date` DATE NOT NULL,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO `sales` (`id`, `user_id`,`is_active`, `created_at`, `time`, `date`,`updated_at`)
VALUES (NULL, 1, 1,NOW(), CURTIME(),CURDATE(),NOW());

DROP TABLE tickets;
CREATE TABLE IF NOT EXISTS `tickets` (
    `sale_id` BIGINT UNSIGNED NOT NULL,
    `product_id` BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY (`sale_id`) REFERENCES `sales`(`id`),
    FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)
);

INSERT INTO tickets VALUES (1,1),(1,2),(1,3),(1,4);
INSERT INTO tickets VALUES (2,1);


CREATE TABLE IF NOT EXISTS `users` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50),
    `email` VARCHAR(40) UNIQUE,
    `password` VARCHAR(128),
    `is_admin` BOOLEAN DEFAULT FALSE,
    `is_active` BOOLEAN DEFAULT TRUE,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE USER IF NOT EXISTS `pos`@`127.0.0.1` IDENTIFIED BY '123456789';
GRANT ALL PRIVILEGES ON `pos`.* TO `pos`@`127.0.0.1`;
FLUSH PRIVILEGES;