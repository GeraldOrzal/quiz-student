-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 03, 2023 at 11:36 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quiz`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(30) NOT NULL,
  `user_id` int(30) NOT NULL,
  `quiz_id` int(30) NOT NULL,
  `question_id` int(30) NOT NULL,
  `option_id` int(30) NOT NULL,
  `is_right` tinyint(1) NOT NULL COMMENT ' 1 = right, 0 = wrong',
  `date_updated` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `user_id`, `quiz_id`, `question_id`, `option_id`, `is_right`, `date_updated`) VALUES
(440, 10001, 2, 21, 21, 0, '2023-02-03 18:25:38'),
(441, 10001, 2, 22, 26, 1, '2023-02-03 18:25:38'),
(442, 10001, 2, 23, 31, 0, '2023-02-03 18:25:38'),
(443, 10001, 2, 24, 34, 0, '2023-02-03 18:25:38'),
(444, 10001, 2, 25, 38, 1, '2023-02-03 18:25:38'),
(445, 10001, 2, 26, 42, 1, '2023-02-03 18:25:38'),
(446, 10001, 2, 27, 45, 1, '2023-02-03 18:25:38'),
(447, 10001, 2, 28, 49, 1, '2023-02-03 18:25:38'),
(448, 10001, 2, 29, 55, 1, '2023-02-03 18:25:38'),
(449, 10001, 2, 30, 58, 1, '2023-02-03 18:25:38'),
(450, 10001, 2, 31, 63, 0, '2023-02-03 18:25:38'),
(451, 10001, 2, 32, 68, 1, '2023-02-03 18:25:38'),
(452, 10001, 2, 33, 71, 1, '2023-02-03 18:25:38'),
(453, 10001, 2, 34, 74, 1, '2023-02-03 18:25:38'),
(454, 10001, 2, 35, 78, 0, '2023-02-03 18:25:38'),
(455, 10001, 2, 36, 83, 0, '2023-02-03 18:25:38'),
(456, 10001, 2, 37, 86, 1, '2023-02-03 18:25:38'),
(457, 10001, 2, 38, 89, 1, '2023-02-03 18:25:38'),
(458, 10001, 2, 39, 95, 1, '2023-02-03 18:25:38'),
(459, 10001, 2, 40, 98, 0, '2023-02-03 18:25:38'),
(460, 10001, 2, 41, 102, 1, '2023-02-03 18:25:38'),
(461, 10001, 2, 42, 103, 1, '2023-02-03 18:25:38'),
(462, 10001, 2, 43, 106, 0, '2023-02-03 18:25:38'),
(463, 10001, 2, 44, 107, 1, '2023-02-03 18:25:38'),
(464, 10001, 2, 45, 110, 1, '2023-02-03 18:25:38'),
(465, 10001, 2, 46, 111, 1, '2023-02-03 18:25:38'),
(466, 10001, 2, 47, 114, 0, '2023-02-03 18:25:38'),
(467, 10001, 2, 48, 115, 0, '2023-02-03 18:25:38'),
(468, 10001, 2, 49, 118, 1, '2023-02-03 18:25:38'),
(469, 10001, 2, 50, 120, 1, '2023-02-03 18:25:38');

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `id` int(30) NOT NULL,
  `user_id` int(30) DEFAULT NULL,
  `subject` varchar(45) DEFAULT NULL,
  `date_updated` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`id`, `user_id`, `subject`, `date_updated`) VALUES
(1, 10003, 'Web Technologies', '2022-12-15 20:56:58');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(30) NOT NULL,
  `quiz_id` int(30) NOT NULL,
  `user_id` int(30) NOT NULL,
  `score` int(5) NOT NULL,
  `total_score` int(5) NOT NULL,
  `date_updated` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `quiz_id`, `user_id`, `score`, `total_score`, `date_updated`) VALUES
(3, 2, 13, 36, 50, '2022-12-15 21:08:07'),
(18, 2, 10001, 20, 30, '2023-02-03 18:25:38');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(30) NOT NULL,
  `question` text NOT NULL,
  `qid` int(30) NOT NULL,
  `order_by` int(11) NOT NULL,
  `date_updated` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `question`, `qid`, `order_by`, `date_updated`) VALUES
(21, 'Adding a border to your image helps the visitor to recognize it is what?', 2, 0, '2022-12-08 19:05:19'),
(22, 'What is part of a database that holds only one type of information?', 2, 0, '2022-12-08 19:05:19'),
(23, 'In which decade with the first transatlantic radio broadcast occur?', 2, 0, '2022-12-08 19:05:19'),
(24, 'WWW is based on which mode?', 2, 0, '2022-12-08 19:05:19'),
(25, 'A network of computers and other gadgets that is contained in a limited area is referred to as?', 2, 0, '2022-12-08 19:05:19'),
(26, 'Who developed Yahoo?', 2, 0, '2022-12-08 19:05:19'),
(27, 'Every computer linked to the Internet has a special four-part string that serves as its identifier, known as?', 2, 0, '2022-12-08 19:05:19'),
(28, 'Who created Pretty Good Privacy aka PGP?', 2, 0, '2022-12-08 19:05:19'),
(29, 'USB is a device used to store data and it stands for?', 2, 0, '2022-12-08 19:05:19'),
(30, 'As of 2020, how many programming languages are in use?', 2, 0, '2022-12-08 19:05:19'),
(31, 'Source code needs to be translated into machine language for a computer to understand.', 2, 0, '2022-12-08 19:05:19'),
(32, 'Which of the following is NOT a Programming Language Paradigm?', 2, 0, '2022-12-08 19:05:19'),
(33, 'Which of the following is NOT an example of an input device?', 2, 0, '2022-12-08 19:05:19'),
(34, 'Which of the following is NOT an example of malware?', 2, 0, '2022-12-08 19:05:19'),
(35, 'Which of these are not one of the known early ways to use the internet?', 2, 0, '2022-12-08 19:05:19'),
(36, 'Which of the following is an early form of computer?', 2, 0, '2022-12-08 19:05:19'),
(37, 'Which of these name did not invent the flexible photographic film?', 2, 0, '2022-12-08 19:05:19'),
(38, 'Which of the following is not the original name of eBay.com?', 2, 0, '2022-12-08 19:05:19'),
(39, 'Which of the following is NOT a computer language?', 2, 0, '2022-12-08 19:05:19'),
(40, 'Which of the following is NOT an open-source software?', 2, 0, '2022-12-08 19:05:19'),
(41, 'HTML is the abbreviation for Hypertext Makeup Language.', 2, 0, '2022-12-08 19:05:19'),
(42, 'Semantic HTML is one style of coding, where the tags convey the meaning of the text.', 2, 0, '2022-12-08 19:05:19'),
(43, 'Charles Babbage is the father of Computing.', 2, 0, '2022-12-08 19:05:19'),
(44, 'In a computer, most processing takes place in CPU.', 2, 0, '2022-12-08 19:05:19'),
(45, 'Scientific name of the computer is Homo Sapiens.', 2, 0, '2022-12-08 19:05:19'),
(46, 'The father of personal computer is Edward Rober.', 2, 0, '2022-12-08 19:05:19'),
(47, 'J.V. Atansoff created the first computer.', 2, 0, '2022-12-08 19:05:19'),
(48, 'Google Chrome is the first web browser.', 2, 0, '2022-12-08 19:05:19'),
(49, 'IBM stands for International Bus Machines.', 2, 0, '2022-12-08 19:05:19'),
(50, 'Machine Language is the programming language to create the first computers.', 2, 0, '2022-12-08 19:05:19');

-- --------------------------------------------------------

--
-- Table structure for table `question_opt`
--

CREATE TABLE `question_opt` (
  `id` int(30) NOT NULL,
  `option_txt` text DEFAULT NULL,
  `question_id` int(30) NOT NULL,
  `is_right` tinyint(4) NOT NULL DEFAULT 0 COMMENT '1= right answer',
  `date_updated` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question_opt`
--

INSERT INTO `question_opt` (`id`, `option_txt`, `question_id`, `is_right`, `date_updated`) VALUES
(21, 'Hyperlink', 21, 0, '2022-12-08 19:05:19'),
(22, 'Hypertext', 21, 1, '2022-12-08 19:05:19'),
(23, 'Hyperfont', 21, 0, '2022-12-08 19:05:19'),
(24, 'Hyperfront', 21, 0, '2022-12-08 19:05:19'),
(25, 'Report', 22, 0, '2022-12-08 19:05:19'),
(26, 'Field', 22, 1, '2022-12-08 19:05:19'),
(27, 'Record', 22, 0, '2022-12-08 19:05:19'),
(28, 'File', 22, 0, '2022-12-08 19:05:19'),
(29, '1850s', 23, 0, '2022-12-08 19:05:19'),
(30, '1860s', 23, 0, '2022-12-08 19:05:19'),
(31, '1870s', 23, 0, '2022-12-08 19:05:19'),
(32, '1900s', 23, 1, '2022-12-08 19:05:19'),
(33, 'Client Server', 24, 1, '2022-12-08 19:05:19'),
(34, '3-tier', 24, 0, '2022-12-08 19:05:19'),
(35, 'Local Server', 24, 0, '2022-12-08 19:05:19'),
(36, 'None of the above', 24, 0, '2022-12-08 19:05:19'),
(37, 'Wide Area Network', 25, 0, '2022-12-08 19:05:19'),
(38, 'Local Area Network', 25, 1, '2022-12-08 19:05:19'),
(39, 'Global Network', 25, 0, '2022-12-08 19:05:19'),
(40, 'Peer-to-Peer Network', 25, 0, '2022-12-08 19:05:19'),
(41, 'Dennis Ritchie & Ken Thompson', 26, 0, '2022-12-08 19:05:19'),
(42, 'David Filo & Jerry Yang', 26, 1, '2022-12-08 19:05:19'),
(43, 'Vint Cerf & Robert Kahn', 26, 0, '2022-12-08 19:05:19'),
(44, 'Steve Case & Jeff Bezos', 26, 0, '2022-12-08 19:05:19'),
(45, 'IP address', 27, 1, '2022-12-08 19:05:19'),
(46, 'Hostname', 27, 0, '2022-12-08 19:05:19'),
(47, 'Domain Name', 27, 0, '2022-12-08 19:05:19'),
(48, 'None of the above', 27, 0, '2022-12-08 19:05:19'),
(49, 'Phil Zimmermann', 28, 1, '2022-12-08 19:05:19'),
(50, 'Tim Berners-Lee', 28, 0, '2022-12-08 19:05:19'),
(51, 'Marc Andreessen', 28, 0, '2022-12-08 19:05:19'),
(52, 'Ken Thompson', 28, 0, '2022-12-08 19:05:19'),
(53, 'Unlimited Service Bus', 29, 0, '2022-12-08 19:05:19'),
(54, 'Unlimited Serial Bus', 29, 0, '2022-12-08 19:05:19'),
(55, 'Universal Serial Bus', 29, 1, '2022-12-08 19:05:19'),
(56, 'Universal Service Bus', 29, 0, '2022-12-08 19:05:19'),
(57, '150', 30, 0, '2022-12-08 19:05:19'),
(58, '2000', 30, 1, '2022-12-08 19:05:19'),
(59, '5000', 30, 0, '2022-12-08 19:05:19'),
(60, '1500', 30, 0, '2022-12-08 19:05:19'),
(61, 'Transpiler', 31, 0, '2022-12-08 19:05:19'),
(62, 'Interpreter', 31, 0, '2022-12-08 19:05:19'),
(63, 'Assembler', 31, 0, '2022-12-08 19:05:19'),
(64, 'Beautifier', 31, 1, '2022-12-08 19:05:19'),
(65, 'Logic Programming Paradigm', 32, 0, '2022-12-08 19:05:19'),
(66, 'Functional Programming Paradigm', 32, 0, '2022-12-08 19:05:19'),
(67, 'Object-Oriented Programming Paradigm', 32, 0, '2022-12-08 19:05:19'),
(68, 'Factual Programming Paradigm', 32, 1, '2022-12-08 19:05:19'),
(69, 'Keyboard', 33, 0, '2022-12-08 19:05:19'),
(70, 'Mouse', 33, 0, '2022-12-08 19:05:19'),
(71, 'Printer', 33, 1, '2022-12-08 19:05:19'),
(72, 'JoyStick', 33, 0, '2022-12-08 19:05:19'),
(73, 'Trojan', 34, 0, '2022-12-08 19:05:19'),
(74, 'Plug-in', 34, 1, '2022-12-08 19:05:19'),
(75, 'Computer Worm', 34, 0, '2022-12-08 19:05:19'),
(76, 'Spyware', 34, 0, '2022-12-08 19:05:19'),
(77, 'Gopher', 35, 0, '2022-12-08 19:05:19'),
(78, 'FTP', 35, 0, '2022-12-08 19:05:19'),
(79, 'Blogging', 35, 1, '2022-12-08 19:05:19'),
(80, 'Telnet', 35, 0, '2022-12-08 19:05:19'),
(81, 'NASA', 36, 1, '2022-12-08 19:05:19'),
(82, 'ENIAC', 36, 0, '2022-12-08 19:05:19'),
(83, 'UNIVAC', 36, 0, '2022-12-08 19:05:19'),
(84, 'SAGE', 36, 0, '2022-12-08 19:05:19'),
(85, 'Linda Eastman', 37, 0, '2022-12-08 19:05:19'),
(86, 'George Eastman', 37, 1, '2022-12-08 19:05:19'),
(87, 'Louis Daguerre', 37, 0, '2022-12-08 19:05:19'),
(88, 'Johann Zahn', 37, 0, '2022-12-08 19:05:19'),
(89, 'AuctionWeb', 38, 1, '2022-12-08 19:05:19'),
(90, 'BCE', 38, 0, '2022-12-08 19:05:19'),
(91, 'Etsy', 38, 0, '2022-12-08 19:05:19'),
(92, 'Newegg', 38, 0, '2022-12-08 19:05:19'),
(93, 'COBOL', 39, 0, '2022-12-08 19:05:19'),
(94, 'Hypertalk', 39, 0, '2022-12-08 19:05:19'),
(95, 'Windows 2000', 39, 1, '2022-12-08 19:05:19'),
(96, 'Ada', 39, 0, '2022-12-08 19:05:19'),
(97, 'Libre Office', 40, 1, '2022-12-08 19:05:19'),
(98, 'Internet Explorer', 40, 0, '2022-12-08 19:05:19'),
(99, 'Google Chrome', 40, 0, '2022-12-08 19:05:19'),
(100, 'Mozilla Firefox', 40, 0, '2022-12-08 19:05:19'),
(101, 'TRUE', 41, 0, '2022-12-08 19:05:19'),
(102, 'FALSE', 41, 1, '2022-12-08 19:05:19'),
(103, 'TRUE', 42, 1, '2022-12-08 19:05:19'),
(104, 'FALSE', 42, 0, '2022-12-08 19:05:19'),
(105, 'TRUE', 43, 1, '2022-12-08 19:05:19'),
(106, 'FALSE', 43, 0, '2022-12-08 19:05:19'),
(107, 'TRUE', 44, 1, '2022-12-08 19:05:19'),
(108, 'FALSE', 44, 0, '2022-12-08 19:05:19'),
(109, 'TRUE', 45, 0, '2022-12-08 19:05:19'),
(110, 'FALSE', 45, 1, '2022-12-08 19:05:19'),
(111, 'TRUE', 46, 1, '2022-12-08 19:05:19'),
(112, 'FALSE', 46, 0, '2022-12-08 19:05:19'),
(113, 'TRUE', 47, 1, '2022-12-08 19:05:19'),
(114, 'FALSE', 47, 0, '2022-12-08 19:05:19'),
(115, 'TRUE', 48, 0, '2022-12-08 19:05:19'),
(116, 'FALSE', 48, 1, '2022-12-08 19:05:19'),
(117, 'TRUE', 49, 0, '2022-12-08 19:05:19'),
(118, 'FALSE', 49, 1, '2022-12-08 19:05:19'),
(119, 'TRUE', 50, 0, '2022-12-08 19:05:19'),
(120, 'FALSE', 50, 1, '2022-12-08 19:05:19'),
(121, '12', 51, 1, '2022-12-13 17:44:33'),
(122, 'dsad', 51, 0, '2022-12-13 17:44:33'),
(123, 'dsa', 51, 0, '2022-12-13 17:44:33'),
(124, 'dsa', 51, 0, '2022-12-13 17:44:33'),
(129, 'dfxb', 53, 0, '2022-12-13 17:44:57'),
(130, 'vbchgh', 53, 0, '2022-12-13 17:44:57'),
(131, 'ngngng', 53, 0, '2022-12-13 17:44:57'),
(132, 'ngg gd r   ', 53, 0, '2022-12-13 17:44:57'),
(133, 'ff', 51, 1, '2022-12-15 22:02:18'),
(134, 'fbbx', 51, 0, '2022-12-15 22:02:18'),
(135, 'bfddf', 51, 0, '2022-12-15 22:02:18'),
(136, 'bfdb', 51, 0, '2022-12-15 22:02:18');

-- --------------------------------------------------------

--
-- Table structure for table `quiztakers`
--

CREATE TABLE `quiztakers` (
  `id` int(11) NOT NULL,
  `sessid` varchar(255) NOT NULL,
  `quiz_id` int(11) NOT NULL,
  `userid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `quiz_list`
--

CREATE TABLE `quiz_list` (
  `id` int(30) NOT NULL,
  `title` varchar(200) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `qpoints` int(11) NOT NULL DEFAULT 1,
  `date_updated` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quiz_list`
--

INSERT INTO `quiz_list` (`id`, `title`, `user_id`, `qpoints`, `date_updated`) VALUES
(2, 'Web Technologies', 10003, 1, '2023-01-07 00:48:42');

-- --------------------------------------------------------

--
-- Table structure for table `quiz_student_list`
--

CREATE TABLE `quiz_student_list` (
  `id` int(30) NOT NULL,
  `quiz_id` int(30) NOT NULL,
  `user_id` int(30) NOT NULL,
  `date_updated` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quiz_student_list`
--

INSERT INTO `quiz_student_list` (`id`, `quiz_id`, `user_id`, `date_updated`) VALUES
(5, 2, 12, '2022-12-07 15:05:58'),
(6, 2, 13, '2022-12-07 15:05:58'),
(7, 3, 13, '2022-12-13 17:44:46'),
(8, 3, 22, '2022-12-15 20:57:13'),
(10, 2, 22, '2022-12-15 21:30:31'),
(11, 4, 13, '2022-12-15 22:02:07'),
(12, 3, 10002, '2023-01-07 22:14:00');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('C-J8G_lYkK1r440ZTjqNFNu24LY7PpMe', 1675506803, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":10001,\"name\":\"Claire Blakes\",\"user_type\":3,\"username\":\"cblake\",\"password\":\"admin123\",\"status\":1,\"date_updated\":\"2023-01-06T16:27:36.000Z\"}}'),
('W3FNt4ySFRT3SEvGoGoCIyhkWa7lJJzV', 1675437098, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('bHkS-ah39IuxCBjKIN5oiMjAbzIf_qmD', 1675442388, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":10001,\"name\":\"Claire Blakes\",\"user_type\":3,\"username\":\"cblake\",\"password\":\"admin123\",\"status\":1,\"date_updated\":\"2023-01-06T16:27:36.000Z\"}}'),
('g8R3B4R8RakSXVD2JKkoUAbmIleuJh3V', 1675437098, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),
('hgJiLlivlgmm8JZTqLsjLjS98ano15sQ', 1675441550, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":10001,\"name\":\"Claire Blakes\",\"user_type\":3,\"username\":\"cblake\",\"password\":\"admin123\",\"status\":1,\"date_updated\":\"2023-01-06T16:27:36.000Z\"}}'),
('tpI1w5gGLtkILC9vhp5WzEDc5ygt2JSp', 1675506890, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":10001,\"name\":\"Claire Blakes\",\"user_type\":3,\"username\":\"cblake\",\"password\":\"admin123\",\"status\":1,\"date_updated\":\"2023-01-06T16:27:36.000Z\"}}');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(30) NOT NULL,
  `user_id` int(30) NOT NULL,
  `course_gradelevel` varchar(100) NOT NULL,
  `date_updated` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `user_id`, `course_gradelevel`, `date_updated`) VALUES
(4, 10001, 'BSIT-3', '2023-01-07 00:47:23'),
(5, 10002, 'BSIT-4', '2023-01-07 00:47:25');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(30) NOT NULL,
  `name` varchar(150) NOT NULL,
  `user_type` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1 = admin, 2 = student',
  `username` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT ' 0 = incative , 1 = active',
  `date_updated` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `user_type`, `username`, `password`, `status`, `date_updated`) VALUES
(1, 'Administrator', 1, 'admin', 'admin', 1, '2022-12-11 15:24:11'),
(10001, 'Claire Blakes', 3, 'cblake', 'admin123', 1, '2023-01-07 00:27:36'),
(10002, 'Dave Joshua', 3, 'david', 'david', 1, '2023-01-07 00:27:36'),
(10003, 'Eethan Teacher', 2, 'eethan', 'eethan', 1, '2022-12-15 20:56:58'),
(10004, 'Claire Blakes', 3, 'claire', 'claire', 1, '2023-01-07 00:47:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `question_opt`
--
ALTER TABLE `question_opt`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quiztakers`
--
ALTER TABLE `quiztakers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quiz_list`
--
ALTER TABLE `quiz_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quiz_student_list`
--
ALTER TABLE `quiz_student_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=470;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `question_opt`
--
ALTER TABLE `question_opt`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;

--
-- AUTO_INCREMENT for table `quiztakers`
--
ALTER TABLE `quiztakers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `quiz_list`
--
ALTER TABLE `quiz_list`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `quiz_student_list`
--
ALTER TABLE `quiz_student_list`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10005;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
