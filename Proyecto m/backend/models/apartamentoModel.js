const db = require('../config/db');

exports.getAll = (buscar, callback) => {
    db.query(`
        SELECT a.*, 
            CONCAT(p.nombre, ' ', p.apellido) as propietario,
            c.nombre as ciudad
        FROM Apartamento a
        INNER JOIN Propietario pr ON a.idPropietario = pr.idPropietario
        INNER JOIN Persona p ON pr.idPersona = p.idPersona
        INNER JOIN Ciudad c ON a.idCiudad = c.idCiudad
        WHERE a.direccion LIKE ?
    `, [`%${buscar}%`], callback);
};

exports.create = (data, callback) => {
    db.query(
        `INSERT INTO Apartamento(idPropietario, idCiudad, direccion, numeroHabitacion, estado, pagoMensual)
         VALUES(?,?,?,?,?,?)`,
        [data.idPropietario, data.idCiudad, data.direccion, data.numeroHabitacion, data.estado, data.pagoMensual],
        callback
    );
};

exports.update = (id, data, callback) => {
    db.query(
        `UPDATE Apartamento SET idPropietario=?, idCiudad=?, direccion=?, numeroHabitacion=?, estado=?, pagoMensual=?
         WHERE idApartamento=?`,
        [data.idPropietario, data.idCiudad, data.direccion, data.numeroHabitacion, data.estado, data.pagoMensual, id],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query(
        'DELETE FROM Apartamento WHERE idApartamento=?',
        [id],
        callback
    );
};