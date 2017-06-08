var db = require('orm').db;

var Users = db.define('users', {
  firstname: String,
  lastname :String,
  email: String,
  password : String
}, {
  methods: {
    example: function(){
      // return example;
    }
  }
});
