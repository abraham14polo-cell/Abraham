const db = require('../config/db');

exports.getAll = (callback) => {
    db.query("SELECT * FROM TipoPersona", callback);
};

exports.create = (descripcion, callback) => {
    db.query(
        "INSERT INTO TipoPersona (descripcion) VALUES (?)",
        [descripcion],
        callback
    );
};

exports.update = (id, descripcion, callback) => {
    db.query(
        "UPDATE TipoPersona SET descripcion=? WHERE idTipoPersona=?",
        [descripcion, id],
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