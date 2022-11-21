const express = require("express");
const mongoose = require('mongoose');
const bodyparser = require('body-parser');


const app = express();
app.get('/', function (req, res) {
    res.render(__dirname + "views/index.ejs");
})
mongoose.connect("mongodb://localhost/todo_express", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");




app.listen(3005, () => console.log("Server is listening on port: 3005"))

