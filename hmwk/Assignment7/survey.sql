-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: zelda
-- ------------------------------------------------------
-- Server version	5.6.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `entity_question`
--

DROP TABLE IF EXISTS `entity_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `entity_question` (
  `question_id` int(10) NOT NULL AUTO_INCREMENT,
  'question' char(50) DEFAULT NULL
  PRIMARY KEY (`question_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entity_question`
--

LOCK TABLES `entity_question` WRITE;
/*!40000 ALTER TABLE `entity_question` DISABLE KEYS */;
INSERT INTO `entity_question` VALUES (0,'what is your favorite programming language?'),(1,'what is your favorite framework?');
/*!40000 ALTER TABLE `entity_question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entity_answers`
--

DROP TABLE IF EXISTS `entity_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `entity_answers` (
  `answers_id` int(10) NOT NULL AUTO_INCREMENT,
  'answer1' char(50) DEFAULT NULL,
  'answer2' char(50) DEFAULT NULL,
  'answer3' char(50) DEFAULT NULL,
  'answer4' char(50) DEFAULT NULL,
  'answer5' char(50) DEFAULT NULL
  PRIMARY KEY (`answers_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entity_question`
--

LOCK TABLES `entity_answers` WRITE;
/*!40000 ALTER TABLE `entity_answers` DISABLE KEYS */;
INSERT INTO `entity_answers` VALUES (0,'python','c++','java','JavaScript','Swift'),(1,'React','Node','Angular','Django','Flask');
/*!40000 ALTER TABLE `entity_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entity_user`
--

DROP TABLE IF EXISTS `entity_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `entity_user` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT,
  `username` char(20) DEFAULT NULL,
  `password` char(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entity_user`
--

LOCK TABLES `entity_user` WRITE;
/*!40000 ALTER TABLE `entity_user` DISABLE KEYS */;
INSERT INTO `entity_user` VALUES (0,'heri','password'),(1,'eric','password');
/*!40000 ALTER TABLE `entity_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `usertoquestion`
--

DROP TABLE IF EXISTS `usertoquestion`;
/*!50001 DROP VIEW IF EXISTS `usertoquestion`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `usertoquestion` AS SELECT
 1 AS `Username`,
 1 AS `Password`,
 1 AS 'Question'
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `usertoanswer`
--

DROP TABLE IF EXISTS `usertoanswer`;
/*!50001 DROP VIEW IF EXISTS `usertoanswer`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `usertoanswer` AS SELECT
 1 AS `Question`,
 1 AS `Answer 1`,
 1 AS `Answer 2`,
 1 AS `Answer 3`,
 1 AS `Answer 4`,
 1 AS `Answer 5`,
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `xref_user_question`
--

DROP TABLE IF EXISTS `xref_user_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `xref_user_question` (
  `xref_id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) DEFAULT NULL,
  `question_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`xref_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xref_user_question`
--

LOCK TABLES `xref_user_question` WRITE;
/*!40000 ALTER TABLE `xref_user_question` DISABLE KEYS */;
INSERT INTO `xref_user_question` VALUES (0,0,0),(1,1,1);
/*!40000 ALTER TABLE `xref_user_question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xref_question_answers`
--

DROP TABLE IF EXISTS `xref_question_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `xref_question_answers` (
  `xref_id` int(10) NOT NULL AUTO_INCREMENT,
  `question_id` int(10) DEFAULT NULL,
  `answers_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`xref_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xref_question_answers`
--

LOCK TABLES `xref_question_answers` WRITE;
/*!40000 ALTER TABLE `xref_question_answers` DISABLE KEYS */;
INSERT INTO `xref_question_answers` VALUES (0,0,0),(1,1,1);
/*!40000 ALTER TABLE `xref_question_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `usertostate`
--

/*!50001 DROP VIEW IF EXISTS `usertostate`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = latin1 */;
/*!50001 SET character_set_results     = latin1 */;
/*!50001 SET collation_connection      = latin1_swedish_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `usertostate` AS select `entity_user`.`username` AS `Username`,`entity_user`.`password` AS `Password`,`entity_state`.`hp` AS `Health Points`,`entity_state`.`pos_x` AS `Position X`,`entity_state`.`pos_y` AS `Position Y` from ((`xref_user_state` join `entity_user`) join `entity_state`) where ((`xref_user_state`.`user_id` = `entity_user`.`user_id`) and (`xref_user_state`.`state_id` = `entity_state`.`state_id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-08 20:07:52
