const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    FirstName: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    subject: {
        type: String
    },
    message:{
        type:String
    }
},
);
module.exports = mongoose.model('User', user); 