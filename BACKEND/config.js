var mongoose = require('mongoose');
// La promesa mongoose siempre será la misma
mongoose.Promise = global.Promise;
//Hace referencia a la conexion localhost y despues parsear la ruta
mongoose.connect('mongodb://localhost/pizzas', { useNewUrlParser: true })
    .then(() => {
        console.log('La conexión a MongoDB ha sido realizada correctamente :)')
    })
    .catch(err => console.log(err));

module.exports = mongoose;