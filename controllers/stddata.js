import { Students } from "../model/student.js";

const Creatdata = async (req, res) => {
   const { name, fathername, clas, address, number, schoolname, date } = req.body;
console.log(name, fathername, clas, address, number, schoolname, date)
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
      res.json("Student saved sucessfully.")
   } catch (error) {
      console.log("student data saved error", error)
   }
}

export default Creatdata