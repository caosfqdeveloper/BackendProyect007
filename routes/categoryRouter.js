/**
 * Enrutador 
 * Endpoints
 */

// 1- Importamos el módulo
const express = require("express");

// 2- Instanciamos Router de express
const router = express.Router();

// 3- Importamos el módulo propio categoryController
const categoryController = require('../controllers/categoryController');

// 4- En categoryController programaremos el módulo junto a métodos GET, POST, PUT, DELETE
// Dejaremos sólo la declaración de las rutas, con sus métodos 
// y el llamado al categoryController con el método específico para cada opción 

// Ruta de listado en general
router.get('/', categoryController.getAllCategories);
//Ruta para la consulta de categorías por id
router.get('/:id', categoryController.getCategoryById);
//Ruta para crear una categoría
router.post('/', categoryController.createCategory);
//Ruta para actualizar una categoría
router.put('/:id', categoryController.updateCategory);
//Ruta para borrar una categoría
router.delete('/:id', categoryController.deleteCategory);

//5- Exportamos el módulo
module.exports = router;
