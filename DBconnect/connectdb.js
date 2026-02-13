import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const connectDB = async () => {
    try {
        const data = await mongoose.connect(`${process.env.MONGODB_URL}${process.env.DB_NAME}`)
        console.log("mongodb connect.")
    } catch (error) {
         console.log("mongodb connction error",error)
    }

}

export default connectDB 