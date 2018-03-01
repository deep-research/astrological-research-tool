import axios from "axios";

export default {
    // Saves a user to the database
    saveUser: data => {
        return axios.post("/api/register", data);
    },
    // Removes a user from the database
    removeUser: userId => {
        return axios.delete("/api/register/" + userId);
    },
    // Finds a user in the database to login
    findUser: data => {
        return axios.post("/api/login", data)
    },
    // Stores an event in the database
    saveEvent: data => {
        return axios.post("/api/event", data)
    },
    // Retrieve any events stored by a user in the database
    getEvents:  ({userId}) => {
        return axios.get("/api/event/" + userId)
    },
    // Remove an event from the database
    removeEvent: (eventId, userId) => {
        return axios.delete("/api/event/", {params: {eventId: eventId, userId: userId}});
    }
};
