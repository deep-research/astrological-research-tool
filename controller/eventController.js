const db = require("../models");

// Defining methods for the eventController
module.exports = {
    saveEvent: (req, res) => {
        db.Event
            .create(req.body)
            .then(dbComment => {
                return db.User.findOneAndUpdate({"_id": req.body.id}, { $push: { events: dbComment._id } }, { new: true });
              })
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err));
    },
    getEvents: (req, res) => {
        db.User
            .findOne({"_id": req.params.userId})
            .populate("events")
            .then(response => {
                res.json(response)
            })
            .catch(err => res.status(422).json(err));
    },
    removeEvent: function(req, res) {
        var eventId = req.query.eventId;
        var userId = req.query.userId;
        console.log(eventId, userId)
    
        // Find and remove the events
        db.Event.findOneAndRemove({ "_id": eventId }, function (err, response) {
            if (err) throw err;
    
            // Find and remove the user reference
            db.User.update(
                { "_id": userId },
                { "$pull": { "events": eventId } },
                function (err, response){
                    if (err) throw err;
                    res.json(response);
                }
            );
        });
    }
};