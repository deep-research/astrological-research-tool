const db = require("../models");

// Defining methods for the eventController
module.exports = {
    saveEvent: (req, res) => {
        db.Event
            .create(req.body)
            .then(dbComment => {
                return db.User.findOneAndUpdate({"_id": req.body.id}, { $push: { events: dbComment._id } }, { new: true });
              })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getEvents: (req, res) => {
        db.User
            .findOne({"_id": req.params.userId})
            .populate("events")
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    }
};
