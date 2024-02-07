const express = require("express");
const mysql = require("mysql");
const dbconn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_tuitane",
});
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  dbconn.query("SELECT * FROM posts", (err, posts) => {
    if (err) return res.send(`Error Occured  ${err.message}`);
    res.render("home.ejs", { posts });
  });
});
app.get("/profile", (req, res) => {
  res.render("profile.ejs");
});
app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.listen(8000, () => console.log("App running on localhost:8000"));
