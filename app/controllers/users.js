var db = require('orm').db,
  Users = db.models.users;

exports.index = function(req, res){
  Users.find(function(err, users){
    if(err) throw new Error(err);
    res.render('users/index', {
      title: 'Users',
      users: users
    });
  });
};

exports.users_add = function(req, res){
  Users.find(function(err, users){
    if(err) throw new Error(err);
    res.render('users/users_add', {
      title : 'add users',
    });
  });
};

exports.save = function(req, res){
  var input = JSON.parse(JSON.stringify(req.body));
    Users.sync(function(err){
      if(err) throw new Error(err);
        Users.create({
          firstname : input.firstname,
          lastname : input.lastname,
          email : input.email,
          password : input.password
        }, function(err){
          if(err) throw new Error(err);
        })
      res.redirect('/users');
    })
}
