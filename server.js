module.exports = function(app) {
  var path = require("path");
  var app = require("express");

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
  });
};
