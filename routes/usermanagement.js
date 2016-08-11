var _ = require('lodash');
var userModel = require('../models/usermodel');

module.exports=function(app)
{

   /*create user */
   app.post('/user',function(req,res){
     var newUser = new userModel(req.body);
     newUser.save(function(err){
         if(err)
          {
             res.send({info:'error occured during creating user ',error:err});
          }
           res.send({info:'user created successfully'});
     });

   });
  /*get users */
  app.get('/users',function(req,res){

      userModel.find(function(err,users){
          if(err)
          {
             res.send({info:'error occured during fetching users ',error:err});
          }
           res.send({info:'user found ',users:users});
      });
  });

  /* get user by id:*/
  app.get('/user/:id',function(req,res){

     userModel.findById(req.params.id,function(err,user){
        if(err)
        {
           res.send({info:'error occured during fetching user ',error:err});
        }
        if(user)
        {
          res.send(user);
        }
        else {
          res.send({info:'user not found'});
        }

     });

  });

  /* delete user*/
  app.put('user/:id',function(req,res){

  });

};
