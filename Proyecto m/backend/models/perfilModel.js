const db = require('../config/db');

exports.getAll = (buscar, callback) => {
    db.query(
        'SELECT * FROM Perfil WHERE descripcion LIKE ?',
        [`%${buscar}%`],
        callback
    );
};

exports.create = (data, callback) => {
    db.query(
        'INSERT INTO Perfil(descripcion) VALUES(?)',
        [data.descripcion],
        callback
    );
};

exports.update = (id, data, callback) => {
    db.query(
        'UPDATE Perfil SET descripcion=? WHERE idPerfil=?',
        [data.descripcion, id],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query(
        'DELETE FROM Perfil WHERE idPerfil=?',
        [id],
        callback
    );
};