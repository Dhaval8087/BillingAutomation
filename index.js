var express=require('express');
var app=new express();
var config=require('./config');
var bodyParser=require('body-parser');
var jwt    = require('jsonwebtoken');
var mongoose = require('mongoose');
mongoose.connect(config.database);

app.set('superSecret', config.secret); // secret variable
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

var authetication=require('./routes/authetication')(app,jwt);
var validate=require('./routes/autheTokenVerify')(app,jwt);


var users=require('./routes/usermanagement')(app);

var server=app.listen(3000,function(){
  console.log("server is running on 3000 port");
});
