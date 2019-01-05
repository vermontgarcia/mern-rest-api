const express = require('express');
const authRouter  = express.Router();

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const upload = require('../helpers/multer');

/* GET & POST Auth routes */

authRouter.post('/signup', (req, res) => {
  if(req.body.password !== req.body.confirm) return res.status(500).json({msg: 'Upss! Las contraseñas no coinciden'});

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
    res.status(200).json({msg: 'Listo! Ya eres parte de Compare.it', user, token});
  })
  .catch(err => {
    res.status(500).json({err, msg: 'Ouch! Este usuario ya esta registrado'});
  });
});


authRouter.post('/login', async (req, res) => {
  const user = await User.findOne({email: req.body.email});

  if(!user) return res.status(404).json({msg: 'Upss! Este usuario no esta registrado'});
  
  let validPassword = bcrypt.compareSync(req.body.password, user.password);
  
  if(!validPassword) return res.status(500).json({msg: 'Upss! La contraseña es incorrecta'});
  
  const token = jwt.sign({id: user._id}, process.env.SECRET, {expiresIn: 86400});
  delete user._doc.password;
  
  res.status(200).json({user, token, msg: 'Cool! Es bueno verte de regreso'});
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
      if(!user) return res.status(500).json({msg: 'Ouch! No encontramos este usuario'});
      delete user._doc.password;
      res.status(200).json({user, msg: 'Yes!!! Tus datos ya estan actalizados'});
    })
    .catch(err => {
      res.status(500).json({err, msg: 'Ouch! Algo salió mal y no pudimos actualizar tus datos'});
    });
});

authRouter.get('/loggedin', (req, res) => {

  const token = req.headers['x-access-token'];
  if(!token) return res.status(403).json({msg:'Token no recibido'})

  jwt.verify(token, process.env.SECRET, async (err, decoded)=>{
    if(err) return res.status(403).json({err, msg:'Upss! esta sesion ya expiro, asi es mas seguro'})
    res.status(200).json({msg: 'Perfecto! Este es un usuario valido'})
  })
})

module.exports = authRouter;