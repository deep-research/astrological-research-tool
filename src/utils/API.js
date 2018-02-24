import axios from "axios";

export default {
    // Saves a user to the database
    saveUser: function(userData) {
        return axios.post("/api/login", userData);
    },
    findUser: function(username) {
        return axios.get("/api/login/" + username)
    }
};
