
import bcrypt from 'bcrypt'
import { User } from '../model/usermodle.js'

const rajister = async (req, res) => {

    const { role, username, email, passward, dob } = req.body;


   if (!role) return res.status(404).json({ message: "pleses enter role !" })
   if (!username) return res.status(404).json({ message: "pleses enter username !" })
   if (!email) return res.status(404).json({ message: "pleses enter email !" })
   if (!passward) return res.status(404).json({ message: "pleses enter passward !" })
   if (!dob) return res.status(404).json({ message: "pleses enter dob  !" })
   

   try {
     

      const hash = await bcrypt.hash(passward, 10)
      const user = await User.create({
         role: role,
         username: username,
         email: email,
         DOB: dob,
         passward: hash
      }
      )
      res.status(200).json({message: "sucessfully rajister."})

   } catch (error) {
      res.json("error", error);
      res.status(500).json({message: "internal server error !"})
   }

}

export default rajister