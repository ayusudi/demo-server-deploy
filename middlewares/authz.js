const {Meme} = require("../models")

module.exports = async (req, res, next) => {
  try {
    let memeId = req.params.id 

    let meme = await Meme.findByPk(memeId)
    if (!meme) {
      return res.status(404).json({ message : `Not found : Not found meme id ${memeId}`})
    }
    
    if (meme.UserId !=  req.user.id) {
      return res.status(403).json({ message : `Forbidden: Not your authority for meme id ${memeId}`})
    }
    
    next()
  } catch (error) {
    res.status(500).json({ message: "Internal server error"})
  }
}