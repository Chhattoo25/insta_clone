const express = require("express");
const User = require("../model/User.model");
const multer = require('multer');
const Feed = require("../model/Feed.model");

const userRouter = express.Router();
const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,"./uploads")
  },
  filename:function(req,file,cb){
    // console.log(req.file,file)
    cb(null,file.originalname)
    // const uniqueSuffix = Date.now()+"-"+Math.round(Math.random()*1E9)
    // cb(null,file.fieldname +"-"+uniqueSuffix)
  }
})
const uploads = multer({storage:storage})
userRouter.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: "User not found" });
  }
});

userRouter.get("/:userId/feed",async(req,res)=>{
const {userId} = req.params;
const feeds = await Feed.find({userId})
return res.send(feeds)

})
userRouter.post("/:userId/feed",uploads.single("image"),async (req,res)=>{
// console.log(req.file)
const {userId }= req.params
const {title,description,tags} = req.body ;
// const image = `${__dirname}/uploads/${req.file.originalname}`
const image = req.file.originalname
const feed = new Feed({
  title,
  description,
  tags:tags.split(","),
  image,
  userId
})

await feed.save()
return res.send("success")
/*
Title,
Image,
*/
})
module.exports = {
  userRouter,
};
