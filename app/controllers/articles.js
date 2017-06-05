var db = require('orm').db,
  Articles = db.models.articles;

exports.index = function(req, res){
  Articles.find(function(err, test){
    if(err) throw new Error(err);
    res.render('articles/index', {
      title: 'BdD - Articles',
      articles: test
    });
  });
};
