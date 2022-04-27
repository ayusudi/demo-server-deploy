const bcrypt = require("bcryptjs")
const jwt  = require("jsonwebtoken")
const JWTSECRET = process.env.JWTSECRET

module.exports = {
  hashPassword : (string) => {
    return bcrypt.hashSync(string)
  },
  comparePassword : (string, hashString) => {
    console.log(string, hashString);
    return bcrypt.compareSync(string, JWTSECRET)
  },
  createToken : (payload) => {
    return jwt.sign(payload, )
  },
  changeToPayload : (token) => {
    return jwt.verify(token, JWTSECRET)
  }
}
