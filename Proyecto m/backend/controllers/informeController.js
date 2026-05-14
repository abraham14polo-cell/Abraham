const model = require('../models/informeModel');

exports.contratos = (req, res) => {
    const { fechaInicio, fechaFin } = req.query;
    model.getContratos(fechaInicio, fechaFin, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.pagosContrato = (req, res) => {
    const { fechaInicio, fechaFin } = req.query;
    model.getPagosContrato(fechaInicio, fechaFin, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.mantenimientos = (req, res) => {
    const { fechaInicio, fechaFin } = req.query;
    model.getMantenimientos(fechaInicio, fechaFin, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.pagosMantenimiento = (req, res) => {
    const { fechaInicio, fechaFin } = req.query;
    model.getPagosMantenimiento(fechaInicio, fechaFin, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.apartamentos = (req, res) => {
    const { estado } = req.query;
    model.getApartamentos(estado, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};