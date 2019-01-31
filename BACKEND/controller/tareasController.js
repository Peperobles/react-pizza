const tareasModel = require('../models/Tareas');


var controller = {
    addTarea: (req, res) => {
        let tarea = new tareasModel();
        tarea.estado = req.body.status;
        tarea.contenido = req.body.content;
        tarea.save((err, result) => {
            if (err) {
                return res.send(err);
            } else {
                let tarea = {
                    id: result._id,
                    estado: result.estado,
                    contenido: result.contenido
                }
                return res.status(200).send(tarea)
            }
        })
    },
    getTareas: (req, res) => {
        // HAcemos uso del metodo find con un objeto vacío para que los muestre todos, pero puedo indicar cualquier filtrado por propiedad o por registro
        tareasModel.find({}, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(result);
            }

        })
    },
    updateTarea: function (req, res) {
        let tareaId = req.body.id;
        let update = {
            estado: req.body.status
        }
        //Da un warning pero funciona...
        tareasModel.findByIdAndUpdate(tareaId, update, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(result);
            }
        })
    },
    updateTarea2: function (req, res) {
        let tareaId = req.body.id;
        let update = {
            estado: req.body.status
        }
        //Da un warning pero funciona...
        tareasModel.findByIdAndUpdate(tareaId, update, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(result);
            }
        })
    },
    deleteTarea: function (req, res) {
        let tareaId = req.body.id;
        tareasModel.findByIdAndDelete(tareaId, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(result);
            }
        })
    },
    // PARA VISTA
    exampleProjects1: function (req, res) {
        tareasModel.find({}, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.render('example1', {
                    resultado: result,
                });
            }
        })
    },
    exampleProjects2: function (req, res) {
        tareasModel.find({}, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.render('example2', {
                    resultado: result,
                });
            }
        })
    },
    exampleProjects3: function (req, res) {
        tareasModel.find({}, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.render('example3', {
                    resultado: result,
                });
            }
        })
    },

};

module.exports = controller;