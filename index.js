const express = require('express'); // importing express.
const app = express(); //initializing express.
const port = 8000; // setting up port.
// const expressLayouts = require('express-ejs-layouts'); // setting up express layouts.
const bodyParser = require('body-parser');
const db = require('./config/mongoose.js');
const todo = require('./models/todo.js');
const path = require('path');
const home = require('./routes');
const add_todo = require('./routes/addTodo.js');
// const render_route = require('./routes/renderTodo.js');


app.use(express.static('./assets'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(expressLayouts);
app.use('/', home); // setting up express routes.
app.use('/', add_todo);
// app.use('/', render_route);

app.set('view engine', 'ejs'); // setting up view engine.
// app.set('views', path.join(__dirname, 'views')); // setting up view folder src.


console.log(path.join(__dirname, 'views'));




// setting up server listener.
app.listen(port, function(error){
    if(error){ // error checking, if any to run the server.
        console.log(`Error running up the 'SERVER' :: ${error}`); // printing the error.
    }
    console.log(`Hey I am Listining from port number :: ${port}`); // server on messege.
})