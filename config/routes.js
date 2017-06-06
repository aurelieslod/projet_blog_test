module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	app.get('/', home.index);


	var firstTest = require('../app/controllers/firstTest');
	app.get('/firstTest', firstTest.index);

	var articles = require('../app/controllers/articles');
	app.get('/articles', articles.index);

	app.get("/completeArticle", (req, res)=>{
		res.render('completeArticle/index', {content : "hey !"})
	})
};
