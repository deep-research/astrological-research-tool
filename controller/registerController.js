const db = require("../models");

// Defining methods for the registerController
module.exports = {
    // Add a new user to the database
    saveUser: (req, res) => {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Remove a user from the database
    removeUser: (req, res) => {
        const userId = req.params.userId;

        // Remove the user
        db.User.findOneAndRemove({"_id": userId}).then(response => {
            db.Event
                // Remove any event with a matching userId
                .remove({userId: userId})
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
        });
    }
};
