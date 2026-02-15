
import bcrypt from 'bcrypt'
import { User } from '../model/usermodle.js'

const rajister = async (req, res) => {

   try {
      const { role, username, email, passward, dob } = req.body;

      const hash = await bcrypt.hash(passward, 10)
      const user = await User.create({
         role: role,
         username: username,
         email: email,
         DOB: dob,
         passward: hash
      }
      )
      res.json("sucessfully rajister.")

   } catch (error) {
      res.json("error", error);
   }

}

export default rajister