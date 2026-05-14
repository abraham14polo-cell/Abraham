const db = require('../config/db');

// INFORME 1: Contratos por rango de fecha
exports.getContratos = (fechaInicio, fechaFin, callback) => {
    db.query(`
        SELECT 
            c.idContrato,
            c.fechaInicio,
            c.fechaFin,
            c.valorMensual,
            c.observacion,
            CONCAT(p.nombre, ' ', p.apellido) AS cliente,
            a.direccion AS apartamento,
            ci.nombre AS ciudad
        FROM contrato c
        INNER JOIN cliente cl ON c.idCliente = cl.idCliente
        INNER JOIN persona p ON cl.idPersona = p.idPersona
        INNER JOIN apartamento a ON c.idApartamento = a.idApartamento
        INNER JOIN ciudad ci ON a.idCiudad = ci.idCiudad
        WHERE c.fechaInicio BETWEEN ? AND ?
        ORDER BY c.fechaInicio DESC
    `, [fechaInicio, fechaFin], callback);
};

// INFORME 2: Pagos de Contrato por rango de fecha
exports.getPagosContrato = (fechaInicio, fechaFin, callback) => {
    db.query(`
        SELECT 
            pc.idPagoContrato,
            pc.fechaPago,
            pc.valor,
            CONCAT(p.nombre, ' ', p.apellido) AS cliente,
            a.direccion AS apartamento,
            fp.descripcion AS formaPago
        FROM pagocontrato pc
        INNER JOIN contrato c ON pc.idContrato = c.idContrato
        INNER JOIN cliente cl ON c.idCliente = cl.idCliente
        INNER JOIN persona p ON cl.idPersona = p.idPersona
        INNER JOIN apartamento a ON c.idApartamento = a.idApartamento
        INNER JOIN formapago fp ON pc.idFormaPago = fp.idFormaPago
        WHERE pc.fechaPago BETWEEN ? AND ?
        ORDER BY pc.fechaPago DESC
    `, [fechaInicio, fechaFin], callback);
};

// INFORME 3: Mantenimientos por rango de fecha
exports.getMantenimientos = (fechaInicio, fechaFin, callback) => {
    db.query(`
        SELECT 
            m.idMantenimiento,
            m.fecha,
            m.descripcion,
            m.valor,
            a.direccion AS apartamento,
            CONCAT(p.nombre, ' ', p.apellido) AS empleado
        FROM mantenimiento m
        INNER JOIN apartamento a ON m.idApartamento = a.idApartamento
        INNER JOIN empleado e ON m.idEmpleado = e.idEmpleado
        INNER JOIN persona p ON e.idPersona = p.idPersona
        WHERE m.fecha BETWEEN ? AND ?
        ORDER BY m.fecha DESC
    `, [fechaInicio, fechaFin], callback);
};

// INFORME 4: Pagos de Mantenimiento por rango de fecha
exports.getPagosMantenimiento = (fechaInicio, fechaFin, callback) => {
    db.query(`
        SELECT 
            pm.idPagoMantenimiento,
            pm.fechaPago,
            pm.valor,
            a.direccion AS apartamento,
            CONCAT(p.nombre, ' ', p.apellido) AS empleado,
            fp.descripcion AS formaPago
        FROM pagomantenimiento pm
        INNER JOIN mantenimiento m ON pm.idMantenimiento = m.idMantenimiento
        INNER JOIN apartamento a ON m.idApartamento = a.idApartamento
        INNER JOIN empleado e ON m.idEmpleado = e.idEmpleado
        INNER JOIN persona p ON e.idPersona = p.idPersona
        INNER JOIN formapago fp ON pm.idFormaPago = fp.idFormaPago
        WHERE pm.fechaPago BETWEEN ? AND ?
        ORDER BY pm.fechaPago DESC
    `, [fechaInicio, fechaFin], callback);
};

// INFORME 5: Apartamentos por estado (0=libre, 1=ocupado)
exports.getApartamentos = (estado, callback) => {
    db.query(`
        SELECT 
            a.idApartamento,
            a.direccion,
            a.numeroHabitacion,
            a.pagoMensual,
            CAST(a.estado AS UNSIGNED) AS estado,
            ci.nombre AS ciudad,
            d.nombre AS departamento,
            CONCAT(p.nombre, ' ', p.apellido) AS propietario
        FROM apartamento a
        INNER JOIN ciudad ci ON a.idCiudad = ci.idCiudad
        INNER JOIN departamento d ON ci.idDepartamento = d.idDepartamento
        INNER JOIN propietario pr ON a.idPropietario = pr.idPropietario
        INNER JOIN persona p ON pr.idPersona = p.idPersona
        WHERE a.estado = ?
        ORDER BY ci.nombre, a.direccion
    `, [estado], callback);
};