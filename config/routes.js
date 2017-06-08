module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	app.get('/', home.index);

	var users = require('../app/controllers/users');
	app.get('/users', users.index);

	var users_add = require('../app/controllers/users');
	app.get('/users_add', users.users_add);
	app.post('/users_add', users.save);
	app.get('/users_edit/:id', users.users_edit);
	app.post('/users_edit/:id', users.save_edit);
	app.get('/user_remove/:id', users.users_remove);
	app.post('/users_remove/:id', users.save_remove);

};
