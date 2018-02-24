const db = require("../models");

// Defining methods for the loginController
module.exports = {
    create: (req, res) => {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
        console.log(req.params.username)
        db.User
          .findOne({"username": req.params.username})
          .then(dbModel => {
              console.log(dbModel)
              res.json(dbModel)
          })
          .catch(err => res.status(422).json(err));
      }
};
