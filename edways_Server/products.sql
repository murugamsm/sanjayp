-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2022 at 10:07 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `edways`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `ProductId` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Description` varchar(500) DEFAULT NULL,
  `Type` enum('CLOTHES','SHOES','WATCHES','BAGS') NOT NULL,
  `CreatedBy` int(11) NOT NULL,
  `CreatedOn` datetime NOT NULL DEFAULT current_timestamp(),
  `UpdatedBy` int(11) DEFAULT NULL,
  `UpdatedOn` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ProductId`, `Name`, `Description`, `Type`, `CreatedBy`, `CreatedOn`, `UpdatedBy`, `UpdatedOn`) VALUES
(1, 'Zara', 'Men', 'CLOTHES', 1, '2022-12-08 12:52:49', NULL, '2022-12-08 08:22:27'),
(2, 'Zara', 'Men', 'CLOTHES', 1, '2022-12-08 12:53:41', NULL, '2022-12-08 08:22:27'),
(3, 'Raymond', 'Men', 'CLOTHES', 1, '2022-12-08 12:59:53', NULL, NULL),
(4, 'Raymond', 'Men', 'CLOTHES', 1, '2022-12-08 13:02:32', NULL, NULL),
(5, 'Raymond', 'Men', 'CLOTHES', 1, '2022-12-08 13:02:51', NULL, NULL),
(6, 'Raymond', 'Men', 'CLOTHES', 1, '2022-12-08 13:07:22', NULL, NULL),
(7, 'Raymond', 'Men', 'CLOTHES', 1, '2022-12-08 13:08:00', NULL, NULL),
(8, 'Raymond', 'Men', 'CLOTHES', 1, '2022-12-08 13:08:43', NULL, NULL),
(9, 'Raymond', 'Men', 'CLOTHES', 1, '2022-12-08 13:10:30', NULL, NULL),
(10, 'Raymond', 'Men', 'CLOTHES', 1, '2022-12-08 13:11:22', NULL, NULL),
(11, 'Raymond', 'Men', 'CLOTHES', 1, '2022-12-08 13:12:54', NULL, NULL),
(12, 'Raymond', 'Men', 'CLOTHES', 1, '2022-12-08 13:13:33', NULL, NULL),
(13, 'Raymond', 'Men', 'CLOTHES', 1, '2022-12-08 13:14:11', NULL, NULL),
(14, 'Raymond', 'Men', 'CLOTHES', 1, '2022-12-08 13:33:28', NULL, NULL),
(15, 'Rhiannon Melendez', 'Consequatur qui eli', 'CLOTHES', 1, '2022-12-08 14:20:41', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ProductId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `ProductId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
