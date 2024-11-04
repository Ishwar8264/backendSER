const express = require("express");
const morgan = require("morgan")
const app = express();

const userModel = require("./model/user")
const DB = require("./config/db")


// middleware 
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// front End views 
app.use(express.static("public"))
app.set("view engine", "ejs")



app.get("/", (req, res) => {
    res.render("index")
})


app.get("/register", (req, res) => {
    res.render("register")
})

app.post("/register", async (req, res) => {
    const { username, password, email } = req.body;

    const users = await userModel.create({
        username: username,
        emali: email,
        password: password
    })

    res.send(users)

})


app.get("/user-reads", (req, res) => {
    userModel.findOne({ username: 'aaaa' }).then((users) => {
        console.log(users);
        res.send(users);
    })


})


app.get("/user-update", async (req, res) => {
    await userModel.findOneAndUpdate({ username: 'aaaa' }, { email: "ccc@gmail.com" })
    res.send("user update")

})

app.get("/user-delete", async (req, res) => {
    await userModel.findOneAndDelete({ username: 'aaaa' })
    res.send("user update")

})

app.get("/user-reads", (req, res) => {
    userModel.findOne({ username: 'aaaa' }).then((users) => {
        console.log(users);
        res.send(users);
    })


})
app.post("/get-data-form", (req, res) => {
    console.log(req.body);
    res.send("Data Received")

})

app.listen(3000)