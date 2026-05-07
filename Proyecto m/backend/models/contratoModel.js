const db = require('../config/db');

exports.getAll = (buscar, callback) => {
    db.query(`
        SELECT co.*,
            CONCAT(p.nombre, ' ', p.apellido) as cliente,
            a.direccion as apartamento
        FROM Contrato co
        INNER JOIN Cliente cl ON co.idCliente = cl.idCliente
        INNER JOIN Persona p ON cl.idPersona = p.idPersona
        INNER JOIN Apartamento a ON co.idApartamento = a.idApartamento
        WHERE a.direccion LIKE ? OR p.nombre LIKE ? OR p.apellido LIKE ?
    `, [`%${buscar}%`, `%${buscar}%`, `%${buscar}%`], callback);
};

exports.create = (data, callback) => {
    db.query(
        `INSERT INTO Contrato(idCliente, idApartamento, fechaInicio, fechaFin, valorMensual, observacion)
         VALUES(?,?,?,?,?,?)`,
        [data.idCliente, data.idApartamento, data.fechaInicio, data.fechaFin || null, data.valorMensual, data.observacion || null],
        callback
    );
};

exports.update = (id, data, callback) => {
    db.query(
        `UPDATE Contrato SET idCliente=?, idApartamento=?, fechaInicio=?, fechaFin=?, valorMensual=?, observacion=?
         WHERE idContrato=?`,
        [data.idCliente, data.idApartamento, data.fechaInicio, data.fechaFin || null, data.valorMensual, data.observacion || null, id],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query(
        'DELETE FROM Contrato WHERE idContrato=?',
        [id],
        callback
    );
};