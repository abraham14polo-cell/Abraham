const db = require('../config/db');

exports.getAll = (buscar, callback) => {
    db.query(`
        SELECT m.*,
            a.direccion as apartamento,
            CONCAT(p.nombre, ' ', p.apellido) as empleado
        FROM Mantenimiento m
        INNER JOIN Apartamento a ON m.idApartamento = a.idApartamento
        INNER JOIN Empleado e ON m.idEmpleado = e.idEmpleado
        INNER JOIN Persona p ON e.idPersona = p.idPersona
        WHERE a.direccion LIKE ? OR p.nombre LIKE ? OR p.apellido LIKE ?
    `, [`%${buscar}%`, `%${buscar}%`, `%${buscar}%`], callback);
};

exports.create = (data, callback) => {
    db.query(
        `INSERT INTO Mantenimiento(idApartamento, idEmpleado, fecha, descripcion, valor)
         VALUES(?,?,?,?,?)`,
        [data.idApartamento, data.idEmpleado, data.fecha, data.descripcion || null, data.valor],
        callback
    );
};

exports.update = (id, data, callback) => {
    db.query(
        `UPDATE Mantenimiento SET idApartamento=?, idEmpleado=?, fecha=?, descripcion=?, valor=?
         WHERE idMantenimiento=?`,
        [data.idApartamento, data.idEmpleado, data.fecha, data.descripcion || null, data.valor, id],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query(
        'DELETE FROM Mantenimiento WHERE idMantenimiento=?',
        [id],
        callback
    );
};