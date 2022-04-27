const { changeToPayload } = require("../helpers/helper")
const { User } = require("../models")

module.exports = async (req, res, next) => {

  try {
    let token = req.headers.access_token
    if (!token) {
      return res.status(401).json({ message : "Unauthorized : Please login"})
    }

    let payload = changeToPayload(token)
    if (! payload.id) {
      return res.status(401).json({ message : "Unauthorized : Please login"})
    }

    let user = await User.findByPk(payload.id)
    if (!user) {
      return res.status(401).json({ message : "Unauthorized : Please login"})
    }

    req.user = {
      id : user.id
    }
    next()
  } catch (error) {
  console.log("error", error);

    res.status(500).json({ message: "Internal server error"})
  }
}