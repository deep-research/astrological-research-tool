const db = require("../models");

// Defining methods for the booksController
module.exports = {
    create: (req, res) => {
        // Take the burger name from the web page and send it to the database
        db.Users.create({
            user_name: req.body.user_name.trim(),
            password: req.body.password.trim()
        }).then(function(results) {
        // refresh the page
            res.redirect("/")
        }).catch(function(err) {
            res.json(err);
        })
    }
};
