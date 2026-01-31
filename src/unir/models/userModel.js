const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Name field is required'], 
    trim: true,
    lowercase: true
  },
  name: {
    type: String,
    required: [true, 'User field is required'], 
    trim: true,
    lowercase: true
  },
  created_on: {
    type: Date,
    default: Date.now 
  }
});

const userModel = model('users',UserSchema,'users')


module.exports = userModel;