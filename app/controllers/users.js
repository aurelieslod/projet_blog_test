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
