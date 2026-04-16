const db = require('../config/db');

exports.getAll = (buscar, callback) => {
    db.query(`
        SELECT e.idEmpleado, p.idPersona, p.nombre, p.apellido
        FROM Empleado e
        JOIN Persona p ON e.idPersona = p.idPersona
        WHERE p.nombre LIKE ? OR p.apellido LIKE ?
    `, [`%${buscar}%`, `%${buscar}%`], callback);
};

exports.create = (data, callback) => {
    db.query(
        "INSERT INTO Empleado (idPersona) VALUES (?)",
        [data.idPersona],
        callback
    );
};

exports.update = (id, data, callback) => {
    db.query(
        "UPDATE Empleado SET idPersona=? WHERE idEmpleado=?",
        [data.idPersona, id],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query(
        "DELETE FROM Empleado WHERE idEmpleado=?",
        [id],
        callback
    );
};