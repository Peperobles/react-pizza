var mongoose = require('../config');
var Schema = mongoose.Schema;

var proyectosSchema = Schema({
    estado: String,
    contenido: String
})
module.exports = mongoose.model('tareas', proyectosSchema);