const express = require("express");
const morgan = require("morgan")
const app = express();

app.use(morgan('dev'))

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.send("About Pages ")
})
app.listen(3000)