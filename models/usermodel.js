var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
   id:Number,
   name:String,
   email:String,
   number:Number
});

module.exports=mongoose.model('User',userSchema);
