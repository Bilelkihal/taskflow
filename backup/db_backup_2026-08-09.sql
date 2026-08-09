-- MySQL dump 10.13  Distrib 8.0.36
-- Host: 51.83.12.204    Database: taskflow_prod
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(20),
  PRIMARY KEY (`id`)
);
INSERT INTO `users` VALUES
(1,'admin@taskflow.io','5f4dcc3b5aa765d61d8327deb882cf99','+33600000001'),
(2,'camille.martin@example.com','e10adc3949ba59abbe56e057f20f883e','+33600000002'),
(3,'lucas.bernard@example.com','25d55ad283aa400af464c76d713c07ad','+33600000003'),
(4,'emma.petit@example.com','d8578edf8458ce06fbc5bb76a58c5ca4','+33600000004');
