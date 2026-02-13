import { Students } from "../model/student.js";

const Delete = async (req, res) => {
   try {
      const data = req.body;

      const std = await Students.findOneAndDelete({ studentname: data.studentname })
      if (!std) {
         res.json("student not found.")
      }
      res.json("student deleted sucessfully.")
   } catch (error) {

   }

}

export default Delete