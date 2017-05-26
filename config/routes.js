module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	app.get('/', home.index);


	var firstTest = require('../app/controllers/firstTest');
	app.get('/firstTest', firstTest.index);
};
