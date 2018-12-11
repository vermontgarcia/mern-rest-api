const express = require('express');
const authRouter  = express.Router();

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const upload = require('../helpers/multer');

/* GET & POST Auth routes */

authRouter.post('/signup', (req, res) => {
  if(req.body.password !== req.body.confirmPassword) return res.status(500).json({msg: 'Passwords missmatch'});

  const salt = bcrypt.genSaltSync(256);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  req.body.password = hashedPassword;

  let user = {}
  Object.keys(req.body).forEach(key => {
    user[key] = req.body[key];
  })

  User.create(user)
  .then(user => {
    const token = jwt.sign({id: user._id}, process.env.SECRET);
    delete user._doc.password;
    res.status(200).json({msg: 'User created succesfully', user, token});
  })
  .catch(err => {
    console.log('User SingUp Error =====>', err);
    res.status(500).json({err, msg: 'User cannot be created'});
  });
});


authRouter.post('/login', async (req, res) => {
  const user = await User.findOne({email: req.body.email});

  if(!user) return res.status(404).json({msg: 'User is not registered'});
  
  let validPassword = bcrypt.compareSync(req.body.password, user.password);
  
  if(!validPassword) return res.status(500).json({msg: 'Wrong password'});
  
  const token = jwt.sign({id: user._id}, process.env.SECRET, {expiresIn: 60});
  delete user._doc.password;
  
  res.status(200).json({user, token, msg: 'Logged succesfully'});
});

authRouter.patch('/edit', upload.single('profilePicture'), (req, res) => {
  let user={};
  Object.keys(req.body).forEach(key => {
    user[key] = req.body[key];
  });
  if (req.file) user.profilePicture = req.file.url;
  user.profilePicture = req.file.url;
  User.findByIdAndUpdate(req.body._id, {$set: user}, {new: true})
    .then(user => {
      if(!user) return res.status(500).json({msg: 'User update Error'});
      delete user._doc.password;
      res.status(200).json({user, msg: 'User updated succesfully'});
    })
    .catch(err => {
      console.log('User update Error =====>', err);
      res.status(500).json({err});
    });
});

authRouter.get('/loggedin', (req, res) => {

  const token = req.headers['x-access-token'];
  if(!token) return res.status(403).json({msg:'No te pases, debes enviar un token'})

  jwt.verify(token, process.env.SECRET, async (err, decoded)=>{
    //console.log('Decoded ====>', decoded.id)
    if(err) return res.status(403).json({err, msg:'Sesion expirada'})
    //req.user = await User.findById(decoded.id)
    //next();
    res.status(200).json({msg: 'Valid token'})
  })
})

module.exports = authRouter;