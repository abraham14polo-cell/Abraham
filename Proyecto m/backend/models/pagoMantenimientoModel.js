const db = require('../config/db');

exports.getAll = (buscar, callback) => {
    db.query(`
        SELECT pm.*,
            fp.descripcion as formaPago,
            a.direccion as apartamento
        FROM PagoMantenimiento pm
        INNER JOIN Mantenimiento m ON pm.idMantenimiento = m.idMantenimiento
        INNER JOIN Apartamento a ON m.idApartamento = a.idApartamento
        INNER JOIN FormaPago fp ON pm.idFormaPago = fp.idFormaPago
        WHERE a.direccion LIKE ? OR fp.descripcion LIKE ?
    `, [`%${buscar}%`, `%${buscar}%`], callback);
};

exports.create = (data, callback) => {
    db.query(
        `INSERT INTO PagoMantenimiento(idMantenimiento, idFormaPago, fechaPago, valor)
         VALUES(?,?,?,?)`,
        [data.idMantenimiento, data.idFormaPago, data.fechaPago, data.valor],
        callback
    );
};

exports.update = (id, data, callback) => {
    db.query(
        `UPDATE PagoMantenimiento SET idMantenimiento=?, idFormaPago=?, fechaPago=?, valor=?
         WHERE idPagoMantenimiento=?`,
        [data.idMantenimiento, data.idFormaPago, data.fechaPago, data.valor, id],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query(
        'DELETE FROM PagoMantenimiento WHERE idPagoMantenimiento=?',
        [id],
        callback
    );
};