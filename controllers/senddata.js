import { Students } from "../model/student.js";

const Senddata = async (req, res) => {
   const { name } = req.body;
   try {
      const Std = await Students.findOne({ studentname: name })

      if (!Std) {
         res.json({ massage: "record not found." })
      } else {
         res.json({ massage: "sucessfully.", Std })
      }

   } catch (error) {
      console.log("data send error", error)
   }

}

export default Senddata