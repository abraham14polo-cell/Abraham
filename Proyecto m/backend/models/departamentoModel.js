const db = require('../config/db');

exports.getAll = (buscar, callback) => {
    db.query(`
        SELECT d.*, p.nombre as pais
        FROM Departamento d
        INNER JOIN Pais p ON d.idPais = p.idPais
        WHERE d.nombre LIKE ?
    `, [`%${buscar}%`], callback);
};

exports.create = (data, callback) => {
    db.query(
        'INSERT INTO Departamento(idPais, nombre) VALUES(?,?)',
        [data.idPais, data.nombre],
        callback
    );
};

exports.update = (id, data, callback) => {
    db.query(
        'UPDATE Departamento SET idPais=?, nombre=? WHERE idDepartamento=?',
        [data.idPais, data.nombre, id],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query(
        'DELETE FROM Departamento WHERE idDepartamento=?',
        [id],
        callback
    );
};