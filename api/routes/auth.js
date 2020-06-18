const express =  require('express');
const router= express.Router();
const jwt = require('jsonwebtoken');
const User=require('../models/User');
const bcrypt=require('bcryptjs');

const {registerValidation, loginValidation}=require('../validation');



router.post('/register', async (req, res)=>{
    //validate
    const {error}=registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    //checking if user already exists

    const emailExists= await User.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send('Email is already registered');

    //hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user=new User ({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    try{
        const savedUser= await user.save();
        res.send(savedUser);
    } catch(err){
       res.status(400).send(err); 
    }
});

router.post('/login', async (req, res)=>{

    const {error}=loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const user= await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email is not registered');
    const validPass= await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid password!');

    //creating a token

    const token=jwt.sign({_id: user._id}, "dbujdujdujujddikjdmkimmikmimikm");
    res.header('auth-token', token).send(token);
    res.send('Logged in!');
});

module.exports=router; 