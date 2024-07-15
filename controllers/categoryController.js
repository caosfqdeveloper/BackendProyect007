
/**
 * El controlador es el que tendrá los cambios más importantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllCategories
 * .getCategoryById
 * .createCategory
 * .updateCategory
 * .deleteCategory
 */

//1- Importamos el módulo db.js
const db = require("../db/db.js");

//2- .getAllCategories
const getAllCategories = (req, res) => {
    // creamos una consulta
    const sql = 'SELECT * FROM categories';

    //Eviamos la consulta a la bbdd
    db.query(sql, (err, result) => {
        //si sucede algun error
        if (err) { throw err }
        //si todo sale bien
        res.json(result)
    });
};

//3- .getCategoryById
const getCategoryById = (req, res) => {
    // desestructuramos el id de los parámetros de la solicitud
    const { id } = req.params;

    // creamos la consulta
    const sql = 'SELECT * FROM categories WHERE id = ?';

    // Enviamos la consulta a la bbdd
    db.query(sql, [id], (err, result) => {
        //si sucede algun error
        if (err) { throw err }
        //si todo sale bien
        res.json(result)
    });
}

//4- createCategory
const createCategory = (req, res) => {
    // desestructuramos el cuerpo de la solicitud
    const { name, description } = req.body;

    // creamos la consulta
    const sql = 'INSERT INTO categories (name, description) VALUES (?, ?)';

    //Enviamos la consulta a la bbdd
    db.query(sql, [name, description], (err, result) => {
        //si sucede algun error
        if (err) { throw err }
        //si todo sale bien
        res.json({ mensaje: "Categoría creada" })
    });
}

//5- updateCategory
const updateCategory = (req, res) => {
    // desestructuramos los parámetros de la solicitud
    const { id } = req.params;
    const { name, description } = req.body;

    // creamos la consulta sql
    const sql = 'UPDATE categories SET name = ?, description = ? WHERE id = ?';

    // enviamos consulta a la bbdd
    db.query(sql, [name, description, id], (err, result) => {
        //si sucede algun error
        if (err) { throw err }
        //si todo sale bien
        res.json({ mensaje: "Categoría actualizada" })
    });
}

//6- deleteCategory
const deleteCategory = (req, res) => {
    // desestructuramos los parámetros de la solicitud
    const { id } = req.params;

    // consulta sql
    const sql = 'DELETE FROM categories WHERE id = ?';

    // Pasamos la consulta
    db.query(sql, [id], (err, result) => {
        //si sucede algun error
        if (err) { throw err }
        //si todo sale bien
        res.json({ mensaje: "Categoría borrada" })
    });
}

//7- Exportamos los módulos
module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
}
