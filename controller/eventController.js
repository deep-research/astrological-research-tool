const db = require("../models");

// Defining methods for the eventController
module.exports = {
    saveEvent: (req, res) => {
        db.Event
            .create(req.body)
            .then(dbEvent => {
                return db.User.findOneAndUpdate({"_id": req.body.userId}, { $push: { events: dbEvent._id } }, { new: true });
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
    removeEvent: (req, res) => {
        const eventId = req.query.eventId;
        const userId = req.query.userId;
    
        // Find and remove the event
        db.Event.findOneAndRemove({ "_id": eventId }).then(response => {
    
            // Find and remove the user reference
            db.User.update(
                {"_id": userId },
                {"$pull": {"events": eventId}})
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err))
            ;
        })
    }
};