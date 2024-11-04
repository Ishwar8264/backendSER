const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://0.0.0.0/backend").then(() => {
    console.log("Database Connected");
}).catch((err) => {
    console.log("Database connection failed", err);
})

module.exports = connection