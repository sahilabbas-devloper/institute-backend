


const logout = ( req, res) => {
   res.clearCookie("token");
   res.json({ massage: "Logout sucessfully." })
}

export default logout