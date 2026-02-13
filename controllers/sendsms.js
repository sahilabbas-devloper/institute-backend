import client from "../utils/Twilio.js";

const Sendsms = async (req, res) => {
   const { phone } = req.body;

   try {
      await client.messages.create({
         from: "whatsapp:+14155238886",
         to: `whatsapp:+91${phone}`,
         body: `📢 Abbas tuition classes

     Hello Dear Parent 👋
         Your child’s fees is pending.
   Please pay before 10 Feb.

  – Abbas Institute Team
      🌐 www.Abbastuitionclasses.in
`
    });

      res.json({ success: true, massage: "WhatsApp massage sent Sucessfully." });
   } catch (err) {
      console.log(err);
      res.status(500).json({ success: false });
   }
}

export default Sendsms