const mongoose = require("mongoose");

// How Mongoose Works: 
//      1   Schema : Define the Structure 
//      2   Schema -> Model 
//      3   USing Model we do CRUD operations 


// Define the Structure
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    Job_title: {
        type: String
    },

    gender: {
        type: String
    }
}, {
    timestamps: true
});




// Schema -> Model  
const User = mongoose.model("user", userSchema);

module.exports = User;