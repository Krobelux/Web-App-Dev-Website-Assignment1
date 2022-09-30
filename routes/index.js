var express = require("express");
var router = express.Router();

//Different verbs associated with HTTP (GET, POST, PUT, DELETE)


//Get Home page.
router.get("/", function (req, res, next) {
  res.render("index", { title: "Jake's Space" });
});

//Get About page
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About Jake"});
});

//Get Contact page
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact Jake"});
});

//Get Interests page
router.get("/interests", function (req, res, next) {
  res.render("interests", { title: "Jake's Interests"});
});

//Get Projects page
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Jake's Projects"});
});

//Get Services page
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Jake's Services"});
});

//Get PDF page
router.get("/pdf", function (req, res, next) {
  res.render("pdf");
});


module.exports = router;
