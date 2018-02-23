const router = require("express").Router();
var db = require("../../models/");
const userAuthController = require("../../controller/userAuthController");

// Matches with "/api/userAuth"
router.route("")
    .post(userAuthController.create);

module.exports = router;