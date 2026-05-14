const db = require('../config/db');

exports.getAll = (buscar, callback) => {
    db.query(
        `SELECT u.idUsuario, u.nombreUsuario, u.clave,
                u.idPersona, u.idPerfil,
                CONCAT(p.nombre,' ',p.apellido) AS persona,
                pf.descripcion AS perfil
         FROM Usuario u
         JOIN Persona p ON u.idPersona = p.idPersona
         JOIN Perfil pf ON u.idPerfil = pf.idPerfil
         WHERE u.nombreUsuario LIKE ? OR p.nombre LIKE ?`,
        [`%${buscar}%`, `%${buscar}%`],
        callback
    );
};

exports.create = (data, callback) => {
    db.query(
        `INSERT INTO Usuario(nombreUsuario, clave, idPersona, idPerfil)
         VALUES(?,?,?,?)`,
        [data.nombreUsuario, data.clave, data.idPersona, data.idPerfil],
        callback
    );
};

exports.update = (id, data, callback) => {
    db.query(
        `UPDATE Usuario SET nombreUsuario=?, clave=?, idPersona=?, idPerfil=?
         WHERE idUsuario=?`,
        [data.nombreUsuario, data.clave, data.idPersona, data.idPerfil, id],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query(
        'DELETE FROM Usuario WHERE idUsuario=?',
        [id],
        callback
    );
};