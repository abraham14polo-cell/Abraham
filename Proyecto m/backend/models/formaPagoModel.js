const db = require('../config/db');

exports.getAll = (buscar, callback) => {
    db.query(
        'SELECT * FROM FormaPago WHERE descripcion LIKE ?',
        [`%${buscar}%`],
        callback
    );
};

exports.create = (data, callback) => {
    db.query(
        'INSERT INTO FormaPago(descripcion) VALUES(?)',
        [data.descripcion],
        callback
    );
};

exports.update = (id, data, callback) => {
    db.query(
        'UPDATE FormaPago SET descripcion=? WHERE idFormaPago=?',
        [data.descripcion, id],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query(
        'DELETE FROM FormaPago WHERE idFormaPago=?',
        [id],
        callback
    );
};