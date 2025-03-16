-- Crear la base de datos (opcional, si tienes permisos para crearla)
CREATE DATABASE practicasql;

-- Conectarse a la base de datos
\c practicasql;

-- Crear la tabla de Estudiantes
CREATE TABLE Estudiantes (
    id_estudiante SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE,
    email VARCHAR(100),
    curso_actual INT
);

-- Crear la tabla de Cursos
CREATE TABLE Cursos (
    id_curso SERIAL PRIMARY KEY,
    nombre_curso VARCHAR(100) NOT NULL,
    descripcion TEXT,
    duracion_semanas INT
);

-- Crear la tabla de Profesores
CREATE TABLE Profesores (
    id_profesor SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    especialidad VARCHAR(100)
);

-- Crear la tabla de Inscripciones (relación muchos a muchos entre Estudiantes y Cursos)
CREATE TABLE Inscripciones (
    id_inscripcion SERIAL PRIMARY KEY,
    id_estudiante INT REFERENCES Estudiantes(id_estudiante),
    id_curso INT REFERENCES Cursos(id_curso),
    fecha_inscripcion DATE
);

-- Crear la tabla de Clases (relación uno a muchos entre Cursos y Profesores)
CREATE TABLE Clases (
    id_clase SERIAL PRIMARY KEY,
    id_curso INT REFERENCES Cursos(id_curso),
    id_profesor INT REFERENCES Profesores(id_profesor),
    fecha_clase DATE,
    tema_clase VARCHAR(100)
);

-- Insertar datos de prueba en Estudiantes
INSERT INTO Estudiantes (nombre, apellido, fecha_nacimiento, email, curso_actual) VALUES
('Juan', 'Pérez', '2000-05-15', 'juan.perez@example.com', 1),
('María', 'Gómez', '1999-09-23', 'maria.gomez@example.com', 2),
('Carlos', 'López', '2001-02-10', 'carlos.lopez@example.com', NULL),
('Ana', 'Martínez', '2000-11-05', 'ana.martinez@example.com', 1);

-- Insertar datos de prueba en Cursos
INSERT INTO Cursos (nombre_curso, descripcion, duracion_semanas) VALUES
('Matemáticas Avanzadas', 'Un curso para aprender cálculo avanzado y álgebra lineal.', 12),
('Historia Universal', 'Exploración de eventos históricos clave.', 8),
('Programación en Python', 'Introducción a la programación con Python.', 10);

-- Insertar datos de prueba en Profesores
INSERT INTO Profesores (nombre, apellido, especialidad) VALUES
('Laura', 'Fernández', 'Matemáticas'),
('Miguel', 'Rodríguez', 'Historia'),
('Sofía', 'García', 'Programación');

-- Insertar datos de prueba en Inscripciones
INSERT INTO Inscripciones (id_estudiante, id_curso, fecha_inscripcion) VALUES
(1, 1, '2024-01-10'),
(2, 2, '2024-01-11'),
(1, 3, '2024-01-15'),
(3, 3, '2024-01-20'),
(4, 1, '2024-01-25');

-- Insertar datos de prueba en Clases
INSERT INTO Clases (id_curso, id_profesor, fecha_clase, tema_clase) VALUES
(1, 1, '2024-01-16', 'Introducción al cálculo'),
(2, 2, '2024-01-17', 'Las civilizaciones antiguas'),
(3, 3, '2024-01-18', 'Fundamentos de Python'),
(1, 1, '2024-01-23', 'Álgebra lineal'),
(3, 3, '2024-01-25', 'Estructuras de datos en Python');
