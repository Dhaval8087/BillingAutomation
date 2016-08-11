var express=require('express');
var app=new express();

var bodyParser=require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BillingAutomation');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var authetication=require('./routes/authetication')(app);
var users=require('./routes/usermanagement')(app);

var server=app.listen(3000,function(){
  console.log("server is running on 3000 port");
});
