const todo = require('../models/todo');

module.exports.delete = function(req, res){
    var id = req.query;
    var count = Object.keys(id).length;
    for(let i=0; i<count; i++){
        todo.findByIdAndDelete(Object.keys(id)[i]).then(function(){
            return res.redirect('/');
        }).catch(function(err){
            if(err){
                console.log(`Error deleting the task ${err}`);
                return;
            }
        })
    }
}