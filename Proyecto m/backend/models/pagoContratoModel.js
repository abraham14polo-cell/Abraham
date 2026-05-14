const db = require('../config/db');

exports.getAll = (buscar, callback) => {
    db.query(`
        SELECT pc.*,
            fp.descripcion AS formaPago,
            a.direccion AS apartamento,
            CONCAT(p.nombre, ' ', p.apellido) AS cliente
        FROM PagoContrato pc
        INNER JOIN Contrato c ON pc.idContrato = c.idContrato
        INNER JOIN Cliente cl ON c.idCliente = cl.idCliente
        INNER JOIN Persona p ON cl.idPersona = p.idPersona
        INNER JOIN Apartamento a ON c.idApartamento = a.idApartamento
        INNER JOIN FormaPago fp ON pc.idFormaPago = fp.idFormaPago
        WHERE a.direccion LIKE ? OR fp.descripcion LIKE ? OR p.nombre LIKE ?
    `, [`%${buscar}%`, `%${buscar}%`, `%${buscar}%`], callback);
};

exports.create = (data, callback) => {
    db.query(
        `INSERT INTO PagoContrato(idContrato, idFormaPago, fechaPago, valor)
         VALUES(?,?,?,?)`,
        [data.idContrato, data.idFormaPago, data.fechaPago, data.valor],
        callback
    );
};

exports.update = (id, data, callback) => {
    db.query(
        `UPDATE PagoContrato SET idContrato=?, idFormaPago=?, fechaPago=?, valor=?
         WHERE idPagoContrato=?`,
        [data.idContrato, data.idFormaPago, data.fechaPago, data.valor, id],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query(
        'DELETE FROM PagoContrato WHERE idPagoContrato=?',
        [id],
        callback
    );
};
