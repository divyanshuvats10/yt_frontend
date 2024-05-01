// routes/registerRoute.js

import express from "express";
import User from "../models/User.js";

const router = express.Router();
router.use(express.urlencoded({extended:true}));


router.post("/", async (req, res, next) => {
  const { email, username, password, passwordConf } = req.body;
  /*const newUser = new User({
    email:email,
    username:username,
    password:password,
    passwordConf:passwordConf
  });
  newUser.save().then((res)=>{
    console.log("data saved");
  })  
})*/

  try {
    
    if (!email || !username || !password || !passwordConf) {
      throw new Error("Please fill out all fields.");
    }

    
    if (password !== passwordConf) {
      throw new Error("Passwords do not match.");
    }

   
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("Email is already in use.");
    }

    
    const newUser = new User({
      email,
      username,
      password,
      passwordConf
    });
   

    
    await newUser.save();

    res.status(200).json({ success: true, message: "You are registered, you can login now." });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
