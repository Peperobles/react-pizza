//PARA EL SERVIDOR
var express = require('express');
var bodyParser = require('body-parser');
const port = 3006;
var app = express();

//Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Añadido este middleware para evitar el error de cross domain
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  

app.listen(port, () =>{
    console.log('Servidor corriendo correctamente en puerto: '+ port);
})

module.exports = app;