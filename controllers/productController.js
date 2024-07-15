/**
 * El controlador es el que tendrá los cambios más importantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllProducts
 * .getProductById
 * .createProduct
 * .updateProduct
 * .deleteProduct
 */

//1- Importamos el módulo db.js
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.

const db = require("../db/db.js");

//2- .getAllProducts
const getAllProducts = (req, res)=>{
    // creamos una consulta
    const sql = 'SELECT * FROM products';

    //Eviamos la consulta a la bbdd
    db.query(sql, (err, result)=>{
        //si sucede algun error
        if(err){throw err}
        //si todo sale bien
        res.json(result)
    });
};

//3- .getProductById
const getProductById = (req, res)=>{
    //1- Obtenemos la info de id que viene desde el cliente
    // const id = req.params.id;
    // Esta es una notacion de desestructuración {id}
    const {id} = req.params;

    // creamos la consulta
    // Creamos la consulta con marcador de posición ?
    const sql = 'SELECT * FROM products WHERE id = ?';

    // Enviamos la consulta a la bbdd
    db.query(sql,[id],(err, result)=>{
        //si sucede algun error
        if(err){throw err}
        //si todo sale bien
        res.json(result)
    });
}

//4- createProduct
const createProduct = (req, res)=>{
    // desestructuramos la req
    const {title, description, quantity, price} = req.body;

    // creamos la consulta
    const sql = 'INSERT INTO products (title, description, quantity, price) VALUES (?, ?, ?, ?)';

    //Enviamos la consulta a la bbdd
    db.query(sql,[title, description, quantity, price],(err, result)=>{
        //si sucede algun error
        if(err){throw err}
        //si todo sale bien
        res.json({mensaje:"Producto creado"})
    });
}

//5- updateProduct
const updateProduct = (req, res)=>{
    // desestructuracion de la consulta
    const {id} = req.params;
    const {title, description, quantity, price} = req.body;

    // creamos la consulta sql
    const sql = 'UPDATE products SET title = ?, description = ?, quantity = ?, price = ? WHERE id = ?';

    // enviamos consulta a la bbdd
    db.query(sql,[title, description, quantity, price, id],(err, result)=>{
        //si sucede algun error
        if(err){throw err}
        //si todo sale bien
        res.json({mensaje:"Producto actualizado"})
    });
}

//6- Delete
const deleteProduct = (req, res)=>{
    // desestructuracion
    const {id} = req.params;

    // consulta sql
    const sql = 'DELETE FROM products WHERE id = ?';

    // Pasamos la consulta
    db.query(sql,[id], (err, result)=>{
        //si sucede algun error
        if(err){throw err}
        //si todo sale bien
        res.json({mensaje:"Producto borrado"})
    });
}

//7- Exportamos los módulos
module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}

// 8- Pasamos a codificar db.js