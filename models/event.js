const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    city: {
        type: String
    },
    jupiterMotion: {
        type: String
    },
    jupiterPosition: {
        type: String
    },
    jupiterSector: {
        type: String
    },
    lat: {
        type: Number
    },
    lng: {
        type: Number
    },
    localTime: {
        type: String
    },
    marsMotion: {
        type: String
    },
    marsPosition: {
        type: String
    },
    marsSector: {
        type: String
    },
    mercuryMotion: {
        type: String
    },
    mercuryPosition: {
        type: String
    },
    mercurySector: {
        type: String
    },
    lunarPosition: {
        type: String
    },
    lunarSector: {
        type: String
    },
    lunarPhase: {
        type: String
    },
    name: {
        type: String
    },
    neptuneMotion: {
        type: String
    },
    neptunePosition: {
        type: String
    },
    neptuneSector: {
        type: String
    },
    news: {
        type: String
    },
    plutoMotion: {
        type: String
    },
    plutoPosition: {
        type: String
    },
    plutoSector: {
        type: String
    },
    saturnMotion: {
        type: String
    },
    saturnPosition: {
        type: String
    },
    saturnSector: {
        type: String
    },
    season: {
        type: String
    },
    sun: {
        type: String
    },
    timeZoneName: {
        type: String
    },
    uranusMotion: {
        type: String
    },
    uranusPosition: {
        type: String
    },
    uranusSector: {
        type: String
    },
    utcTime: {
        type: String
    },
    venusMotion: {
        type: String
    },
    venusPosition: {
        type: String
    },
    venusSector: {
        type: String
    },
    weather: {
        type: String
    },
    userId: {
        type: String
    }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;