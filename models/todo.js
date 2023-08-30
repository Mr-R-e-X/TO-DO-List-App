const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema ({
    description: {
        type: String,
        require: true
    },
    catagory: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true,
    },
    status:{
        type: Boolean,
        require: true
    }
});

const todo = mongoose.model('todo', todoSchema);

module.exports = todo;