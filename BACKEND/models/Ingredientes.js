var mongoose = require('../config');
var Schema = mongoose.Schema;

var proyectosSchema = Schema({
    nombre: String
})
module.exports = mongoose.model('ingredientes', proyectosSchema);