import { User } from '../model/usermodle.js'
import bcrypt from 'bcrypt'

const Forgot = async (req, res) => {


   try {
      const { newpass, dob } = req.body;

       if (!newpass) return res.status(404).json({ message: "pleses enter new passward !" })
      if (!dob) return res.status(404).json({ message: "pleses enter dob !" })


      const hash = await bcrypt.hash(newpass, 10)
      const user = await User.findOneAndUpdate({ DOB: dob }, { $set: { passward: hash } })
      if (!user) {
         res.status(401).json({message :"plz enter a correct DOB."})
      } else {
         res.status(200).json({message : "passward update sucessfully."})
      }

   } catch (error) {
      console.log("update error", error)
       res.status(500).json({message :"enternal server error !"})
   }

}

export default Forgot 