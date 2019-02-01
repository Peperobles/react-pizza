var mongoose = require('../config');
var Schema = mongoose.Schema;

var proyectosSchema = Schema({
    nombre: String,
    ingredientes: Array,
    precio: Number,
    foto: String

})
module.exports = mongoose.model('pizzas', proyectosSchema);