const db = require("../models");

// Defining methods for the loginController
module.exports = {
    findOne: function(req, res) {
        db.User
          .findOne({"username": req.body.username})
          .then(dbModel => {
              res.json(dbModel)
          })
          .catch(err => res.status(422).json(err));
      }
};
