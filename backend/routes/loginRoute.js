import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const router = express.Router();
router.use(express.urlencoded({extended:true}));



router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("This email is not registered!");
    }

    
    const passwordMatch = password==user.password;
    //await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Wrong password!");
    }

    
    res.status(200).json({ success: true, message: "Login successful!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
