var express = require("express");
var router = express.Router();
let authController = require("../controllers/api/authController");

router.get("/", authController.Register);

module.exports = router;
