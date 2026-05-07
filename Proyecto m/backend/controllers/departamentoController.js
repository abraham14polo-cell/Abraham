const model = require('../models/departamentoModel');

exports.listar = (req, res) => {
    const buscar = req.query.buscar || "";
    model.getAll(buscar, (err, data) => {
        if (err) return res.status(500).json(err);
        res.json(data);
    });
};

exports.insertar = (req, res) => {
    model.create(req.body, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ ok: true });
    });
};

exports.actualizar = (req, res) => {
    model.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ ok: true });
    });
};

exports.eliminar = (req, res) => {
    model.delete(req.params.id, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ ok: true });
    });
};