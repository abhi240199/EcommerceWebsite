const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("Home");
});
router.get("/signin", (req, res) => {
  res.render("SignIn");
});
router.get("/signup", (req, res) => {
  res.render("SignUp");
});
router.use("/user", require("./user"));

module.exports = router;
