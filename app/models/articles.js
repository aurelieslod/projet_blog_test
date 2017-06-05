var db = require('orm').db;

var Articles = db.define('articles', {
  title: String,
  url: String,
  text: String
}, {
  methods: {
    example: function(){
      // return example;
    }
  }
});
