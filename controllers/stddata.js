import { Students } from "../model/student.js";

const Creatdata = async (req, res) => {
   const { name, fathername, clas, address, number, schoolname, date } = req.body;


   if (!name) return res.status(404).json({ message: "pleses enter name !" })
   if (!fathername) return res.status(404).json({ message: "pleses enter fathername !" })
   if (!clas) return res.status(404).json({ message: "pleses enter class !" })
   if (!address) return res.status(404).json({ message: "pleses enter address !" })
   if (!number) return res.status(404).json({ message: "pleses enter number !" })
   if (!date) return res.status(404).json({ message: "pleses enter date !" })
   try {
      const student = await Students.create({
         studentname: name,
         fathername: fathername,
         schoolname: schoolname,
         class: clas,
         address: address,
         Joinningdate: date,
         Mobilenumber: number,
      })
      res.status(200).json({ message: "Student saved sucessfully." })
   } catch (error) {
      console.log("student data saved error", error)
      res.status(500).json({message :" internal server error !"})
   }
}

export default Creatdata