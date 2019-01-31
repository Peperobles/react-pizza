
var app = require('./app');

// ----------------------- CONTROLLER-----------------------
var TareasController = require('./controller/tareasController');
var IngredientesController = require('./controller/ingredientesController');

// ------------------------------- - -------------------------------

app.get('/pizzas', TareasController.getTareas);

app.get('/ingredientes', IngredientesController.getIngredientes);




app.get('/', function (req, res) {
    res.render('tareas');
})


//Exportar
module.exports = app;