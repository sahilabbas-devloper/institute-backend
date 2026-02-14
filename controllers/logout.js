


const logout = (req, res) => {
   res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
   });
   res.json({ massage: "Logout sucessfully." })
}

export default logout