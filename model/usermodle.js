import mongoose from "mongoose";

const userschema = mongoose.Schema({
    role: String,
    username: String,
    email: String,
    DOB: String,
    passward: String
}, { timestamp: true })

export const User = mongoose.model("Users", userschema)

