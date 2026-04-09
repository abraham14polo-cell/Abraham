const db = require('../config/db');

exports.getAll = (buscar, callback) => {
    const sql = `
        SELECT p.*, tp.descripcion 
        FROM Persona p
        INNER JOIN TipoPersona tp 
        ON p.idTipoPersona = tp.idTipoPersona
        WHERE p.nombre LIKE ? OR p.apellido LIKE ?
    `;
    db.query(sql, [`%${buscar}%`, `%${buscar}%`], callback);
};

exports.create = (data, callback) => {
    const sql = `
        INSERT INTO Persona (nombre, apellido, idTipoPersona) 
        VALUES (?, ?, ?)
    `;
    db.query(sql, [data.nombre, data.apellido, data.idTipoPersona], callback);
};

exports.update = (id, data, callback) => {
    const sql = `
        UPDATE Persona 
        SET nombre=?, apellido=?, idTipoPersona=? 
        WHERE idPersona=?
    `;
    db.query(sql, [data.nombre, data.apellido, data.idTipoPersona, id], callback);
};

exports.delete = (id, callback) => {
    db.query("DELETE FROM Persona WHERE idPersona=?", [id], callback);
};