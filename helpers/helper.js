const bcrypt = require("bcryptjs")
const jwt  = require("jsonwebtoken")
const JWTSECRET = process.env.JWTSECRET

module.exports = {
  hashPassword : (string) => {
    return bcrypt.hashSync(string)
  },
  comparePassword : (string, hashString) => {
    return bcrypt.compareSync(string, hashString)
  },
  createToken : (payload) => {
    return jwt.sign(payload, JWTSECRET)
  },
  changeToPayload : (token) => {
    return jwt.verify(token, JWTSECRET)
  }
}
