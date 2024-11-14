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
    deletedAt 		TIMESTAMP 		NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) 		REFERENCES usuarios(id)
);

INSERT INTO usuarios VALUES (DEFAULT, 'Agustina', 'Arduino', 'aarduino@udesa.edu.ar', 'agusarduino123', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'Sofia', 'Kuo', 'skuo@udesa.edu.ar', 'sofikuo123', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'Tobias', 'Durand', 'tdurand@udesa.edu.ar', 'tobiasdurand123', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'Peter', 'Parker', 'pparker@udesa.edu.ar', 'peterparker123', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'Florence', 'Pugh', 'fpugh@udesa.edu.ar', 'florencepugh123', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos VALUES (DEFAULT, 'TV Samsung Smart', 'Un televisor Samsung Smart TV ofrece una experiencia de entretenimiento avanzada gracias a su conectividad inteligente y sus opciones de streaming integradas. Con una pantalla de alta resolución, ya sea 4K o 8K, y tecnologías como QLED o Crystal UHD (según el modelo), proporciona imágenes nítidas, colores vivos y negros profundos. Su sistema operativo Tizen permite acceder fácilmente a aplicaciones de streaming como Netflix, YouTube y Disney+, así como a un navegador web. Incluye control por voz mediante asistentes como Bixby, Alexa o Google Assistant y opciones de conectividad como Bluetooth y Wi-Fi, brindando una experiencia interactiva y completa.', 1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, 'Samsung Galaxy s10', 'El Samsung Galaxy S10 es un teléfono inteligente de gama alta lanzado en 2019. Destaca por su pantalla Dynamic AMOLED de 6.1 pulgadas con resolución Quad HD+ y bordes curvos, brindando colores vibrantes y una experiencia visual inmersiva. Incorpora un procesador potente (Exynos 9820 o Snapdragon 855, dependiendo de la región) y 8 GB de RAM, lo que permite un rendimiento fluido en aplicaciones y juegos. Su sistema de cámaras traseras triple (principal, ultra gran angular y teleobjetivo) ofrece versatilidad fotográfica y calidad en distintas condiciones de luz. El S10 también incluye un lector de huellas ultrasónico bajo la pantalla y carga inalámbrica inversa, permitiendo cargar otros dispositivos.', 3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, 'Macbook pro', 'MacBook Pro es una laptop de alto rendimiento de Apple, diseñada para usuarios profesionales y creativos. Viene en tamaños de 13, 14 y 16 pulgadas, con pantallas Retina o Liquid Retina XDR, que ofrecen una calidad de imagen excepcional con alta resolución, colores precisos y gran contraste. Los modelos más recientes están equipados con los potentes chips M1 Pro, M1 Max o M2 de Apple, que proporcionan un rendimiento superior en multitarea y en aplicaciones exigentes, como edición de video y diseño gráfico. Su diseño es elegante y robusto, con un teclado retroiluminado mejorado y un trackpad grande y sensible. Además, cuenta con una amplia gama de puertos, batería de larga duración y sonido de alta fidelidad, lo que la convierte en una de las laptops más versátiles y potentes del mercado.', 2,  DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, 'Nescafe Dolce Gusto', 'El Nescafé Dolce Gusto es un sistema de cápsulas de café diseñado para ofrecer una variedad de bebidas de alta calidad de forma rápida y sencilla. Con una amplia gama de sabores y tipos de café, como espresso, cappuccino, latte y chocolates calientes, las máquinas Dolce Gusto utilizan cápsulas herméticas que conservan la frescura del café. Su diseño compacto y fácil uso lo hacen ideal para el hogar o la oficina, brindando la experiencia de un café profesional sin complicaciones.', 2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, 'Airpods', 'Los AirPods ofrecen funcionalidades que parecen mágicas, como la configuración con un toque, el cambio automático de dispositivo, 2 Compartir Audio y más.', 2, DEFAULT, DEFAULT, DEFAULT);