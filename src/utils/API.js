import axios from "axios";

export default {
    // Saves a user to the database
    saveUser: data => {
        return axios.post("/api/register", data);
    },
    findUser: data => {
        return axios.post("/api/login", data)
    },
    saveEvent: data => {
        return axios.post("/api/event", data)
    },
    getEvents:  ({userId}) => {
        return axios.get("/api/event/" + userId)
    },
    removeEvent: (eventId, userId) => {
        return axios.delete("/api/event/", {params: {eventId: eventId, userId: userId}});
    }
};
