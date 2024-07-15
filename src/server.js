// src/server.js
/**
 * Punto principal de acceso al servidor
 */

//1- Importamos express
const express = require('express');

//2- Instanciamos express
const app = express();

//3- Importamos el módulo productRoutes (se lo diseñará a futuro)
const productRoutes = require('../routes/productsRouter');

//4- Importamos el módulo categoryRoutes (se lo diseñará a futuro)
const categoryRoutes = require('../routes/categoryRouter');



//5- Declaramos el puerto
const PORT = 3002; 

//6- Uso del middleware .json que convierte el cuerpo de solicitud
// en algo accesible por js
app.use(express.json());

//7- Prefijo principal de las rutas y delegación de las sub-rutas
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

//8- Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});

//9- Pasamos a configurar el router