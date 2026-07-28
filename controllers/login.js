import bcrypt from 'bcrypt';
import { User } from '../model/usermodle.js';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {
   try {
      const { role, username, passward } = req.body;

      // 1. User check
      const user = await User.findOne({ username });
      if (!user) {
         return res.status(400).json({ message: "User not found." });
      }

      // 2. Role check
      if (role !== user.role) {
         return res.status(400).json({ message: "Plz select correct role" });
      }

      // 3. Password check
      const match = await bcrypt.compare(passward, user.passward);
      if (!match) {
         return res.status(400).json({ message: "Password incorrect" });
      }

      // 4. JWT Secret Fallback (Debugging ke liye safe setup) 
      const secretKey = process.env.JWT_SECRET || "fallback_secret_key_123";
      const expiry = process.env.JWT_EXPIRY || "1d";

      // 5. Token generation
      const token = jwt.sign({ id: user._id, role: user.role }, secretKey, { expiresIn: expiry });

      

      // 6. Cookie options (Localhost safe)
      const isProduction = process.env.NODE_ENV === "production";

      res.cookie("token", token, {
         httpOnly: true,
         secure: isProduction,
         sameSite: isProduction ? "none" : "lax",
         maxAge: 24 * 60 * 60 * 1000
      });

      return res.status(200).json({ 
         message: "Successfully Login.", 
         user: {
            _id: user._id,
            username: user.username,
            role: user.role
         }, 
         token 
      });

   } catch (error) {
      console.log("Login error:", error.message);
      return res.status(500).json({ message: "Internal server error", error: error.message });
   }
}

export default login;