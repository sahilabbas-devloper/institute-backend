import express from "express";

import Verify from "../middleware/verification.js";
import home from "../controllers/home.js"
import logout from "../controllers/logout.js"
import rajister from "../controllers/rajister.js"
import login from "../controllers/login.js"
import Creatdata from "../controllers/stddata.js"
import Senddata from "../controllers/senddata.js"
import Creatfeedback from "../controllers/feedback.js"
import Sendfeedback from "../controllers/sendfeedback.js"
import Updatedata from "../controllers/updatedata.js"
import Delete from "../controllers/deletedata.js"
import Sendsms from "../controllers/sendsms.js"
import Forgot from "../controllers/forgotpass.js"

const router = express.Router()

// 🔓 Public routes
router.post("/Login", login)
router.post("/Rajister", rajister)
router.put("/forgotpass", Forgot)

// 🔒 Protected routes
router.get("/Home", Verify, home)
router.post("/logout", Verify, logout)
router.post("/senddata", Verify, Creatdata)
router.post("/getdata", Verify, Senddata)
router.post("/sendfeedback", Verify, Creatfeedback)
router.get("/getfeedbacks", Verify, Sendfeedback)
router.put("/updatedata", Verify, Updatedata)
router.delete("/deletedata", Verify, Delete)
router.post("/send-whatsapp", Verify, Sendsms)

export default router