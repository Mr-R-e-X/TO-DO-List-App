const todo = require('../models/todo');

module.exports.home = function (req, res){
    
    todo.find().then(function(todoList, err){
        if(err){
            console.log(`Error fatching todo list drom database :: ${err}`);
            return;
        }
        return res.render('home', {
            title: "Your ToDo List",
            todo_list: todoList,
        });
    });

};