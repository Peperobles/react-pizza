const ingredientesModel = require('../models/Ingredientes');


var controller = {
    getIngredientes: (req, res) => {
        // HAcemos uso del metodo find con un objeto vacío para que los muestre todos, pero puedo indicar cualquier filtrado por propiedad o por registro
        ingredientesModel.find({}, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(result);
            }

        })
    }

};

module.exports = controller;