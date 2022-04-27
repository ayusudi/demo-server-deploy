if(process.env.NODE_ENV !== 'production'){
  require("dotenv").config()
}

const express = require("express")
const cors = require("cors")
const {ControllerUser, ControllerMeme} = require("./controllers/controller")
const authentication = require("./middlewares/auth")
const authorization = require("./middlewares/authz")

const app = express()
const port = process.env.PORT ||  3000 

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.get("/", (req, res) => {
  res.status(200).json({ message: "Demoin Deploy Server"})
})

app.post("/register", ControllerUser.register)
app.post("/login", ControllerUser.login)

app.use(authentication)
app.get("/memes", ControllerMeme.listAll)
app.get("/memes/user", ControllerMeme.listOwnedMeme)

app.delete("/memes/:id", authorization, ControllerMeme.deleteById)

app.listen(port, () => {
  console.log("App is running on port ", port);
})
