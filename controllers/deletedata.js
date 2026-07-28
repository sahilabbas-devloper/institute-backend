import { Students } from "../model/student.js";

const Delete = async (req, res) => {
   try {
      const data = req.body;



      console.log(data)
      const std = await Students.findOneAndDelete({ studentname: data.studentname })
      if (!std) {
         res.status(404).json({message: "student not found."})
      }
      res.status(200).json({message:"student deleted sucessfully."})
   } catch (error) {
       console.log("delete controler error !", error)
       res.status(500).json({message:"internal server error 1"})
   }

}

export default Delete