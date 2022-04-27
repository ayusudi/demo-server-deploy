const {User, Meme} = require("../models")
const { comparePassword, createToken } = require("../helpers/helper")
class ControllerUser {
  static async register(req, res){
    try {
      let {username, email, password} = req.body
      let user = await User.create({ username, email, password})
      res.status(201).json({
        message: "Success create user",
        data : {
          id : user.id,
          username,
          email
        }
      })
    } catch (error) {
      console.log(error);
      let errorName = error.name.toLowerCase()
      if (errorName.includes("validation") || errorName.includes("constrain")) {
        res.status(400).json({
          message: error.errors[0].message
        })
      } else {
        res.status(500).json({message: "Internal server error."})
      }
    }
  }
  static async login(req, res){
    try {
      let {email, password} = req.body
      if (!email || !password ) {
        return res.status(400).json({message : "Email & password required!"})
      } 

      let user = await User.findOne({where: {email}})
      if (!user) {
        return res.status(401).json({message : "Wrong email/password"})
      }

      let checkPassword = comparePassword(password, user.password)

      if(!checkPassword) {
        return res.status(401).json({message : "Wrong email/password"})
      }

      
      let access_token = createToken({
        id: user.id
      })
      res.status(200).json({access_token})
    } catch (error) {
      console.log(error);
      res.status(500).json({message: "Internal server error"})
    }
  }
}

class ControllerMeme {
  static async listAll(req, res){
    try {
      let memes = await Meme.findAll({
        include: {
          model: User,
          attributes: {
            exclude: ["password", "createdAt", "updatedAt"]
          }
        },
        order: [["id", "ASC"]]
      })
      res.status(200).json({data: memes})
    } catch (error) {
      res.status(500).json({message: "Internal server error"})
    }
  }
  static async listOwnedMeme (req, res){
    try {
      let memes = await Meme.findAll({
        where: {
          UserId : req.user.id
        },
        include: {
          model: User,
          attributes: {
            exclude: ["password", "createdAt", "updatedAt"]
          }
        },
        order: [["id", "ASC"]]
      })
      res.status(200).json({data: memes})
    } catch (error) {
      res.status(500).json({message: "Internal server error"})
    }
  }
  static async deleteById(req, res){
    try {
      let meme = await Meme.findByPk(req.params.id)
      await Meme.destroy({
        where: {
          id: req.params.id
        }
      })
      res.status(200).json({
        message: "Success delete meme id " + req.params.id, 
        deletedMeme: meme
      })
    } catch (error) {
      res.status(500).json({message: "Internal server error"})
    }
  }
}

module.exports = {ControllerUser, ControllerMeme}