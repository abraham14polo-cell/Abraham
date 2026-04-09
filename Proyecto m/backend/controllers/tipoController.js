const model = require('../models/tipoModel');

exports.listar = (req, res) => {
    model.getAll((err, data) => {
        if (err) return res.status(500).json(err);
        res.json(data);
    });
};

exports.insertar = (req, res) => {
    model.create(req.body.descripcion, (err) => {
        if (err) return res.status(500).json(err);
        res.json({mensaje:"Insertado"});
    });
};

exports.actualizar = (req, res) => {
    model.update(req.params.id, req.body.descripcion, (err) => {
        if (err) return res.status(500).json(err);
        res.json({mensaje:"Actualizado"});
    });
};

exports.eliminar = (req, res) => {
    model.delete(req.params.id, (err) => {
        if (err) return res.status(500).json(err);
        res.json({mensaje:"Eliminado"});
    });
};