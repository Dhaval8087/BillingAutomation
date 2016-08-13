var _ = require('lodash');
var userModel = require('../models/usermodel');
module.exports=function(app,jwt)
{


  /* Create Authetication Token */
  app.post('/authenticate',function(req,res){

    userModel.findOne({name:req.body.name},function(err,user)
    {
      if (err) throw err;

      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      }
      else if (user)
      {
        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, app.get('superSecret'), {
          expiresIn : 60
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });

    }
  });
});
  /*Check Authetication */
  app.post('/login',function(req,res){

  });

  /* Forgot Password*/
  app.post('/forgotpassword',function(req,res){

  });
};
