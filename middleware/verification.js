import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config()





const Verify = (req, res, next) => {

   const token = req.cookies.token;

   if (!token) {
      return res.json({ massage: "Login required" });

   } else {
      try {
         const decoded = jwt.verify(token, process.env.JWT_SECRET);
         // user data attach
         next();
      } catch (error) {
         return res.status(401).json({ massage: "Invalid or expired token" });
      }
   }

};

export default Verify