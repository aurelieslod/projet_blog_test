module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	app.get('/', home.index);

	var users = require('../app/controllers/users');
	app.get('/users', users.index);

	var users_add = require('../app/controllers/users');
	app.get('/users_add', users.users_add);
	app.post('/users_add', users.save);

	app.get("/completeArticle", (req, res)=>{
		res.render('completeArticle/index', {content : "hey !"})
	})
};
