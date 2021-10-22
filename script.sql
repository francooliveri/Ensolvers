CREATE DATABASE IF NOT EXISTS `to_do_app`;
USE to_do_app;

CREATE TABLE `folder` (
  `folder_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`folder_id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `to_do` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `checked` bit(1) NOT NULL,
  `description` varchar(255) NOT NULL,
  `folder_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1a54qhvic218aa3ysxo2omjok` (`folder_id`),
  CONSTRAINT `FK1a54qhvic218aa3ysxo2omjok` FOREIGN KEY (`folder_id`) REFERENCES `folder` (`folder_id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
