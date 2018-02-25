const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var validate = require('mongoose-validator')
 
var nameValidator = [
    validate({
        validator: 'isLength',
        arguments: [5, 25],
        message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
    }),
    validate({
        validator: 'isAlphanumeric',
        passIfEmpty: true,
        message: 'Name should contain alpha-numeric characters only',
    }),
]

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
        // validate: nameValidator
    },
    password: {
        type: String,
        required: true
    },
    events: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Events model
            ref: "Event"
        }
    ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;