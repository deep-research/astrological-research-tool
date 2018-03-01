const db = require("../models");

// Defining methods for the eventController
module.exports = {
    // Add an event to the database
    saveEvent: (req, res) => {
        db.Event
            // Save the event
            .create(req.body)
            // Add a reference to the user
            .then(dbEvent => {
                return db.User.findOneAndUpdate({"_id": req.body.userId}, { $push: { events: dbEvent._id } }, { new: true });
              })
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err));
    },
    // Retrieve a user's events from the database
    getEvents: (req, res) => {
        db.User
            // Locate the user
            .findOne({"_id": req.params.userId})
            // Get the events from the user
            .populate("events")
            .then(response => {
                res.json(response)
            })
            .catch(err => res.status(422).json(err));
    },
    // Delte an event from the database
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