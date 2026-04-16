const db = require('../config/db');

exports.getAll = (buscar, callback) => {
    db.query(`
        SELECT pr.idPropietario, p.idPersona, p.nombre, p.apellido
        FROM Propietario pr
        JOIN Persona p ON pr.idPersona = p.idPersona
        WHERE p.nombre LIKE ? OR p.apellido LIKE ?
    `, [`%${buscar}%`, `%${buscar}%`], callback);
};

exports.create = (data, callback) => {
    db.query(
        "INSERT INTO Propietario (idPersona) VALUES (?)",
        [data.idPersona],
        callback
    );
};

exports.update = (id, data, callback) => {
    db.query(
        "UPDATE Propietario SET idPersona=? WHERE idPropietario=?",
        [data.idPersona, id],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query(
        "DELETE FROM Propietario WHERE idPropietario=?",
        [id],
        callback
    );
};