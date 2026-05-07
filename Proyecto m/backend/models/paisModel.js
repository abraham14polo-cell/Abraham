const db = require('../config/db');

exports.getAll = (buscar, callback) => {
    db.query(
        'SELECT * FROM Pais WHERE nombre LIKE ?',
        [`%${buscar}%`],
        callback
    );
};

exports.create = (data, callback) => {
    db.query(
        'INSERT INTO Pais(nombre) VALUES(?)',
        [data.nombre],
        callback
    );
};

exports.update = (id, data, callback) => {
    db.query(
        'UPDATE Pais SET nombre=? WHERE idPais=?',
        [data.nombre, id],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query(
        'DELETE FROM Pais WHERE idPais=?',
        [id],
        callback
    );
};