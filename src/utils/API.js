import axios from "axios";

export default {
    // Saves a user to the database
    addUser: function(userData) {
        return axios.post("/api/userAuth", userData);
    }
};
