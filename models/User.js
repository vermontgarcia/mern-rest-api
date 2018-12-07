const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name:{
    type: String
  },
  email:{
    type: String,
    required: 'Email most be provided',
    unique: 'Email already registered'
  },
  password:{
    type: String,
    required: 'Password most be defined'
  },
  role:{
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
  profilePicture:{
    type: String
  },
  status:{
    type: String,
    enum: ['new', 'active', 'archived']
  }
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('User', UserSchema);