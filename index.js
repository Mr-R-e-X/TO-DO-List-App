const express = require('express'); // importing express.
const app = express(); //initializing express.
const port = 8000; // setting up port.
const expressLayouts = require('express-ejs-layouts'); // setting up express layouts.


app.use(express.static('./assets'));
app.use(expressLayouts);
app.use('/', require('./routes')); // setting up express routes.

app.set('view engine', 'ejs'); // setting up view engine.
app.set('views', './views'); // setting up view folder src.
// extract style and scripts from sub pages into the layout.
app.set('layout extractStyles', true); // extracting styles to layout.
app.set('layout extractScripts', true); // extracting scripts to layout.


// setting up server listener.
app.listen(port, function(error){
    if(error){ // error checking, if any to run the server.
        console.log(`Error running up the 'SERVER' :: ${error}`); // printing the error.
    }
    console.log(`Hey I am Listining from port number :: ${port}`); // server on messege.
})