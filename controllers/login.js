
import dotenv from "dotenv";
dotenv.config()
import bcrypt from 'bcrypt'
import { User } from '../model/usermodle.js'
import jwt from 'jsonwebtoken'






const login = async (req, res) => {
   try {
      const { role, username, passward } = req.body;

      const user = await User.findOne({ username })

      if (!user) {
         res.json({ message: "user not found." })
      } else {
         if (role !== user.role) {
            res.json({ message: "plz select correct role" })

         } else {
            const match = await bcrypt.compare(passward, user.passward)
            if (!match) {
               res.json({ message: "passward incorrect" })
            } else {
               const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY })
               res.cookie("token", token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === "production",   // true sirf production (Netlify+deployed backend) pe
                  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
                  maxAge: 24 * 60 * 60 * 1000
               })
               res.json({ message: "successfully Login.", user, token })
            }
         }
      }
   } catch (error) {
      console.log("Login error", error)
      res.status(500).json({ message: "internal server error" })
   }
}

export default login