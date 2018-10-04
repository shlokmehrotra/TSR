var path = require("path");
var mysql = require("mysql");

var express = require("express");
var app = express();
var router = express.Router();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'altruisticnarcist',
  password: '',
  database: 'c9'
});

console.log("Connected to database");
router.use(function(req, res, next) {
  console.log("/" + req.method);
  next()
});

app.use(express.static(path.join(__dirname, '/tsrComm/HTML')));

router.get("/", function(req, res) {
  res.sendFile(__dirname + "/tsrComm/HTML/index_app_landing.html");
  //res.send("Hello");
});

router.get("/signin", function(req, res) {
  res.sendfile(__dirname + "/tsrComm/HTML/signinnew.html");
});

router.get("/about", function(req, res) {
  res.sendFile(__dirname + "/tsrComm/HTML/about.html");
});

router.get("/portfolio", function(req, res) {
  res.sendfile(__dirname + "/tsrComm/HTML/index_portfolio.html");
});

router.get("/schools", function(req, res) {
  res.sendfile(__dirname + "/tsrComm/HTML/index_events.html");
});

router.get("/team", function(req, res) {
  res.sendfile(__dirname + "/tsrComm/HTML/team.html");
});

router.get("/WRMS-classes", function(req, res) {
  res.sendfile(__dirname + "/tsrComm/HTML/coding_WRMS.html");
});

router.get("/GRMS-classes", function(req, res) {
  res.sendfile(__dirname + "/tsrComm/HTML/coding_GRMS.html");
});
router.get("/BVES-classes", function(req, res) {
  res.sendfile(__dirname + "/tsrComm/HTML/coding_BVES.html");
});
router.get("/CCES-classes", function(req, res) {
  res.sendFile(__dirname + "/tsrComm/HTML/coding_CCES.html");
});

router.get("/login/:school", function(req, res) {
  console.log(req.params.school);
  var school = req.params.school;
  if (school == "WRMS") {
    res.sendFile(__dirname + "/tsrComm/HTML/coding_WRMS.html");
  }
  if (school == "GRMS") {
    res.sendFile(__dirname + "/tsrComm/HTML/coding_GRMS.html");
  }
  if (school == "BVES") {
    res.sendFile(__dirname + "/tsrComm/HTML/coding_BVES.html");
  }
  if (school == "CCES") {
    res.sendFile(__dirname + "/tsrComm/HTML/coding_CCES.html");
  }
})
app.use("/", router);

app.use("*", function(req, res) {
  res.sendFile(__dirname + "/tsrComm/HTML/404.html");
});

app.listen(process.env.PORT, function() {
  console.log("Live at Port ENV PORT");
});
