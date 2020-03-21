const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const loginModel = require('../../data/login/login.model');

router.post("/login",function(req,res){
    const email= req.body.email;
    const password = req.body.password;

    loginModel.findByClientEmail(email,function (err,user) {
        if(err) throw err;

        if(!user){ 
            loginModel.findBySPEmail(email,function (err,user) {
                if(err) throw err;
        
                if(!user){ 
                    loginModel.findByTAgentEmail(email,function (err,user) {
                        if(err) throw err;
                
                        if(!user){ 
                            res.json({state:false,msg:"No user found"});
                        }else{
                            
                            loginModel.passwordCheck(password,user.password,function(err,match){
                            token:String;
                            if(err) throw err;
                    
                            if (match){
                                console.log(user);
                                jwt.sign({user:user},"vtoursecretkey",function(err,token){
                                    if(err){
                                        res.json({error:"err"});
                                    }else{
                                        res.json({state:true,
                                            token:"Bearer " + token,
                                            user:{
                                                id:user._id,
                                                name:user.name,
                                                username:user.username,
                                                email:user.email,
                                                usertype:user.usertype
                    
                                            }});
                                    }
                                });
                            }else {
                                res.json({state:false,msg:"password does not match"});
                                
                            }
                            
                        });
                    }
                    });
                }else{
        
                    loginModel.passwordCheck(password,user.password,function(err,match){
                    token:String;
        
                    if(err) throw err;
            
                    if (match){
                        console.log(user);
                        jwt.sign({user:user},"vtoursecretkey",function(err,token){
                            if(err){
                                res.json({error:"err"});
                            }else{
                                res.json({state:true,
                                    token:"Bearer " + token,
                                    user:{
                                        id:user._id,
                                        name:user.name,
                                        username:user.username,
                                        email:user.email,
                                        usertype:user.usertype
            
                                    }});
                            }
                        });
                    }else {
                        res.json({state:false,msg:"password does not match"});
                        
                    }
                    
                });
            }
            });
        }else{

            loginModel.passwordCheck(password,user.password,function(err,match){
            token:String;

            if(err) throw err;
    
            if (match){
                console.log(user);
                jwt.sign({user:user},"vtoursecretkey",function(err,token){
                    if(err){
                        res.json({error:"err"});
                    }else{
                        res.json({state:true,
                            token:"Bearer " + token,
                            user:{
                                id:user._id,
                                name:user.name,
                                username:user.username,
                                email:user.email,
                                usertype:user.usertype
    
                            }});
                    }
                });
            }else {
                res.json({state:false,msg:"password does not match"});
                
            }
            
        });
    }
    });



});

router.get("/profile",verifyToken, function(req,res){
    jwt.verify(req.token,"vtoursecretkey",function(err,data){       
        if(err) {
            res.json({msg:"Acess denied"});
        }else{
            res.json({msg:"U can acess",data})
        }
    })
});

function verifyToken(req,res,next){
    if(typeof(req.headers['authorization']) != 'undefined' && req.headers['authorization'] != 'undefined' ){
        var headerToken = req.headers['authorization'].split(' ')[1];
        if(headerToken !== 'undefined') {
            req.token = headerToken;
            next();
        }else{
            res.json({msg:"Unauthorize access"});
        }
    }else{
        res.json({msg:"Unauthorized"});
    }
};



module.exports = router;