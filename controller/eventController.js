const db = require("../models");

// Defining methods for the eventController
module.exports = {
    saveEvent: (req, res) => {
        db.Event
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
