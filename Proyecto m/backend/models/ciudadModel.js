const db = require('../config/db');

exports.getAll = (buscar, callback) => {
    db.query(`
        SELECT c.*, d.nombre as departamento, d.idPais, p.nombre as pais
        FROM Ciudad c
        INNER JOIN Departamento d ON c.idDepartamento = d.idDepartamento
        INNER JOIN Pais p ON d.idPais = p.idPais
        WHERE c.nombre LIKE ?
    `, [`%${buscar}%`], callback);
};

exports.create = (data, callback) => {
    db.query(
        'INSERT INTO Ciudad(idDepartamento, nombre) VALUES(?,?)',
        [data.idDepartamento, data.nombre],
        callback
    );
};

exports.update = (id, data, callback) => {
    db.query(
        'UPDATE Ciudad SET idDepartamento=?, nombre=? WHERE idCiudad=?',
        [data.idDepartamento, data.nombre, id],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query(
        'DELETE FROM Ciudad WHERE idCiudad=?',
        [id],
        callback
    );
};