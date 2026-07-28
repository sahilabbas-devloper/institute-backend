import { Students } from "../model/student.js";

const Updatedata = async (req, res) => {


   try {
      const { username, field, value } = req.body;

      if (!username) return res.status(404).json({ message: "pleses enter username !" })
      if (!field) return res.status(404).json({ message: "pleses enter field !" })
      if (!value) return res.status(404).json({ message: "pleses enter value !" })

      const Std = await Students.findOneAndUpdate({ studentname: username }, { $set: { [field]: value } })
      if (!Std) {
       return res.status(401).json({message :"plz enter a valid user."})
      } else {
         res.status(200).json({ message : "details updated sucessfully.", Std})
      }

   } catch (error) {
      console.log("update error", error)
       res.status(500).json({message :" enternal server error !"})
   }

}

export default Updatedata