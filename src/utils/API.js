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
    }
};
