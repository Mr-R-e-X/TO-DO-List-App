module.exports.home = function(req, res){
    return res.render('home', {
        title: "Your ToDo List"
    });
};