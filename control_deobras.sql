-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-06-2025 a las 07:15:59
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `control_deobras`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `id` int(11) NOT NULL,
  `descript` varchar(100) DEFAULT NULL,
  `area` int(11) DEFAULT NULL,
  `proyecto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`id`, `descript`, `area`, `proyecto`) VALUES
(16, 'Vertido de grounting 3500 psi', 10, 8),
(17, 'Soldado de tuberia de 12 ', 11, 8),
(18, 'Alineacion de bombas Booster', 11, 7),
(20, 'Excavado de banco de ductos', 12, 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `areas`
--

CREATE TABLE `areas` (
  `id` int(11) NOT NULL,
  `area_` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `areas`
--

INSERT INTO `areas` (`id`, `area_`) VALUES
(10, 'Civil'),
(11, 'Mecanica'),
(12, 'Electrica'),
(13, 'Instrumentación'),
(14, 'Precomisinamiento'),
(15, 'Comisionamiento'),
(16, 'Staff Neiva');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargos`
--

CREATE TABLE `cargos` (
  `id` int(11) NOT NULL,
  `cargo` varchar(30) DEFAULT NULL,
  `area` int(11) DEFAULT NULL,
  `proyecto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cargos`
--

INSERT INTO `cargos` (`id`, `cargo`, `area`, `proyecto`) VALUES
(5, 'Maestro de obra', 11, 12),
(6, 'Tubero', 11, 8),
(7, 'Soldador', 11, 8),
(8, 'Intrumentador', 13, 8),
(9, 'Programador', 11, 13);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `cedula` int(11) NOT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `cargo` int(11) DEFAULT NULL,
  `area` int(11) DEFAULT NULL,
  `ciudad` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='					';

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombres`, `apellidos`, `cedula`, `telefono`, `cargo`, `area`, `ciudad`) VALUES
(7, 'Edwin', 'Bladimir', 79790998, '3005694201', 5, 11, 'Bogota'),
(8, 'Jairo', 'Torres', 19313098, '3014118071', 6, 12, 'Bogotá'),
(9, 'Maria', 'Corredor', 41674321, '3014118094', 7, 12, 'Bogotá'),
(10, 'Eduardo', 'Prieto', 2147483647, '30054848', 5, 13, 'Brisbane'),
(11, 'Cocuyo', 'torres', 19654879, '3018515', 6, 11, 'Bogota');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `id` int(11) NOT NULL,
  `name_machine` varchar(30) DEFAULT NULL,
  `area` int(11) DEFAULT NULL,
  `proyecto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`id`, `name_machine`, `area`, `proyecto`) VALUES
(5, 'Moto soldador marca Pulman', 11, 8),
(6, 'Rana ', 10, 8),
(7, 'Camion grua', 12, 8),
(8, 'Bomba de PH', 11, 9),
(9, 'Camioneta Chevrolet luv', 12, 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materiales`
--

CREATE TABLE `materiales` (
  `id` int(11) NOT NULL,
  `name_mat` varchar(30) DEFAULT NULL,
  `area` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materiales`
--

INSERT INTO `materiales` (`id`, `name_mat`, `area`) VALUES
(6, 'Gravilla de Rio', '10'),
(7, 'Arena de rio para sandblasting', '11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `id` int(11) NOT NULL,
  `proyectos` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`id`, `proyectos`) VALUES
(7, 'Quifa01'),
(8, 'Quifa02'),
(9, 'Cajua01'),
(10, 'Cajua02'),
(12, 'Frontera01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte_d_detalle_maq`
--

CREATE TABLE `reporte_d_detalle_maq` (
  `id` int(11) NOT NULL,
  `id_maqu` int(11) DEFAULT NULL,
  `cantidad` double DEFAULT NULL,
  `proveedor` varchar(30) DEFAULT NULL,
  `consecu` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reporte_d_detalle_maq`
--

INSERT INTO `reporte_d_detalle_maq` (`id`, `id_maqu`, `cantidad`, `proveedor`, `consecu`) VALUES
(1, NULL, 1.1, 'Edwin', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte_d_detalle_mat`
--

CREATE TABLE `reporte_d_detalle_mat` (
  `id` int(11) NOT NULL,
  `id_mat` int(11) DEFAULT NULL,
  `cantidad` double DEFAULT NULL,
  `proveedor` varchar(30) DEFAULT NULL,
  `consecu` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reporte_d_detalle_mat`
--

INSERT INTO `reporte_d_detalle_mat` (`id`, `id_mat`, `cantidad`, `proveedor`, `consecu`) VALUES
(1, 6, 1.5, 'Bladimir', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte_d_detalle_personal`
--

CREATE TABLE `reporte_d_detalle_personal` (
  `id` int(11) NOT NULL,
  `cedula` int(11) DEFAULT NULL,
  `consecu` int(11) DEFAULT NULL,
  `horas` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reporte_d_detalle_personal`
--

INSERT INTO `reporte_d_detalle_personal` (`id`, `cedula`, `consecu`, `horas`) VALUES
(1, 79790998, 1, 11.50),
(2, 19313098, 1, 11.10),
(3, 41674321, 1, 5.50);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte_d_encabezado`
--

CREATE TABLE `reporte_d_encabezado` (
  `id` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `proyectos` int(11) DEFAULT NULL,
  `area` int(11) DEFAULT NULL,
  `fechainicio` datetime DEFAULT NULL,
  `fechafin` datetime DEFAULT NULL,
  `responsable` varchar(100) DEFAULT NULL,
  `linea` varchar(30) DEFAULT NULL,
  `tiempo` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reporte_d_encabezado`
--

INSERT INTO `reporte_d_encabezado` (`id`, `fecha`, `proyectos`, `area`, `fechainicio`, `fechafin`, `responsable`, `linea`, `tiempo`) VALUES
(1, '2025-06-16', 7, 12, '2025-06-16 12:11:00', '2025-06-16 23:11:00', 'EDWIN BLADIMIR TORRES CORREDOR', 'Comunicacion Quifa- Cajua1', 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `report_actividades`
--

CREATE TABLE `report_actividades` (
  `id` int(11) NOT NULL,
  `id_descr_acti` int(11) DEFAULT NULL,
  `cantidad` double DEFAULT NULL,
  `consecu` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `report_actividades`
--

INSERT INTO `report_actividades` (`id`, `id_descr_acti`, `cantidad`, `consecu`) VALUES
(1, 18, 1.8, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `report_activ_sigu`
--

CREATE TABLE `report_activ_sigu` (
  `id` int(11) NOT NULL,
  `id_descr_acti` int(11) DEFAULT NULL,
  `cantidad` double DEFAULT NULL,
  `consecu` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `report_activ_sigu`
--

INSERT INTO `report_activ_sigu` (`id`, `id_descr_acti`, `cantidad`, `consecu`) VALUES
(1, 20, 9.2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `IdUsuario` int(11) NOT NULL,
  `Tipo_Id` varchar(2) DEFAULT NULL,
  `Identificacion` decimal(10,0) DEFAULT NULL,
  `Nombres` varchar(40) DEFAULT NULL,
  `Apellidos` varchar(40) DEFAULT NULL,
  `Email` varchar(40) DEFAULT NULL,
  `Password` varchar(30) DEFAULT NULL,
  `FechaNacimiento` date DEFAULT NULL,
  `Rol` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`IdUsuario`, `Tipo_Id`, `Identificacion`, `Nombres`, `Apellidos`, `Email`, `Password`, `FechaNacimiento`, `Rol`) VALUES
(7, 'CC', 79790998, 'EDWIN BLADIMIR', 'TORRES CORREDOR', 'edwintorresapp@gmail.com', 'Alope2024*', '1977-03-10', 'S'),
(8, 'CC', 19313098, 'JAIRO ALBERTO', 'TORRES LOPEZ', 'jaaltolo54@hotmail.com', 'Lugarda73', '1954-11-05', 'S'),
(18, 'CC', 19439126, 'CARLOS BERNARDINO jr', 'TORRES LÓPEZ', 'cocuyo2torres@hotmail.com', 'Santafe10*', '1961-03-17', 'S');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_areas_id` (`id`);

--
-- Indices de la tabla `cargos`
--
ALTER TABLE `cargos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_cargos_id` (`id`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cedula` (`cedula`,`nombres`),
  ADD KEY `idx_empleados_cargo` (`cargo`),
  ADD KEY `idx_empleados_area` (`area`);

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `area` (`area`,`name_machine`),
  ADD UNIQUE KEY `proyecto` (`proyecto`,`name_machine`);

--
-- Indices de la tabla `materiales`
--
ALTER TABLE `materiales`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reporte_d_detalle_maq`
--
ALTER TABLE `reporte_d_detalle_maq`
  ADD PRIMARY KEY (`id`),
  ADD KEY `consecu` (`consecu`);

--
-- Indices de la tabla `reporte_d_detalle_mat`
--
ALTER TABLE `reporte_d_detalle_mat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `consecu` (`consecu`);

--
-- Indices de la tabla `reporte_d_detalle_personal`
--
ALTER TABLE `reporte_d_detalle_personal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `consecu` (`consecu`);

--
-- Indices de la tabla `reporte_d_encabezado`
--
ALTER TABLE `reporte_d_encabezado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `report_actividades`
--
ALTER TABLE `report_actividades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `consecu` (`consecu`);

--
-- Indices de la tabla `report_activ_sigu`
--
ALTER TABLE `report_activ_sigu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `consecu` (`consecu`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`IdUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades`
--
ALTER TABLE `actividades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `areas`
--
ALTER TABLE `areas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `cargos`
--
ALTER TABLE `cargos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `materiales`
--
ALTER TABLE `materiales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `reporte_d_detalle_maq`
--
ALTER TABLE `reporte_d_detalle_maq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `reporte_d_detalle_mat`
--
ALTER TABLE `reporte_d_detalle_mat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `reporte_d_detalle_personal`
--
ALTER TABLE `reporte_d_detalle_personal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `reporte_d_encabezado`
--
ALTER TABLE `reporte_d_encabezado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `report_actividades`
--
ALTER TABLE `report_actividades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `report_activ_sigu`
--
ALTER TABLE `report_activ_sigu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `IdUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `empleados_ibfk_1` FOREIGN KEY (`area`) REFERENCES `areas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_empleados_cargo` FOREIGN KEY (`cargo`) REFERENCES `cargos` (`id`);

--
-- Filtros para la tabla `reporte_d_detalle_maq`
--
ALTER TABLE `reporte_d_detalle_maq`
  ADD CONSTRAINT `reporte_d_detalle_maq_ibfk_1` FOREIGN KEY (`consecu`) REFERENCES `reporte_d_encabezado` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `reporte_d_detalle_mat`
--
ALTER TABLE `reporte_d_detalle_mat`
  ADD CONSTRAINT `reporte_d_detalle_mat_ibfk_1` FOREIGN KEY (`consecu`) REFERENCES `reporte_d_encabezado` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `reporte_d_detalle_personal`
--
ALTER TABLE `reporte_d_detalle_personal`
  ADD CONSTRAINT `reporte_d_detalle_personal_ibfk_1` FOREIGN KEY (`consecu`) REFERENCES `reporte_d_encabezado` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `report_actividades`
--
ALTER TABLE `report_actividades`
  ADD CONSTRAINT `report_actividades_ibfk_1` FOREIGN KEY (`consecu`) REFERENCES `reporte_d_encabezado` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `report_activ_sigu`
--
ALTER TABLE `report_activ_sigu`
  ADD CONSTRAINT `report_activ_sigu_ibfk_1` FOREIGN KEY (`consecu`) REFERENCES `reporte_d_encabezado` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
