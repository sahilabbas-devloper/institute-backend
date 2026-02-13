import express, { json } from "express";
import Routes from "./Route/routes.js";
import cors from 'cors'
import dotenv from "dotenv";
dotenv.config()
import cookieParser from "cookie-parser"
import connectDB from './DBconnect/connectdb.js'



const app = express()
app.use(cors(
   {
      origin: ["http://localhost:5173"],
      methods: ["POST", "GET", "PUT", "DELETE"],
      credentials: true,
   }
))
app.use(express.json())
app.use(cookieParser())

connectDB()


app.use("/api", Routes)



const PORT = process.env.PORT || 5000
app.listen(PORT, (req, res) => {
   console.log("server is running on port ", PORT)
}) 