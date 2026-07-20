import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

const Verify = (req, res, next) => {
  // 🔍 DEBUG 1: Headers check karein agar cookies undefined hain
  
  // Safely optional chaining (?.) use karein
  const token = req.cookies?.token;
  

  if (!token) {
    // Correct spelling: message
    return res.status(401).json({ message: "Login required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // User data attach karein taaki controller me req.user mile
    req.user = decoded; 
    
    next();
  } catch (error) {
    console.log("❌ JWT Error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default Verify;