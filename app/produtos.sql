-- MySQL dump 10.13  Distrib 8.0.23, for Linux (x86_64)
--
-- Host: localhost    Database: marcas
-- ------------------------------------------------------
-- Server version       8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `avaliacao`
--

DROP TABLE IF EXISTS `avaliacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avaliacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comentario` varchar(510) NOT NULL,
  `feed` int NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `data` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_feed_idx` (`feed`),
  CONSTRAINT `fk_comentarios_feeds` FOREIGN KEY (`feed`) REFERENCES `feeds` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avaliacao`
--

LOCK TABLES `avaliacao` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `avaliacao` VALUES (1,'Produto sensacional, utilizo muito em minha casa. Parabéns',1,'Ionara Penha Meireles','2022-04-14 17:27:11'),(2,'Esse produto atende todas as demandas da minha casa',1,'Alba Paixão Borges','2022-06-12 11:27:11'),(3,'Gostamos bastante, parabéns para a empresa',1,'Leticia Ataíde Ramos','2022-05-11 09:54:11'),(4,'Utilizo muito em minha casa, estou satisfeito',2,'Matilde Brião Coimbra','2024-05-01 02:14:11'),(5,'Produto senssacional, utilizo muito em minha casa. Parabéns.',2,'Ryan Barrela Silvestre','2022-05-11 09:54:11'),(6,'O único problema é que acaba rápido',2,'Erik Aires Cobra','2024-05-01 02:14:11'),(7,'Gostei',2,'Simão Aleixo Rosa','2022-05-11 09:54:11'),(8,'Ótimo, gostei e já enviei para a minha mãe',3,'Benedita Noleto Couceiro','2020-03-03 09:43:11'),(9,'Em 40 anos nunca vi algo tão bom',3,'Noah Simões Caminha','2022-05-11 09:54:11'),(10,'Produto senssacional, utilizo muito em minha casa. Parabéns.',4,'Brito Ferreira Caminha','2022-05-11 09:54:11'),(11,'Esse produto atende todas as demandas da minha casa',4,'Abdullah Mata Areosa','2022-05-11 09:54:11'),(12,'Gostamos bastante, parabéns para a empresa',4,'Gustavo Viana Pastana','2022-05-11 09:54:11'),(13,'Muito bom!',4,'Constança Matias Inácio','2022-05-11 09:54:11'),(14,'Utilizo muito em minha casa, estou satisfeito',4,'Alonso Madureira Figueiredo','2024-05-01 02:14:11'),(15,'O único problema é que acaba rápido',5,'Zé Aquino Piteira','2022-05-11 09:54:11'),(16,'Eu estou satisfeito com o produto.',5,'Martim Ribeiro Caldeira','2024-05-01 02:14:11'),(17,'Obrigado por explicar onde utilizo o produto',5,'Alexandra Caiado Paredes','2024-05-01 02:14:11'),(18,'Explicando da forma correta a gente aprende mais',5,'Elsa Rufino Rebouças','2022-05-11 09:54:11'),(19,'Satisfeito',5,'Édi Bicudo Franca','2020-03-03 09:43:21'),(20,'Eu moro na Itália e meu filho trouxe esse produto do Brasil, muito bom!',6,'Édi Bicudo Franca','2022-05-11 09:54:11'),(21,'Parabéns aos fabricantes',6,'Jamie Oleiro Leite','2024-05-01 02:14:11'),(22,'Não gostei',7,'Élia Janes Garcia','2020-03-03 09:43:11'),(23,'Faço o uso em outras partes da casa',7,'Éric Murtinho Quintais','2022-05-11 09:54:11'),(24,'Igual a essa não existe',7,'Keyson Calçada Pereira','2024-05-01 02:14:11'),(25,'Maravilha, obrigado',7,'Kaio Noronha Varejão','2022-05-11 09:54:11'),(26,'Ótimo, gostei e já enviei para a minha mãe',8,'Davi Lima Charneca','2022-05-11 09:54:11'),(27,'Produto senssacional, utilizo muito em minha casa. Parabéns.',8,'Ionara Penha Meireles','2020-03-03 09:43:11'),(28,'Esse produto atende todas as demandas da minha casa',9,'Alba Paixão Borges','2024-05-01 02:14:11'),(29,'Muito bom!',9,'Dinarte Jardim Soeiro','2020-03-03 09:43:11'),(30,'Utilizo muito em minha casa, estou satisfeito',9,'Matilde Brião Coimbra','2022-05-11 09:54:11'),(31,'Ótimo, gostei e já enviei para a minha mãe',10,'Benedita Noleto Couceiro','2024-05-01 02:14:11'),(32,'Em 40 anos nunca vi algo tão bom',10,'Noah Simões Caminha','2020-03-03 09:43:11'),(33,'Obrigado por explicar onde utilizo o produto',10,'Alexandra Caiado Paredes','2022-05-11 09:54:11'),(34,'Explicando da forma correta a gente aprende mais',10,'Elsa Rufino Rebouças','2020-03-03 09:43:11'),(35,'Satisfeito',10,'Édi Bicudo Franca','2022-05-11 09:54:11'),(36,'Eu moro na Itália e meu filho trouxe esse produto do Brasil, muito bom!',10,'Martinha Silva Varão','2024-05-01 02:14:11'),(37,'Amei o produto!',11,'Édi Bicudo Franca','2022-05-11 09:54:11'),(38,'Parabéns aos fabricantes',11,'Jamie Oleiro Leite','2020-03-03 09:43:11'),(39,'Não gostei',11,'Élia Janes Garcia','2022-05-11 21:54:11'),(40,'Maravilhoso',12,'Éder Lobato Carqueijeiro','2022-05-04 09:13:11'),(41,'O único problema é que acaba rápido',12,'Kaio Noronha Varejã','2021-04-06 15:15:11'),(42,'Eu estou satisfeito com o produto',12,'Russell Padilha Palmeira','2022-06-06 15:21:11'),(43,'Obrigado por explicar onde utilizo o produto',12,'Rahyssa Barroca Mondragão','2022-07-05 23:35:11'),(44,'Explicando da forma correta a gente aprende mais',12,'Ionara Penha Meireles','2022-02-02 14:34:11'),(45,'Explicando da forma correta a gente aprende mais',12,'Jamie Oleiro Leite','2019-04-04 12:23:11');




/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresas`
--

DROP TABLE IF EXISTS `empresas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresas`
--

LOCK TABLES `empresas` WRITE;
/*!40000 ALTER TABLE `empresas` DISABLE KEYS */;
INSERT INTO `empresas` VALUES (1,'TEIÚ','teiu-logo.jpg'),(2,'TEIÚ','teiu-logo.jpg'),(3,'TEIÚ','teiu-logo.jpg'),(4,'TEIÚ','teiu-logo.jpeg'),(5,'TEIÚ','teiu-logo.jpg'),(6,'TEIÚ','teiu-logo.jpg'),(7,'TEIÚ','teiu-logo.jpg'),(8,'TEIÚ','teiu-logo.jpg'),(9,'TEIÚ','teiu-logo.jpg'),(10,'TEIÚ','teiu-logo.jpg'),(11,'TEIÚ','teiu-logo.jpg'),(12,'TEIÚ','teiu-logo.jpg');
/*!40000 ALTER TABLE `empresas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feeds`
--

DROP TABLE IF EXISTS `feeds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feeds` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data` datetime NOT NULL,
  `produto` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_feeds_produtos_idx` (`produto`),
  CONSTRAINT `fk_feeds_produtos` FOREIGN KEY (`produto`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feeds`
--

LOCK TABLES `feeds` WRITE;
/*!40000 ALTER TABLE `feeds` DISABLE KEYS */;
INSERT INTO `feeds` VALUES (1,'2022-05-14 18:21:11',1),(2,'2022-04-14 18:21:11',2),(3,'2022-02-14 18:21:11',3),(4,'2022-07-14 18:21:11',4),(5,'2022-04-14 18:21:11',5),(6,'2022-04-14 18:21:11',6),(7,'2022-02-14 18:21:11',7),(8,'2022-08-14 18:21:11',8),(9,'2022-08-14 18:21:11',9),(10,'2022-04-14 18:21:11',10),(11,'2022-04-14 18:21:11',11),(12,'2022-03-14 18:21:11',12);
/*!40000 ALTER TABLE `feeds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `descricao` varchar(1024) NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `precopromocional` decimal(10,2) NOT NULL,
  `modoutilizacao` varchar(1024) NOT NULL,
  `cuidados` varchar(1024) NOT NULL,
  `superficie` varchar(255) NOT NULL,
  `imagem1` varchar(255) NOT NULL,
  `empresa` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_produtos_empesas_idx` (`empresa`),
  CONSTRAINT `fk_produtos_empesas` FOREIGN KEY (`empresa`) REFERENCES `empresas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'Tira manchas Mr Blue','Alto poder contra as manchas. Delicado com os tecidos. REMOVE MANCHAS DE: Ovo, manteiga, leite com chocolate, ketchup, groselha, requeijão, molho madeira, papinha de neném, sangue, sujeira corporal de colarinhos e punhos.','17.99','13.99','Tira Manchas Mr. Blue foi desenvolvido exclusivamente para facilitar a lavagem e remoção de manchas em tecidos','Conserve fora do alcance das crianças e dos animais domésticos. Não utilize em utensílios domésticos. Não usar em tecidos de lã e seda. Siga sempre as instruções de uso da embalagem do MR BLUE.','Tecidos','imagem001.jpg',1),(2,'Lava Roupas Especial Coco','À base de coco natural e com branqueador óptico, o que garante delicadeza e alta perfomance na lavagem.','15.80','14.70','Ideal para roupas finas e delicadas.','Nunca despeje o produto diretamente sobre as roupas sem diluí-lo antes na água. Conserve fora do alcance das crianças e dos animais domésticos.','Adicionar na máquina de lavar','imagem002.jpg',1),(3,'Gel Teiú','É um produto inovador, desenvolvido pela TEIÚ a partir de pesquisas e rigorosos testes de qualidade e eficiência. Sua ação de limpador de uso geral é muito eficiente na remoção das sujeiras mais difíceis','8.00','7.20','O GEL TEIÚ tem múltiplo uso e limpa sem tirar o brilho.','Conserve fora do alcance das crianças e dos animais domésticos.','Ambientes como cozinha, banheiro, calçadas e áreas com grande circulação de pessoas.','imagem003.jpg',1),(4,'Água Sanitária Teiú','A ÁGUA SANITÁRIA TEIÚ conquistou o coração das donas de casa. Desenvolvida para facilitar a limpeza do dia a dia, a embalagem da ÁGUA SANITÁRIA TEIÚ tem formato anatômico, desenho moderno, tampa de rosca e sistema de dosagem.','5.50','4.40','Utilizar uma colher de sopa rasa (cerca de 15 ml) de água sanitária para cada litro de água.','Manter o máximo de cuidados com os olhos. Manter fora do alcance de crianças e animais','Limpeza de banheiras, pias, vidros, louças, porcelanas, mármores, cerâmicas, vasos sanitários e caixa d’água','imagem004.jpg',1),(5,'Alvejante Perfumado Teiú','A presença do cloro ativo na sua composição garante ao ALVEJANTE TEIÚ uma excelente ação de limpeza de ambientes da sua casa e roupas, além de proporcionar um suave perfume. A sua embalagem tem formato anatômico, desenho moderno, tampa de rosca e sistema de dosagem.','8.00','6.99','Utilizar uma colher de sopa rasa (cerca de 20 ml) de alvejante para cada litro de água.','Manter o máximo de cuidados com os olhos. Manter fora do alcance de crianças e animais','Casa e Roupas','imagem005.jpg',1),(6,'Lava Roupas Líquido Teiú','Abrir a gaveta ou o guarda-roupas e sentir o perfume de roupa limpa é tudo de bom! O LAVA ROUPAS LÍQUIDO TEIÚ proporciona esta sensação todos os dias para você. Sua fórmula tem alta performance, garantindo mais rendimento e ação eficiente na limpeza e perfumação das suas roupas.','4.50','3.20','Adicionar uma colher de sopa rasa de lava oupas líquidos para cada litro de água.','Manter o máximo de cuidados com os olhos. Manter fora do alcance de crianças e animais','Roupas','imagem006.jpg',1),(7,'Multiuso Teiú','Na limpeza do dia a dia da sua casa, o MULTIUSO TEIÚ agiliza a sua vida. Fácil de aplicar, proporciona limpeza eficiente, elimina gorduras, remove sujeiras mais difíceis e com suave perfume. Ideal para ser usado em diferentes superfícies e na remoção de diferentes tipos de sujeiras.','6.00','5.50','Coloque água em um recipiente e adicione a quantidade de Multiuso Teiu nesse recipiente e esfregue com uma vassoura a superficie','Conserve fora do alcance das crianças e dos animais domésticos','Ceramicas, paredes, etc.','imagem007.jpg',1),(8,'Sabão de Coco Teiú','À base de coco natural e produzido artesanalmente, o SABÃO DE COCO TEIÚ garante uma lavagem eficiente de roupas finas e delicadas. É um produto tradicional, com qualidade superior e grande aprovação dos consumidores.','6.00','5.60','Passe a barra de sabão sobre a superfice do tecido para limpeza profunda','Conserve fora do alcance das crianças e dos animais domésticos.','Roupas finas e delicadas','imagem008.jpg',1),(9,'Sabão Super Teiú','roduzido com a mais alta tecnologia, o sabão em barra SUPER TEIÚ é mais econômico, tem maior rendimento e é super eficiente contra as sujeiras. É glicerinado, tem múltiplo uso e pode ser utilizado na limpeza da casa, das roupas e louças.','3.50','2.90','Aplique o sabão em barra nas superficies desejadas para limpeza','Conserve fora do alcance das crianças e dos animais domésticos','Casa, Louça e Roupas','imagem009.jpg',1),(10,'Lava Louças Teiú','O LAVA LOUÇAS TEIÚ foi desenvolvido para garantir o máximo de rendimento na limpeza das louças. Por ser testado dermatologicamente, não agride a pele das mãos, podendo ser utilizado com toda segurança.','5.60','4.40','Adicione a quantidade necessária de lava louça para em uma esponja antiaderente e esfregue nas superficies desejadas. É possível também colocar em água para utilização.','Conserve fora do alcance das crianças e dos animais domésticos.','Louças','imagem010.jpg',1),(11,'Pedra Sanitária Teiú','Proporciona melhor perfumação no vaso sanitário em cada descarga. O seu poder odorizante sanitário proporciona qualidade e economia na sua utilização.','4.00','3.50','Utilizar em vasos sanitários com o auxilio da peça protetora que é utilizada como suporte','Conserve fora do alcance das crianças e dos animais domésticos.','Vasos Sanitários','imagem011.jpg',1),(12,'Esponja Antiaderente Teiú','Ideal para utilização em superfícies delicadas. Tem maior durabilidade, ação superior de limpeza e agente antibactéria.','3.50','3.00','Esfregar nas louças','Conserve fora do alcance das crianças e dos animais domésticos.','Louças','imagem012.jpg',1);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-16 21:48:40