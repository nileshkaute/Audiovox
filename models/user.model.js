const mongoose = require('mongoose');


// Define schema
const userSchema = new mongoose.Schema({
   fullname:{
    type:String,
    minLength:3,
    trim:true,
  },
  email:String,
  password:String,
  cart:{
    type:Array,
    default:[]
  },
  isadmin:Boolean,
  orders:{
    type:Array,
    default:[]
  },
  contact:Number,
  picture:String,
});

// Create and export model
module.exports = mongoose.model('user', userSchema);

