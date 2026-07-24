import { Students } from "../model/student.js";

const Senddata = async (req, res) => {
   const { name } = req.body;

    if (!name) return  res.status(404).json({ message: "pleses enter name !" })
   try {
      const Std = await Students.findOne({ studentname: name })

      if (!Std) return  res.status(404).json({ message: "record not found." })
   
         res.status(200).json({ massage: "sucessfully.", Std }) 
       

   } catch (error) {
      console.log("data send error", error)
        res.status(500).json({ message: "internal server error !" })
   }

}

export default Senddata