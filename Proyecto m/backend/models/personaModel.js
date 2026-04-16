const db = require('../config/db');

exports.getAll = (buscar, callback) => {
    db.query(`
        SELECT 
            p.idPersona,
            p.nombre,
            p.apellido,
            p.idTipoPersona,
            t.descripcion AS tipo
        FROM Persona p
        INNER JOIN TipoPersona t 
            ON p.idTipoPersona = t.idTipoPersona
        WHERE p.nombre LIKE ? OR p.apellido LIKE ?
    `, [`%${buscar}%`, `%${buscar}%`], callback);
};

exports.create = (data, callback) => {
    db.query(
        "INSERT INTO Persona (nombre, apellido, idTipoPersona) VALUES (?, ?, ?)",
        [data.nombre, data.apellido, data.idTipoPersona],
        (err, result) => {
            if (err) return callback(err);
            callback(null, result.insertId);
        }
    );
};

exports.update = (id, data, callback) => {
    db.query(
        "UPDATE Persona SET nombre=?, apellido=?, idTipoPersona=? WHERE idPersona=?",
        [data.nombre, data.apellido, data.idTipoPersona, id],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query(
        "DELETE FROM Persona WHERE idPersona=?",
        [id],
        callback
    );
};