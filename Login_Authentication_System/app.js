const express = require("express"),
  app = express(),
  port = 3000,
  path = require("path")

  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));

  app.get("/", (req, res) => {
    res.render("login")
  })

  app.listen(port, () => {
    console.log(`The server is listening and is running on ${port}`)
  })