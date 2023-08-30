const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/to_do_list_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error Connecting to the Database."));

db.once('open', function(){
    console.log('Connected to the Database :: MongoDB');
});

module.exports = db;