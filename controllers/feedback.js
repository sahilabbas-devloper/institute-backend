
import { Feedbacks } from "../model/feedback.js";



const Creatfeedback = async (req, res) => {

   try {
      const { email, massage } = req.body;

      const feedback = await Feedbacks.create({ Email: email, Massage: massage })
      res.json("Feedback send sucessfully.")

   } catch (error) {
      res.json("error", error);
   }

}

export default Creatfeedback