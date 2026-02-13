import { Students } from "../model/student.js";

const Updatedata = async (req, res) => {


   try {
      const { username, feild, value } = req.body;
      console.log(username, feild, value)

      const Std = await Students.findOneAndUpdate({ studentname: username }, { $set: { [feild]: value } })
      if (!Std) {
         res.json("plz enter a valid user.")
      } else {
         res.json("details updated sucessfully.")
      }

   } catch (error) {
      console.log("update error", error)
   }

}

export default Updatedata