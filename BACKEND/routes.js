
var app = require('./app');

// ----------------------- CONTROLLER-----------------------
var PizzasController = require('./controller/pizzasController');
var IngredientesController = require('./controller/ingredientesController');

// ------------------------------- - -------------------------------

app.get('/pizzas', PizzasController.getPizzas);

app.get('/ingredientes', IngredientesController.getIngredientes);

app.get('/', function (req, res) {
    res.render('pizzas');
})


//Exportar
module.exports = app;