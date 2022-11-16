const router =require('express').Router()
const User=require('../models/User')
const jwt =require('jsonwebtoken')
const bcrypt = require("bcrypt")

//Create User
router.post('/register', async(req,res)=>{
    try {
        const salt= await bcrypt.genSalt(10);
        const hashedPass =await bcrypt.hash(req.body.password,salt);
        const newUser =new User({
        name:req.body.name,
        email:req.body.email,
        password:hashedPass
    });

        const savedUser =await newUser.save();
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Login User
router.post('/login',async(req,res)=>{
    const user =await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send("Email is not found")
    const valiedPass =await bcrypt.compare(req.body.password,user.password);
    if(!valiedPass) return res.status(400).send("Invalied password")
    const token= jwt.sign({_id:user._id},process.env.TOKEN_SECRET)
    res.header('auth-token',token).send(token)
    

})




module.exports =router;