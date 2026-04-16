const db = require('../config/db');

exports.getAll = (buscar, callback) => {
    db.query(
        "SELECT * FROM TipoPersona WHERE descripcion LIKE ?",
        [`%${buscar}%`],
        callback
    );
};

exports.create = (data, callback) => {
    db.query(
        "INSERT INTO TipoPersona (descripcion) VALUES (?)",
        [data.descripcion],
        callback
    );
};

exports.update = (id, data, callback) => {
    db.query(
        "UPDATE TipoPersona SET descripcion=? WHERE idTipoPersona=?",
        [data.descripcion, id],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query(
        "DELETE FROM TipoPersona WHERE idTipoPersona=?",
        [id],
        callback
    );
};