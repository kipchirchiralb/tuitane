const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});
//other routes/url paths

app.listen(8000, () => console.log("App running on localhost:8000"));
