const mongoose = require('mongoose');


// Define schema
const ownerSchema = new mongoose.Schema({
  fullname:{
    type:String,
    minLength:3,
    trim:true,
  },
  email:String,
  password:String,
 

  products:{
    type:Array,
    default:[]
  },
 
  picture:String,
  gstin:String,
});

// Create and export model
module.exports = mongoose.model('owner', ownerchema);

