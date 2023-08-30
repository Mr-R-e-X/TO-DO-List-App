const todo = require('../models/todo');

module.exports.add_todo = function(req, res){
    
    todo.create({
        description: req.body.description,
        catagory: req.body.catagory,
        date: req.body.date,
    }).then((newTodo) => {
        console.log('**********', newTodo);
        return res.redirect('back');
    }).catch((err) => {
        console.error(err);
    });

    // return res.redirect('back');
    
}