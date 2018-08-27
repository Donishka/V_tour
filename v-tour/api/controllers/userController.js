var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.usersGetAll = function(req, res) {

  var offset = 0;
  var count = 10;

  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }

  if (isNaN(offset) || isNaN(count)) {
    res
      .status(400)
      .json({
        "message" : "Not a valid Query String"
      });
    return;
  }

  User
    .find()
    .skip(offset)
    .limit(count)
    .exec(function(err, users) {
        if (err) {
            console.log("Error finding users");
            res
              .status(500)
              .json(err);
          } else {
            console.log("Found users", users.length);
            res
              .json(users);
          }
    });
};

module.exports.usersGetOne = function(req, res) {
  var userId=req.params.userID;
  User
  .findById(userId)
    .exec(function(err, doc) {
      var response = {
        status : 200,
        message : doc
      };
      if (err) {
        console.log("Error finding user");
        response.status = 500;
        response.message = err;
      } else if(!doc) {
        console.log("userId not found in database", id);
        response.status = 404;
        response.message = {
          "message" : "User ID not found " + id
        };
      }
      res
        .status(response.status)
        .json(response.message);
    });
};
var _splitArray = function(input) {
    var output;
    if (input && input.length > 0) {
      output = input.split(";");
    } else {
      output = [];
    }
    return output;
  };
module.exports.usersAddNew = function(req, res) { 
  console.log("POST new user");
  User
    .create({
      Fname : req.body.Fname,
      Lname : req.body.Lname,
      userID : req.body.userID,
      userName : req.body.userName,
      password : req.body.password,
      telephone : _splitArray(req.body.telephone),
      
    }, function(err, user) {
      if (err) {
        console.log("Error creating usre");
        res
          .status(400)
          .json(err);
      } else {
        console.log("User created!", user);
        res
          .status(201) 
          .json(user);
      }
    });
};

module.exports.usersUpdateOne = function(req, res) {
    var userId=req.params.userID;

    User
      .findById(userId)
      .exec(function(err, user) {
        if (err) {
          console.log("Error finding user");
          res
            .status(500)
            .json(err);
            return;
        } else if(!user) {
          console.log("UserId not found in database", userId);
          res
            .status(404)
            .lson({
              "message" : "User ID not found " + userId
            });
            return;
        }
  
        user.Fname = req.body.Fname,
        user.Lname = req.body.Lname,
        user.userID = req.body.userID,
        user.userName = req.body.userName,
        user.password = req.body.password,
        user.telephone = _splitArray(req.body.telephone),
  
        user
          .save(function(err, userUpdated) {
            if(err) {
              res
                .status(500)
                .json(err);
            } else {
              res
                .status(204)
                .json();
            }
          });
  
  
      });
  
  };

  module.exports.usersDeleteOne = function(req, res) {
    var userId=req.params.userID;
  
    User
      .findByIdAndRemove(userId)
      .exec(function(err, location) {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          console.log("User deleted, id:", userId);
          res
            .status(204)
            .json();        
        }
      });
  };