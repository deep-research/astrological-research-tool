const router = require("express").Router();
var db = require("../../models/");
const registerController = require("../../controller/registerController");

// Matches with "/api/register"
router.route("")
    .post(registerController.saveUser)

router.route("/:userId")
    .delete(registerController.removeUser)

module.exports = router;