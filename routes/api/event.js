const router = require("express").Router();
var db = require("../../models/");
const eventController = require("../../controller/eventController");

// Matches with "/api/event"
router.route("")
    .post(eventController.saveEvent)
    .delete(eventController.removeEvent);

router.route("/:userId")
    .get(eventController.getEvents)

module.exports = router;