import mongoose from "mongoose";

const feedbackchema = mongoose.Schema({
    Email: String,
    Massage : String,
   
}, { timestamp: true })

export const Feedbacks = mongoose.model("feedback", feedbackchema)