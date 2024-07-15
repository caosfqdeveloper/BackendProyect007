
// 1- Importamos el módulo mysql2
const mysql = require("mysql2");

// 2- Configuramos conexion a la bd
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
});

// 3- conexion
connection.connect((err) => {
    // En caso de error, manejamos el error con un if
    if (err) {
        console.log("Error de conexión con el servidor: " + err);
        return;
    }

    // En caso OK, es decir si todo va bien!
    console.log("Estado de conexión: CONECTADA");

    // Creamos una consulta verificando la bbdd y si no existe la creamos
    const sqlCreatedb = 'CREATE DATABASE IF NOT EXISTS PetShop_db';

    // Pasamos la consulta a la bbdd
    connection.query(sqlCreatedb, (err, results) => {
        // En caso de error
        if (err) {
            console.log("Error de conexión con el servidor: " + err);
            return;
        }

        // Éxito
        console.log("Base de datos: CREADA/EXISTENTE/GARANTIZADA");

        // Cambiamos a la base de datos PetShop_db
        connection.changeUser({database: "PetShop_db"}, (err, results) => {
            // Manejo de errores
            if (err) {
                console.log("Error al cambiar a la base de datos PetShop_db: " + err);
                return;
            }

            // Éxito

            // Consulta SQL para crear la tabla products
            const createTableQuery = `
               CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        quantity INT NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        categoryId INT,
        FOREIGN KEY (categoryId) REFERENCES categories(id)
    );
            `;

            // Consulta SQL para crear la tabla categories
            const createCategoriesTableQuery = `
                CREATE TABLE IF NOT EXISTS categories (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    description VARCHAR(255),
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );

                
            `;

            // Pasamos la consulta de crear tabla products a la bbdd
            connection.query(createTableQuery, (err, results) => {
                // En caso de error
                if (err) {
                    console.error('Error al crear la tabla products:', err);
                    return;
                }

                // Éxito
                console.log("Tabla products: CREADA/EXISTENTE/GARANTIZADA");

                // Aquí se ejecuta la consulta para crear la tabla categories
                connection.query(createCategoriesTableQuery, (err, results) => {
                    // En caso de error
                    if (err) {
                        console.error('Error al crear la tabla categories:', err);
                        return;
                    }

                    // Éxito
                    console.log("Tabla categories: CREADA/EXISTENTE/GARANTIZADA");
                });
            });
        });
    });
});

// Exportación del módulo
module.exports = connection;
