-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 31, 2024 at 02:39 AM
-- Server version: 5.7.44-log
-- PHP Version: 8.1.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rishijob_jobportal`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `zipcode` varchar(255) DEFAULT NULL,
  `customer_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `company_email` varchar(255) DEFAULT NULL,
  `company_number` varchar(255) DEFAULT NULL,
  `company_website` varchar(255) DEFAULT NULL,
  `company_address` varchar(255) DEFAULT NULL,
  `total_employee` varchar(255) DEFAULT NULL,
  `user_Name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `company_logo` varchar(159) DEFAULT NULL,
  `create_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `company_name`, `company_email`, `company_number`, `company_website`, `company_address`, `total_employee`, `user_Name`, `password`, `company_logo`, `create_at`, `updated_at`) VALUES
(3, 'Time Pass', 'suriyabala9252@gmail.com', '8940777507', 'www.timepass.com', '301 PONNAKARAI', '5', 'Suriya@123', '$2a$10$kNrHJRfCiV.KVKZsOx0I8uKzrzj96Xg3/JiYBm65PwLe5.zXYwmle', NULL, '2024-03-02 05:26:42', '2024-03-02 05:27:21'),
(5, 'Beauty', 'princy2001r@gmail.com', '8940777507', 'www.princy.com', 'avarenthal', '20', 'Princy', '$2a$10$y3sd6WTpgKey95wXHyaojejX71MCapmtOu3V8..UEgbFT/ODRx3la', NULL, '2024-04-02 04:57:08', '2024-04-02 04:57:08'),
(11, 'Admin', 'Admin', 'Admin', 'Admin', 'Admin', 'Admin', 'Admin', '$2a$10$mQ/Jg.T0VKkvY/O0bkeNOOoOmJvPds.OG7PwmzHqxe2lFjR1H9rn.', NULL, '2024-01-01 10:05:35', '2024-01-01 10:05:35'),
(42, 'tesa', 'contact.nicknameinfo@gmail.com', '23232', '23232', '23232', '23232', '23232', '$2a$10$h1asjIlOAPHLgBBp6k622.Ni/yTfgzjeunKzj4EbYNIAXa7TYds5O', NULL, '2024-01-19 11:24:46', '2024-01-19 11:24:46'),
(352, 'sadfw34rafsdasdfa', 'asdfa@213.adf', '8270564998', 'asdfasdf', 'asdf', 'sadf', 'asdf32452', '$2a$10$xvjs1e6gGvxUQRY/M.o3TuHWcXOlFCSaeVQ2e9AGaOkZk3UXA/wNe', NULL, '2024-02-16 22:17:43', '2024-02-16 22:17:43'),
(353, 'TimePass', 'suriyabala9400@gmail.com', '8940777507', 'www.timepass.com', '301 PONNAKARAI', '5', 'Timepass', '$2a$10$Q0RZ2M9XzU4UJ40DepjjY.SFAuUL3812hFynt9EM1lNukerS6sHym', NULL, '2024-03-19 09:48:49', '2024-03-19 09:48:49'),
(682194, 'jansi', 'jansirani120680@gmail.com', '9626785314', 'www.jansi.com', 'avarenthal', '5', 'jansi', '$2a$10$pQIIFg.33yhNB.HU/hlCp.hfo3U.YNrPU5nuL4xrtaW0zhfuSJ8T.', 'src/uploads/companyLogo_1712037816553.png', '2024-04-02 05:06:30', '2024-04-02 06:03:36'),
(682195, 'Testing@123', 'Testing@123.com', '8270564998', 'Testing@123', 'Testing@123', '45', 'Testing@123', '$2a$10$gtS/n8K6jmP.wvJUOsG2NuPjbVlUPtT4aqepVqEkyULUVZJmab71C', NULL, '2024-04-02 05:34:56', '2024-04-02 05:34:56');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `job_title` varchar(255) DEFAULT NULL,
  `job_category` varchar(255) DEFAULT NULL,
  `salary_from` varchar(255) DEFAULT NULL,
  `salary_to` varchar(255) DEFAULT NULL,
  `job_location` varchar(255) DEFAULT NULL,
  `job_description` varchar(255) DEFAULT NULL,
  `job_skills` varchar(255) DEFAULT NULL,
  `job_qualification` varchar(255) DEFAULT NULL,
  `course_status` varchar(255) DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `hire_number` varchar(250) DEFAULT NULL,
  `job_type` varchar(250) DEFAULT NULL,
  `hiring_candidates` varchar(250) DEFAULT NULL,
  `job_eligibilty` varchar(250) DEFAULT NULL,
  `salary_amount` varchar(250) DEFAULT NULL,
  `salary_type` varchar(250) DEFAULT NULL,
  `experince` varchar(250) DEFAULT NULL,
  `companyId` varchar(250) DEFAULT NULL,
  `company_logo` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `job_title`, `job_category`, `salary_from`, `salary_to`, `job_location`, `job_description`, `job_skills`, `job_qualification`, `course_status`, `create_at`, `updated_at`, `company_name`, `hire_number`, `job_type`, `hiring_candidates`, `job_eligibilty`, `salary_amount`, `salary_type`, `experince`, `companyId`, `company_logo`) VALUES
('07dd1d00-78d5-4262-9741-c69aba085455', 'Test', NULL, '3l', '3l', 'Chennai', 'Test', NULL, NULL, NULL, '2024-01-08 19:20:37', '2024-01-08 19:20:37', 'ibss', NULL, 'Part Time', NULL, NULL, NULL, NULL, '3 - 3', '9', NULL),
('149c6e1f-e8e6-4984-acd6-9ee0aa250e7c', 'web designer', 'IT&NetworingSevices', '15000', '25000', 'chennai', 'good communication\nloud speaker', NULL, NULL, NULL, '2024-03-02 05:28:28', '2024-03-02 05:28:28', '3', NULL, 'Full Time', NULL, NULL, NULL, NULL, '2years', '3', '3'),
('1baab3eb-e399-478d-a22f-22cfedeca463', 'test2314', 'RealEstateBusiness', '2l', '3', 'sadfa', 'test', NULL, NULL, NULL, '2024-01-11 19:45:50', '2024-01-11 19:45:50', 'test', NULL, 'Intern', NULL, NULL, NULL, NULL, '23', '350', NULL),
('25d11304-70e8-4000-ba79-13c0faeea34e', '34rfsdf', 'RealEstateBusiness', '35', '34', '4', 'test', NULL, NULL, NULL, '2024-01-11 19:47:00', '2024-01-11 19:47:00', 'test', NULL, 'Part Time', NULL, NULL, NULL, NULL, '34', '350', 'src\\uploads\\companyLogo_1705002079160.png'),
('26809d0a-16e1-4725-97a2-b07f28e921c6', 'Beautisian', 'BusinessDevelopment', '15000', '25000', 'R.s.mangalam', 'Good communication', NULL, NULL, NULL, '2024-04-02 06:03:09', '2024-04-02 06:03:09', 'jansi', NULL, 'Full Time', '3', NULL, NULL, NULL, '5years', '682194', 'null'),
('685b1e42-520a-4e88-b526-ef3e9f6b0431', 'php Developer', 'IT&NetworingSevices', '20000', '35000', 'chennai', 'good communication\n\n', NULL, NULL, NULL, '2024-03-02 05:31:18', '2024-03-02 05:31:18', '3', NULL, 'Full Time', NULL, NULL, NULL, NULL, '5years', '3', '3'),
('88c1f0c1-9f62-442b-bb79-63b5884de109', 'test1', NULL, '2l', '3l', 'Chennai', 'test', NULL, NULL, NULL, '2024-01-08 19:24:18', '2024-01-08 19:24:18', 'ibss', NULL, 'Full Time', NULL, NULL, NULL, NULL, '3', '9', NULL),
('a05f3264-0f14-4a07-ac60-f3097011a3f1', 'asdfa', NULL, 'sdfasdf', 'asdfa', 'asdf', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has su', NULL, NULL, NULL, '2024-01-09 12:11:17', '2024-01-09 12:11:17', 'test', NULL, 'Part Time', NULL, NULL, NULL, NULL, 'asdfa', '350', NULL),
('ba586ecd-1a5a-406e-8c4a-1822deb29804', 'Shop Keeper', 'BusinessDevelopment', '7000', '10000', 'Madurai', '', NULL, NULL, NULL, '2024-03-29 06:44:47', '2024-03-29 06:44:47', 'Timepass', NULL, 'Full Time', '2', NULL, NULL, NULL, '2years', '353', 'null'),
('dd04fa89-de57-4ded-acea-d69f88ea077e', 'Test121', NULL, '34l', '4l', 'adsf', 'asdfasd', NULL, NULL, NULL, '2024-01-08 20:22:06', '2024-01-08 20:22:06', 'test', NULL, 'Part Time', NULL, NULL, NULL, NULL, '45', '350', NULL),
('dfb3850a-2aea-45e6-99b0-7874e9af6921', 'Billing', 'TechnicalSupport', '15000', '25000', 'chennai', 'good communication', NULL, NULL, NULL, '2024-03-19 09:58:19', '2024-03-19 09:58:19', 'Timepass', NULL, 'Full Time', '5', NULL, NULL, NULL, '5years', '353', 'null');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `user_type` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `passowrd` varchar(255) DEFAULT NULL,
  `qualification` varchar(150) DEFAULT NULL,
  `gender` varchar(150) DEFAULT NULL,
  `experience` varchar(150) DEFAULT NULL,
  `resume` varchar(150) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `first_name`, `last_name`, `user_type`, `email`, `phone_number`, `user_name`, `passowrd`, `qualification`, `gender`, `experience`, `resume`, `created_at`, `updated_at`) VALUES
('1ac05b2a-1574-474a-9fcb-2784d6d3ecfd', 'SURIYABALA', 'C', NULL, 'suriyabala9252@gmail.com', '+918940777507', '+918940777507', '$2a$10$1fiV.3mo3I6KR/XcDBwkuO1VZmC74Jyrd04H.ssyF8iCPlOF0VN3q', 'MCA', 'Male', '1.5', 'src/uploads/resume_1709272717249.pdf', '2024-02-28 06:00:47', '2024-03-01 05:58:37'),
('38840eb4-b7cc-47c8-9d6c-9935cb2d3d71', 'siva', 'balan', NULL, 'gsiva1069@gmail.com', '63697809339', '63697809339', '$2a$10$K09nhummYKcL4Gyo2iYJS.FNeNLJUTW6tYRPm3329HaAaXCqns48O', 'MCA', 'Male', '1.5', NULL, '2024-03-27 07:15:08', '2024-03-27 07:23:27'),
('3c3ac70a-0164-48a1-8e7c-61396c96a5b2', 'krishna', 'ibss', NULL, 'krishibss01@gmail.com', '9080504831', '9080504831', '$2a$10$qkvBHUCVX0vn8d3yHba5BOzaLiJbXBJs7M/U1w5AnAZXlg.R0AN7e', 'bsc', 'Male', '3.5', NULL, '2024-04-06 06:36:31', '2024-04-06 06:37:40'),
('4e17d073-3eaa-46c3-8621-732ccbd1e361', 'valliappan', 'RM', NULL, 'valliappan88@gmail.com', '9500069794', '9500069794', '$2a$10$Jl4ltOZddwPGx9ierFZUN.KCgQmREUPjOPPcWrfRjBjBLYa4wy8D2', NULL, NULL, NULL, NULL, '2024-03-01 08:12:43', '2024-03-01 08:12:43'),
('537297cc-dbaf-4e49-b970-6d7d530a171e', 'Timepass', 'Supermarket', NULL, 'princy2001r@gmail.com', '9342683894', '9342683894', '$2a$10$SOKvcmHSCGbwGjuWYr7XD.XtEbn0UTWuFoKoCHO91wRj1bG/sPPe.', 'engg', 'Female', '3', NULL, '2024-04-01 13:44:41', '2024-04-01 13:46:02'),
('70a36fc5-d612-4d2c-95c0-bb4388bcdb27', 'guna', 'm', NULL, 'guna@123gmail.com', '6380454728', '6380454728', '$2a$10$9QfWNx3XsqW8GHGkdBlv4.N/o9vwRtfgnXai7pdLAZlY.mJBr9Fr2', NULL, NULL, NULL, NULL, '2024-03-01 06:14:00', '2024-03-01 06:14:00'),
('86f70ae3-7c10-4641-babb-29376a577854', 'test', 'ets', NULL, 'arulkumar8270@gmail.com', '35623452345', '35623452345', '$2a$10$r7txxbz66tx5bnKPYnI2XOda13OBt7/hP.ffzWsO/T6q65TkJfQWi', 'null', 'null', 'null', NULL, '2024-01-11 19:02:58', '2024-01-11 19:34:15'),
('8d887ae1-0d25-4c70-807b-25be66e3457f', 'kara', 'kura', NULL, 'karakura@gmail.com', '9952914042', '9952914042', '$2a$10$xkiDYCe9b4fTqBTxvwWy3OoPQHiwPDl.ZJ8yRaT6jxTAjkjGZqxnS', NULL, NULL, NULL, NULL, '2024-02-28 06:24:21', '2024-02-28 06:24:21'),
('93d580c9-828d-4b17-a67b-90327d1404cc', 'SURIYABALA', 'c', NULL, 'suriyabala92582@gmail.com', '894077750709', '894077750709', '$2a$10$dHa67FAIcvs0EfyghgtJu.AKpxZc.ZaF6Kl0QtKiu2aJNAkUAktMW', 'MCA', 'Male', '1.5', NULL, '2024-03-27 07:02:36', '2024-04-01 06:49:00'),
('9789e507-dba2-478e-8ecd-65b6c01ab350', 'SuriyaTest', NULL, NULL, 'arulkumar458270@gmail.com', '8270564998@12131', '8270564998@12131', '$2a$10$zHaCqEHOakLyjBuUQFV/TOqbY0SCfEegiNf2vjQxKsnDqC4vNUWSu', NULL, NULL, NULL, NULL, '2024-03-26 10:11:36', '2024-03-26 10:11:36'),
('a10066fe-66a7-4255-b220-c462a4040708', 'siva', NULL, NULL, 'siva@gmail.com', '6369780933', '6369780933', '$2a$10$dheQo.jyOi32Prd2e2xiGuPmlURSEaU.iLsnUu.pJU35kgBoDGrny', NULL, NULL, NULL, NULL, '2024-03-05 08:31:41', '2024-03-05 08:31:41'),
('b84fa957-8aac-469c-bbff-e70a45c33ad3', 'senthil', 'raman', NULL, 'senthil@gmail.com', '9600088270', '9600088270', '$2a$10$mGeMCxiork9pxskGjpVXdeiFepMq0wvjdWXi4RKOvlfuAKO/BY8Di', NULL, NULL, NULL, NULL, '2024-02-27 09:40:54', '2024-02-27 09:40:54'),
('c7181a89-61e5-4d69-bf7a-289b2bfeb6f0', 'vengatesh', 'mani', NULL, 'ms.vengatesh2912@gmail.com', '9080328805', '9080328805', '$2a$10$5AIhJ/1yH0Lyfrm75ztYR.v5z3OsnCdyRjNAYC4iv2fKvJSJ74mEe', 'engg', 'Female', '1.5', NULL, '2024-03-05 05:23:46', '2024-03-19 08:01:45'),
('cc2b6fa3-3bb4-46fe-b5dc-2b221b053019', 'SURIYABALA', 'C', NULL, 'suriyabala9400@gmail.com', '8940777507', '8940777507', '$2a$10$JNgoKQTwAAJLJ51Xg8XDXuDaHDXhwIZolINydzOQmCO5dDU.WJVYa', 'MCA', 'Male', '1.5', 'src/uploads/resume_1712121065620.pdf', '2024-03-19 08:12:57', '2024-04-03 05:11:06');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `job_title` varchar(255) DEFAULT NULL,
  `job_category` varchar(255) DEFAULT NULL,
  `job_location` varchar(255) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `resume` varchar(255) DEFAULT NULL,
  `job_status` varchar(250) DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `companyId` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `user_name`, `name`, `phone_number`, `email`, `job_title`, `job_category`, `job_location`, `experience`, `resume`, `job_status`, `create_at`, `updated_at`, `company_name`, `companyId`) VALUES
('1072f534-ba22-48b8-928a-86c081464ab1', '8940777507', NULL, NULL, NULL, 'test2314', 'RealEstateBusiness', NULL, NULL, NULL, NULL, '2024-04-04 13:40:33', '2024-04-04 13:40:33', 'test', '350'),
('2283aab6-223e-4315-bf0c-7b8f0d638fb7', '894077750709', 'SURIYABALA C', '8940777507', 'suriyabala9252@gmail.com', 'web designer', 'IT&NetworingSevices', 'chennai', NULL, 'src/uploads/resume_1711947455407.pdf', 'Applied', '2024-04-01 04:57:35', '2024-04-01 04:57:35', '3', '3'),
('4032b9e3-28df-49cc-92a8-9b1af81d3e7c', '+918940777507', 'SURIYABALA C', '+918940777507', 'suriyabala9252@gmail.com', 'Test121', 'null', 'chennai', '1.5', 'src/uploads/resume_1709272782458.pdf', 'Applied', '2024-03-01 05:59:42', '2024-03-01 05:59:42', 'test', '350'),
('41c06e4d-bbbd-4fbb-b90c-d6664397dac3', '8940777507', NULL, NULL, NULL, 'Shop Keeper', 'BusinessDevelopment', NULL, NULL, NULL, NULL, '2024-04-01 07:17:53', '2024-04-01 07:17:53', 'Timepass', '353'),
('4f23d5b4-5d83-4e68-b551-4d15b9ed7e2c', '8940777507', 'SURIYABALA C', '8940777507', 'suriyabala9400@gmail.com', 'web designer', 'IT&NetworingSevices', 'chennai', 'undefined', 'src/uploads/resume_1710841425951.pdf', 'Applied', '2024-03-19 09:43:46', '2024-03-19 09:43:46', '3', '3'),
('656827ba-b96b-48e0-a84b-755893d5f14b', '894077750709', 'SURIYABALA C', '8940777507', 'suriyabala9252@gmail.com', 'web designer', 'IT&NetworingSevices', 'chennai', 'undefined', 'src/uploads/resume_1711694363332.pdf', 'Applied', '2024-03-29 06:39:23', '2024-03-29 06:39:23', '3', '3'),
('672fa194-83bf-420b-ada5-04076d7a4b18', '9080328805', 'SURIYABALA C', '+918940777507', 'suriyabala9252@gmail.com', 'web designer', 'IT&NetworingSevices', 'chennai', '1.5', 'src/uploads/resume_1709623563267.pdf', 'Applied', '2024-03-05 07:26:04', '2024-03-05 07:26:04', '3', '3'),
('787f0513-710d-458c-8b00-d1df018a9cf0', '894077750709', NULL, NULL, NULL, 'php Developer', 'IT&NetworingSevices', NULL, NULL, NULL, NULL, '2024-03-29 06:40:10', '2024-03-29 06:40:10', '3', '3'),
('843988ad-de07-4aee-9d00-ff19db14b53d', '63697809339', 'SURIYABALA C', '08940777507', 'suriyabala9252@gmail.com', 'web designer', 'IT&NetworingSevices', 'chennai', 'undefined', 'src/uploads/resume_1711524061721.pdf', 'Applied', '2024-03-27 07:21:02', '2024-03-27 07:21:02', '3', '3'),
('8943c7c7-05bb-4a08-815d-82a1e18dd7f5', '63697809339', NULL, NULL, NULL, 'php Developer', 'IT&NetworingSevices', NULL, NULL, NULL, NULL, '2024-03-27 07:22:20', '2024-03-27 07:22:20', '3', '3'),
('89ee648e-b3cf-4f5c-a7e8-1addb2b22b71', '8940777507', NULL, NULL, NULL, 'php Developer', 'IT&NetworingSevices', NULL, NULL, NULL, NULL, '2024-03-19 09:43:58', '2024-03-19 09:43:58', '3', '3'),
('913c37a5-ca22-4161-829e-9b780da39483', '8940777507', NULL, NULL, NULL, '34rfsdf', 'RealEstateBusiness', NULL, NULL, NULL, NULL, '2024-04-04 13:40:48', '2024-04-04 13:40:48', 'test', '350'),
('c3b432be-27b6-48d9-8baf-405845f88ea4', '8940777507', NULL, NULL, NULL, 'Beautisian', 'BusinessDevelopment', NULL, NULL, NULL, 'Approved', '2024-04-02 10:48:52', '2024-04-02 10:49:43', 'jansi', '682194'),
('e1423009-bb74-4d89-a418-1c5a69813585', '8270564998', NULL, NULL, NULL, 'Test121', 'null', NULL, NULL, NULL, NULL, '2024-01-18 15:22:07', '2024-01-18 15:22:07', 'test', '350'),
('e4c7e74a-db9b-4e7b-a75c-112d4bc77957', '8270564998', 'test12', 'test1', 'test', 'test2314', 'RealEstateBusiness', 'sdfas', NULL, 'src\\uploads\\resume_1705590294587.js', 'Applied', '2024-01-18 15:04:54', '2024-01-18 15:04:54', 'test', '350'),
('e8e2d95b-4273-4b54-a43c-c5d7ad72fe62', '8940777507', NULL, NULL, NULL, 'Billing', 'TechnicalSupport', NULL, NULL, NULL, 'Approved', '2024-03-19 09:59:49', '2024-03-19 10:01:09', 'Timepass', '353'),
('f575fa71-3f4b-4479-ac3e-2aed3f73df3b', '9080328805', NULL, NULL, NULL, 'Test121', 'null', NULL, NULL, NULL, NULL, '2024-03-19 08:02:08', '2024-03-19 08:02:08', 'test', '350'),
('ffaee626-38c0-489c-899d-06d99c523a8a', '894077750709', NULL, NULL, NULL, 'Billing', 'TechnicalSupport', NULL, NULL, NULL, 'Approved', '2024-03-29 06:40:16', '2024-03-29 06:43:20', 'Timepass', '353');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230630110046-create-course.js'),
('20230630110056-create-customer.js'),
('20230704060613-create-address.js'),
('20231228160800-create-compay-table.js'),
('20231228195129-create-job-table.js'),
('20231230111931-rename-passwrd-company.js'),
('20231230112150-addColumns.js'),
('20231230113144-createNewTable-compay.js'),
('20231230113416-createNewTable-compay.js'),
('20231230115828-createNewTable-compay.js'),
('20240101095623-add-cmpanyname-columns.js'),
('20240101095754-add-cmpanyname-columns.js');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=682196;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
