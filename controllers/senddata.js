import { Students } from "../model/student.js";

const Senddata = async (req, res) => {
  const { name, type } = req.body;

  try {
    // Agar frontend se type === "ALL" aaye -> Saare students ka data bhej do
    if (type === "ALL") {
      const allStudents = await Students.find().sort({ createdAt: -1 });
      return res.status(200).json({
        message: "Successfully fetched all students.",
        isAll: true,
        count: allStudents.length,
        Std: allStudents,
      });
    }

    // Agar type "ONE" ho ya specific name ke liye search ho
    if (!name || !name.trim()) {
      return res.status(400).json({ message: "Please enter student name!" });
    }

    const Std = await Students.findOne({ studentname: name.trim() });

    if (!Std) {
      return res.status(404).json({ message: "Record not found." });
    }

    return res.status(200).json({
      message: "Successfully fetched student.",
      isAll: false,
      Std,
    });
  } catch (error) {
    console.log("data send error", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export default Senddata;