const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get("/service", (req, res) => {
    res.send("Service Page")
})

app.get("/contact", (req, res) => {
    res.send("Contact Page")
})

app.get("/about", (req, res) => {
    res.send("About Page")
})

app.listen(3000)