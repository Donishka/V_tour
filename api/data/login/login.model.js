const bcrypt  = require('bcryptjs');
const mongoose = require('mongoose');
const clientModel = require('../client/client.model');
const serviceProviderModel = require ('../serviceProvider/serviceprovider.model');
const travelAgentModel = require ('../travelAgent/travelagent.model');


module.exports.findByClientEmail = function(email,callback){

    const query = {email:email};
    clientModel.Client.findOne(query,callback);
};
module.exports.findBySPEmail = function(email,callback){

    const query = {email:email};
    serviceProviderModel.ServiceProvider.findOne(query,callback);
};
module.exports.findByTAgentEmail = function(email,callback){

    const query = {email:email};
    travelAgentModel.TravelAgent.findOne(query,callback);
};

module.exports.passwordCheck = function(plainpassword,hash,callback){
    bcrypt.compare(plainpassword, hash, function(err, res) {
        if(err) throw  err;

        if (res){
            callback(null,res);
        } else{
            callback(null,false)
        }
});
    
};