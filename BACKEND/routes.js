
var app = require('./app');

// ----------------------- CONTROLLER-----------------------
// var UsersController = require('./controller/usersController');
var TareasController = require('./controller/tareasController');

// ------------------------------- TAREAS -------------------------------
// RUTAS
app.post('/tareas/add', TareasController.addTarea);
app.get('/tareas', TareasController.getTareas);
app.post('/tareas/update', TareasController.updateTarea);
app.post('/tareas/update2', TareasController.updateTarea2);
app.post('/tareas/delete', TareasController.deleteTarea);

// VISTAS
app.get('/example1', TareasController.exampleProjects1);
app.get('/example2', TareasController.exampleProjects2);
app.get('/example3', TareasController.exampleProjects3);

//-------------------------------- USUARIOS --------------------------------
// app.post('/users/register', UsersController.registerUser);
// app.post('/users/login', UsersController.loginUser);
// app.get('/logout', UsersController.logoutUser);

// app.get('/example4', UsersController.getUsers);
// app.post('/users/update', UsersController.updateUser);
// app.post('/users/delete', UsersController.deleteUser);



app.get('/', function (req, res) {
    res.render('tareas');
})


//Exportar
module.exports = app;