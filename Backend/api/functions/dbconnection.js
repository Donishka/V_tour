const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin123@ds039778.mlab.com:39778/vtour',{ useNewUrlParser: true } ,(err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;