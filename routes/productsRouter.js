// src/routes/productRoutes.js
/**
 * Enrutador 
 * Endpoints
 */

// 1- Importamos el módulo
const express = require("express");

// 2- Instanciamos Router de express
const router = express.Router();

// 3- Importamos el módulo propio productController (a realizarlo a futuro)
const productController = require('../controllers/productController');

// 4- En productController programaremos el módulo junto a métodos GET, POST, PUT, DELETE
// Dejaremos sólo la declaración de las rutas, con sus métodos 
// y el llamado al productController con el método específico para cada opción 

// Ruta de listado en general
router.get('/', productController.getAllProducts);
//Ruta para la consulta de productos por id
router.get('/:id', productController.getProductById);
//Ruta para crear una producto
router.post('/', productController.createProduct);
//Ruta para actualizar un producto
router.put('/:id', productController.updateProduct);
//Ruta para borrar un producto
router.delete('/:id', productController.deleteProduct);

//5- Exportamos el módulo
module.exports = router;

//6- Pasamos a configurar productController.js
