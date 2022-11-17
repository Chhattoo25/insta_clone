const {Router}= require('express');
const User = require("../model/User.model")
const authRouter = Router()

authRouter.post("/signup",async(req,res)=>{
const user =  new User(req.body)

user.save((err,success)=>{
 if(err){
 return res.status(500).send({message:"Error Occured"})
 }
 return res.status(201).send({msg:"Signup Success",token:12345,user:success._doc})
})

})

authRouter.post("/login",async(req,res)=>{
  const {username,password}                    = req.body 
  const validUser = await User.findOne({username,password})
  if(validUser){
    return res.send(validUser)
  }
  res.status(401).send({message:"Invalid Credentials"})
})

module.exports = {
 authRouter
}