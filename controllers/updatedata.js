import { Students } from "../model/student.js";

const Updatedata = async (req, res) => {


   try {
      const { username, field, value } = req.body;
      console.log(username, field, value)
   
      const Std = await Students.findOneAndUpdate({ studentname: username }, { $set: { [field]: value } })
      if (!Std) {
         res.json("plz enter a valid user.")
      } else {
         res.json("details updated sucessfully.",Std)
      }

   } catch (error) {
      console.log("update error", error)
   }

}

export default Updatedata