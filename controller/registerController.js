const db = require("../models");

// Defining methods for the registerController
module.exports = {
    saveUser: (req, res) => {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};