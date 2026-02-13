import mongoose from "mongoose";

const Studentschema = mongoose.Schema({
    studentname: String,
    fathername: String,
    schoolname : String,
    class: String,
    address: String,
    Joinningdate : String,
    Mobilenumber: Number,
}, { timestamp: true })

export const Students = mongoose.model("Student", Studentschema)