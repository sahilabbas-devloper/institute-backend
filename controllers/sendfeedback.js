import { Feedbacks } from "../model/feedback.js";

const Sendfeedback = async (req, res) => {

   try {
      const feedbacks = await Feedbacks.find()

      if (!feedbacks) {
         res.json("no feedbacks.")
      }
      res.json(feedbacks)
   } catch (error) {
      console.log("data send error", error)
   }

}

export default Sendfeedback