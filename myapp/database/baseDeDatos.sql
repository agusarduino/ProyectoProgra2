CREATE SCHEMA mercado_libre;

USE mercado_libre;

CREATE TABLE usuarios (
	id 				INT 			UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre 			VARCHAR(100),
    apellido 		VARCHAR(100),
    email 			VARCHAR(100),
    contraseña 		VARCHAR(100),
    
    createdAt 		TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP,
    updatedAt 		TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt 		TIMESTAMP 		NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
	id 				INT 			UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	nombre 			VARCHAR(100),
    descripcion 	TEXT,
    id_usuario		INT 			UNSIGNED,
    
	createdAt 		TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP,
    updatedAt 		TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt 		TIMESTAMP 		NULL ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO usuarios VALUES (DEFAULT, 'Agustina', 'Arduino', 'aarduino@udesa.edu.ar', 'agusarduino123', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'Sofia', 'Kuo', 'skuo@udesa.edu.ar', 'sofikuo123', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'Tobias', 'Durand', 'tdurand@udesa.edu.ar', 'tobiasdurand123', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'Peter', 'Parker', 'pparker@udesa.edu.ar', 'peterparker123', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'Florence', 'Pugh', 'fpugh@udesa.edu.ar', 'florencepugh123', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos VALUES (DEFAULT, 'iPhone 16', 'iPhone 16 incluye una lente ultra gran angular de 12 MP que permite capturar más del entorno en cada foto.', DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, 'Macbook', 'Chip M3 con GPU de 10 núcleos (modelo con chip M3) 16 GB o 24 GB de memoria unificada. SSD de 512 GB, 1 TB o 2 TB. Adaptador de corrientproductose compacto de 35 W con dos puertos USB-C.', DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, 'iPad', 'Dispositivo de pantalla táctil que se encuentra categorizado como un intermedio entre los teléfonos inteligentes y los computadores portátiles.',DEFAULT,  DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, 'Magic Keyboard', 'El Magic Keyboard permite escribir con mayor comodidad y precisión. Es inalámbrico y recargable, y la batería integrada es increíblemente duradera, lo que hace que el teclado funcione durante un mes o más con una sola carga.', DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, 'Airpods', 'Los AirPods ofrecen funcionalidades que parecen mágicas, como la configuración con un toque, el cambio automático de dispositivo, 2 Compartir Audio y más.', DEFAULT, DEFAULT, DEFAULT, DEFAULT);