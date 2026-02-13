import { User } from '../model/usermodle.js'
import bcrypt from 'bcrypt'

const Forgot = async (req, res) => {


   try {
      const { newpass, phone } = req.body;

      const hash = await bcrypt.hash(newpass, 10)
      const user = await User.findOneAndUpdate({ Mobilenumber: phone }, { $set: { passward: hash } })
      if (!user) {
         res.json("inviled number.")
      } else {
         res.json("passward update sucessfully.")
      }

   } catch (error) {
      console.log("update error", error)
   }

}

export default Forgot 