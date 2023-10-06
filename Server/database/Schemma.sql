CREATE database db_montessori;
use db_montessori;


CREATE TABLE `users` (
  `id` integer PRIMARY KEY,
  `name` varchar(255),
  `last_name` varchar(255),
  `role` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `created_at` timestamp
);


CREATE TABLE `products` (
  `id` integer PRIMARY KEY,
  `product_image` varchar(255),
  `title` varchar(255),
  `product_description` text,
  `brand` varchar(255),
  `price` integer,
  `stock` integer,
  `user_id` integer,
  `age_id` integer,
  `created_at` timestamp
);
CREATE TABLE `age` (
  `id` integer PRIMARY KEY,
  `range` varchar(255)
);
ALTER TABLE `products` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
ALTER TABLE `products` ADD FOREIGN KEY (`age_id`) REFERENCES `age` (`id`);
