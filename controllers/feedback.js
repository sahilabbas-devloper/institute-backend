
import { Feedbacks } from "../model/feedback.js";



const Creatfeedback = async (req, res) => {

   const { email, massage } = req.body;

  // 1. Validation (Use 400 Bad Request)
if (!email) return res.status(400).json({ message: "Please enter email!" });
if (!massage) return res.status(400).json({ message: "Please enter message!" });

const cleanEmail = email.trim().toLowerCase();
const validEmail = cleanEmail.endsWith("@gmail.com"); // ya cleanEmail.includes("@gmail.com")

if (!validEmail) {
  return res.status(400).json({ message: "Please enter a valid Gmail address!" });
}
// 2. Check if feedback already exists for this email
const existingFeedback = await Feedbacks.findOne({ Email : email });


// 3. Fix: Check 'existingFeedback' object, NOT 'email' variable
if (existingFeedback) {
  return res.status(400).json({ message: "You have already submitted feedback!" });
}

   try {

      const feedback = await Feedbacks.create({ Email: email, Massage: massage })
      res.status(200).json({ message : "Feedback send sucessfully."})

   } catch (error) {
      res.json("error", error);
   }

}

export default Creatfeedback