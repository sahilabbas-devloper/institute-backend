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

router.get("/Home", Verify, home)
router.post("/logout", logout)
router.post("/Rajister", rajister)
router.post("/Login", login)
router.post("/senddata", Creatdata)
router.post("/getdata", Senddata)
router.post("/sendfeedback", Creatfeedback)
router.get("/getfeedbacks", Sendfeedback)
router.put("/updatedata", Updatedata)
router.delete("/deletedata", Delete)
router.post("/send-whatsapp", Sendsms)
router.put("/forgotpass", Forgot)

export default router