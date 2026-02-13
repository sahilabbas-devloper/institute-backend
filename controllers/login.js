
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
         res.json({ massage: "user not found." })
      } else {
         if (role !== user.role) {
            res.json({ massage: "plz select correct role" })

         } else {
            const match = await bcrypt.compare(passward, user.passward)
            if (!match) {
               res.json({ massage: "passward incorrect" })
            } else {
               const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY })
               res.cookie("token", token)
               res.json({ massage: "sucessfully Login.", user })
            }
         }
      }
   } catch (error) {
      console.log("Login error", error)
   }
}

export default login