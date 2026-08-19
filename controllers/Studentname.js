
import { Students } from "../model/student.js";

// GET /api/getallnames
// Response: { count: 42, names: ["Abbas Ali", "Ahsan Khan", ...] }
const getAllNames = async (req, res) => {
  try {

    
    // sirf 'studentname' field select kar rahe hain — fast query, poori details nahi laayega
    const students = await Students.find({}, 'studentname')

    const names = students.map((s) => s.studentname).filter(Boolean)

    return res.status(200).json({
      count: names.length,
      names
    })
  } catch (error) {
    console.log('getAllNames error', error)
    return res.status(500).json({ message: 'Could not fetch student names.' })
  }
}
export default getAllNames
