var db = require('orm').db;

var Users = db.define('users', {
  id : { type: 'integer' },
  firstname: String,
  lastname :String,
  email: String,
  password : String
}, {
  methods: {
    example: function(){
      
    }
  }
});
