//PARA EL SERVIDOR
var express = require('express');
var bodyParser = require('body-parser');
const port = 3006;
var app = express();
var session = require('express-session');

//Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Añadido este middleware para evitar el error de cross domain
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/public/views');

app.engine('ejs', require('ejs').renderFile);

app.set('view engine', 'ejs');



app.use(session({
    secret:'cadena aleatoria',
    resave:true,
    saveUninitialized:true,
    cookie: {maxAge: 365 * 24 * 60 * 60 * 1000}
}));

//Middleware para session
// app.use(function(req, res, next) {
//     if (req.session.user == null){
// // if user is not logged-in redirect back to login page //
//         res.render('tareas');
//     }   else{
//         next();
//     }
// });



app.listen(port, () =>{
    console.log('Servidor corriendo correctamente en puerto: '+ port);
})

module.exports = app;