SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `informacion_parqueaderos` (
  `id` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `direccion` varchar(10) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `horario` varchar(200) NOT NULL,
  `precio` varchar(250) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `informacion_parqueaderos` (`id`, `nombre`, `direccion`, `telefono`, `horario`, `precio`) VALUES
(1,  'central_park', '234454', '12345', '24h', '4000'),
(2, 'zona_segura',  '23444567', '12345', '4am-11pm', '4000');

ALTER TABLE ` informacion_parqueaderos `
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `telefono` (`telefono`),
  ADD UNIQUE KEY `direccion` (`direccion`);

  ALTER TABLE `informacion_parqueaderos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;


CREATE TABLE `disponibilidad` (
  `id` int NOT NULL,
  `parqueadero_id` int NOT NULL,
  `espacios_disponibles` varchar(100) NOT NULL,
  `ultima_actualizacion` varchar(10) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `disponibilidad` (`id`, `parqueadero_id`, `espacios_disponibles`, `ultima_actualizacion`) VALUES
(1,  '908', '20', '2h'),
(2, '346',  '16', '20min');

ALTER TABLE `disponibilidad`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idParqueadero` (`idParqueadero`),


  ALTER TABLE `disponibilidad`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

CREATE TABLE `busquedas` (
  `id` int NOT NULL,
  `termino` int NOT NULL,
  `usuario_id` varchar(100) NOT NULL,
  `fecha` varchar(10) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `busquedas` (`id`, `termino`, `usuario_id`, `fecha`) VALUES
(1,  'parqueaderos en envigado', '202', '12-03-2024'),
(2, 'parqueadero en itagui',  '162', '03-04-2025');

ALTER TABLE `busquedas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario_id` (`usuario_id`),


  ALTER TABLE `busquedas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

CREATE TABLE `navegacion` (
  `id` int NOT NULL,
  `usuario_id` varchar(100) NOT NULL,
  `destino` int NOT NULL,
  `fecha` varchar(10) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `navegacion` (`id`, `usuario_id`, `destino`, `fecha`) VALUES
(1,  '027', 'zona_segura', '12-03-2024'),
(2, '439',  'central_zone', '03-04-2025');

ALTER TABLE `navegacion`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario_id` (`usuario_id`),


  ALTER TABLE `navegacion`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;