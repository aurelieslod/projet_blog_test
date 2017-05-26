var db = require('orm').db;

var FirstTest = db.define('firstTest', {
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
