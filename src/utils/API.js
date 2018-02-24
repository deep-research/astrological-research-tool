import axios from "axios";

export default {
    // Saves a user to the database
    saveUser: function(data) {
        return axios.post("/api/register", data);
    },
    findUser: function(data) {
        return axios.post("/api/login/", data)
    }
};
