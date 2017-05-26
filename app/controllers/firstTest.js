var db = require('orm').db,
  FirstTest = db.models.firstTest;

exports.index = function(req, res){
  FirstTest.find(function(err, test){
    if(err) throw new Error(err);
    res.render('firstTest/index', {
      title: 'First test routing',
      articles: test
    });
  });
};
