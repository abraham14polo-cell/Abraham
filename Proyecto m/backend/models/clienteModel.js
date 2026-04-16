const db = require('../config/db');

exports.getAll = (buscar, callback) => {
    db.query(`
        SELECT c.idCliente, p.idPersona, p.nombre, p.apellido
        FROM Cliente c
        JOIN Persona p ON c.idPersona = p.idPersona
        WHERE p.nombre LIKE ? OR p.apellido LIKE ?
    `, [`%${buscar}%`, `%${buscar}%`], callback);
};

exports.create = (data, callback) => {
    db.query(
        "INSERT INTO Cliente (idPersona) VALUES (?)",
        [data.idPersona],
        callback
    );
};

exports.update = (id, data, callback) => {
    db.query(
        "UPDATE Cliente SET idPersona=? WHERE idCliente=?",
        [data.idPersona, id],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query(
        "DELETE FROM Cliente WHERE idCliente=?",
        [id],
        callback
    );
};